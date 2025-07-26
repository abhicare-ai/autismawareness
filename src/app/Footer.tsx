"use client"
import Link from "next/link";
import "./styles.css"; // Optional: if you have custom CSS
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Input } from "@/components/ui/input";

const sections = [
  {
    title: "What is autism?",
    links: [
      { href: "/signs-autism", label: "Learn the signs" },
      { href: "/what-autism", label: "What is autism?" },
      { href: "/symptoms-of-autism", label: "Symptoms of autism" },
      { href: "/what-causes-autism", label: "What causes autism?" },
      { href: "/asperger-syndrome", label: "Asperger syndrome" },
      { href: "/autism-statistics", label: "Autism statistics and facts" },
      { href: "/autism-screening", label: "Learn about screening" },
      { href: "/screening-questionnaire", label: "Screening questionnaire" },
      { href: "/first-concern", label: "First Concern to Action" },
      { href: "/dsm-5-diagnosis", label: "Autism diagnostic criteria: DSM-5" },
      { href: "/newly-diagnosed", label: "Newly diagnosed" },
      { href: "/sensory-issues", label: "Sensory issues" },
      { href: "/mental-health", label: "Mental health" },
      { href: "/autism-therapies", label: "Interventions" },
      { href: "/access-services", label: "Access services" },
      { href: "/insurance", label: "Insurance" },
    ],
  },
  {
    title: "Help & Information",
    links: [
      { href: "/information-topic", label: "Information by topic" },
      { href: "/directory", label: "Directory" },
      { href: "/resource-guide", label: "Resource Guide" },
    ],
  },
  {
    title: "Our Work",
    links: [
      { href: "/our-mission", label: "Our mission" },
      { href: "/our-impact", label: "Our impact" },
      { href: "/news", label: "News" },
      { href: "/contact-us", label: "Contact" },
      { href: "/autism-by-the-numbers", label: "Autism by the Numbers" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/events", label: "Events" },
      { href: "/blog", label: "Blog" },
      { href: "/donate", label: "Donate" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-12 border-t border text-sm text-white lginBody">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
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
          <form className="flex flex-col gap-2">
            
            <Input   placeholder="Your email address" />
          </form>
          <div className="mt-4 flex gap-4 text-gray-400">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <Facebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <Twitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <Instagram />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <Youtube />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-5 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Autism Awareness. All rights reserved.
      </div>
    </footer>
  );
}
