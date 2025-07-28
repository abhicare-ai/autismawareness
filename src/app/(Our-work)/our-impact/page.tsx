import AOSWrapper from "@/components/AOSWrapper";
import Budge from "@/components/Budge";
import { Metadata } from "next";

import React from "react";

import { ChartPieInteractive } from "@/components/Chart-pie-interactive";
import CardItem from "@/components/CardItem";
import { stories } from "./list";
import Heading, { ListTag } from "@/components/Heading";

export const metadata: Metadata = {
  title: "Our impact",
};
export default function Page() {
  return (
    <main className="space-y-5 overflow-hidden">
      <AOSWrapper>
        <Budge>Our impact</Budge>

        <div className="space-y-16">
          <div className="mx-auto max-w-7xl px-3 md:flex-row">
            <div className="space-y-3">
              <div className="flex flex-col gap-5 md:flex-row">
                <div className="space-y-3 md:w-1/2">
                  <Heading>Through collaboration and partnerships we:</Heading>
                  <Heading>
                    Ensure access to reliable information and services across
                    the lifespan
                  </Heading>
                  <ListTag>
                    <li>
                      Expand resources and empower people with best practice
                      services
                    </li>
                    <li>
                      Bring autism education and inclusion to the forefront
                    </li>
                    <li>Foster and amplify innovative autism work</li>
                    <li>
                      Ensure culturally competent and accessible resources
                    </li>
                  </ListTag>
                  <Heading>
                    Support research and innovation to improve quality of life
                  </Heading>
                  <ListTag>
                    <li>
                      Bridge basic, clinical and social sciences to drive
                      personalized health care
                    </li>
                    <li>Increase federal funding in research and supports</li>
                    <li>
                      Escalate research in challenging behavior, special care
                      needs and aging process
                    </li>
                    <li>Expand global open science infrastructure</li>
                  </ListTag>
                </div>
                <div className="md:w-1/2">
                  <ChartPieInteractive />
                </div>
              </div>

              <p
                className="text-muted-foreground text-3xl font-bold"
                data-aos="fade-right"
              >
                Convene the work of service providers through advocacy,
                partnering and collaboration
              </p>
              <ul className="list-inside list-disc" data-aos="fade-right">
                <li>
                  Leverage our assets to expand access to information and
                  supports
                </li>
                <li>Partner with external experts to expand quality of care</li>
                <li>Work together to address gaps and opportunities</li>
                <li>Enhance support for those with challenging behaviors</li>
              </ul>
              <p
                className="text-muted-foreground text-3xl font-bold"
                data-aos="fade-right"
              >
                Speed delivery of solutions for adult quality of life needs
              </p>
              <ul className="list-inside list-disc" data-aos="fade-right">
                <li>
                  Drive support for transition, housing and aging programs
                </li>
                <li>Grow employer-demand side of Workplace Inclusion Now™</li>
                <li>
                  Promote inclusive, welcoming communities to enhance autistic
                  adults quality of life
                </li>
                <li>
                  Expand resources for autistic adults and their caregivers
                </li>
              </ul>
              <p
                className="text-muted-foreground text-3xl font-bold"
                data-aos="fade-right"
              >
                Promote diversity, equity, access and inclusion in all actions
                and partnerships
              </p>
              <ul className="list-inside list-disc" data-aos="fade-right">
                <li>Engage the voice of autistic adults</li>
                <li>Enhance Autism Speaks internal culture</li>
                <li>Strengthen multi-cultural relationships</li>
              </ul>
            </div>
          </div>

          <div className="mx-auto max-w-7xl space-y-10 px-3">
            <p
              className="text-muted-foreground text-center text-3xl font-bold"
              data-aos="fade-right"
            >
              Stories of our impact
            </p>
            <div className="grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3">
              {stories.map((v) => (
                <CardItem cardDeta={v} key={v.id} />
              ))}
            </div>
          </div>
        </div>
      </AOSWrapper>
    </main>
  );
}
