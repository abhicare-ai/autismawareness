import { z } from "zod";

const requiredString = z.string().trim().min(1, "Required");

export const contactchema = z.object({
  fullname: requiredString,
  emails: requiredString.email("Invalid email"),
  phoneNumber: requiredString,
  message: z.string().trim(),
});

export type ContactValues = z.infer<typeof contactchema>;
