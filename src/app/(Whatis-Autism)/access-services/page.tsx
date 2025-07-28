import AOSWrapper from "@/components/AOSWrapper";
import Budge from "@/components/Budge";
import Heading, { ListTag, Paragraph } from "@/components/Heading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Access Services",
};

export default function Page() {
  return (
    <main className="space-y-5 overflow-hidden">
      <AOSWrapper>
        <Budge>Access Services</Budge>
        <div className="mx-auto max-w-7xl space-y-3 px-3">
          <Paragraph>
            <em>
              Are you an adult seeking autism services? See our{" "}
              <strong>Guide for Adults</strong>.
            </em>
          </Paragraph>

          <Paragraph>
            <strong>
              If your child’s screening for autism identifies developmental
              delays or learning challenges, he or she is entitled to
              intervention services.
            </strong>
          </Paragraph>

          <Heading>
            You can start these services before your child receives an autism
            diagnosis.
          </Heading>

          <ListTag>
            <li>
              If your child is under the age of 3, you can get services through
              your state’s <strong>Early Intervention</strong> program.
            </li>
            <li>
              For children ages 3 – 21, you can get services through your school
              district’s <strong>Special Education</strong> office.
            </li>
            <li>
              Use our <strong>Directory</strong> to find these services in your
              area.
            </li>
          </ListTag>

          <Paragraph>
            Forty-eight states require health insurers to cover autism services.
          </Paragraph>

          <Paragraph>
            To learn about your state’s autism-related health coverage, visit
            our <strong>Health Insurance</strong> page.
          </Paragraph>

          <Heading>For more guidance, see the tool kits below:</Heading>

          <ListTag>
            <li>
              <strong>
                100 Day Kit for Newly Diagnosed Families of Young Children
              </strong>
            </li>
            <li>
              <strong>
                100 Day Kit for Newly Diagnosed Families of School Age Children
              </strong>
            </li>
            <li>
              <strong>
                Individualized Education Program (IEP): Summary, Process and
                Practical Tips
              </strong>
            </li>
          </ListTag>
        </div>
      </AOSWrapper>
    </main>
  );
}
