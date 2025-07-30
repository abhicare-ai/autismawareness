"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "./ui/button";
import { useState } from "react";
import { bookApptchema, BookApptValues } from "@/lib/vallidation";
import { appoinment } from "@/app/(Home)/actions";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { PhoneInput } from "./PhoneInput";
import { Textarea } from "./ui/textarea";
import LoadingButton from "./LoadingButton";
export default function BookAppointment() {
  const [open, setOpen] = useState(false);

  const form = useForm<BookApptValues>({
    resolver: zodResolver(bookApptchema),
    defaultValues: {
      fullname: "",
      emails: "",
      phoneNumber: "",
      message: "",
    },
  });

  const [contactLoading, setContactLoading] = useState(false);
  async function onSubmit(input: BookApptValues) {
    try {
      setContactLoading(true);
      await appoinment(input);
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
    <>
      <Button
        variant="secondary"
        className="w-full animate-bounce"
        onClick={() => setOpen(true)}
      >
        {" "}
        Book an appointment
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center"> Book an appointment</DialogTitle>
            <DialogDescription>
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
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
