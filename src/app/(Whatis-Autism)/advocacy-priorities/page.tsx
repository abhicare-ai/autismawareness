import Budge from "@/components/Budge";

import { Metadata } from "next";
import StickyNavigation from "./StickyNavigation";
import Heading, { Paragraph } from "@/components/Heading";
import AOSWrapper from "@/components/AOSWrapper";

export const metadata: Metadata = {
  title: "Advocacy priorities",
};

export default function Page() {
  return (
    <main className="space-y-5">
      <AOSWrapper>
        <Budge>Advocacy priorities</Budge>
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col-reverse gap-5 md:flex-row">
            <StickyNavigation className="sticky top-3 h-fit md:basis-1/2" />
            <div className="space-y-3 px-3 md:basis-3/2">
              <Heading>
                Our advocacy team works nationwide to achieve our mission by
                pursuing the following priorities:
              </Heading>
              <Heading>
                Increase global understanding and acceptance of people with
                autism
              </Heading>

              <Paragraph>
                Educate legislators and regulators on autism spectrum disorder
                to ensure policymaking benefits individuals across the spectrum.
              </Paragraph>
              <Heading>
                Be a catalyst for life enhancing research breakthroughs
              </Heading>
              <Paragraph>
                Increase funding for autism research at federal agencies,
                including the National Institutes of Health, Centers for Disease
                Control and Prevention, and the U.S. Department of Education.
              </Paragraph>
              <Heading>
                Increase early childhood screening and timely intervention
              </Heading>
              <Paragraph>
                Ensure that individuals with autism have access to the
                healthcare they need, irrespective of payer (Medicaid, private
                insurance, etc.).
              </Paragraph>
              <Heading>
                Improve outcomes for transition to adulthood across the spectrum
              </Heading>

              <Paragraph>
                Improve the quality and accessibility of employment-focused
                training systems for individuals with autism and advocate for
                increased employment opportunities.
              </Paragraph>
              <Paragraph>
                Increase equitable access to high-quality postsecondary
                education opportunities for students with autism.
              </Paragraph>
              <Heading>
                Ensure access to reliable information and services throughout
                the lifespan
              </Heading>
              <Paragraph>
                Increase access to home and community-based services (HCBS) for
                individuals and increase HCBS capacity to provide meaningful
                services for people with autism and their families.
              </Paragraph>
              <Paragraph>
                Make ABLE accounts widely available. (Tax-advantaged savings
                accounts for individuals with disabilities created by the
                Stephen Beck, Jr. Achieving a Better Life Experience Act of
                2014.)
              </Paragraph>
              <Paragraph>
                Ensure staff across settings have appropriate training,
                particularly related to challenging behaviors, safety, sensory
                needs, and augmentative and alternative communication.
              </Paragraph>
              <Paragraph>
                Expand support for resources and practices that keep our
                community safe, including Kevin and Avonte’s Law.
              </Paragraph>
            </div>
          </div>
        </div>
      </AOSWrapper>
    </main>
  );
}
