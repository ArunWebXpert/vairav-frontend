import { z } from "zod";
import { VALID_MSG } from "@/constants";

export const loginFormSchema = z.object({
  email: z
    .string()
    .email(VALID_MSG.INVALID_EMAIL)
    .nonempty(VALID_MSG.EMAIL_REQUIRED),
  password: z
    .string()
    .min(6, VALID_MSG.PASSWORD_MIN_LENGTH)
    .nonempty(VALID_MSG.PASSWORD_REQUIRED),
});

export type LoginFormType = z.infer<typeof loginFormSchema>;
