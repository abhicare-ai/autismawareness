"use client";
import Link from "next/link";
import "./styles.css"; // Optional: if you have custom CSS
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Input } from "@/components/ui/input";
import { newslator } from "./actions";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { NewLatorValue, newsLatorchema } from "@/lib/vallidation";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { toast } from "sonner";

const sections = [
  {
    title: "What is autism?",
    links: [
      // Column 1: Learn the signs
      { href: "/signs-autism", label: "Learn the signs" },
      { href: "/what-autism", label: "What is autism?" },
      { href: "/symptoms-of-autism", label: " Symptoms of autism" },
      { href: "/what-causes-autism", label: " What causes autism?" },
      { href: "/asperger-syndrome", label: "Asperger syndrome" },
      { href: "/autism-statistics", label: "Autism statistics and facts" },
    ],
  },
  {
    title: "Our Work",
    links: [
      { href: "/our-mission", label: "Our mission" },
      { href: "/our-impact", label: "Our impact" },
      { href: "/news", label: "News" },
      { href: "/contact-us", label: "Contect" },

      { href: "/autism-by-the-numbers", label: "Autism by the Numbers" },
    ],
  },
];

export default function Footer() {
  const form = useForm<NewLatorValue>({
    resolver: zodResolver(newsLatorchema),
    defaultValues: {
      emails: "",
    },
  });
  const onSubmit = async (input: NewLatorValue) => {
    const { error, message } = await newslator(input);

    if (error) {
      toast.error(error);
    }

    if (message) {
      toast.success(message);
      form.reset()
    }

  
  };
  return (
    <footer className="lginBody mt-12 border border-t text-sm text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-10 sm:grid-cols-2 md:grid-cols-3">
        {sections.map((section) => (
          <div key={section.title}>
            <h4 className="mb-3 text-base font-semibold">{section.title}</h4>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 transition hover:text-white hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Social & Email Column */}
        <div>
          <h4 className="mb-3 text-base font-semibold">Stay Connected</h4>
          <p className="mb-2 text-sm text-gray-400">
            Subscribe to our newsletter
          </p>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-3"
            >
              {/* Name Field */}
              <FormField
                control={form.control}
                name="emails"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </form>
          </Form>
          <div className="mt-4 flex gap-4 text-gray-400">
            <a
              href="https://www.facebook.com/AbhiHomeoRanchi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <Facebook />
            </a>
            <a
              href="https://x.com/abhihomoeo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <Twitter />
            </a>
            <a
              href="https://www.instagram.com/dr.rajeevclinic/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <Instagram />
            </a>
            <a
              href="https://www.youtube.com/@DrRajeevsHomeopathyClinic"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <Youtube />
            </a>
          </div>
        </div>
      </div>

      <div className="text-primary border-t border-gray-800 py-5 text-center text-xs">
        © {new Date().getFullYear()} Abhi Homeo Hall. All rights reserved.
      </div>
    </footer>
  );
}
