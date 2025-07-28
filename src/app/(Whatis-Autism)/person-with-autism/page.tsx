import Budge from "@/components/Budge";
import { Metadata } from "next";
import React from "react";

import Image from "next/image";
import autismChild from "@/assets/Web_Autism_Every_Child_Unique_Boy_Headphones.jpeg";
import Heading, { ListTag, Paragraph } from "@/components/Heading";
import AOSWrapper from "@/components/AOSWrapper";

export const metadata: Metadata = {
  title: "Person with autism",
};
export default function Page() {
  return (
    <main className="space-y-5">
      <AOSWrapper>
        <Budge>Person with autism</Budge>
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-3 md:flex-row">
          <div className="basis-2/3 space-y-3">
            <Paragraph>
              One of the most important things to remember is that every person
              with autism is unique. Autism, or Autism Spectrum Disorder (ASD),
              affects how a person thinks, communicates, interacts, and
              experiences the world around them.
            </Paragraph>

            <Heading>Common characteristics</Heading>
            <ListTag>
              <li>Difficulty in understanding social cues or rules</li>
              <li>
                Preferring to spend time alone or in familiar environments
              </li>
              <li>Facing challenges in expressing thoughts or feelings</li>
              <li>Finding comfort in routines and familiar patterns</li>
              <li>Having strong, focused interests or hobbies</li>
              <li>
                Being very sensitive or under-sensitive to sounds, lights,
                textures, tastes, or smells
              </li>
              <li>
                Using repetitive movements or speech (like flapping hands,
                rocking, or repeating words)
              </li>
            </ListTag>

            <Heading>Strengths of people with autism</Heading>
            <ListTag>
              <li>Strong attention to detail</li>
              <li>Ability to focus deeply on topics of interest</li>
              <li>Honest and direct communication</li>
              <li>Unique ways of thinking and problem-solving</li>
              <li>
                Creativity in arts, music, technology, or specific hobbies
              </li>
            </ListTag>

            <Heading>Important to remember</Heading>
            <Paragraph>
              Every person with autism has their own strengths, challenges, and
              ways of experiencing life. With understanding, acceptance, and the
              right support, they can lead happy, fulfilling, and successful
              lives.
            </Paragraph>
          </div>

          <Image
            src={autismChild}
            alt="autismChild"
            className="sticky top-3 h-fit"
            data-aos="fade-up"
          />
        </div>
      </AOSWrapper>
    </main>
  );
}
