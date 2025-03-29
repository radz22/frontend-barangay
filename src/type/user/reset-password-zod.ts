import { z } from "zod";

export const resetPasswordSchema = z.object({
  newpassword: z.string().min(6, "Password must be at least 6 characters"),
});

export type resetPasswordType = z.infer<typeof resetPasswordSchema>;
