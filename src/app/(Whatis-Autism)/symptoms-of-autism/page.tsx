import Budge from "@/components/Budge";
import StickyNavigation from "../what-autism/StickyNavigation";
import { Metadata } from "next";
import AOSWrapper from "@/components/AOSWrapper";
import Heading, { ListTag, Paragraph } from "@/components/Heading";

export const metadata: Metadata = {
  title: "Autism symptoms",
};
export default function Page() {
  return (
    <main className="space-y-5">
      <AOSWrapper>
        <Budge>Autism symptoms</Budge>
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col-reverse gap-5 md:flex-row">
            <StickyNavigation className="sticky top-3 h-fit md:basis-1/2" />
            <div className="space-y-3 px-3 md:basis-3/2">
              <Paragraph>
                Autism symptoms can vary widely, but they typically fall into
                three major categories:{" "}
                <strong>
                  social interaction, communication, and behavior.
                </strong>{" "}
                Not every child will show all symptoms, and the severity may
                differ.
              </Paragraph>

              <Heading>Social differences</Heading>
              <ListTag>
                <li>Limited eye contact or facial expressions</li>
                <li>Doesn’t respond to name being called</li>
                <li>Seems unaware of others or prefers to play alone</li>
                <li>Trouble understanding or expressing feelings</li>
                <li>Difficulty making friends or engaging in pretend play</li>
              </ListTag>

              <Heading>Communication differences</Heading>
              <ListTag>
                <li>Delayed speech or language development</li>
                <li>Repeats words or phrases (echolalia)</li>
                <li>Uses few or no gestures (like pointing or waving)</li>
                <li>Trouble holding conversations</li>
                <li>Speaks in flat or robot-like tone</li>
              </ListTag>

              <Heading>Behavior differences</Heading>
              <ListTag>
                <li>Repetitive movements (e.g., hand flapping, rocking)</li>
                <li>Strong need for routines or sameness</li>
                <li>Unusual reactions to sounds, lights, or textures</li>
                <li>Intense interests in specific topics or objects</li>
                <li>May line up toys instead of playing with them</li>
              </ListTag>

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
