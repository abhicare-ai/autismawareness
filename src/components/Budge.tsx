import { cn } from "@/lib/utils";
import React from "react";
interface BudgeProps {
  className?: string;
  children: React.ReactNode;
}
export default function Budge({ className, children }: BudgeProps) {
  return (
    <header className={"bg- bg-primary w-full px-3 py-10"} data-aos="fade-up">
      <div className="text-card mx-auto max-w-7xl">
        <h1 className={cn("text-center md:text-4xl text-3xl font-bold", className)}>
          {children}
        </h1>
      </div>
    </header>
  );
}
