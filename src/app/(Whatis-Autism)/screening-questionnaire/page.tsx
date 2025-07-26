import AOSWrapper from "@/components/AOSWrapper";
import Budge from "@/components/Budge";
import { Metadata } from "next";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export const metadata: Metadata = {
  title: "Screening questionnaire",
};
export default function Page() {
  return (
    <main className="space-y-5 overflow-hidden">
      <AOSWrapper>
        <Budge>Screening questionnaire</Budge>
        <div className="mx-auto max-w-7xl space-y-6 px-3">
          <div className="flex flex-col gap-5 md:flex-row">
            {/* Left Content */}
            <div className="space-y-3 md:basis-2/3">
              {/* Screening Questionnaire Section */}
              <p
                className="text-muted-foreground text-3xl font-bold"
                data-aos="fade-right"
              >
                Screening Questionnaire
              </p>
              <p className="text-base" data-aos="fade-right">
                Early identification of autism spectrum disorder (ASD) can
                significantly improve a child&lsquo;s development outcomes. To
                aid in early detection, healthcare providers and parents use
                standardized screening questionnaires that assess communication,
                behavior, and social interaction skills.
              </p>
              <ul className="list-inside list-disc" data-aos="fade-right">
                <li>
                  Screening is typically conducted during regular well-child
                  visits at 18 and 24 months of age.
                </li>
                <li>
                  Commonly used tools include the Modified Checklist for Autism
                  in Toddlers (M-CHAT), the Ages and Stages Questionnaire (ASQ),
                  and the Social Communication Questionnaire (SCQ).
                </li>
                <li>
                  These questionnaires are not diagnostic but help determine
                  whether a child should be referred for a comprehensive
                  evaluation.
                </li>
                <li>
                  Early screening allows for timely intervention, which is key
                  to improving communication, social skills, and adaptive
                  behaviors.
                </li>
              </ul>
              <p
                className="text-muted-foreground text-sm italic"
                data-aos="fade-right"
              >
                * If you have concerns about a child&lsquo;s development,
                consult a healthcare provider for a formal assessment.
              </p>
            </div>

            {/* Right Image */}

            <div
              data-aos="fade-left"
              className="h-auto max-w-full md:basis-1/2"
            >
              <Accordion type="multiple">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Understanding Autism</AccordionTrigger>
                  <AccordionContent>
                    What is Autism Spectrum Disorder? Learn about prevalence,
                    signs & characteristics, causes, screening & diagnosis, and
                    more.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Autism Acceptance Month</AccordionTrigger>
                  <AccordionContent>
                    This April, get connected as we #CelebrateDifferences for
                    Autism Acceptance Month. Download resources, host a
                    fundraiser, connect to each other.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Resources by Topic</AccordionTrigger>
                  <AccordionContent>
                    From employment to education to health and wellness, explore
                    helpful resources to get the support you need.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>News & Updates</AccordionTrigger>
                  <AccordionContent>
                    Change is happening every day. Stay connected with the
                    latest news on our blog, where we share national statements,
                    organizational updates, and community stories.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>News & Updates</AccordionTrigger>
                  <AccordionContent>
                    Change is happening every day. Stay connected with the
                    latest news on our blog, where we share national statements,
                    organizational updates, and community stories.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger>Screening & Diagnosis</AccordionTrigger>
                  <AccordionContent>
                    Learn more about the signs and characteristics of Autism, as
                    well as screening and diagnosis options.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                  <AccordionTrigger>
                    Vaccine Education Initiative
                  </AccordionTrigger>
                  <AccordionContent>
                    The Vaccine Education Initiative (VEI) aims to increase
                    vaccine education, confidence, and access through grassroots
                    efforts.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8">
                  <AccordionTrigger>Get Support</AccordionTrigger>
                  <AccordionContent>
                    The Autism Society is here to support you. From the National
                    Helpline to the affiliate network, we strive to provide the
                    help you need.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </AOSWrapper>
    </main>
  );
}
