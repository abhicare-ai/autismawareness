import AOSWrapper from "@/components/AOSWrapper";
import Budge from "@/components/Budge";
import Heading, { ListTag, Paragraph } from "@/components/Heading";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import imga from "@/assets/WhatsApp Image 2025-07-29 at 14.37.19_d02d8853.jpg";
import education from "@/assets/child-writing-and-coloring-in-a-classroom.webp";
export const metadata: Metadata = {
  title: "Newly diagnosed",
};
export default function Page() {
  return (
    <main className="space-y-5">
      <AOSWrapper>
        <Budge>Newly diagnosed</Budge>
        <div className="mx-auto max-w-7xl space-y-3 px-3">
          <Heading>
            Treatment and intervention for Autism Spectrum Disorder
          </Heading>

          <div className="flex flex-col gap-5 md:flex-row">
            <div className="space-y-3 md:w-1/2">
              <p className="font-bold">Key points</p>
              <ListTag>
                <li>
                  Current treatments for autism spectrum disorder (ASD) seek to
                  reduce symptoms that interfere with daily functioning and
                  quality of life.
                </li>
                <li>
                  Treatments can be given in education, health, community, or
                  home settings, or a combination of settings.
                </li>
                <li>
                  As individuals with ASD leave high school and grow into
                  adulthood, additional services can help improve health and
                  daily functioning, and facilitate social and community
                  engagement.
                </li>
                <li>
                  Early diagnosis and intervention can significantly improve a
                  child’s development and quality of life.
                </li>
                <li>
                  Behavioral therapies like ABA (Applied Behavior Analysis) are
                  among the most common and effective interventions.
                </li>
                <li>
                  Speech and language therapy helps individuals with ASD improve
                  communication skills.
                </li>
                <li>
                  Occupational therapy can assist in developing daily living and
                  motor skills.
                </li>
                <li>
                  Sensory integration therapy helps manage sensitivities to
                  sound, touch, and light.
                </li>
                <li>
                  Special education programs are tailored to individual learning
                  styles and needs.
                </li>
                <li>
                  Social skills training enables individuals to better interact
                  with peers and the community.
                </li>
                <li>
                  Family counseling supports caregivers in understanding and
                  managing challenges.
                </li>
                <li>
                  Parent training programs empower families to provide
                  consistent support at home.
                </li>
                <li>
                  Medications may be prescribed to manage symptoms like anxiety,
                  ADHD, or aggression.
                </li>
                <li>
                  Transition planning is vital for teens with ASD preparing for
                  adulthood.
                </li>
                <li>
                  Vocational training opens up employment opportunities and
                  builds independence.
                </li>
                <li>
                  Community-based programs foster inclusion, awareness, and peer
                  support.
                </li>
                <li>
                  Group therapy offers a safe environment to build friendships
                  and reduce isolation.
                </li>
                <li>
                  Regular follow-up with healthcare providers ensures ongoing
                  support and adaptation of strategies.
                </li>
              </ListTag>
            </div>
            <Image src={imga} alt="imga" />
          </div>
          <Heading>Behavioral approaches</Heading>
          <Paragraph>
            Behavioral approaches focus on changing behaviors by understanding
            what happens before and after the behavior. Behavioral approaches
            have the most evidence for treating symptoms of ASD. They have
            become widely accepted among educators and healthcare professionals
            and are used in many schools and treatment clinics. A notable
            behavioral treatment for people with ASD is called applied behavior
            analysis (ABA). ABA encourages desired behaviors and discourages
            undesired behaviors to improve a variety of skills. Progress is
            tracked and measured.
          </Paragraph>
          <Paragraph>
            Two ABA teaching styles are discrete trial training (DTT) and
            pivotal response training (PRT).
          </Paragraph>
          <ListTag>
            <li>
              DTT uses step-by-step instructions to teach a desired behavior or
              response. Lessons are broken down into their simplest parts, and
              desired answers and behaviors are rewarded. Undesired answers and
              behaviors are ignored.
            </li>
            <li>
              PRT takes place in a natural setting rather than clinic setting.
              The goal of PRT is to improve a few “pivotal skills“ that will
              help the person learn many other skills. One example of a pivotal
              skill is being able to initiate communication with others.
            </li>
          </ListTag>
          <Heading>Educational approaches</Heading>
          <Image src={education} alt="education" className="w-full" />
          <Paragraph>
            Educational treatments are given in a classroom setting. One type of
            educational approach is the Treatment and Education of Autistic and
            Related Communication-Handicapped Children (TEACCH) approach.
          </Paragraph>
          <Paragraph>
            Educational treatments are given in a classroom setting. One type of
            educational approach is the Treatment and Education of Autistic and
            Related Communication-Handicapped Children (TEACCH) approach. TEACCH
            is based on the idea that people with autism thrive on consistency
            and visual learning. It provides teachers with ways to adjust the
            classroom structure and improve academic and other outcomes. For
            example, daily routines can be written or drawn and placed in clear
            sight. Boundaries can be set around learning stations. Verbal
            instructions can be complemented with visual instructions or
            physical demonstrations.
          </Paragraph>
          <Heading>Social-relational approaches</Heading>
          <Paragraph>
            Social-relational treatments focus on improving social skills and
            building emotional bonds. Some social-relational approaches involve
            parents or peer mentors.
          </Paragraph>
          <ListTag>
            <li>
              The Developmental, Individual Differences, Relationship-Based
              model (also called DIR or “Floor Time“) encourages parents and
              therapists to follow the interests of the individual to expand
              opportunities for communication.
            </li>
            <li>
              The Relationship Development Intervention (RDI) model involves
              activities that increase motivation, interest, and abilities to
              participate in shared social interactions.
            </li>
            <li>
              Social Stories provide simple descriptions of what to expect in a
              social situation.
            </li>
            <li>
              Social skills groups provide opportunities for people with ASD to
              practice social skills in a structured environment.
            </li>
          </ListTag>
          <Heading>Pharmacological approaches</Heading>
          <Paragraph>
            Some medications treat co-occurring symptoms (those that happen
            along with ASD) and can help people with ASD function better. For
            example, medication might help manage high energy levels, inability
            to focus, or self-harming behavior, such as head banging or hand
            biting. Medication can also help manage co-occurring psychological
            conditions, such as anxiety or depression, in addition to medical
            conditions such as seizures, sleep problems, or stomach or other
            gastrointestinal problems.
          </Paragraph>
          <Paragraph>
            It is important to work with a doctor who has experience in treating
            people with ASD when considering the use of medication. This applies
            to both prescription medication and over-the-counter medication.
            Individuals, families, and doctors must work together to monitor
            progress and reactions to be sure any negative side effects of the
            medication do not outweigh the benefits.
          </Paragraph>
          <Heading>Psychological approaches</Heading>
          <Paragraph>
            Psychological approaches can help people with ASD cope with anxiety,
            depression, and other mental health issues. Cognitive-behavior
            therapy (CBT) is one psychological approach that focuses on learning
            the connections between thoughts, feelings, and behaviors. During
            CBT, a therapist and the individual work together to identify goals
            and then change how the person thinks about a situation to change
            how they react to the situation.
          </Paragraph>
          <Heading>Complementary and alternative treatments</Heading>
          <Paragraph>
            Some people with ASD and their families use treatments that do not
            fit into any of the other categories. These treatments are known as
            complementary and alternative treatments. Complementary and
            alternative treatments are often used to supplement more traditional
            approaches. They might include special diets, herbal supplements,
            chiropractic care, animal therapy, arts therapy, mindfulness, or
            relaxation therapies. Individuals and families should always talk to
            their doctor before starting a complementary and alternative
            treatment.
          </Paragraph>
        </div>
      </AOSWrapper>
    </main>
  );
}
