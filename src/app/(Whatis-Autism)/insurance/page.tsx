import AOSWrapper from "@/components/AOSWrapper";
import Budge from "@/components/Budge";
import Heading, { ListTag, Paragraph } from "@/components/Heading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health insurance coverage for autism",
};

export default function Page() {
  return (
    <main className="space-y-5 overflow-hidden">
      <AOSWrapper>
        <Budge>Health insurance coverage for autism</Budge>
        <div className="mx-auto max-w-7xl space-y-3 px-3">
          <Heading>
            Autism Speaks Advocacy on health insurance coverage of autism
            therapies
          </Heading>

          <Paragraph>
            At least 200 million people now have health insurance coverage for
            ABA due to our efforts and dedicated advocates across the country.
          </Paragraph>
          <Paragraph>
            Over the last decade, the Autism Speaks advocacy team has focused on
            improving health insurance coverage for medically necessary
            treatments such as Applied Behavior Analysis (ABA).
          </Paragraph>
          <Paragraph>
            Health insurance can be very complicated. The time and energy often
            needed to ensure that prescribed treatments are covered can
            complicate what may already be a stressful time for families faced
            with a diagnosis of autism.
          </Paragraph>
          <p className="font-bold">We are here to help.</p>
          <Paragraph>
            Our online resources and staff can help you determine if your health
            benefit plan provides meaningful coverage for the treatment of
            autism. We can also assist with effective implementation and
            enforcement of the benefits to which you are entitled.
          </Paragraph>
          <Heading>Health benefit plans</Heading>

          <Paragraph>
            The first question we need to ask is, “Which type of health benefit
            plan do you have?”
          </Paragraph>
          <Paragraph>
            If you don’t already know what type of health benefit plan you have,
            please refer to our Health Benefits Guide. If you have trouble or
            need additional information, contact us at
            advocacy@autismspeaks.org.
          </Paragraph>
          <Paragraph>
            Once you have confirmed your plan type, find more information on
            your plan&lsquo;s page in the sidebar on the left.
          </Paragraph>

          <Heading>
            Why do I need to know the type of health benefit plan I have?
          </Heading>
          <p className="font-bold">
            Your type of plan determines which health benefits must be covered.
          </p>
          <ListTag>
            <li>
              Some plan types (e.g., “fully insured plans”) must provide
              benefits directed by state law while other plan types do not.
            </li>
            <li>
              All fifty states have taken government action to require coverage
              for ABA.
            </li>
            <li>
              Fully insured plans must comply with these laws, but self-funded
              plans do not. Self-funded plans are regulated by federal law – not
              state law.
            </li>
          </ListTag>
        </div>
      </AOSWrapper>
    </main>
  );
}
