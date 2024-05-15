import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { GoogleProfile } from "next-auth/providers/google";

import { nanoid } from "nanoid";
import bcrypt from "bcryptjs";

import { db } from "@/src/libs/db";
import { UserType } from "@/src/types/UserType";
import { authValidator } from "./validators/authValidator";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/sign-in",
    signOut: "/sign-out",
  },
  providers: [
    CredentialsProvider({
      id: "default",
      name: "Default",
      type: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { username, password } = authValidator.parse(credentials);

        const user = (await db.user.findFirst({
          where: { username },
        })) as UserType | null;
        if (!user) {
          return Promise.reject(new Error("Wrong username or password"));
        }

        const passMatch = bcrypt.compareSync(password, user.hashedPassword);
        if (!passMatch) {
          return Promise.reject(new Error("Wrong username or password"));
        }

        return Promise.resolve(user);
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      async profile(profile: GoogleProfile) {
        return {
          id: profile.sub,
          name: profile.given_name,
          username: profile.name,
          email: profile.email,
          email_verified: true,
          image: profile.picture,
        } as UserType;
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (!user.email_verified) {
        return Promise.reject(new Error("Email not verified"));
      }

      return true;
    },
    async session({ token, session, user }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.email_verified = token.email_verified;
        session.user.image = token.picture;
        session.user.username = token.username;
      }
      if (user) {
        session.user.id = user.id;
        session.user.name = user.name;
        session.user.email = user.email;
        session.user.email_verified = user.email_verified;
        session.user.image = user.image;
        session.user.username = user.username;
      }

      return session;
    },
    async jwt({ token, user }) {
      const dbUser = (await db.user.findFirst({
        where: {
          email: token.email!,
        },
      })) as UserType | null;

      if (!dbUser) {
        token.id = user!.id;
        token.email_verified = user.email_verified;
        return token;
      }

      if (!dbUser.username) {
        await db.user.update({
          where: {
            id: dbUser.id,
          },
          data: {
            username: nanoid(10),
          },
        });
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        email_verified: dbUser.email_verified,
        picture: dbUser.image,
        username: dbUser.username,
      };
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      else if (new URL(url).origin === baseUrl) return url;
      return "/";
    },
  },
};
