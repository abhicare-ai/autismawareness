"use client";

import { useEffect, useState } from "react";
import DonationButton from "./DonationButton";

interface SideBarButtonProps {
  className?: string;
}
export default function SideBarButton({ className }: SideBarButtonProps) {
  const [scrol, setScrol] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrol(true);
      } else {
        setScrol(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <>{scrol && <DonationButton className={className} />}</>;
}
