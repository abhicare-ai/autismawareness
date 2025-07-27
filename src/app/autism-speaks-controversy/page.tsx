import AOSWrapper from "@/components/AOSWrapper";
import Budge from "@/components/Budge";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Autism Speaks controversy",
};
export default function Page() {
  return (
    <main className="space-y-5 overflow-hidden">
      <AOSWrapper>
        <Budge>Autism Speaks controversy</Budge>
        <div className="mx-auto max-w-7xl space-y-3 px-3">
          {/* How do I get my child screened for autism? */}
          <p data-aos="fade-right">
            Today, misconceptions around autism threaten access to vital
            information, resources and support that autistic people and their
            families need. While we recognize that autism is incredibly complex
            and manifests itself differently for people across the spectrum, we
            also recognize that Autism Speaks plays a crucial role in acting as
            a convener and conveyor of vital resources for the entire
            community—and misinformation on the internet acts as an unwanted
            barrier to achieving that goal.
          </p>
          <p
            className="text-muted-foreground text-3xl font-bold"
            data-aos="fade-right"
          >
            Setting the record straight
          </p>
          <p data-aos="fade-left">
            We’re setting the record straight, because misinformation – about
            past Autism Speaks controversies and autism in general – is
            dangerous for us all, and the autistic community deserves to know
            the truth.
          </p>
          <p
            className="text-muted-foreground text-3xl font-bold"
            data-aos="fade-right"
          >
            What is the criticism of Autism Speaks?
          </p>

          <p
            className="text-muted-foreground text-3xl font-bold"
            data-aos="fade-right"
          >
            We invite you to learn more about a few popular topics generating
            conversation online and our point of view around each of them:
          </p>

          <ul className="list-inside list-disc" data-aos="fade-right">
            <li>Our evolution</li>
            <li>Autistic representation</li>
            <li>Community input and conversations</li>
            <li>Fundraising and spending</li>
            <li>Do vaccines cause autism?</li>
            <li>ABA and other therapies</li>
            <li>Research and eugenics</li>
            <li>Puzzle piece logo</li>
            <li>“I am Autism” video</li>
          </ul>

          <p
            className="text-muted-foreground text-3xl font-bold"
            data-aos="fade-right"
          >
            Consider the facts
          </p>
          <p>
            Help us stop the spread of misinformation.{" "}
            <strong>Share this Autismawareness on social media</strong> to show
            your support.
          </p>
        </div>
      </AOSWrapper>
    </main>
  );
}
