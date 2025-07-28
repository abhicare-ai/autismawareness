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
      <Link href="/what-autism">
        <p
          className={`w-full border-b px-3 py-3 ${pathname === "/what-autism" ? "bg-primary text-card" : "text-primary"}`}
        >
          What is autism?
        </p>
      </Link>
      <Link href="/autism-screening">
        <p
          className={`w-full border-b px-3 py-3 ${pathname === "/autism-screening" ? "bg-primary text-card" : "text-primary"}`}
        >
          Autism screening
        </p>
      </Link>
      <Link href="/what-causes-autism">
        <p
          className={`w-full border-b px-3 py-3 ${pathname === "/what-causes-autism" ? "bg-primary text-card" : "text-primary"}`}
        >
          What causes autism?
        </p>
      </Link>
      <Link href="/do-vaccines-cause-autism">
        <p
          className={`w-full border-b px-3 py-3 ${pathname === "/do-vaccines-cause-autism" ? "bg-primary text-card" : "text-primary"}`}
        >
          Do vaccines cause autism?
        </p>
      </Link>
      <Link href="/symptoms-of-autism">
        <p
          className={`w-full border-b px-3 py-3 ${pathname === "/symptoms-of-autism" ? "bg-primary text-card" : "text-primary"}`}
        >
          Signs and symptoms
        </p>
      </Link>
      <Link href="/signs-autism">
        <p
          className={`w-full border-b px-3 py-3 ${pathname === "/signs-autism" ? "bg-primary text-card" : "text-primary"}`}
        >
          Signs of autism
        </p>
      </Link>
    </aside>
  );
}
