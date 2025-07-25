import { cn } from "@/lib/utils";
import React from "react";
interface BudgeProps{
    className?:string;
    children:React.ReactNode;
}
export default function Budge({className, children }: BudgeProps) {
  return (
    <div className={"w-full bg- px-3 py-10 bg-primary"}>
      <div className="max-w-7xl   mx-auto text-card">
        <p className={cn("text-4xl font-bold text-center",className)}>{children}</p>
      </div>
    </div>
  );
}
