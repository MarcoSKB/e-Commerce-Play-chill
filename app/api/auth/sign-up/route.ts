import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { z } from "zod";

import { registerValidator } from "@/src/libs/authValidator";
import { db } from "@/src/libs/db";
import axios from "axios";

const AUTH_SECRET = process.env.NEXTAUTH_SECRET;
const BASE_URL = process.env.NEXTAUTH_URL;

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { username, email, password } = registerValidator.parse(body);
    const salt = bcrypt.genSaltSync();
    const hashedPassword = bcrypt.hashSync(password, salt);

    const userExists = await db.user.findFirst({
      where: { username },
    });
    const emailExists = await db.user.findFirst({
      where: { email },
    });

    if (userExists || emailExists) {
      return Response.json({ error: "User already exists" }, { status: 409 });
    }

    await db.user.create({
      data: {
        username,
        email,
        hashedPassword,
      },
    });

    const userId = await db.user.findUnique({
      where: { username },
      select: {
        id: true,
      },
    });

    if (AUTH_SECRET && userId) {
      jwt.sign(userId, AUTH_SECRET, { expiresIn: "1h" }, async (_, token) => {
        await axios.post(`${BASE_URL}/api/email`, {
          email,
          subject: "Verification email",
          html: `<a href="${BASE_URL}/confirmation/${token}">Click to verify</a>`,
        });
      });
    }

    return Response.json({ data: "OK" }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json({ error: error.message }, { status: 422 });
    }

    return Response.json({ error: "Could not register" }, { status: 500 });
  }
};
