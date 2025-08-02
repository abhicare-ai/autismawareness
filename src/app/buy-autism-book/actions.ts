"use server";

import axios from "axios";
import { prisma } from "@/lib/prisma";
import { productchema, ProductValues } from "@/lib/vallidation";

export async function buyAutismBook(input: ProductValues) {
  const {
    Address,
    amount,
    city,
    emails,
    fullname,
    phoneNumber,
    pincode,
    state,
  } = productchema.parse(input);
  const payload = {
    purpose: "Autism Care with Homeopathy",
    amount: String(amount), // ✅ Ensure it is a string
    buyer_name: fullname,
    email: emails,
    phone: phoneNumber,
    redirect_url: process.env.INSTAMOJO_BOOK_REDIRECT_URL ,
    send_email: true,
    send_sms: true,
    allow_repeated_payments: false,
  };

  const { data } = await axios.post(
    "https://www.instamojo.com/api/1.1/payment-requests/",
    payload,
    {
      headers: {
        "X-Api-Key": process.env.INSTAMOJO_API_KEY!,
        "X-Auth-Token": process.env.INSTAMOJO_AUTH_TOKEN!,
      },
    },
  );

  // Optional: save this in DB
  await prisma.autismBook.create({
    data: {
      Address,
      city,
      emails,
      fullname,
      phoneNumber,
      pincode,
      state,
      amount: parseInt(amount),

      orderId: data.payment_request.id,
    },
  });

  // Return Instamojo payment page
  return data.payment_request.longurl;
}
