import Budge from "@/components/Budge";
import StickyNavigation from "./StickyNavigation";
import infographic from "@/assets/What is autism infographic.jpg";
import Image from "next/image";
import AOSWrapper from "@/components/AOSWrapper";
import { Metadata } from "next";
import Heading, { ListTag, Paragraph } from "@/components/Heading";

export const metadata: Metadata = {
  title: "Autism spectrum disorder (ASD)",
};
export default function Page() {
  return (
    <main className="space-y-5">
      <AOSWrapper>
        <Budge>Autism spectrum disorder (ASD)</Budge>
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col-reverse gap-5 md:flex-row">
            <StickyNavigation className="sticky top-3 h-fit md:basis-1/2" />
            <div className="space-y-3 px-3 md:basis-3/2">
              <Heading>What is Autism?</Heading>
              <Paragraph>
                Autism Spectrum Disorder (ASD) is a neurodevelopmental condition
                that affects how individuals perceive, interact, and respond to
                the world around them. Rather than being a disease, autism
                represents a different way of thinking, learning, and
                experiencing life. People with autism may face challenges in
                areas such as communication, social interaction, and behavior,
                while also having unique strengths and talents.
              </Paragraph>

              <Heading>Autism is a Spectrum</Heading>
              <Paragraph>
                No two people with autism are the same. Some individuals are
                highly verbal and live independently, while others may be
                non-speaking or need support in daily activities. Autism exists
                on a spectrum — this means people experience it in widely
                different ways, each with their own mix of strengths and
                challenges.
              </Paragraph>

              <Image src={infographic} alt="What is autism infographic" />

              <Heading>Co-occurring Conditions</Heading>
              <Paragraph>
                Many people with autism also experience additional medical or
                mental health challenges that can impact their quality of life.
              </Paragraph>
              <Paragraph>Common co-occurring conditions include:</Paragraph>
              <ListTag>
                <li>Attention-Deficit/Hyperactivity Disorder (ADHD)</li>
                <li>Anxiety and depression</li>
                <li>Gastrointestinal (GI) disorders</li>
                <li>Seizures and sleep problems</li>
              </ListTag>

              <Paragraph>
                Autism can affect people of any age, gender, or background.
                Research shows that boys are more frequently diagnosed than
                girls, often because girls may present more subtle signs that
                are harder to detect. Many autistic individuals, particularly
                girls and adults, may &ldquo;mask&ldquo; or hide their symptoms,
                which can delay diagnosis.
              </Paragraph>

              <Heading>A Lifelong Journey with Support</Heading>
              <Paragraph>
                Autism is a lifelong condition. As people grow, their needs and
                capabilities can evolve. With the right support, therapies, and
                accommodations, many autistic individuals can develop skills,
                build meaningful relationships, and lead independent, fulfilling
                lives.
              </Paragraph>

              <Heading>Support & Resources</Heading>
              <Paragraph>
                Whether you’re at the beginning of the diagnostic process or
                seeking tools for ongoing support, these resources can help
                guide your journey:
              </Paragraph>

              <ListTag>
                <li>
                  <strong>Autism Screening Tool</strong>
                  <p className="text-muted-foreground ml-4">
                    A simple checklist to help identify early signs of autism in
                    young children.
                  </p>
                </li>
                <li>
                  <strong>Parent & Family Guides</strong>
                  <p className="text-muted-foreground ml-4">
                    Practical guidance for parents, grandparents, and siblings
                    navigating a diagnosis.
                  </p>
                </li>
                <li>
                  <strong>The First 100 Days</strong>
                  <p className="text-muted-foreground ml-4">
                    A toolkit to help families make the most of the first few
                    months after diagnosis.
                  </p>
                </li>
                <li>
                  <strong>Adult Autism Toolkit</strong>
                  <p className="text-muted-foreground ml-4">
                    Resources tailored for adults seeking diagnosis or recently
                    diagnosed.
                  </p>
                </li>
                <li>
                  <strong>Find Local Support</strong>
                  <p className="text-muted-foreground ml-4">
                    Connect with autism specialists, therapists, and providers
                    in your community.
                  </p>
                </li>
                <li>
                  <strong>Need Help?</strong>
                  <p className="text-muted-foreground ml-4">
                    Reach out to our response team for assistance, questions, or
                    personalized guidance.
                  </p>
                </li>
              </ListTag>
            </div>
          </div>
        </div>
      </AOSWrapper>
    </main>
  );
}
