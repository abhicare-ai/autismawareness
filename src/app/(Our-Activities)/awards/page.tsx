import AOSWrapper from "@/components/AOSWrapper";
import Budge from "@/components/Budge";
import { Metadata } from "next";
import React from "react";
import { awardsList } from "../media-corner/list";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Awards",
};
export default function Page() {
  return (
    <main className="space-y-5">
      <AOSWrapper>
        <Budge>Awards</Budge>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-3 md:grid-cols-2 lg:grid-cols-3">
          {awardsList.map((v) => (
            <div className="border shadow-md" key={v.id}>
              <Image
                src={v.imgUrl}
                alt="d"
                width={400}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </AOSWrapper>
    </main>
  );
}
