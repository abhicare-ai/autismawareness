import Link from "next/link";

interface StickyNavigation {
  className?: string;
}
export default function StickyNavigation({ className }: StickyNavigation) {
  return (
    <div className={className}>
      <Link href={"/autism-by-the-numbers"}>
        <p className="hover:bg-primary text-primary hover:text-card w-full border-b px-3 py-3">
          Autism by the Numbers
        </p>
      </Link>

      <Link href={"/autism-by-the-numbers/autism-services"}>
        <p className="hover:bg-primary text-primary hover:text-card w-full border-b px-3 py-3">
          Autism services
        </p>
      </Link>
      <Link href={"/contact-us"}>
        <p className="hover:bg-primary text-primary hover:text-card w-full border-b px-3 py-3">
          Contact us
        </p>
      </Link>
    </div>
  );
}
