"use server";

import axios from "axios";
import { prisma } from "@/lib/prisma";
import { donatechema, DonateValues } from "../lib/vallidation";

export async function donate(input: DonateValues) {
  const { amount, country, emails, name, state, phoneNumber } =
    donatechema.parse(input);
  const payload = {
    purpose: "Donation to Dr. Rajeev's Autism Care",
    amount: String(amount), // ✅ Ensure it is a string
    buyer_name: name,
    email: emails,
    phone: phoneNumber,
    redirect_url: process.env.INSTAMOJO_REDIRECT_URL,
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
  await prisma.donation.create({
    data: {
      country,
      emails,
      name,
      state,
      amount: parseInt(amount),
      phoneNumber,
      orderId: data.payment_request.id,
    },
  });

  // Return Instamojo payment page
  return data.payment_request.longurl;
}

export async function autismpackage(input: DonateValues) {
  const { amount, country, emails, name, state, phoneNumber } =
    donatechema.parse(input);
  const payload = {
    purpose: "Get Your Autism Care Package",
    amount: String(amount), // ✅ Ensure it is a string
    buyer_name: name,
    email: emails,
    phone: phoneNumber,
    redirect_url: process.env.IINSTAMOJO_PACKAGE_REDIRECT_URL,
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
  await prisma.autismPackage.create({
    data: {
      country,
      emails,
      name,
      state,
      amount: parseInt(amount),
      phoneNumber,
      orderId: data.payment_request.id,
    },
  });

  // Return Instamojo payment page
  return data.payment_request.longurl;
}
