import AOSWrapper from "@/components/AOSWrapper";
import Budge from "@/components/Budge";
import Heading, { ListTag, Paragraph } from "@/components/Heading";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import educator from "@/assets/educators-joy-teachers-teacher-well-being.jpeg";

export const metadata: Metadata = {
  title: "Educator",
};
export default function Page() {
  return (
    <main className="space-y-5">
      <AOSWrapper>
        <Budge>Educator</Budge>
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-3 md:flex-row">
          <div className="basis-2/3 space-y-3">
            <Paragraph>
              As an educator, understanding autism can help you create an
              inclusive, supportive, and effective learning environment for
              students on the autism spectrum.
            </Paragraph>

            <Heading>Strategies for educators</Heading>
            <ListTag>
              <li>
                Provide clear instructions with visual aids whenever possible
              </li>
              <li>Use consistent routines to create a sense of safety</li>
              <li>Allow extra processing time for questions or tasks</li>
              <li>Break tasks into smaller, manageable steps</li>
              <li>Minimize sensory distractions in the classroom</li>
              <li>
                Encourage social interaction through structured activities
              </li>
              <li>
                Respect and support special interests to motivate learning
              </li>
              <li>Use positive reinforcement to encourage desired behaviors</li>
            </ListTag>

            <Heading>Building an inclusive classroom</Heading>
            <ListTag>
              <li>Promote acceptance and understanding among all students</li>
              <li>Model inclusive language and respectful interactions</li>
              <li>
                Educate peers about differences and strengths in a positive way
              </li>
              <li>Create a calm-down space for students who need breaks</li>
            </ListTag>

            <Heading>Important to remember</Heading>
            <Paragraph>
              Every student with autism is unique. By adapting your teaching
              methods and showing understanding, you can make a big difference
              in their learning journey, confidence, and overall school
              experience.
            </Paragraph>
          </div>
          <Image
            src={educator}
            alt="autismParent"
            className="sticky top-3 h-fit"
            data-aos="fade-up"
          />
        </div>
      </AOSWrapper>
    </main>
  );
}
