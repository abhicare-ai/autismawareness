"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { XIcon } from "lucide-react";
import { useState } from "react";

export default function TopHeader() {
  const [tobar, setTopbar] = useState(false);
  return (
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

        <Button>Give Now</Button>

        <CutBar className="block md:hidden" onclose={() => setTopbar(true)} />
      </div>
      <CutBar
        className="absolute hidden md:block"
        onclose={() => setTopbar(true)}
      />
    </header>
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
