import Budge from "@/components/Budge";
import StickyNavigation from "../what-autism/StickyNavigation";
import AOSWrapper from "@/components/AOSWrapper";
import { Metadata } from "next";
import Heading, { Paragraph } from "@/components/Heading";

export const metadata: Metadata = {
  title: "Autism screening",
};
export default function Page() {
  return (
    <main className="space-y-5">
      <AOSWrapper>
        <Budge>Autism screening</Budge>
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col-reverse gap-5 md:flex-row">
            <StickyNavigation className="sticky top-3 h-fit md:basis-1/2" />
            <div className="space-y-3 px-3 md:basis-3/2">
              <Paragraph>
                There’s no single medical test to diagnose autism. Instead,
                healthcare providers rely on developmental history, behavioral
                observations, and input from parents or caregivers. Through
                screenings and assessments, professionals can determine whether
                a child shows signs consistent with Autism Spectrum Disorder
                (ASD).
              </Paragraph>
              <Paragraph>
                Early detection is key. Screening tools are designed to flag
                early signs in toddlers and children so that families can take
                steps toward support as soon as possible. These tools do not
                provide a diagnosis on their own, but can guide whether further
                evaluation is needed.
              </Paragraph>
              <Paragraph>Common Autism Screening Tools</Paragraph>

              <Heading>
                Modified Checklist for Autism in Toddlers, Revised (M-CHAT-R)
              </Heading>
              <p>For ages 16 to 30 months</p>
              <Paragraph>
                A parent-completed questionnaire that looks at key behaviors
                linked to autism in young toddlers. It includes a short series
                of questions that help flag developmental concerns early.
              </Paragraph>

              <Heading>
                Social Attention and Communication Surveillance (SACS-R) and
                SACS-Preschool (SACS-PR)
              </Heading>
              <p className="font-bold italic">For ages 12 to 60 months</p>
              <Paragraph>
                These tools are used by trained professionals to identify early
                social and communication difficulties that may suggest autism,
                even in children as young as 12 months.
              </Paragraph>

              <Heading>
                Social Challenges Screening Questionnaire (SCSQ)
              </Heading>
              <p className="font-bold italic">For school-age children</p>
              <Heading>
                A brief questionnaire completed by parents or educators to
                assess traits that may indicate autism in older children.
              </Heading>

              <Heading>Autism Spectrum Quotient (AQ) Test</Heading>
              <p className="font-bold italic">For ages 16 and older</p>
              <Paragraph>
                A self-assessment tool that helps identify autistic traits in
                teenagers and adults. The AQ is not a diagnostic test but can be
                a helpful first step for individuals seeking more information.
              </Paragraph>

              <Paragraph>Looking for more support?</Paragraph>
              <Paragraph>
                Our Autism Support Team is here to connect you with local
                providers, resources, and information tailored to your needs.
              </Paragraph>
            </div>
          </div>
        </div>
      </AOSWrapper>
    </main>
  );
}
