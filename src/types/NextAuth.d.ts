import type { Session, User } from "next-auth";
import type { JWT } from "next-auth/jwt";
import type { UserType } from "./UserType";

type UserId = string;

declare module "next-auth/jwt" {
  interface JWT {
    id: UserId;
    username?: string | null;
    email_verified: boolean;
  }
}

declare module "next-auth" {
  interface User extends UserType {}
  interface AdapterUser extends UserType {}

  interface Session {
    user: User | UserType;
  }

  interface Profile {
    id: string;
    email: string;
    image: string;
    name: string;
    sub: string;
    email_verified: boolean;
  }
}
