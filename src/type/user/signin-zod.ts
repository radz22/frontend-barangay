import { z } from "zod";

export const signinAndsignupSchema = z.object({
  email: z.string().min(1, "Email is required").email(),
  password: z.string().min(6, "Password is contain 6 characters"),
  role: z.enum(["admin", "user", "staff"]).optional(),
});

export type signinAndsignupType = z.infer<typeof signinAndsignupSchema>;
