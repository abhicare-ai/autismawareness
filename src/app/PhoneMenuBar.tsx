"use client";
import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/web_logo_2.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { usePathname, useSearchParams } from "next/navigation";
import DonationButton from "@/components/DonationButton";

export default function MenuBar() {
  return (
    <menu className="bg-card hidden w-full lg:block">
      <div className="mx-auto max-w-7xl p-3">
        <div className="flex justify-center gap-5">
          <p>
            <Link
              href={"/about-us"}
              className="hover:text-primary hover:underline"
            >
              About us
            </Link>{" "}
          </p>{" "}
          |{" "}
          <p>
            <Link
              href={"/autism-speaks-controversy"}
              className="hover:text-primary hover:underline"
            >
              Common misconceptions
            </Link>{" "}
          </p>{" "}
          |
          <p>
            <a
              href={
                "https://www.drrajeevswellness.com/product-category/autism-care/"
              }
              target="_blank"
              className="hover:text-primary hover:underline"
            >
              Buy autism wellness products
            </a>{" "}
          </p>{" "}
          |
          <p>
            <Link
              href={"/events"}
              className="hover:text-primary hover:underline"
            >
              Events
            </Link>{" "}
          </p>{" "}
        </div>

        <div className="flex items-center justify-between gap-5">
          <Link href="/">
            {" "}
            <Image src={logo} width={200} alt="logo" />
          </Link>
          <div className="flex items-center gap-5">
            <div className="group relative">
              <Link
                href={"/"}
                className="flex cursor-pointer items-center gap-3"
              >
                {" "}
                Home <span>|</span>
              </Link>
              <p className="bg-primary absolute -bottom-3 left-0 h-1 w-0 rounded-md duration-300 group-hover:right-0 group-hover:w-full"></p>
            </div>
            <div className="group relative flex h-[100px] cursor-pointer items-center gap-3">
              What is autism? <span>|</span>
              <p className="bg-primary absolute bottom-8 left-0 h-1 w-0 rounded-md duration-300 group-hover:right-0 group-hover:w-full"></p>
              <div className="bg-card absolute top-full left-1/2 z-20 mx-auto max-w-7xl origin-top -translate-x-1/2 scale-y-0 cursor-default space-y-5 duration-300 group-hover:scale-y-100">
                <div className="flex gap-5 p-3">
                  {/* Column 1 */}
                  <div className="flex min-w-[150px] flex-col gap-2 xl:min-w-[220px]">
                    <ul className="text-primary space-y-2">
                      <li>
                        <Link href="/signs-autism" className="hover:underline">
                          Learn the signs
                        </Link>
                      </li>
                      <li>
                        <Link href="/what-autism" className="hover:underline">
                          What is autism?
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/symptoms-of-autism"
                          className="hover:underline"
                        >
                          Symptoms of autism
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/what-causes-autism"
                          className="hover:underline"
                        >
                          What causes autism?
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/asperger-syndrome"
                          className="hover:underline"
                        >
                          Asperger syndrome
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/autism-statistics"
                          className="hover:underline"
                        >
                          Autism statistics and facts
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Divider */}
                  <div className="bg-primary w-px"></div>

                  {/* Column 2 */}
                  <div className="flex min-w-[220px] flex-col gap-2">
                    <ul className="text-primary space-y-2">
                      <li>
                        <Link
                          href="/autism-screening"
                          className="hover:underline"
                        >
                          Learn about screening
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/screening-questionnaire"
                          className="hover:underline"
                        >
                          Screening questionnaire
                        </Link>
                      </li>
                      <li>
                        <Link href="/first-concern" className="hover:underline">
                          First Concern to Action
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/dsm-5-diagnosis"
                          className="hover:underline"
                        >
                          Autism diagnostic criteria: DSM-5
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/newly-diagnosed"
                          className="hover:underline"
                        >
                          Newly diagnosed
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/sensory-issues"
                          className="hover:underline"
                        >
                          Sensory issues
                        </Link>
                      </li>
                      <li>
                        <Link href="/mental-health" className="hover:underline">
                          Mental health
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Divider */}
                  <div className="bg-primary w-px"></div>

                  {/* Column 3 */}
                  <div className="flex min-w-[220px] flex-col gap-2">
                    <ul className="text-primary space-y-2">
                      <li>
                        <Link
                          href="/autism-therapies"
                          className="hover:underline"
                        >
                          Interventions
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/access-services"
                          className="hover:underline"
                        >
                          Access services
                        </Link>
                      </li>
                      <li>
                        <Link href="/insurance" className="hover:underline">
                          Insurance
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Bottom bar */}
                <div className="bg-primary absolute bottom-0 left-0 h-1.5 w-full"></div>
              </div>
            </div>

            <div className="group relative flex h-[100px] cursor-pointer items-center gap-3">
              Our work <span>|</span>
              <p className="bg-primary absolute bottom-8 left-0 h-1 w-0 rounded-md duration-300 group-hover:right-0 group-hover:w-full"></p>
              <div className="bg-card absolute top-full left-1/2 z-20 mx-auto max-w-7xl origin-top -translate-x-1/2 scale-y-0 cursor-default space-y-5 duration-300 group-hover:scale-y-100">
                <div className="flex gap-10 p-5">
                  {/* Column 1 */}
                  <div className="flex min-w-[220px] flex-col gap-3">
                    <ul className="text-primary space-y-2">
                      <li>
                        <Link href="/our-mission" className="hover:underline">
                          Our mission
                        </Link>
                      </li>
                      <li>
                        <Link href="/our-impact" className="hover:underline">
                          Our impact
                        </Link>
                      </li>
                      <li>
                        <Link href="/news" className="hover:underline">
                          News
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact-us" className="hover:underline">
                          Contact us
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Divider */}
                  <div className="bg-primary w-px"></div>

                  {/* Column 2 */}
                  <div className="flex min-w-[220px] flex-col gap-3">
                    <ul className="text-primary space-y-2">
                      <li>
                        <Link
                          href="/autism-by-the-numbers"
                          className="hover:underline"
                        >
                          Autism by the Numbers
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Bottom bar */}
                <div className="bg-primary absolute bottom-0 left-0 h-1.5 w-full"></div>
              </div>
            </div>

            <div className="group relative flex cursor-pointer items-center gap-3">
              Get involved
              <p className="bg-primary absolute -bottom-3 left-0 h-1 w-0 rounded-md duration-300 group-hover:right-0 group-hover:w-full"></p>
            </div>
          </div>
          <DonationButton />
        </div>
      </div>
    </menu>
  );
}

