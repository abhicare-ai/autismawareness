import Budge from "@/components/Budge";
import StickyNavigation from "./StickyNavigation";
import infographic from "@/assets/What is autism infographic.jpg";
import Image from "next/image";

export default function Page() {
  return (
    <div className="space-y-5">
      <Budge>Autism Spectrum Disorder (ASD)</Budge>
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col-reverse gap-5 md:flex-row">
          <StickyNavigation className="sticky top-3 h-screen md:basis-1/2" />
          <div className="space-y-4 px-3 md:basis-3/2">
            <h2 className="text-muted-foreground text-3xl font-bold">
              What is Autism?
            </h2>
            <p>
              Autism Spectrum Disorder (ASD) is a neurodevelopmental condition
              that affects how individuals perceive, interact, and respond to
              the world around them. Rather than being a disease, autism
              represents a different way of thinking, learning, and experiencing
              life. People with autism may face challenges in areas such as
              communication, social interaction, and behavior, while also having
              unique strengths and talents.
            </p>

            <h2 className="text-muted-foreground text-3xl font-bold">
              Autism is a Spectrum
            </h2>
            <p>
              No two people with autism are the same. Some individuals are
              highly verbal and live independently, while others may be
              non-speaking or need support in daily activities. Autism exists on
              a spectrum — this means people experience it in widely different
              ways, each with their own mix of strengths and challenges.
            </p>

            <Image src={infographic} alt="What is autism infographic" />

            <h2 className="text-muted-foreground text-3xl font-bold">
              Co-occurring Conditions
            </h2>
            <p>
              Many people with autism also experience additional medical or
              mental health challenges that can impact their quality of life.
            </p>
            <p>Common co-occurring conditions include:</p>
            <ul className="list-inside list-disc space-y-1">
              <li>Attention-Deficit/Hyperactivity Disorder (ADHD)</li>
              <li>Anxiety and depression</li>
              <li>Gastrointestinal (GI) disorders</li>
              <li>Seizures and sleep problems</li>
            </ul>

            <p>
              Autism can affect people of any age, gender, or background.
              Research shows that boys are more frequently diagnosed than girls,
              often because girls may present more subtle signs that are harder
              to detect. Many autistic individuals, particularly girls and
              adults, may &ldquo;mask&ldquo; or hide their symptoms, which can
              delay diagnosis.
            </p>

            <h2 className="text-muted-foreground text-3xl font-bold">
              A Lifelong Journey with Support
            </h2>
            <p>
              Autism is a lifelong condition. As people grow, their needs and
              capabilities can evolve. With the right support, therapies, and
              accommodations, many autistic individuals can develop skills,
              build meaningful relationships, and lead independent, fulfilling
              lives.
            </p>

            <h2 className="text-muted-foreground text-3xl font-bold">
              Support & Resources
            </h2>
            <p>
              Whether you’re at the beginning of the diagnostic process or
              seeking tools for ongoing support, these resources can help guide
              your journey:
            </p>

            <ul className="list-inside list-disc space-y-4">
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
                  Connect with autism specialists, therapists, and providers in
                  your community.
                </p>
              </li>
              <li>
                <strong>Need Help?</strong>
                <p className="text-muted-foreground ml-4">
                  Reach out to our response team for assistance, questions, or
                  personalized guidance.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
