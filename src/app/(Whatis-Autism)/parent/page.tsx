import AOSWrapper from "@/components/AOSWrapper";
import Budge from "@/components/Budge";
import { Metadata } from "next";
import React from "react";
import Image from "next/image";
import autismParent from "@/assets/Parents_and_their_baby.jpg";
import Heading, { Paragraph } from "@/components/Heading";
export const metadata: Metadata = {
  title: "For Parents",
};
export default function Page() {
  return (
    <main className="space-y-5">
      <AOSWrapper>
        <Budge>For Parents</Budge>
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-3 md:flex-row">
          <div className="basis-2/3 space-y-3">
            <Heading>You are not alone.</Heading>

            <Paragraph>
              Raising a child with autism can feel overwhelming at times — the
              questions, the uncertainty, the stares, the milestones that come a
              little differently. But remember: every step you take with love is
              already a step forward.
            </Paragraph>

            <Paragraph>
              Your journey as a parent may not look like others, but it&lsquo;s
              filled with moments of incredible strength, growth, and deep
              connection. Every smile, every word, every small victory — they
              matter.
            </Paragraph>

            <Paragraph>
              It’s okay to feel tired. It’s okay to feel confused. You are
              learning alongside your child every single day, and that makes you
              brave. What matters most is your presence, your support, and your
              belief in your child.
            </Paragraph>

            <Paragraph>
              Autism is not a limitation — it’s a different way of seeing and
              experiencing the world. Your child is unique, not broken. They are
              capable of love, joy, learning, and expression — just in their own
              way.
            </Paragraph>

            <Paragraph>
              As a parent, your unconditional love builds a foundation for your
              child to feel safe, valued, and seen. You are their biggest
              supporter, their advocate, their comfort zone.
            </Paragraph>

            <Paragraph>
              You are not alone in this journey. There are others walking the
              same path — families, doctors, therapists, and communities who
              care. Don’t be afraid to ask for help. Support is strength.
            </Paragraph>

            <Paragraph>
              Keep going. Trust yourself. Trust your child. You are doing an
              incredible job, even if it doesn&lsquo;t always feel that way.
            </Paragraph>
          </div>
          <Image
            src={autismParent}
            alt="autismParent"
            className="sticky top-3 h-fit"
            data-aos="fade-up"
          />
        </div>
      </AOSWrapper>
    </main>
  );
}
