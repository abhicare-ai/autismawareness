import React from "react";

export default function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="text-muted-foreground text-2xl font-bold md:text-3xl"
      data-aos="fade-right"
    >
      {children}
    </h3>
  );
}

export function Paragraph({ children }: { children: React.ReactNode }) {
  return <p data-aos="fade-up">{children}</p>;
}

export function ListTag({ children }: { children: React.ReactNode }) {
  return (
    <ul
      className="marker:text-primary list-disc space-y-3 pl-6 marker:text-2xl marker:font-bold"
      data-aos="fade-up"
    >
      {children}
    </ul>
  );
}
