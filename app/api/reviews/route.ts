import { NextRequest } from "next/server";
import { getServerSession } from "next-auth/next";
import { z } from "zod";

import { authOptions } from "@/src/libs/auth";
import { reviewValidator } from "@/src/libs/review";
import { db } from "@/src/libs/db";

export const POST = async (req: NextRequest) => {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { gameId, rating, content } = reviewValidator.parse(body);

    const reviewsExists = await db.comment.findFirst({
      where: {
        authorId: session.user.id,
        gameId,
      },
    });

    if (reviewsExists) {
      return new Response("Review already exists", { status: 409 });
    }

    await db.comment.create({
      data: {
        authorId: session.user.id,
        gameId,
        rating,
        content,
      },
    });

    return Response.json("OK", {
      status: 200,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(error.message, {
        status: 422,
      });
    }
    return Response.json({ error: "Could not create review" }, { status: 500 });
  }
};
