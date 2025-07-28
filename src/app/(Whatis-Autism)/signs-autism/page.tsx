import Budge from "@/components/Budge";
import StickyNavigation from "../what-autism/StickyNavigation";
import AOSWrapper from "@/components/AOSWrapper";
import { Metadata } from "next";
import Heading, { ListTag, Paragraph } from "@/components/Heading";

export const metadata: Metadata = {
  title: "Signs of autism",
};
export default function Page() {
  return (
    <main className="space-y-5">
      <AOSWrapper>
        <Budge>Signs of autism</Budge>
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col-reverse gap-5 md:flex-row">
            <StickyNavigation className="sticky top-3 h-fit md:basis-1/2" />
            <div className="space-y-3 px-3 md:basis-3/2">
              <Paragraph>
                One of the most important things you can do as a parent or
                caregiver is to learn the early signs of autism and become
                familiar with the developmental milestones that your child
                should be reaching.
              </Paragraph>

              <Heading>Signs of autism in babies</Heading>

              <Heading>By 6 months</Heading>
              <ListTag>
                <li>
                  Few or no big smiles or other warm, joyful, and engaging
                  expressions
                </li>
                <li>Limited or no eye contact</li>
              </ListTag>

              <Heading>By 9 months</Heading>
              <ListTag>
                <li>
                  Little or no back-and-forth sharing of sounds, smiles, or
                  other facial expressions
                </li>
              </ListTag>

              <Heading>Signs of autism in toddlers</Heading>

              <p className="font-semibold">By 12 months</p>
              <ListTag>
                <li>Little or no babbling</li>
                <li>
                  Little or no back-and-forth gestures such as pointing,
                  showing, reaching, or waving
                </li>
                <li>Little or no response to name</li>
              </ListTag>

              <Heading>By 16 months</Heading>
              <ul className="list-disc space-y-1 pl-6">
                <li>Very few or no words</li>
              </ul>

              <Heading>By 24 months</Heading>
              <ListTag>
                <li>
                  Very few or no meaningful, two-word phrases (not including
                  imitating or repeating)
                </li>
              </ListTag>

              <Heading>Signs of autism at any age</Heading>
              <ListTag>
                <li>
                  Loss of previously acquired speech, babbling, or social skills
                </li>
                <li>Avoidance of eye contact</li>
                <li>Persistent preference for solitude</li>
                <li>Difficulty understanding other people’s feelings</li>
                <li>Delayed language development</li>
                <li>Persistent repetition of words or phrases (echolalia)</li>
                <li>Resistance to minor changes in routine or surroundings</li>
                <li>Restricted interests</li>
                <li>
                  Repetitive behaviors (flapping, rocking, spinning, etc.)
                </li>
                <li>
                  Unusual and intense reactions to sounds, smells, tastes,
                  textures, lights, and/or colors
                </li>
              </ListTag>

              <ListTag>At what age is autism diagnosed?</ListTag>
              <Paragraph>
                Signs of autism and early signs can vary widely from child to
                child. Some children show early signs of autism within their
                first 12 months of life. In others, autism signs may show up
                around 18-24 months of age. Some children with ASD gain new
                skills and then lose them, showing regression between 18-24
                months of age. Diagnosis by an experienced professional can be
                considered reliable by age 2.
              </Paragraph>

              <Paragraph>
                The American Academy of Pediatrics (AAP) recommends that all
                children be screened for autism at ages 18 months and 24 months,
                in addition to regular developmental checkups at 9 months, 18
                months, and 30 months.
              </Paragraph>

              <Heading>Important to remember</Heading>
              <Paragraph>
                Every child with autism is unique. Early identification and
                support can make a big difference in development. If you notice
                any of these signs, talk to a pediatrician or specialist for
                guidance.
              </Paragraph>
            </div>
          </div>
        </div>
      </AOSWrapper>
    </main>
  );
}
