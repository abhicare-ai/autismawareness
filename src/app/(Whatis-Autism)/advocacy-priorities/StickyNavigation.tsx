"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface StickyNavigation {
  className?: string;
}
export default function StickyNavigation({ className }: StickyNavigation) {
  const pathname = usePathname();

  return (
    <aside className={className} data-aos="fade-right">
      <Link href="/advocacy-priorities">
        <p
          className={`w-full border-b px-3 py-3 ${pathname === "/advocacy-priorities" ? "bg-primary text-card" : "text-primary"}`}
        >
          Advocacy priorities
        </p>
      </Link>
      <Link href="/advocacy-priorities/advocacy-priorities-scientific-advancements-though-policy">
        <p
          className={`w-full border-b px-3 py-3 ${pathname === "/advocacy-priorities/advocacy-priorities-scientific-advancements-though-policy" ? "bg-primary text-card" : "text-primary"}`}
        >
          Scientific advancements through policy
        </p>
      </Link>
      <Link href="/advocacy-priorities/advocacy-priorities-accessing-comprehensive-health-care">
        <p
          className={`w-full border-b px-3 py-3 ${pathname === "/advocacy-priorities/advocacy-priorities-accessing-comprehensive-health-care" ? "bg-primary text-card" : "text-primary"}`}
        >
          Accessing comprehensive health care
        </p>
      </Link>
      <Link href="/advocacy-priorities/advocacy-priorities-education">
        <p
          className={`w-full border-b px-3 py-3 ${pathname === "/advocacy-priorities/advocacy-priorities-education" ? "bg-primary text-card" : "text-primary"}`}
        >
          Education
        </p>
      </Link>

      <Link href="/advocacy-priorities/advocacy-priorities-employment">
        <p
          className={`w-full border-b px-3 py-3 ${pathname === "/advocacy-priorities/advocacy-priorities-employment" ? "bg-primary text-card" : "text-primary"}`}
        >
          Employment
        </p>
      </Link>
    </aside>
  );
}
