import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

import { db } from "@/src/libs/db";

type Params = {
  token: string;
};

export const POST = async (
  req: NextRequest,
  { params }: { params: Params }
) => {
  try {
    const EMAIL_SECRET = process.env.NEXTAUTH_SECRET;
    if (EMAIL_SECRET) {
      const userToken = jwt.verify(params.token, EMAIL_SECRET);

      if (typeof userToken === "string") {
        return Response.json({ error: "Something get wrong" }, { status: 500 });
      }

      const user = await db.user.findFirst({
        where: {
          id: userToken.id,
        },
      });

      if (!user) {
        return Response.json({ error: "Something get wrong" }, { status: 500 });
      }

      if (user.emailVerified) {
        return Response.json(
          { error: "Email already verified" },
          { status: 403 }
        );
      }

      await db.user.update({
        where: {
          id: userToken.id,
        },
        data: {
          email_verified: true,
        },
      });
    }
    return Response.json({ data: "OK" }, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return Response.json({ error: error.message }, { status: 403 });
    }
    return Response.json({ error: "Could not confirm email" }, { status: 500 });
  }
};
