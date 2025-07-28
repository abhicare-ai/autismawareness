import AOSWrapper from "@/components/AOSWrapper";
import Budge from "@/components/Budge";
import Heading, { ListTag, Paragraph } from "@/components/Heading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Autism therapy and intervention",
};

export default function Page() {
  return (
    <main className="space-y-5 overflow-hidden">
      <AOSWrapper>
        <Budge>Autism therapy and intervention</Budge>
        <div className="mx-auto max-w-7xl space-y-3 px-3">
          <Heading>Autism therapy and intervention</Heading>

          <Paragraph>
            Every child or adult with autism has unique strengths and
            challenges, so there is no one size fits all approach to autism
            treatment and intervention.
          </Paragraph>

          <Paragraph>
            Many people with autism have additional medical conditions such as
            sleep disturbance, seizures and gastrointestinal (GI) distress.
            Addressing these conditions can improve attention, learning and
            related behaviors. Many people also benefit from therapies for
            communication, social skills, or motor challenges, or to learn other
            skills like feeding or self-care.
          </Paragraph>

          <Paragraph>
            Each autism intervention or treatment plan should be tailored to
            address the person’s specific needs. A person’s treatment plan can
            include behavioral interventions, other therapies, medicines or a
            combination of these.
          </Paragraph>

          <Heading>Autism therapies and interventions</Heading>
          <ListTag>
            <li>
              <strong>Applied Behavior Analysis (ABA)</strong>
            </li>
            <li>
              <strong>Early Start Denver Model (ESDM)</strong>
            </li>
            <li>
              <strong>Floortime</strong>
            </li>
            <li>
              <strong>Occupational Therapy (OT)</strong>
            </li>
            <li>
              <strong>Pivotal Response Treatment (PRT)</strong>
            </li>
            <li>
              <strong>Relationship Development Intervention (RDI)</strong>
            </li>
            <li>
              <strong>Speech Therapy</strong>
            </li>
            <li>
              <strong>TEACCH</strong>
            </li>
            <li>
              <strong>Verbal Behavior</strong>
            </li>
          </ListTag>

          <Heading>Treating associated medical conditions</Heading>
          <Paragraph>
            A number of medical and mental-health issues frequently accompany
            autism spectrum disorder. <strong>These include:</strong>
          </Paragraph>
          <ListTag>
            <li>Epilepsy</li>
            <li>Gastrointestinal problems</li>
            <li>Feeding</li>
            <li>Sleep disturbances</li>
            <li>Attention-deficit/hyperactivity disorder</li>
            <li>Anxiety</li>
            <li>Depression</li>
            <li>Obsessive compulsive disorder</li>
          </ListTag>
          <Paragraph>
            To better understand and treat the health conditions that frequently
            accompany autism visit our{" "}
            <strong>associated medical conditions</strong> page.
          </Paragraph>

          <Heading>Use of medication</Heading>
          <Paragraph>
            Many families of children and adults with autism are faced with the
            option of using medicines. This is a medical decision and there is
            no one right answer.
          </Paragraph>
          <Paragraph>
            It is important to work with your healthcare providers to make sure
            that when medicine is chosen as a form of treatment, it is taken
            safely and effectively. Our{" "}
            <strong>ATN/AIR-P Medication Decision Aid</strong> and{" "}
            <strong>
              ATN/AIR-P Autism and Medication: Safe and Careful Use
            </strong>{" "}
            guide can <strong>help you to:</strong>
          </Paragraph>
          <ListTag>
            <li>Compare the options</li>
            <li>Consider benefits and risks</li>
            <li>Clarify personal values</li>
            <li>Learn about medications and side effects</li>
            <li>Target symptoms</li>
            <li>Know what questions to ask providers</li>
          </ListTag>
        </div>
      </AOSWrapper>
    </main>
  );
}
