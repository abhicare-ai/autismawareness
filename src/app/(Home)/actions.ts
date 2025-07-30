"use server";
import { prisma } from "@/lib/prisma";
import { bookApptchema, BookApptValues } from "@/lib/vallidation";

export async function appoinment(input: BookApptValues) {
  const { fullname, emails, message, phoneNumber } = bookApptchema.parse(input);

  const appoinmentData = await prisma.appoinment.create({
    data: {
      fullname,
      emails,
      message,
      phoneNumber,
    },
  });

  return appoinmentData;
}
