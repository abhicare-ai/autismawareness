"use server";
import { prisma } from "@/lib/prisma";
import { donatechema, DonateValues } from "../lib/vallidation";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZOR_KEY as string,
  key_secret: process.env.RAZOR_SECRET,
});
export async function donate(input: DonateValues) {
  const finalInpute = {
    name: input.name as string,
    emails: input.emails as string,
    phoneNumber: input.phoneNumber as string,
    country: input.country as string,
    state: input.state as string,
    amount: input.amount as number,
  };
  //   const { name, phoneNumber, country, state, amount, emails } =
  //     donatechema.parse(finalInpute);

  //   console.log("amount", amount);
  const donate = await razorpay.orders.create({
    amount: finalInpute.amount,
    currency: "INR",
  });

  const createDonate = await prisma.donation.create({
    data: {
      name: finalInpute.name,
      phoneNumber: finalInpute.phoneNumber,
      country: finalInpute.country,
      state: finalInpute.state,
      emails: finalInpute.emails,
      amount: finalInpute.amount,

      orderId: donate.id,
    },
  });

  return createDonate;
}
