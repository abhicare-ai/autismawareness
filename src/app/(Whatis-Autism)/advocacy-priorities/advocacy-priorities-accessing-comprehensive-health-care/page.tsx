import Budge from "@/components/Budge";

import { Metadata } from "next";

import Heading, { Paragraph } from "@/components/Heading";
import AOSWrapper from "@/components/AOSWrapper";
import StickyNavigation from "../StickyNavigation";

export const metadata: Metadata = {
  title: "Accessing comprehensive health care",
};

export default function Page() {
  return (
    <main className="space-y-5">
      <AOSWrapper>
        <Budge>Accessing comprehensive health care</Budge>
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col-reverse gap-5 md:flex-row">
            <StickyNavigation className="sticky top-3 h-fit md:basis-1/2" />
            <div className="space-y-3 px-3 md:basis-3/2">
              <Paragraph>
                Health care outcomes are poorer for children and adults with
                autism. Adults with autism face difficulties in accessing the
                health care services they need, and people with autism
                experience premature mortality.
              </Paragraph>
              <Paragraph>
                Children with autism have disproportionately poorer health
                outcomes than their disabled and non-disabled peers.{" "}
                <strong>
                  Children with ASD have nearly four times higher odds of having
                  unmet health care needs compared to children without
                  disabilities
                </strong>
                , whereas children with other disabilities have nearly two times
                higher odds of having unmet health care needs compared to
                children without disabilities.
              </Paragraph>
              <p className="font-bold">
                Access, affordability and quality of health care services are
                crucial factors influencing health outcomes for people with
                autism.
              </p>
              <Paragraph>
                Access to behavioral health care and therapies (e.g., applied
                behavior analysis or ABA), other important habilitative
                therapies (e.g., occupational therapy, physical therapy and
                speech therapy) and other medically necessary care (e.g.,
                psychological and psychiatric services as well as pharmacy care)
                varies widely across payor and age.
              </Paragraph>
              <Paragraph>
                Coverage and provider limitations exist in both public and
                private sectors. As a result, individuals with autism are not
                always able to receive the necessary health care they need to
                address their acute and long-term developmental, social and
                behavioral health care needs across their life span.
              </Paragraph>
              <Heading>
                Autism Speaks believes that a multi-prong approach must be taken
                to address the health care needs of our community, including:
              </Heading>
              <Heading>Protecting and Strengthening Medicaid</Heading>

              <Paragraph>
                Medicaid is the single most important insurer for people with
                autism. It covers autism treatments for nearly half of all
                children with autism and pays for most residential and day
                programs serving adults with developmental disabilities. Autism
                Speaks strongly opposes any changes that would limit federal
                Medicaid payments to states, making it more difficult for
                children and adults with autism to receive needed care and
                supports.
              </Paragraph>

              <Paragraph>
                The Early Periodic Screening, Diagnostic and Treatment benefit
                of Medicaid requires that all enrolled beneficiaries, age 0-21
                years old, receive coverage for all medically necessary services
                to treat a condition.
              </Paragraph>
              <Heading>
                Individuals on the autism spectrum, their families and our
                nation deserve better.
              </Heading>
              <Paragraph>
                Autism coverage has been ensured under Medicaid through
                litigation and administrative action as well as advocacy for the
                appropriation of state funds to cover required benefits. Since
                2014, many states have implemented coverage for behavioral
                interventions (including applied behavior analysis) by amending
                their state Medicaid plan or adopting state regulations.
                However, children enrolled in Medicaid still have difficulty
                accessing the health care they need.
              </Paragraph>

              <Paragraph>
                Adults enrolled in Medicaid face similar difficulties - access
                to acute, psychiatric and intensive health services for adults
                is severely lacking. Access to dental and vision care is also
                difficult for adults enrolled in Medicaid and working adults
                with autism may not have access at all to Medicaid if their
                state has chosen to limit enrollment. These disparities
                contribute to poorer health outcomes for adults and are why we
                strongly believe that Medicaid must be protected, strengthened
                and expanded so that all people with autism enrolled in the
                program can access the medically necessary treatment they need.
              </Paragraph>
              <Heading>Closing Existing Gaps</Heading>
              <Paragraph>
                Gaps in coverage for autism treatment exist across insurance
                markets. Some state laws mandate coverage of autism treatment
                only for young children, while some health plans continue to
                institute dollar caps on coverage. Self-insured plans and
                certain insurance markets are not covered by existing insurance
                mandates. Many adults with autism lose access to health care
                where coverage is limited to people under the age of 26.
              </Paragraph>
              <Paragraph>
                Autism Speaks supports enforcement of existing state and federal
                law (e.g., The Paul Wellstone and Pete Domenici Mental Health
                Parity and Addiction Equity Act of 2008). Similarly, we strongly
                support expanding existing requirements in order to remove any
                caps on coverage - whether they are dollar amount or age caps,
                no one with autism should be denied the medically necessary
                health care they need.
              </Paragraph>
              <Heading>Expanding Benefits</Heading>
              <Paragraph>
                For many people with autism, the types of services they need to
                achieve the best possible outcomes do not exist. Programs like
                24-hour community-based intensive psychiatric care do not exist
                in many communities. Provider shortages in many specialties are
                a reality across the country, causing people with autism to go
                without care. Access to tele-medicine and digital health can
                help improve outcomes, but many people with autism do not have
                access to these benefits. Existing programs must be expanded,
                and new programs must be created to ensure all people with
                autism have access to the types of health care they need
                wherever they live.
              </Paragraph>
              <Paragraph>
                Autism Speaks believes that{" "}
                <strong>
                  {" "}
                  benefits must be expanded to ensure that children and adults
                  with autism are able to access all necessary health care
                  services{" "}
                </strong>{" "}
                whether they be behavioral, medical or other, including new and
                evolving treatments irrespective of whether they receive health
                care from private insurers or public programs (such as Medicaid,
                CHIP and others).
              </Paragraph>
              <Paragraph>
                Autism Speaks is committed to{" "}
                <strong>
                  {" "}
                  ensuring that every individual has early and frequent access
                  to evidence-based treatments for autism
                </strong>
                . Barriers to health care must be removed where they exist, and
                we are opposed to any efforts to weaken existing protections or
                damage existing health care programs relied upon by our
                community.
              </Paragraph>
              <Heading>Training of Health Care Practitioners</Heading>
              <Paragraph>
                Currently most health care practitioners in the U.S. (e.g.,
                physicians, nurses) receive little to no training specific to
                autism while receiving their medical education. In contrast,
                emerging research indicates that the life expectancy for
                individuals diagnosed with autism is far below average. Autism
                awareness supports the development and implementation of
                curriculum in state and federally funded medical education
                programs that provides essential information regarding
                appropriate care of patients who are diagnosed with autism
                across the life span.
              </Paragraph>
            </div>
          </div>
        </div>
      </AOSWrapper>
    </main>
  );
}
