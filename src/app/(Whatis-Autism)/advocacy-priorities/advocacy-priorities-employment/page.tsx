import Budge from "@/components/Budge";

import { Metadata } from "next";

import Heading, { Paragraph } from "@/components/Heading";
import AOSWrapper from "@/components/AOSWrapper";
import StickyNavigation from "../StickyNavigation";

export const metadata: Metadata = {
  title: "Employment",
};

export default function Page() {
  return (
    <main className="space-y-5">
      <AOSWrapper>
        <Budge>Employment</Budge>
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col-reverse gap-5 md:flex-row">
            <StickyNavigation className="sticky top-3 h-fit md:basis-1/2" />
            <div className="space-y-3 px-3 md:basis-3/2">
              <Paragraph>
                We support employment initiatives that prepare, recruit,
                onboard, retain and advance individuals with autism, recognizing
                that everyone with autism has different strengths and
                aspirations.
              </Paragraph>
              <Paragraph>
                We work to ensure that all individuals with autism who seek
                employment can secure and retain it with appropriate,
                individualized supports.
              </Paragraph>
              <Heading>
                We take a holistic view of employment with a focus on
                sustainability.
              </Heading>

              <Paragraph>
                We believe the career path of an individual with autism should
                closely resemble that of any other person, so we advocate for
                government- and employer-level support for initiatives that
                include all the components of employment: preparation,
                recruiting, onboarding, retention and advancement.
              </Paragraph>

              <Heading>
                We support a systemic view of employment with a focus on
                community.
              </Heading>

              <Paragraph>
                We believe that to improve the status quo of employment for
                people with autism and other disabilities, many stakeholders
                need to adapt their daily practices.These groups include not
                just individuals and employers, but also families, schools and a
                web of interconnected community systems. We advocate across
                groups to improve employment outcomes.
              </Paragraph>
              <Heading>
                We recognize the heterogeneity of autisms and promote
                disaggregated results.
              </Heading>

              <Paragraph>
                The autism spectrum is extremely broad, encompassing innumerable
                combinations of different personality traits, including a vast
                array of both strengths and needs. Every person with autism is
                distinct from every other person with autism. As many employment
                initiatives are geared for people with disabilities generally
                rather than people with autism specifically, we promote
                accountability measures for programs that recognize disability
                type rather than those that aggregate all disabilities into a
                single category.
              </Paragraph>
              <Heading>
                We understand that employment offers benefits beyond income.
              </Heading>
              <Paragraph>
                Employment has impacts on quality of life beyond the
                dollar-value of a wage - health, well being, community
                connection, sense of purpose and personal identity are all
                affected by working. This phenomenon is as true for people with
                autism as it is for those without. At the same time, just as in
                the non-disabled population, each individual with autism has
                unique priorities, some valuing their wage above the other
                considerations, some the opposite. Autism Speaks strives to
                improve access, promote equity and support self-determination.
                The whole community benefits when each individual fulfills
                personal goals for independence and self-reliance.
              </Paragraph>

              <Heading>We believe in raising expectations.</Heading>
              <Paragraph>
                One of the primary barriers to creating widespread access to
                employment for individuals with autism and other disabilities is
                the “tyranny of low expectations.” In the real world, everyone
                has limitations - disability or not. What`&lsquo;s important to
                remember is that those limitations - and the ability to overcome
                them - must come from the individual, supported by the
                community. Autism Speaks supports access to individualized
                optimal post-secondary outcomes - including competitive
                integrated employment for all who seek it. We work to build
                sustainable connections between government, individuals,
                families, employers and communities to empower people with
                autism and other disabilities so that everyone on the spectrum
                can achieve their goals and reach their potential.
              </Paragraph>
            </div>
          </div>
        </div>
      </AOSWrapper>
    </main>
  );
}
