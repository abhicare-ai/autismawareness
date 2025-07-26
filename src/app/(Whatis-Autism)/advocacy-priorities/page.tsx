import Budge from "@/components/Budge";
import StickyNavigation from "./StickyNavigation";

export default function Page() {
  return (
    <div className="space-y-5">
      <Budge>Advocacy priorities</Budge>
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col-reverse gap-5 md:flex-row">
          <StickyNavigation className="sticky top-3 h-screen md:basis-1/2" />
          <div className="space-y-3 px-3 md:basis-3/2">
            <p className="text-muted-foreground text-xl font-bold">
              Our advocacy team works nationwide to achieve our mission by
              pursuing the following priorities:
            </p>
            <p className="text-muted-foreground text-xl font-bold">
              Increase global understanding and acceptance of people with autism
            </p>
            <p>
              Educate legislators and regulators on autism spectrum disorder to
              ensure policymaking benefits individuals across the spectrum.
            </p>
            <p className="text-muted-foreground text-xl font-bold">
              Be a catalyst for life enhancing research breakthroughs
            </p>
            <p>
              Increase funding for autism research at federal agencies,
              including the National Institutes of Health, Centers for Disease
              Control and Prevention, and the U.S. Department of Education.
            </p>
            <p className="text-muted-foreground text-xl font-bold">
              Increase early childhood screening and timely intervention
            </p>
            <p>
              Ensure that individuals with autism have access to the healthcare
              they need, irrespective of payer (Medicaid, private insurance,
              etc.).
            </p>

            <p className="text-muted-foreground text-xl font-bold">
              Improve outcomes for transition to adulthood across the spectrum
            </p>
            <p>
              Improve the quality and accessibility of employment-focused
              training systems for individuals with autism and advocate for
              increased employment opportunities.
            </p>
            <p>
              Increase equitable access to high-quality postsecondary education
              opportunities for students with autism.
            </p>
            <p className="text-muted-foreground text-xl font-bold">
              Ensure access to reliable information and services throughout the
              lifespan
            </p>
            <p>
              Increase access to home and community-based services (HCBS) for
              individuals and increase HCBS capacity to provide meaningful
              services for people with autism and their families.
            </p>
            <p>
              Make ABLE accounts widely available. (Tax-advantaged savings
              accounts for individuals with disabilities created by the Stephen
              Beck, Jr. Achieving a Better Life Experience Act of 2014.)
            </p>
            <p>
              Ensure staff across settings have appropriate training,
              particularly related to challenging behaviors, safety, sensory
              needs, and augmentative and alternative communication.
            </p>
            <p>
              Expand support for resources and practices that keep our community
              safe, including Kevin and Avonte’s Law.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
