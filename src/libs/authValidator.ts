import { z } from "zod";

export const authValidator = z.object({
  username: z.string(),
  password: z.string().min(8, {
    message: "The length must be more than 8 characters",
  }),
});

export const registerValidator = z.object({
  username: z.string(),
  email: z.string().email({
    message: "Invalid email address",
  }),
  password: z.string().min(8, {
    message: "The length must be more than 8 characters",
  }),
});

export type CreateAuthValidator = z.infer<typeof authValidator>;
export type CreateRegisterPayload = z.infer<typeof registerValidator>;
