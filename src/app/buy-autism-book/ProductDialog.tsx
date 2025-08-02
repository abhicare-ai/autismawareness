"use client";
import React, { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { productchema, ProductValues } from "@/lib/vallidation";
import { zodResolver } from "@hookform/resolvers/zod";
import LoadingButton from "@/components/LoadingButton";
import Script from "next/script";
import { PhoneInput } from "@/components/PhoneInput";

import { Textarea } from "@/components/ui/textarea";
import { buyAutismBook } from "./actions";

interface ProductDialogProps {
  open: boolean;
  onclose: () => void;
}
export default function ProductDialog({ open, onclose }: ProductDialogProps) {
  const form = useForm<ProductValues>({
    resolver: zodResolver(productchema),
    defaultValues: {
      fullname: "",
      emails: "",
      phoneNumber: "",
      city: "",
      pincode: "",
      state: "",
      amount: "350",
      Address: "",
      orderId: "",
      razorpayPaymentId: "",
      razorpaySignature: "",
    },
  });

  const [loding, setLoding] = useState(false);
  const onSubmit = async (input: ProductValues) => {
    try {
      setLoding(true);
      const donateData = await buyAutismBook(input);

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

  function handleChange() {
    onclose();
  }
  return (
    <>
      <Dialog open={open} onOpenChange={handleChange}>
        <DialogContent
          className="h-[32rem] overflow-y-auto"
          onInteractOutside={(e) => e.preventDefault()}
        >
          <DialogHeader>
            <DialogTitle className="text-center">
              Customer Information
            </DialogTitle>
            <div className="flex">
              <div className="w-full space-y-5 py-3">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="w-full space-y-3"
                  >
                    {/* Name Field */}
                    <FormField
                      control={form.control}
                      name="fullname"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your full name"
                              {...field}
                            />
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
                    <FormField
                      control={form.control}
                      name="amount"
                      render={({ field }) => (
                        <FormItem className="hidden !w-full">
                          <FormLabel>Customize Amount</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              value={field.value}
                              placeholder="Write a custom amount"
                              readOnly
                              type="number"
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

                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>City</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your city" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="pincode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Pin Code</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your pin code"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="Address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Delivery Address</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Enter your delivery address"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {/* Amount Field */}

                    <LoadingButton className="w-full" loading={loding}>
                      Pay ₹350
                    </LoadingButton>
                  </form>
                </Form>
              </div>
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
