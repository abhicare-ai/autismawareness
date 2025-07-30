"use client";
import "../app/styles.css";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Packege from "./Packege";
import { cn } from "@/lib/utils";

interface PackageButtonProps{
    className?:string
}
export default function PackageButton({className}:PackageButtonProps) {
  const [open, setOpen] = useState(false);



  useEffect(() => {
    // Open modal on full window load
    const handleLoad = () => {
      setOpen(true);
    };

    if (document.readyState === "complete") {
      // Page already loaded
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
      <Button onClick={() => setOpen(true)} className={cn(` button animate-bounce duration-300`,className)}>Autism Package</Button>
      <Packege opens={open} onClose={() => setOpen(false)} />
    </>
  );
}
