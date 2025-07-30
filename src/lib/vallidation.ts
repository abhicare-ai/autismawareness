import { z } from "zod";

const requiredString = z.string().trim().min(1, "Required");

export const contactchema = z.object({
  fullname: requiredString,
  emails: requiredString.email("Invalid email"),
  phoneNumber: requiredString,
  message: z.string().trim(),
});

export type ContactValues = z.infer<typeof contactchema>;

export const bookApptchema = z.object({
  fullname: requiredString,
  emails: requiredString.email("Invalid email"),
  phoneNumber: requiredString,
  message: z.string().trim(),
});

export type BookApptValues = z.infer<typeof bookApptchema>;

export const donatechema = z.object({
  name: requiredString,
  emails: requiredString.email("Invalid email"),
  phoneNumber: requiredString,
  country: requiredString,
  state: requiredString,
  amount: z.number(),
  orderId: z.string().trim(),
  razorpayPaymentId: z.string().trim(),
  razorpaySignature: z.string().trim(),
});

export type DonateValues = z.infer<typeof donatechema>;
