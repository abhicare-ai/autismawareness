import { cn } from "@/lib/utils";
import React from "react";
interface BudgeProps {
  className?: string;
  children: React.ReactNode;
}
export default function Budge({ className, children }: BudgeProps) {
  return (
    <div className={"bg- bg-primary w-full px-3 py-10"} data-aos="fade-up">
      <div className="text-card mx-auto max-w-7xl">
        <p className={cn("text-center text-4xl font-bold", className)}>
          {children}
        </p>
      </div>
    </div>
  );
}
