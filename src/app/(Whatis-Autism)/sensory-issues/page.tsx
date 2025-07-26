import Budge from "@/components/Budge";
import StickyNavigation from "../what-autism/StickyNavigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sensory issues",
};

export default function Page() {
  return (
    <main className="space-y-5">
      <Budge>Autism and sensory issues</Budge>
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col-reverse gap-5 md:flex-row">
          <StickyNavigation className="sticky top-3 h-screen md:basis-1/2" />
          <div className="space-y-3 px-3 md:basis-3/2">

            <h2 className="text-muted-foreground text-3xl font-bold">
              Autism and sensory issues
            </h2>
            <p>
              <strong>People with autism might have sensitivities to:</strong>
            </p>
            <ul className="list-disc list-inside">
              <li>Sights</li>
              <li>Sounds</li>
              <li>Smells</li>
              <li>Tastes</li>
              <li>Touch</li>
              <li>Balance (vestibular)</li>
              <li>Body awareness (proprioception)</li>
            </ul>
            <p>
              Autistic people can experience both <strong>hypersensitivity</strong> (over-responsiveness)
              and <strong>hyposensitivity</strong> (under-responsiveness) to a wide range of stimuli.
              No two people have an identical sensory profile.
            </p>

            <h2 className="text-muted-foreground text-3xl font-bold">
              What do sensory issues feel like?
            </h2>
            <p>
              Hypersensitivity or sensory overload from autism can create challenges in everyday situations
              like school, work, or home. It can lead to:
            </p>
            <ul className="list-disc list-inside">
              <li>Extreme discomfort from lights, sounds, clothing, food textures, or unexpected touches</li>
              <li>Emotional outbursts or shutdowns as coping mechanisms</li>
              <li>Trouble focusing or engaging in learning and conversation</li>
              <li>Fatigue from managing environmental input constantly</li>
            </ul>
            <p>
              Meanwhile, hyposensitivity may make it harder to feel pain, temperature, or body movement in balance.
              People may:
            </p>
            <ul className="list-disc list-inside">
              <li>Not notice injuries</li>
              <li>Appear clumsy or unaware of personal space</li>
              <li>Seek intense sensory input like spinning, crashing, or deep pressure</li>
            </ul>

            <h2 className="text-muted-foreground text-3xl font-bold">
              What do sensory issues look like?
            </h2>
            <p><strong>Many people with autism show certain behaviors when they are experiencing a sensory issue:</strong></p>
            <ul className="list-disc list-inside">
              <li>Increased movement such as jumping, pacing or spinning to cope</li>
              <li>Talking to oneself, hand-flapping, making repetitive noises or rocking</li>
              <li>Covering ears, closing eyes or hiding</li>
              <li>Difficulty regulating emotions</li>
              <li>Needing quiet, dark, or familiar sensations like hugging or retreating to the bathroom</li>
              <li>Chewing on clothing or objects for oral stimulation</li>
              <li>Distress, confusion, or meltdown from sensory overload</li>
              <li>Difficulty communicating or responding</li>
              <li>Shutting down completely as a protective response</li>
            </ul>

            <h2 className="text-muted-foreground text-3xl font-bold">
              Accommodations for sensory issues
            </h2>
            <p><strong>Examples of accommodations that help include:</strong></p>
            <ul className="list-disc list-inside">
              <li>Wearing ear plugs or noise-canceling headphones</li>
              <li>Using sunglasses, visors or reducing fluorescent lights</li>
              <li>Providing a quiet room to calm down</li>
              <li>Weighted vests, compression clothing, or fidgets</li>
              <li>Sensory-friendly classrooms or workspaces</li>
              <li>Flexible seating options</li>
              <li>Soft, comfortable clothing</li>
              <li>Choice in food textures and smells</li>
              <li>Visual schedules, calming apps, or timers</li>
            </ul>

            <h2 className="text-muted-foreground text-3xl font-bold">
              Self-advocacy for sensory issues
            </h2>
            <p>
              People with autism can advocate for their needs once they understand their sensory profile.
              Self-awareness helps explain needs to others. For example:
            </p>
            <ul className="list-disc list-inside">
              <li>“Bright lights hurt my eyes. I need to wear sunglasses inside.”</li>
              <li>“I get overwhelmed in crowds. I need a quiet place.”</li>
              <li>“I need headphones to concentrate. It’s not that I’m ignoring anyone.”</li>
            </ul>

            <h2 className="text-muted-foreground text-3xl font-bold">
              What resources are there to help with sensory issues?
            </h2>
            <ul className="list-disc list-inside">
              <li>Learn more about autism-related sensory issues</li>
              <li>Watch videos of autistic self-advocates explaining sensory overload</li>
              <li>Consult with occupational therapists</li>
              <li>Create a sensory profile or “sensory diet” of planned regulation activities</li>
              <li>Download Autism Sensory Accommodations Guides</li>
              <li>Use Sensory Processing Event Calendars to find autism-friendly events</li>
            </ul>

          </div>
        </div>
      </div>
    </main>
  );
}
