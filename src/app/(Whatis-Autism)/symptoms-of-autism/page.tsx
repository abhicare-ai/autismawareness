import Budge from "@/components/Budge";
import StickyNavigation from "../what-autism/StickyNavigation";

export default function Page() {
  return (
    <div className="space-y-5">
      <Budge>Autism symptoms</Budge>
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col-reverse gap-5 md:flex-row">
          <StickyNavigation className="sticky top-3 h-screen md:basis-1/2" />
          <div className="space-y-6 px-3 md:basis-3/2">
            <p>
              Autism symptoms can vary widely, but they typically fall into three major categories:{" "}
              <strong>social interaction, communication, and behavior.</strong> Not every child will show all symptoms, and the severity may differ.
            </p>

            <h2 className="text-xl font-bold">Social differences</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Limited eye contact or facial expressions</li>
              <li>Doesn’t respond to name being called</li>
              <li>Seems unaware of others or prefers to play alone</li>
              <li>Trouble understanding or expressing feelings</li>
              <li>Difficulty making friends or engaging in pretend play</li>
            </ul>

            <h2 className="text-xl font-bold">Communication differences</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Delayed speech or language development</li>
              <li>Repeats words or phrases (echolalia)</li>
              <li>Uses few or no gestures (like pointing or waving)</li>
              <li>Trouble holding conversations</li>
              <li>Speaks in flat or robot-like tone</li>
            </ul>

            <h2 className="text-xl font-bold">Behavior differences</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Repetitive movements (e.g., hand flapping, rocking)</li>
              <li>Strong need for routines or sameness</li>
              <li>Unusual reactions to sounds, lights, or textures</li>
              <li>Intense interests in specific topics or objects</li>
              <li>May line up toys instead of playing with them</li>
            </ul>

            <p className="text-muted-foreground text-xl font-semibold">
              Important to remember
            </p>
            <p>
              Every child with autism is unique. Early identification and support can make a big difference in development. If you notice any of these signs, talk to a pediatrician or specialist for guidance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
