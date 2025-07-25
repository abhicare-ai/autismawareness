import Budge from "@/components/Budge";
import StickyNavigation from "../what-autism/StickyNavigation";

export default function Page() {
  return (
    <div className="space-y-5">
      <Budge>Autism Screening</Budge>
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col-reverse gap-5 md:flex-row">
          <StickyNavigation className="sticky top-3 h-screen md:basis-1/2" />
          <div className="space-y-4 px-3 md:basis-3/2">
            <p>
              There’s no single medical test to diagnose autism. Instead,
              healthcare providers rely on developmental history, behavioral
              observations, and input from parents or caregivers. Through
              screenings and assessments, professionals can determine whether a
              child shows signs consistent with Autism Spectrum Disorder (ASD).
            </p>
            <p>
              Early detection is key. Screening tools are designed to flag early
              signs in toddlers and children so that families can take steps
              toward support as soon as possible. These tools do not provide a
              diagnosis on their own, but can guide whether further evaluation
              is needed.
            </p>
            <p className="text-muted-foreground text-2xl font-bold">
              Common Autism Screening Tools
            </p>

            <div>
              <h3 className="font-semibold">
                Modified Checklist for Autism in Toddlers, Revised (M-CHAT-R)
              </h3>
              <p className="italic">For ages 16 to 30 months</p>
              <p>
                A parent-completed questionnaire that looks at key behaviors
                linked to autism in young toddlers. It includes a short series
                of questions that help flag developmental concerns early.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Social Attention and Communication Surveillance (SACS-R) and
                SACS-Preschool (SACS-PR)
              </h3>
              <p className="italic">For ages 12 to 60 months</p>
              <p>
                These tools are used by trained professionals to identify
                early social and communication difficulties that may suggest
                autism, even in children as young as 12 months.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Social Challenges Screening Questionnaire (SCSQ)
              </h3>
              <p className="italic">For school-age children</p>
              <p>
                A brief questionnaire completed by parents or educators to
                assess traits that may indicate autism in older children.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Autism Spectrum Quotient (AQ) Test
              </h3>
              <p className="italic">For ages 16 and older</p>
              <p>
                A self-assessment tool that helps identify autistic traits in
                teenagers and adults. The AQ is not a diagnostic test but can
                be a helpful first step for individuals seeking more
                information.
              </p>
            </div>

            <p className="text-muted-foreground text-xl font-semibold">
              Looking for more support?
            </p>
            <p>
              Our Autism Support Team is here to connect you with local
              providers, resources, and information tailored to your needs.
            </p>
          
          </div>
        </div>
      </div>
    </div>
  );
}
