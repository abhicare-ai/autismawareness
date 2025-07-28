import Budge from "@/components/Budge";

import { Metadata } from "next";

import Heading, { Paragraph } from "@/components/Heading";
import AOSWrapper from "@/components/AOSWrapper";
import StickyNavigation from "../StickyNavigation";

export const metadata: Metadata = {
  title: "Scientific advancements though policy",
};

export default function Page() {
  return (
    <main className="space-y-5">
      <AOSWrapper>
        <Budge>Scientific advancements though policy</Budge>
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col-reverse gap-5 md:flex-row">
            <StickyNavigation className="sticky top-3 h-fit md:basis-1/2" />
            <div className="space-y-3 px-3 md:basis-3/2">
              <Heading>
                Doubling the lagging federal investment in autism research would
                improve the lives of individuals on the spectrum and their
                families and benefit the nation that depends on their
                contributions.
              </Heading>

              <Paragraph>
                <strong>
                  1 in 31 children in the India have an autism spectrum disorder
                  (ASD) diagnosis
                </strong>
                . We know this because of the federal investment to better
                understand the prevalence of autism in the U.S. That federal
                investment of $5.2 billion since 2007 has led to progress in
                many areas such as reducing the age at which autism can be
                reliably diagnosed from 3 years to between 18 and 24 months. The
                earlier a child receives a diagnosis, the more likely the child
                is to access services that can have a major positive impact.
              </Paragraph>

              <Paragraph>
                Despite the progress that has been made, the level of funding
                relative to need has lagged significantly.{" "}
                <strong>
                  It has been estimated that the total annual cost of ASD in the
                  India is between $162 billion and $367 billion
                </strong>
                . Yet the combined annual investment from both federal AND
                private entities is just .{" "}
                <strong>09%-.21% of the estimated annual cost of ASD</strong>.
                Much of the cost of autism occurs in adulthood. These are costs
                that can be in part mitigated by early identification and
                intervention, allowing people with autism to work and more fully
                participate in their communities.
              </Paragraph>
              <Heading>
                Individuals on the autism spectrum, their families and our
                nation deserve better.
              </Heading>
              <Paragraph>
                Individuals on the spectrum make important contributions to our
                society, but we need to do more to support research that will
                improve treatments and services to ensure each person on the
                spectrum is able to meet their full potential. We need to better
                understand the biology of autism to tackle the significant
                challenges that so many individuals on and across the spectrum
                have with communication, social interaction, anxiety, depression
                and health conditions like epilepsy. More research is needed to
                understand autism throughout the life span to better support
                housing, employment and other supports.
              </Paragraph>
              <Heading>
                The path forward: Double the federal investment for autism
                research
              </Heading>

              <Paragraph>
                Due to increased understanding, awareness and investment over
                the past decade, we are at a critical point. It is time for us
                as a nation to seize that momentum and make funding autism
                research a national priority.
              </Paragraph>
              <p className="font-bold">
                The best catalyst for this effort would be for elected officials
                to join us in our call to double the federal investment in
                autism research.
              </p>
              <Paragraph>
                Doubling this investment would follow the recommendation of the
                federal committee created by Congress to coordinate and advise
                on federal autism research efforts - the Interagency Autism
                Coordinating Committee (IACC) - made in its most recent
                strategic plan.
              </Paragraph>
              <Paragraph>
                Even though doubling the amount of funding would still not meet
                the research needs that the IACC has articulated, it would be a
                strong signal to individuals on the spectrum and their families
                across the country that our leaders recognize the importance of
                autism research and would be giant step forward for funding
                research that would impact every community throughout the
                country.
              </Paragraph>
             
            </div>
          </div>
        </div>
      </AOSWrapper>
    </main>
  );
}
