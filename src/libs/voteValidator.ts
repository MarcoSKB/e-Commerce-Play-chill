import { z } from "zod";

export const commentVoteValidator = z.object({
  commentId: z.string(),
  type: z.enum(["UP", "DOWN"]),
});

export type CommentVoteRequest = z.infer<typeof commentVoteValidator>;
