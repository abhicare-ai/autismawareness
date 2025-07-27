import React from "react";
import Event from "./Event";
import AOSWrapper from "@/components/AOSWrapper";
import Budge from "@/components/Budge";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Events",
};
export default function Page() {
  return (
    <main className="space-y-5 overflow-hidden">
      <AOSWrapper>
        <Budge>Our Events</Budge>
        <div className="mx-auto max-w-7xl px-3" data-aos="fade-right">
          <Event />
        </div>
      </AOSWrapper>
    </main>
  );
}
