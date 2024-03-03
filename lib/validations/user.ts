import * as z from "zod";

export const UserValidation = z.object({
  profile_photo: z.string().url().min(1, "Required"),
  name: z
    .string()
    .min(1, "Required")
    .max(50, "Name must be 50 characters or less"),
  username: z
    .string()
    .min(1, "Required")
    .max(50, "Username must be 50 characters or less"),
  bio: z
    .string()
    .min(1, "Required")
    .max(1000, "Bio must be 1000 characters or less"),
});
