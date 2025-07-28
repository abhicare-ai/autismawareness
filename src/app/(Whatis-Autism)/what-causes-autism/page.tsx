import Budge from "@/components/Budge";
import StickyNavigation from "../what-autism/StickyNavigation";
import influence from "@/assets/Factors-that-influence-autism.png";
import Image from "next/image";
import AOSWrapper from "@/components/AOSWrapper";
import { Metadata } from "next";
import Heading, { ListTag, Paragraph } from "@/components/Heading";

export const metadata: Metadata = {
  title: "What causes autism?",
};
export default function Page() {
  return (
    <main className="space-y-5">
      <AOSWrapper>
        <Budge>What causes autism?</Budge>
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col-reverse gap-5 md:flex-row">
            <StickyNavigation className="sticky top-3 h-fit md:basis-1/2" />
            <div className="space-y-3 px-3 md:basis-3/2">
              <Paragraph>
                Autism is a complex neurodevelopmental condition, and there
                isn&lsquo;t a single known cause. Current research suggests that
                autism may result from a combination of multiple factors,
                including genetics, brain development, and certain environmental
                influences.
              </Paragraph>

              <ListTag>
                <li>Genetic factors and inherited traits</li>
                <li>
                  Environmental influences before, during, or shortly after
                  birth
                </li>
                <li>Differences in early brain development</li>
              </ListTag>

              <Heading>Understanding Autism Risk Factors</Heading>
              <Paragraph>
                Scientists have identified a range of risk factors that can
                contribute to the likelihood of a child being diagnosed with
                autism. These include both biological and environmental
                components. Not every child exposed to these factors develops
                autism, but they can play a role in influencing development.
              </Paragraph>
              <Image src={influence} alt="influence" />

              <Heading>How do genetics and environment play a role?</Heading>
              <Paragraph>
                Genes are known to play a key role in brain development.
                Children with autism often carry certain genetic variations or
                mutations that may affect how their brain processes information
                or develops over time. Environmental exposures may also interact
                with genetic traits during critical stages of development,
                influencing outcomes.
              </Paragraph>

              <Heading>Do vaccines cause autism?</Heading>
              <Paragraph>
                No — vaccines do not cause autism. Extensive scientific research
                has confirmed that routine childhood vaccinations are safe and
                not linked to autism spectrum disorder. Misinformation from past
                studies has been widely discredited by the medical community.
              </Paragraph>

              <Heading>Is autism hereditary?</Heading>
              <Paragraph>
                Yes, research shows that autism can run in families. If one
                child is diagnosed with autism, there’s an increased chance that
                a sibling might also be affected. However, the way autism is
                inherited is complex and involves the interaction of many genes,
                not just a single one.
              </Paragraph>

              <Heading>Are there other environmental factors?</Heading>
              <Paragraph>
                Researchers have explored several environmental factors that may
                increase the risk of autism, especially during pregnancy or
                early infancy. These include:
              </Paragraph>

              <ListTag>
                <li>Advanced parental age at the time of conception</li>
                <li>Exposure to air pollution or certain chemicals</li>
                <li>Complications during birth</li>
                <li>Low birth weight or being born prematurely</li>
              </ListTag>

              <Heading>Why is autism more common today?</Heading>
              <Paragraph>
                More children are being diagnosed with autism today, partly
                because of better awareness, improved screening tools, and
                broader diagnostic criteria. This doesn’t necessarily mean
                autism is increasing — but rather that we are better at
                recognizing it across the full spectrum.
              </Paragraph>

              <Heading>Need more information?</Heading>
              <Paragraph>
                Our Autism Response Team is here to support families with
                information, services, and local provider guidance. If you have
                questions about causes or diagnosis, we recommend speaking with
                a qualified health professional.
              </Paragraph>
            </div>
          </div>
        </div>
      </AOSWrapper>
    </main>
  );
}
