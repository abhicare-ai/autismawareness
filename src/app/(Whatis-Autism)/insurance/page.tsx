import AOSWrapper from "@/components/AOSWrapper";
import Budge from "@/components/Budge";
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
          <p
            className="text-muted-foreground pt-4 text-2xl font-bold"
            data-aos="fade-right"
          >
            Autism Speaks Advocacy on health insurance coverage of autism
            therapies
          </p>

          <p>
            At least 200 million people now have health insurance coverage for
            ABA due to our efforts and dedicated advocates across the country.
          </p>
          <p>
            Over the last decade, the Autism Speaks advocacy team has focused on
            improving health insurance coverage for medically necessary
            treatments such as Applied Behavior Analysis (ABA).
          </p>
          <p>
            Health insurance can be very complicated. The time and energy often
            needed to ensure that prescribed treatments are covered can
            complicate what may already be a stressful time for families faced
            with a diagnosis of autism.
          </p>
          <p className="font-bold">We are here to help.</p>
          <p>
            Our online resources and staff can help you determine if your health
            benefit plan provides meaningful coverage for the treatment of
            autism. We can also assist with effective implementation and
            enforcement of the benefits to which you are entitled.
          </p>
          <p
            className="text-muted-foreground pt-6 text-2xl font-bold"
            data-aos="fade-right"
          >
            Health benefit plans
          </p>

          <p data-aos="fade-left">
            The first question we need to ask is, “Which type of health benefit
            plan do you have?”
          </p>
          <p>
            If you don’t already know what type of health benefit plan you have,
            please refer to our Health Benefits Guide. If you have trouble or
            need additional information, contact us at
            advocacy@autismspeaks.org.
          </p>
          <p>
            Once you have confirmed your plan type, find more information on
            your plan&lsquo;s page in the sidebar on the left.
          </p>

          <p
            className="text-muted-foreground pt-6 text-2xl font-bold"
            data-aos="fade-right"
          >
            Why do I need to know the type of health benefit plan I have?
          </p>
          <p className="font-bold">
            Your type of plan determines which health benefits must be covered.
          </p>
          <ul className="list-inside list-disc" data-aos="fade-left">
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
          </ul>
        </div>
      </AOSWrapper>
    </main>
  );
}
