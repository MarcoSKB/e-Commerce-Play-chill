import { z } from "zod";

export const reviewValidator = z.object({
  gameId: z.number(),
  rating: z.number().min(1).max(5),
  content: z.string().max(196, {
    message: "Title must be less than 196 characters long",
  }),
});

export type CreateReviewPayload = z.infer<typeof reviewValidator>;
