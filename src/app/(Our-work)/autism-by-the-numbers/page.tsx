import AOSWrapper from "@/components/AOSWrapper";
import Budge from "@/components/Budge";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import React from "react";
import annv from "@/assets/ABN-Image-1_0.png.webp";
import Image from "next/image";
import Link from "next/link";
import CardItem from "@/components/CardItem";
import { autismNumber } from "./[id]/lis";

export const metadata: Metadata = {
  title: "Autism by the numbers",
};
export default function Page() {
  return (
    <main className="space-y-5 overflow-hidden">
      <AOSWrapper>
        <Budge>Autism Speaks Autism by the Numbers</Budge>
        <div className="space-y-16">
          <div className="space-y-5">
            <div className="mx-auto max-w-7xl space-y-3 px-3">
              <p data-aos="fade-right">
                Finding the information you need to make informed decisions
                about you or your family’s future can be difficult. The
                landscape of services and supports for people with autism varies
                state by state, with some states providing better access to
                services than others. Local autism laws and policies also vary
                by state.
              </p>
              <p data-aos="fade-left">
                Knowing what support is available for people with autism in your
                area can make a world of difference. But often, this information
                is scattered in online databases and reports that can be hard to
                find and understand for the average person.
              </p>
              <p data-aos="fade-right">
                To get a full picture of how well states across the U.S. are
                serving autistic people, Autism Speaks created Autism by the
                Numbers in collaboration with the{" "}
                <strong>
                  {" "}
                  National Autism Data Center at Drexel University
                </strong>
                .
              </p>
            </div>

            <div className="bg-primary" data-aos="fade-down-right">
              <div className="mx-auto flex max-w-7xl flex-col gap-5 px-3 md:flex-row">
                <Image
                  src={annv}
                  alt="annv"
                  className="h-fit w-full md:w-1/2"
                />
                <div className="text-card space-y-5 py-8 md:w-1/2">
                  <h5 className="text-3xl font-bold">
                    Find services in your state
                  </h5>
                  <p>
                    Autism by the Numbers is an interactive Dashboard informed
                    by the needs of autistic individuals, families, advocates
                    and policymakers to better understand what autism services
                    look like across the country. This tool can help you learn
                    about select autism services and policies in your state.
                  </p>
                  <p>
                    Autism by the Numbers is an interactive Dashboard informed
                    by the needs of autistic individuals, families, advocates
                    and policymakers to better understand what autism services
                    look like across the country. This tool can help you learn
                    about select autism services and policies in your state.
                  </p>

                  <Button variant="secondary" className="w-full" asChild>
                    <Link href="/autism-by-the-numbers/autism-services">
                      {" "}
                      View The Dashboard
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-7xl space-y-3 px-3">
              <p
                className="text-muted-foreground text-3xl font-bold"
                data-aos="fade-right"
              >
                How can Autism by the Numbers help?
              </p>
              <p data-aos="fade-left">
                For the first time, you can get a view of each select autism
                laws and policies, services and outcomes from each state in a
                single Dashboard. The Dashboard is organized by life stage and
                covers topics like:
              </p>
              <ul className="list-inside list-disc">
                <li data-aos="fade-right">Diagnosis</li>
                <li data-aos="fade-left">Special education</li>
                <li data-aos="fade-right">Healthcare costs</li>
                <li data-aos="fade-left">Vocational rehabilitation services</li>
                <li data-aos="fade-right">Employment</li>
                <li data-aos="fade-left">Local autism laws and policies</li>
                <li data-aos="fade-right">And more!</li>
              </ul>
              <p data-aos="fade-left">
                Whether you are considering a move or looking for data to help
                you advocate for better autism services in your state, Autism by
                the Numbers can help you find the information you need.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-7xl space-y-10 px-3">
            <p
              className="text-muted-foreground text-center text-3xl font-bold"
              data-aos="fade-right"
            >
              Autism by the Numbers resources
            </p>
            <div className="grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3">
              {autismNumber.map((v) => (
                <CardItem cardDeta={v} key={v.id} />
              ))}
            </div>
          </div>
        </div>
      </AOSWrapper>
    </main>
  );
}
