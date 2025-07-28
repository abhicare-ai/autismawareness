import AOSWrapper from "@/components/AOSWrapper";
import Budge from "@/components/Budge";
import Heading, { Paragraph } from "@/components/Heading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "First concern",
};
export default function Page() {
  return (
    <main className="space-y-5 overflow-hidden">
      <AOSWrapper>
        <Budge>First concern</Budge>
        <div className="mx-auto max-w-7xl space-y-3 px-3">
          {/* How do I get my child screened for autism? */}
          <Heading>How do I get my child screened for autism?</Heading>
          <Paragraph>
            Does your child show signs of autism? Do you wonder about his or her
            development?
          </Paragraph>

          <Paragraph>
            You can request an <strong>autism screening</strong> anytime from
            your doctor or{" "}
            <strong>your state’s Early Intervention program</strong>.
          </Paragraph>
          <Paragraph>
            The American Academy of Pediatrics recommends that all children get
            screened for autism at their 18- and 24-month exams – and whenever a
            parent or doctor has concerns.
          </Paragraph>
          <Paragraph>
            Meanwhile, you can complete the{" "}
            <strong>
              Modified Checklist for Autism in Toddlers-Revised (M-CHAT-R™)
            </strong>
            . It takes just a few minutes to assess the likelihood of autism.
            And you can take the results to your doctor.
          </Paragraph>
          <p className="font-semibold" data-aos="fade-left">
            Talk with your healthcare provider. Screening doesn’t diagnose
            autism.
          </p>
          <Paragraph>
            It flags behaviors often associated with the condition. After
            screening, your doctor can refer you to a specialist for a
            diagnostic evaluation.
          </Paragraph>
          <p className="font-semibold italic" data-aos="fade-left">
            Importantly, you{" "}
            <strong className="font-bold">don’t need to wait</strong> for a
            diagnosis for your child to receive services.
          </p>
          <Paragraph>
            Federal law requires states to provide therapy whenever screening
            identifies developmental delays or learning challenges.
          </Paragraph>

          {/* How do I get autism services? */}
          <Heading>How do I get autism services?</Heading>
          <Paragraph>
            If your child’s screening for autism identifies developmental delays
            or learning challenges, he or she is entitled to intervention
            services. You can start these services before your child receives an
            autism diagnosis.
          </Paragraph>
          <Paragraph>
            If your child is under the age of 3, you can get services through
            your state’s Early Intervention program.
          </Paragraph>
          <Paragraph>
            For children ages 3 to 21, you can get services through your school
            district’s Special Education office.
          </Paragraph>
        </div>
      </AOSWrapper>
    </main>
  );
}
