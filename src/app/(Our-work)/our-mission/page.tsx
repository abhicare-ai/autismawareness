import Budge from "@/components/Budge";
import React from "react";
import Image from "next/image";
import Autism from "@/assets/Autism Speaks Mission.jpg";
import { Metadata } from "next";
import { explore } from "./list";
import CardItem from "@/components/CardItem";
import AOSWrapper from "@/components/AOSWrapper";

export const metadata: Metadata = {
  title: "Our mission",
};

export default function Page() {
  return (
    <main className="space-y-5 overflow-hidden">
      <AOSWrapper>
        <Budge>Our mission</Budge>
        <div className="space-y-16">
          <div className="mx-auto max-w-7xl space-y-5 px-3">
            <Image
              src={Autism}
              alt="autism img"
              className="mx-auto"
              data-aos="fade-down"
            />
            <p data-aos="fade-right">
              Autism Speaks is dedicated to creating an inclusive world for all
              individuals with autism throughout their lifespan. We do this
              through advocacy, services, supports, research and innovation, and
              advances in care for autistic individuals and their families.
            </p>
            <iframe
              data-aos="fade-left"
              className="h-[540px] w-full"
              src="https://www.youtube.com/embed/bja70QQdfrE?si=FB7UfV-wYstrVyEJ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mx-auto max-w-7xl space-y-10 px-3">
            <p
              className="text-muted-foreground text-3xl font-bold"
              data-aos="fade-right"
            >
              Explore the links below to learn more about our work toward each
              of our mission objectives:
            </p>
            <div className="grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3">
              {explore.map((v) => (
                <CardItem cardDeta={v} key={v.id} />
              ))}
            </div>
          </div>
        </div>
      </AOSWrapper>
    </main>
  );
}
