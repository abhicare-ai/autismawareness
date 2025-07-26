import AOSWrapper from "@/components/AOSWrapper";
import Budge from "@/components/Budge";
import { Metadata } from "next";
import React from "react";
import Image from "next/image";
import sigimg from "@/assets/A-young-man-wearing-a-plaid-shirt-while-sitting-on-a-bench-outside-and-looking-away-at-the-road.jpg";

export const metadata: Metadata = {
  title: "Contact us",
};
export default function Page() {
  return (
    <main className="space-y-5 overflow-hidden">
      <AOSWrapper>
        <Budge>Asperger syndrome</Budge>
        <div className="mx-auto max-w-7xl space-y-3 px-3">
          <div className="flex flex-col gap-5 md:flex-row">
            <div className="space-y-3 md:basis-2/3">
              <p
                className="text-muted-foreground text-3xl font-bold"
                data-aos="fade-right"
              >
                Explore the links below to learn more about our work toward each
                of our mission objectives:
              </p>
              <p data-aos="fade-right">
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
              </p>
              <p className="font-bold" data-aos="fade-right">
                The previous autism diagnosis categories included:
              </p>
              <ul className="list-inside list-disc">
                <li data-aos="fade-right">Autistic disorder</li>
                <li data-aos="fade-right">Childhood disintegrative disorder</li>
                <li className="font-bold" data-aos="fade-right">
                  Pervasive developmental disorder, not otherwise specified
                  (PDD-NOS)
                </li>
                <li data-aos="fade-right">Asperger syndrome</li>
                <li data-aos="fade-right">Rett syndrome</li>
              </ul>
              <p data-aos="fade-right">
                Although Asperger syndrome has been retired from use by medical
                professionals, some who received the diagnosis prior to 2013
                still use the term and see it as an important part of their
                identity. Others prefer to refer to themselves as autistic. Both
                are correct; it is just a matter of personal choice.
              </p>
            </div>
            <Image
              src={sigimg}
              alt="sigimg"
              className="md:basis-1/2"
              data-aos="fade-left"
            />
          </div>
          <p
            className="text-muted-foreground text-3xl font-bold"
            data-aos="fade-left"
          >
            Asperger syndrome symptoms
          </p>
          <p data-aos="fade-right">
            There is significant overlap in Asperger’s symptoms and ASD
            symptoms. Learn more about the symptoms of autism.
          </p>
          <p
            className="text-muted-foreground text-3xl font-bold"
            data-aos="fade-left"
          >
            What is Asperger&lsquo;s called now?
          </p>
          <p>
            Today, those who would have previously met the criteria for Asperger
            syndrome are diagnosed with level 1 ASD. There is no difference
            between Asperger&lsquo;s and autism level 1 diagnoses.
          </p>
        </div>
      </AOSWrapper>
    </main>
  );
}
