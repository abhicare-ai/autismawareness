"use client";
import React, { useState } from "react";
import { Heart } from "lucide-react";
import "../app/styles.css"; // ⬅️ Custom CSS for keyframes
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface DonationButtonProps {
  className?: string;
}

export default function DonationButton({ className }: DonationButtonProps) {
  const [animate, SetAnimate] = useState(false);
  const clickHanlder = () => {
    SetAnimate(true);

    setTimeout(() => {
      SetAnimate(false);
    }, 1000);
  };
  return (
    <Button
      className={cn(
        `${animate ? "animate" : ""} button animate-bounce duration-300`,
        className,
      )}
      onClick={clickHanlder}
    >
      <Heart fill="#FFC0CB" className="mr-4" />
      Donate Now
    </Button>
  );
}
