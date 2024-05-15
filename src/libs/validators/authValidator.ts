import { z } from "zod";

export const authValidator = z.object({
  username: z.string().min(1, "Name cannot be blank"),
  password: z.string().min(8, "The length must be more than 8 characters"),
});

export const registerValidator = z.object({
  username: z.string().min(1, "Name cannot be blank"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "The length must be more than 8 characters"),
});

export type CreateAuthValidator = z.infer<typeof authValidator>;
export type CreateRegisterPayload = z.infer<typeof registerValidator>;
