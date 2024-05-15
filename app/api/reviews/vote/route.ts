import { NextRequest } from "next/server";
import { getServerSession } from "next-auth/next";
import { z } from "zod";

import { commentVoteValidator } from "@/src/libs/validators/voteValidator";
import { authOptions } from "@/src/libs/auth";
import { db } from "@/src/libs/db";

export const PATCH = async (req: NextRequest) => {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { commentId, type } = commentVoteValidator.parse(body);

    const existingVote = await db.vote.findFirst({
      where: {
        userId: session.user.id,
        commentId,
      },
    });

    const comment = await db.comment.findUnique({
      where: {
        id: commentId,
      },
      include: {
        author: true,
        votes: true,
      },
    });

    if (!comment) {
      return Response.json({ error: "Comment not find" }, { status: 404 });
    }

    if (existingVote) {
      if (existingVote.type === type) {
        await db.vote.delete({
          where: {
            userId_commentId: {
              commentId,
              userId: session.user.id,
            },
          },
        });

        return Response.json("OK", { status: 200 });
      }

      await db.vote.update({
        where: {
          userId_commentId: {
            commentId,
            userId: session.user.id,
          },
        },
        data: {
          type,
        },
      });

      return Response.json("OK", { status: 200 });
    }

    await db.vote.create({
      data: {
        userId: session.user.id,
        commentId,
        type,
      },
    });

    return Response.json({ data: "OK" }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json({ error: error.message }, { status: 422 });
    }
    return Response.json(
      { error: "Could not register your vote" },
      { status: 500 }
    );
  }
};
