import Budge from "@/components/Budge";
import StickyNavigation from "../what-autism/StickyNavigation";
import AOSWrapper from "@/components/AOSWrapper";
import { Metadata } from "next";
import Heading, { ListTag, Paragraph } from "@/components/Heading";

export const metadata: Metadata = {
  title: "Do vaccines cause autism",
};
export default function Page() {
  return (
    <main className="space-y-5">
      <AOSWrapper>
        <Budge>Do vaccines cause autism?</Budge>
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col-reverse gap-5 md:flex-row">
            <StickyNavigation className="sticky top-3 h-fit md:basis-1/2" />
            <div className="space-y-3 px-3 md:basis-3/2">
              <Paragraph>
                No — vaccines do <strong>not</strong> cause autism. This claim
                originated from a discredited study published in 1998 that
                falsely linked the MMR (measles, mumps, rubella) vaccine to
                autism. That study has since been completely debunked and
                retracted, and its author lost his medical license.
              </Paragraph>

              <Paragraph>
                Since then, <strong>dozens of large-scale studies</strong>{" "}
                across the world — involving hundreds of thousands of children —
                have found <strong>no connection</strong> between any vaccines
                and autism.
              </Paragraph>

              <Heading>What do health experts say?</Heading>
              <Paragraph>
                Leading health organizations around the world, including:
              </Paragraph>
              <ListTag>
                <li>The Centers for Disease Control and Prevention (CDC)</li>
                <li>The World Health Organization (WHO)</li>
                <li>The American Academy of Pediatrics (AAP)</li>
              </ListTag>
              <Paragraph>
                all agree that <strong>vaccines are safe</strong>, effective,
                and <strong>not linked to autism</strong>.
              </Paragraph>

              <Heading>Why does this myth still exist?</Heading>
              <Paragraph>
                The vaccine-autism myth continues to spread due to
                misinformation online and fears about childhood development.
                Unfortunately, this has led some parents to delay or avoid
                vaccines, putting their children and communities at risk of
                preventable diseases.
              </Paragraph>

              <Heading>The bottom line</Heading>
              <Paragraph>
                Vaccines <strong>do not</strong> cause autism. Protecting your
                child with routine immunizations is one of the most important
                steps you can take for their health and safety.
              </Paragraph>

              <Heading>Still have questions?</Heading>
              <Paragraph>
                If you’re unsure or want to learn more, talk to your child’s
                pediatrician or a trusted healthcare provider. It&lsquo;s okay
                to ask questions — and it’s important to get answers from
                credible, science-based sources.
              </Paragraph>
            </div>
          </div>
        </div>
      </AOSWrapper>
    </main>
  );
}
