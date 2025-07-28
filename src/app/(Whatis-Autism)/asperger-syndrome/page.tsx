import AOSWrapper from "@/components/AOSWrapper";
import Budge from "@/components/Budge";
import { Metadata } from "next";
import React from "react";
import Image from "next/image";
import sigimg from "@/assets/A-young-man-wearing-a-plaid-shirt-while-sitting-on-a-bench-outside-and-looking-away-at-the-road.jpg";
import Heading, { ListTag, Paragraph } from "@/components/Heading";

export const metadata: Metadata = {
  title: "Asperger syndrome",
};
export default function Page() {
  return (
    <main className="space-y-5 overflow-hidden">
      <AOSWrapper>
        <Budge>Asperger syndrome</Budge>
        <div className="mx-auto max-w-7xl space-y-3 px-3">
          <div className="flex flex-col gap-5 md:flex-row">
            <div className="space-y-3 md:basis-2/3">
              <Heading>
                Explore the links below to learn more about our work toward each
                of our mission objectives:
              </Heading>
              <Paragraph data-aos="fade-right">
                Asperger syndrome, or Asperger’s, is a{" "}
                <strong>previously used diagnosis</strong>
                on the autism spectrum. It was one of five forms of autism
                defined by the DSM-IV. In 2013, Asperger syndrome and the other
                autism-related diagnoses were folded into the broader autism
                spectrum disorder (ASD) diagnosis in the{" "}
                <strong>
                  Diagnostic and Statistical Manual of Mental Disorders 5
                  (DSM-5)
                </strong>
                , now the DSM-5-TR.
              </Paragraph>
              <Heading>
                The previous autism diagnosis categories included:
              </Heading>
              <ListTag>
                <li>Autistic disorder</li>
                <li>Childhood disintegrative disorder</li>
                <li>
                  Pervasive developmental disorder, not otherwise specified
                  (PDD-NOS)
                </li>
                <li>Asperger syndrome</li>
                <li>Rett syndrome</li>
              </ListTag>
              <Paragraph>
                Although Asperger syndrome has been retired from use by medical
                professionals, some who received the diagnosis prior to 2013
                still use the term and see it as an important part of their
                identity. Others prefer to refer to themselves as autistic. Both
                are correct; it is just a matter of personal choice.
              </Paragraph>
            </div>
            <Image src={sigimg} alt="sigimg" data-aos="fade-left" className="object-cover"/>
          </div>
          <Heading>Asperger syndrome symptoms</Heading>
          <Paragraph>
            There is significant overlap in Asperger’s symptoms and ASD
            symptoms. Learn more about the symptoms of autism.
          </Paragraph>
          <Heading>What is Asperger&lsquo;s called now?</Heading>
          <Paragraph>
            Today, those who would have previously met the criteria for Asperger
            syndrome are diagnosed with level 1 ASD. There is no difference
            between Asperger&lsquo;s and autism level 1 diagnoses.
          </Paragraph>
        </div>
      </AOSWrapper>
    </main>
  );
}
