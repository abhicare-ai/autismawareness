"use server";
import { prisma } from "@/lib/prisma";
import { contactchema, ContactValues } from "@/lib/vallidation";

export async function contactus(input: ContactValues) {
  const { fullname, emails, message, phoneNumber } = contactchema.parse(input);

  const contactData = await prisma.contact.create({
    data: {
      fullname,
      emails,
      message,
      phoneNumber,
    },
  });

  return contactData;
}
