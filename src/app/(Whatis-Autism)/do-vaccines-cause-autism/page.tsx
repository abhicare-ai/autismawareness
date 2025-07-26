import Budge from "@/components/Budge";
import StickyNavigation from "../what-autism/StickyNavigation";

export default function Page() {
  return (
    <div className="space-y-5">
      <Budge>Do vaccines cause autism?</Budge>
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col-reverse gap-5 md:flex-row">
          <StickyNavigation className="sticky top-3 h-screen md:basis-1/2" />
          <div className="space-y-4 px-3 md:basis-3/2">
            <p>
              No — vaccines do <strong>not</strong> cause autism. This claim
              originated from a discredited study published in 1998 that falsely
              linked the MMR (measles, mumps, rubella) vaccine to autism. That
              study has since been completely debunked and retracted, and its
              author lost his medical license.
            </p>

            <p>
              Since then, <strong>dozens of large-scale studies</strong> across
              the world — involving hundreds of thousands of children — have
              found <strong>no connection</strong> between any vaccines and
              autism.
            </p>

            <h2 className="text-xl font-bold">What do health experts say?</h2>
            <p>Leading health organizations around the world, including:</p>
            <ul className="list-disc pl-6">
              <li>The Centers for Disease Control and Prevention (CDC)</li>
              <li>The World Health Organization (WHO)</li>
              <li>The American Academy of Pediatrics (AAP)</li>
            </ul>
            <p>
              all agree that <strong>vaccines are safe</strong>, effective, and{" "}
              <strong>not linked to autism</strong>.
            </p>

            <h2 className="text-xl font-bold">
              Why does this myth still exist?
            </h2>
            <p>
              The vaccine-autism myth continues to spread due to misinformation
              online and fears about childhood development. Unfortunately, this
              has led some parents to delay or avoid vaccines, putting their
              children and communities at risk of preventable diseases.
            </p>

            <h2 className="text-xl font-bold">The bottom line</h2>
            <p>
              Vaccines <strong>do not</strong> cause autism. Protecting your
              child with routine immunizations is one of the most important
              steps you can take for their health and safety.
            </p>

            <p className="text-muted-foreground text-xl font-semibold">
              Still have questions?
            </p>
            <p>
              If you’re unsure or want to learn more, talk to your child’s
              pediatrician or a trusted healthcare provider. It&lsquo;s okay to
              ask questions — and it’s important to get answers from credible,
              science-based sources.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
