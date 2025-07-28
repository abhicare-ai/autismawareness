import AOSWrapper from "@/components/AOSWrapper";
import Budge from "@/components/Budge";
import Heading, { ListTag, Paragraph } from "@/components/Heading";
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
          <Paragraph>
            Today, misconceptions around autism threaten access to vital
            information, resources and support that autistic people and their
            families need. While we recognize that autism is incredibly complex
            and manifests itself differently for people across the spectrum, we
            also recognize that Autism Speaks plays a crucial role in acting as
            a convener and conveyor of vital resources for the entire
            community—and misinformation on the internet acts as an unwanted
            barrier to achieving that goal.
          </Paragraph>
          <Heading
          >
            Setting the record straight
          </Heading>
          <Paragraph>
            We’re setting the record straight, because misinformation – about
            past Autism Speaks controversies and autism in general – is
            dangerous for us all, and the autistic community deserves to know
            the truth.
          </Paragraph>
          <Heading
          >
            What is the criticism of Autism Speaks?
          </Heading>

          <Heading
          >
            We invite you to learn more about a few popular topics generating
            conversation online and our point of view around each of them:
          </Heading>

          <ListTag>
            <li>Our evolution</li>
            <li>Autistic representation</li>
            <li>Community input and conversations</li>
            <li>Fundraising and spending</li>
            <li>Do vaccines cause autism?</li>
            <li>ABA and other therapies</li>
            <li>Research and eugenics</li>
            <li>Puzzle piece logo</li>
            <li>“I am Autism” video</li>
          </ListTag>

          <Heading
          >
            Consider the facts
          </Heading>
          <Paragraph>
            Help us stop the spread of misinformation.{" "}
            <strong>Share this Autismawareness on social media</strong> to show
            your support.
          </Paragraph>
        </div>
      </AOSWrapper>
    </main>
  );
}
