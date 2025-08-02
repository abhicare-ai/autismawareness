"use server";

import { prisma } from "@/lib/prisma";
import { NewLatorValue, newsLatorchema } from "@/lib/vallidation";

export async function newslator(
  input: NewLatorValue,
): Promise<{ error?: string; message?: string }> {
  const { emails } = newsLatorchema.parse(input);

  const exitsEmail = await prisma.newsLator.findFirst({
    where: {
      email: emails,
    },
  });

  if (exitsEmail) {
    return {
      error: "Email already exist.",
    };
  }

  await prisma.newsLator.create({
    data: {
      email: emails,
    },
  });

  return {
    message: "Email created successfully",
  };
}
