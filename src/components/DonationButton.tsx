"use client";
import React, { useState } from "react";
import { Heart } from "lucide-react";
import "../app/styles.css";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
// import donationImage from "@/assets/IMG-20250727-WA0007.jpg";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
// import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
import { donate } from "./actions";

interface DonationButtonProps {
  className?: string;
}

export default function DonationButton({ className }: DonationButtonProps) {
  const [animate, setAnimate] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<number>(4000);

  const clickHandler = () => {
    setAnimate(true);
    setOpen(true);
    setTimeout(() => {
      setAnimate(false);
    }, 1000);
  };

  const donations = [
    { id: 1, price: 1000 },
    { id: 2, price: 2000 },
    { id: 3, price: 3000 },
    { id: 4, price: 4000 },
    { id: 5, price: 5000 },
    { id: 6, price: 6000 },
    { id: 7, price: 7000 },
    { id: 8, price: 8000 },
    { id: 9, price: 9000 },
    { id: 10, price: 10000 },
  ];

  const form = useForm<DonateValues>({
    resolver: zodResolver(donatechema),
    defaultValues: {
      name: "",
      emails: "",
      phoneNumber: "",
      country: "",
      state: "",
      amount: 4000,
      orderId: "",
      razorpayPaymentId: "",
      razorpaySignature: "",
    },
  });

  const onSubmit = async (input: DonateValues) => {
    const finalInpute = {
      name: input.name as string,
      emails: input.emails as string,
      phoneNumber: input.phoneNumber as string,
      country: input.country as string,
      state: input.state as string,
      amount: selectedAmount as number,
    };
    console.log(finalInpute);
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const donateData = await donate(finalInpute as any);
      console.log(donateData);

      if (donateData.orderId) {
        const paymentData = {
          key: process.env.NEXT_PUBLIC_RAZOR_KEY,
          order_id: donateData.orderId,

          name: "Dr.Rajeev's Autism Care",
          description: "Sponsorship Payment",
          image: "https://www.rajeevclinic.com/assets/images/web_logo_2.png",

          theme: {
            color: "#3399cc",
          },
        };

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const payment = new (window as any).Razorpay(paymentData);
        payment.open();
      }
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <>
      <Button
        className={cn(
          `${animate ? "animate" : ""} button animate-bounce duration-300 delay-300`,
          className,
        )}
        onClick={clickHandler}
      >
        <Heart fill="#FFC0CB" className="mr-4" />
        Donate Now
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="p-0 md:!max-w-[900px]">
          <DialogHeader className="space-y-5">
            <DialogTitle className="pt-3 text-center">Donate Now</DialogTitle>
            <div className="flex">
              {/* <Image
                src={donationImage}
                alt="donationImage"
                className="hidden object-cover md:inline md:w-1/2 h-fit"
              /> */}
              <div className="px-3 md:w-1/2">
                <Tabs
                  defaultValue="account"
                  className="h-[500px] overflow-y-auto p-3"
                >
                  <TabsList>
                    <TabsTrigger value="account">Donation</TabsTrigger>
                    <TabsTrigger value="password">Package</TabsTrigger>
                  </TabsList>

                  <TabsContent
                    value="account"
                    className="flex w-full flex-wrap gap-2"
                  >
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
                                <Input
                                  placeholder="Enter your name"
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
                                <Input
                                  placeholder="Enter your state"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {/* Amount Field */}
                        <div className="space-y-2">
                          <p className="text-[14px] font-medium">Amout</p>
                          <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
                            {donations.map((donation) => (
                              <div key={donation.id}>
                                <input
                                  type="radio"
                                  id={`donation-${donation.id}`}
                                  name="donation"
                                  value={donation.price}
                                  checked={selectedAmount === donation.price}
                                  onChange={() =>
                                    setSelectedAmount(donation.price)
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
                        <LoadingButton className="w-full" loading={false}>
                          Submit
                        </LoadingButton>
                      </form>
                    </Form>
                  </TabsContent>

                  <TabsContent value="password">
                    Change your password here.
                  </TabsContent>
                </Tabs>
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
