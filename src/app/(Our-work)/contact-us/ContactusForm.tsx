"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { contactchema, ContactValues } from "@/lib/vallidation";
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
import { PhoneInput } from "@/components/PhoneInput";
import { Textarea } from "@/components/ui/textarea";
import LoadingButton from "@/components/LoadingButton";
import { useState } from "react";
import { contactus } from "./action";
import { toast } from "sonner";

export default function ContactusForm() {
  const form = useForm<ContactValues>({
    resolver: zodResolver(contactchema),
    defaultValues: {
      fullname: "",
      emails: "",
      phoneNumber: "",
      message: "",
    },
  });

  const [contactLoading, setContactLoading] = useState(false);
  async function onSubmit(input: ContactValues) {
    try {
      setContactLoading(true);
      await contactus(input);
      form.reset();
      toast.success("Submitted! Our team will contact you soon.");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setContactLoading(false);
    }
  }

  return (
    <div className="md:w-1/2"   data-aos="fade-left">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem className="!w-full">
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Full Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="emails"
            render={({ field }) => (
              <FormItem className="!w-full">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} type="email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem className="!w-full">
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <PhoneInput
                    value={field.value}
                    onChange={field.onChange}
                    defaultCountry="IN"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="!w-full">
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Message"
                    {...field}
                    className="resize-y"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <LoadingButton loading={contactLoading} className="w-full">
            Submit
          </LoadingButton>
        </form>
      </Form>
    </div>
  );
}
