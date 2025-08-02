"use client";
import DonationButton from "@/components/DonationButton";
import PackageButton from "@/components/PackageButton";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { XIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function TopHeader() {
  const [tobar, setTopbar] = useState(false);
  return (
    <>
      <div className="hidden lg:block">
        <div className="bg gyr bg-muted-foreground text-card flex items-center justify-center gap-5 py-3">
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
          <PackageButton />
          <Button asChild>
            <Link href={"/buy-autism-book"}>Buy Autism Book</Link>
          </Button>
        </div>
      </div>
      <header
        className={`bg-primary-foreground relative block w-full ${tobar ? "hidden" : ""}`}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 p-3 md:flex-row">
          <div className="space-y-4">
            {" "}
            <h1 className="text-3xl font-bold">July is Tribute Month!</h1>
            <p>
              Donate in honor or memory of someone you love in the autism
              community.
            </p>
          </div>

          <DonationButton />

          <CutBar className="block md:hidden" onclose={() => setTopbar(true)} />
        </div>
        <CutBar
          className="absolute hidden md:block"
          onclose={() => setTopbar(true)}
        />
      </header>
    </>
  );
}

interface CutBarProps {
  className?: string;
  onclose: () => void;
}
function CutBar({ className, onclose }: CutBarProps) {
  return (
    <div
      className={cn(
        "top-0 right-2 cursor-pointer xl:top-1/2 xl:-translate-y-1/2",
        className,
      )}
    >
      <XIcon className="size-8" onClick={onclose} />
    </div>
  );
}
