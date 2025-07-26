import AOSWrapper from "@/components/AOSWrapper";
import Budge from "@/components/Budge";
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
          <p
            className="text-muted-foreground text-3xl font-bold"
            data-aos="fade-right"
          >
            Autism therapy and intervention
          </p>

          <p data-aos="fade-left">
            Every child or adult with autism has unique strengths and
            challenges, so there is no one size fits all approach to autism
            treatment and intervention.
          </p>

          <p data-aos="fade-left">
            Many people with autism have additional medical conditions such as
            sleep disturbance, seizures and gastrointestinal (GI) distress.
            Addressing these conditions can improve attention, learning and
            related behaviors. Many people also benefit from therapies for
            communication, social skills, or motor challenges, or to learn other
            skills like feeding or self-care.
          </p>

          <p data-aos="fade-left">
            Each autism intervention or treatment plan should be tailored to
            address the person’s specific needs. A person’s treatment plan can
            include behavioral interventions, other therapies, medicines or a
            combination of these.
          </p>

          <p
            className="text-muted-foreground pt-6 text-3xl font-bold"
            data-aos="fade-right"
          >
            Autism therapies and interventions
          </p>
          <ul className="list-inside list-disc" data-aos="fade-left">
            <li><strong>Applied Behavior Analysis (ABA)</strong></li>
            <li><strong>Early Start Denver Model (ESDM)</strong></li>
            <li><strong>Floortime</strong></li>
            <li><strong>Occupational Therapy (OT)</strong></li>
            <li><strong>Pivotal Response Treatment (PRT)</strong></li>
            <li><strong>Relationship Development Intervention (RDI)</strong></li>
            <li><strong>Speech Therapy</strong></li>
            <li><strong>TEACCH</strong></li>
            <li><strong>Verbal Behavior</strong></li>
          </ul>

          <p
            className="text-muted-foreground pt-6 text-3xl font-bold"
            data-aos="fade-right"
          >
            Treating associated medical conditions
          </p>
          <p data-aos="fade-left">
            A number of medical and mental-health issues frequently accompany
            autism spectrum disorder. <strong>These include:</strong>
          </p>
          <ul className="list-inside list-disc" data-aos="fade-left">
            <li>Epilepsy</li>
            <li>Gastrointestinal problems</li>
            <li>Feeding</li>
            <li>Sleep disturbances</li>
            <li>Attention-deficit/hyperactivity disorder</li>
            <li>Anxiety</li>
            <li>Depression</li>
            <li>Obsessive compulsive disorder</li>
          </ul>
          <p data-aos="fade-left">
            To better understand and treat the health conditions that frequently
            accompany autism visit our <strong>associated medical conditions</strong> page.
          </p>

          <p
            className="text-muted-foreground pt-6 text-3xl font-bold"
            data-aos="fade-right"
          >
            Use of medication
          </p>
          <p data-aos="fade-left">
            Many families of children and adults with autism are faced with the
            option of using medicines. This is a medical decision and there is
            no one right answer.
          </p>
          <p data-aos="fade-left">
            It is important to work with your healthcare providers to make sure
            that when medicine is chosen as a form of treatment, it is taken
            safely and effectively. Our <strong>ATN/AIR-P Medication Decision Aid</strong> and{" "}
            <strong>ATN/AIR-P Autism and Medication: Safe and Careful Use</strong>{" "}
            guide can <strong>help you to:</strong>
          </p>
          <ul className="list-inside list-disc" data-aos="fade-left">
            <li>Compare the options</li>
            <li>Consider benefits and risks</li>
            <li>Clarify personal values</li>
            <li>Learn about medications and side effects</li>
            <li>Target symptoms</li>
            <li>Know what questions to ask providers</li>
          </ul>
        </div>
      </AOSWrapper>
    </main>
  );
}
