import { z } from "zod";

export const emailValidator = z.object({
  email: z.string().email("Invalid email address"),
  subject: z.string(),
  html: z.string(),
});

export type CreateEmailPayload = z.infer<typeof emailValidator>;
