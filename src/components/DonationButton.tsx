import React from "react";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";

export default function DonationButton() {
  return (
    <Button className="fixed top-1/2 right-0 z-20 origin-bottom-right rotate-[-90deg] py-7 text-2xl">
      {" "}
      <Heart className="size-8" /> Donate
    </Button>
  );
}
