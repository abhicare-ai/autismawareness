import Budge from "@/components/Budge";
import StickyNavigation from "../what-autism/StickyNavigation";
import influence from "@/assets/Factors-that-influence-autism.png"
import Image from "next/image";
export default function Page() {
  return (
    <div className="space-y-5">
      <Budge>What causes autism?</Budge>
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col-reverse gap-5 md:flex-row">
          <StickyNavigation className="sticky top-3 h-screen md:basis-1/2" />
          <div className="space-y-4 px-3 md:basis-3/2">
            <p>
              Autism is a complex neurodevelopmental condition, and there isn&lsquo;t a single known cause.
              Current research suggests that autism may result from a combination of multiple factors,
              including genetics, brain development, and certain environmental influences.
            </p>

            <ul className="list-disc pl-5">
              <li>Genetic factors and inherited traits</li>
              <li>Environmental influences before, during, or shortly after birth</li>
              <li>Differences in early brain development</li>
            </ul>

            <p className="text-muted-foreground text-2xl font-bold">Understanding Autism Risk Factors</p>
            <p>
              Scientists have identified a range of risk factors that can contribute to the likelihood
              of a child being diagnosed with autism. These include both biological and environmental
              components. Not every child exposed to these factors develops autism, but they can play a
              role in influencing development.
            </p>
            <Image src={influence} alt="influence"/>

            <h3 className="font-semibold text-lg">How do genetics and environment play a role?</h3>
            <p>
              Genes are known to play a key role in brain development. Children with autism often
              carry certain genetic variations or mutations that may affect how their brain processes
              information or develops over time. Environmental exposures may also interact with genetic
              traits during critical stages of development, influencing outcomes.
            </p>

            <h3 className="font-semibold text-lg">Do vaccines cause autism?</h3>
            <p>
              No — vaccines do not cause autism. Extensive scientific research has confirmed that
              routine childhood vaccinations are safe and not linked to autism spectrum disorder.
              Misinformation from past studies has been widely discredited by the medical community.
            </p>

            <h3 className="font-semibold text-lg">Is autism hereditary?</h3>
            <p>
              Yes, research shows that autism can run in families. If one child is diagnosed with autism,
              there’s an increased chance that a sibling might also be affected. However, the way autism
              is inherited is complex and involves the interaction of many genes, not just a single one.
            </p>

            <h3 className="font-semibold text-lg">Are there other environmental factors?</h3>
            <p>
              Researchers have explored several environmental factors that may increase the risk of
              autism, especially during pregnancy or early infancy. These include:
            </p>

            <ul className="list-disc pl-5">
              <li>Advanced parental age at the time of conception</li>
              <li>Exposure to air pollution or certain chemicals</li>
              <li>Complications during birth</li>
              <li>Low birth weight or being born prematurely</li>
            </ul>

            <h3 className="font-semibold text-lg">Why is autism more common today?</h3>
            <p>
              More children are being diagnosed with autism today, partly because of better awareness,
              improved screening tools, and broader diagnostic criteria. This doesn’t necessarily mean
              autism is increasing — but rather that we are better at recognizing it across the full
              spectrum.
            </p>

            <p className="text-muted-foreground text-xl font-semibold">
              Need more information?
            </p>
            <p>
              Our Autism Response Team is here to support families with information, services, and
              local provider guidance. If you have questions about causes or diagnosis, we recommend
              speaking with a qualified health professional.
            </p>

           
          </div>
        </div>
      </div>
    </div>
  );
}