export function PhoneMenuBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {
    setOpen(false);
  }, [pathname, searchParams]);
  return (
    <>
      <div className="flex items-center justify-between gap-5 p-3 lg:hidden">
        <Link href="/">
          {" "}
          <Image src={logo} width={200} alt="logo" />
        </Link>
        <div className="flex items-center gap-3">
          <DonationButton />
          <Menu
            className="size-8 cursor-pointer"
            onClick={() => setOpen(true)}
          />
        </div>
      </div>
      <SheetBar open={open} onOpenChange={setOpen} />
    </>
  );
}

interface SheetBarProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function SheetBar({ open, onOpenChange }: SheetBarProps) {
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

        // Column 2: Learn about screening
        { href: "/autism-screening", label: "Learn about screening" },
        { href: "/screening-questionnaire", label: "Screening questionnaire" },
        { href: "/first-concern", label: "First Concern to Action" },
        {
          href: "/dsm-5-diagnosis",
          label: "Autism diagnostic criteria: DSM-5",
        },
        { href: "/newly-diagnosed", label: "Newly diagnosed" },
        { href: "/sensory-issues", label: "Sensory issues" },
        { href: "/mental-health", label: "Mental health" },

        // Column 3: Interventions
        { href: "/autism-therapies", label: "Interventions" },
        { href: "/access-services", label: "Access services" },
        { href: "/insurance", label: "Insurance" },
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

  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (title: string) => {
    setActiveSection((prev) => (prev === title ? null : title));
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="hidden">Menu</SheetTitle>
          <SheetDescription>
            Explore our sections and learn more
          </SheetDescription>
        </SheetHeader>

        <Button
          variant="outline"
          className="w-full justify-between rounded-none"
          asChild
        >
          <Link href={"/"}>Home</Link>
        </Button>
        {/* 💡 Move the custom menu list OUTSIDE SheetDescription */}
        <div className="flex flex-col gap-3">
          {sections.map((section) => (
            <div key={section.title} className="flex flex-col">
              <Button
                onClick={() => toggleSection(section.title)}
                variant="outline"
                className="w-full justify-between rounded-none"
              >
                {section.title}
                <ChevronDown
                  size={16}
                  className={`ml-2 transition-transform ${
                    activeSection === section.title ? "rotate-180" : ""
                  }`}
                />
              </Button>

              {activeSection === section.title && (
                <div className="flex flex-col gap-1">
                  {section.links.map((link) => (
                    <Link key={link.href} href={link.href}>
                      <Button
                        variant="ghost"
                        className="bg-primary hover:text-card text-card hover:bg-primary w-full justify-start rounded-none text-sm"
                      >
                        {link.label}
                      </Button>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <Button
          variant="outline"
          className="w-full justify-between rounded-none"
        >
          Get involved
        </Button>
        <Button
          variant="outline"
          className="w-full justify-between rounded-none"
          asChild
        >
          <Link href={"/about-us"}>About us</Link>
        </Button>
        <Button
          variant="outline"
          className="w-full justify-between rounded-none"
          asChild
        >
          <Link href={"/autism-speaks-controversy"}>Common misconceptions</Link>
        </Button>
        <Button
          variant="outline"
          className="w-full justify-between rounded-none"
          asChild
        >
          <a
            href={
              "https://www.drrajeevswellness.com/product-category/autism-care/"
            }
            target="_blank"
          >
            Buy autism wellness products
          </a>
        </Button>

        <Button
          variant="outline"
          className="w-full justify-between rounded-none"
          asChild
        >
          <Link href={"/events"}>Events</Link>
        </Button>
      </SheetContent>
    </Sheet>
  );
}
