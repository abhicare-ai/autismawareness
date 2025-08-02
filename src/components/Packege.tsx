"use client";
import React, { useState } from "react";

import "../app/styles.css";
import { cn } from "@/lib/utils";

import packagse from "@/assets/Autism-Awareness-SS-scaled-1.jpg";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";

import { Label } from "./ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import { donatechema, DonateValues } from "@/lib/vallidation";
import { zodResolver } from "@hookform/resolvers/zod";
import LoadingButton from "./LoadingButton";
import Script from "next/script";
import { PhoneInput } from "./PhoneInput";
import { autismpackage } from "./actions";

interface PackageProps {
  opens: boolean;
  onClose: () => void;
}
export default function Packege({ opens, onClose }: PackageProps) {
  const donations = [{ id: 1, price: 92600 }];

  const form = useForm<DonateValues>({
    resolver: zodResolver(donatechema),
    defaultValues: {
      name: "",
      emails: "",
      phoneNumber: "",
      country: "",
      state: "",
      amount: "92600",
      orderId: "",
      razorpayPaymentId: "",
      razorpaySignature: "",
    },
  });

  const { setValue } = form;

  const [loding, setLoding] = useState(false);
  const onSubmit = async (input: DonateValues) => {
    try {
      setLoding(true);
      const donateData = await autismpackage(input);

      if (donateData) {
        window.location.href = donateData; // Instamojo payment page
      }
    } catch (error) {
      setLoding(false);
      console.log(error);
    } finally {
      setLoding(false);
    }
  };

  function handlerCahnge() {
    onClose();
  }
  return (
    <>
      <Dialog open={opens} onOpenChange={handlerCahnge} modal={true}>
        <DialogContent
          className="h-[32rem] overflow-y-auto p-0 md:!max-w-[900px]"
          onInteractOutside={(e) => e.preventDefault()}
        >
          <DialogHeader className="space-y-5">
            <DialogTitle className="hidden pt-3 text-center">
              Get Your Austism Package
            </DialogTitle>
            <div className="flex">
              <div className="w-full space-y-5 overflow-y-auto px-3 py-3 md:w-1/2">
                <h3 className="w-full text-2xl font-bold whitespace-nowrap">
                  Get Your Package
                </h3>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="w-full space-y-3"
                  >
                    <FormField
                      control={form.control}
                      name="amount"
                      render={({ field }) => (
                        <FormItem className="hidden !w-full">
                          <FormLabel>Patient Name </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              value={field.value}
                              readOnly
                              type="number"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {/* Name Field */}
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {/* email Field */}
                    <FormField
                      control={form.control}
                      name="emails"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your email"
                              {...field}
                              type="email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {/* Phone Number Field */}
                    <FormField
                      control={form.control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <PhoneInput
                              value={field.value}
                              onChange={field.onChange}
                              defaultCountry="IN"
                              placeholder="Enter your mobile number"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Country Field */}
                    <FormField
                      control={form.control}
                      name="country"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Country</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your country"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* State Field */}
                    <FormField
                      control={form.control}
                      name="state"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>State</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your state" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Amount Field */}
                    <div className="space-y-2">
                      <p className="text-[14px] font-medium">Amout</p>
                      <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
                        {donations.map((donation) => (
                          <div key={donation.id}>
                            <input
                              type="radio"
                              id={`donation-${donation.id}`}
                              name="donation"
                              value={donation.price}
                              checked={
                                form.watch("amount") ===
                                donation.price.toString()
                              }
                              onChange={() =>
                                setValue("amount", donation.price.toString())
                              }
                              className="peer hidden"
                            />
                            <Label
                              htmlFor={`donation-${donation.id}`}
                              className={cn(
                                "peer-checked:border-primary flex min-w-20 cursor-pointer items-center justify-center gap-1.5 rounded-md border p-2",
                              )}
                            >
                              ₹{donation.price}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <LoadingButton className="w-full" loading={loding}>
                      Submit
                    </LoadingButton>
                  </form>
                </Form>
              </div>
              <Image
                src={packagse}
                alt="donationImage"
                className="hidden h-full object-cover md:inline md:w-1/2"
              />
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <Script
        type="text/javascript"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />
    </>
  );
}
