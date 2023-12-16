import { NextRequest } from "next/server";
import { z } from "zod";
import { db } from "@/src/libs/db";

export const GET = async (req: NextRequest) => {
  try {
    const pathArray = req.nextUrl.pathname.split("/");
    const gameId = +pathArray[pathArray.length - 1];

    const reviewsList = await db.comment.findMany({
      where: {
        gameId,
      },
      include: {
        author: true,
        votes: true,
      },
    });

    return Response.json(reviewsList, {
      status: 200,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(error.message, {
        status: 422,
      });
    }
    return Response.json({ error: "Could not get reviews" }, { status: 500 });
  }
};
