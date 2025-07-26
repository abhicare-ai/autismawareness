import Budge from "@/components/Budge";
import StickyNavigation from "../what-autism/StickyNavigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Autism and mental health",
};

export default function Page() {
  return (
    <main className="space-y-5">
      <Budge>Autism and mental health</Budge>
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col-reverse gap-5 md:flex-row">
          <StickyNavigation className="sticky top-3 h-screen md:basis-1/2" />
          <div className="space-y-3 px-3 md:basis-3/2">
            <h2 className="text-muted-foreground text-3xl font-bold">
              Autism and mental health
            </h2>

            <p>
              Most autistic people experience a co-occurring mental health
              condition. Specifically, the Diagnostic and Statistical Manual of
              Mental Illnesses, or DSM-5 notes: About 70% of individuals with
              autism spectrum disorder (ASD) may have one co-occurring mental
              disorder, and 40% may have two or more. According to a 2020 CDC
              report, 26% of the general population experience a mental health
              condition, and the National Institute of Mental Health (NIMH)
              reports 1 in 5 adults experience mental illness each year.
            </p>

            <p>
              A combination of factors contributes to this. Among them are the
              social, communication and sensory differences that are part of
              autism, alongside some often deal with discrimination, injustice
              and rejection for simply being who they are.
            </p>

            <p>
              Additionally, while autism screening and diagnosis have improved
              and become more accessible, the medical and support systems are
              not designed to address the unique mental and general health needs
              of autistic individuals. This leads to a lack of provider support,
              high rates of misdiagnosis and missed diagnosis, untreated related
              medical conditions and increased barriers to appropriate care.
            </p>

            <p>
              In short, navigating a world which was not designed, welcoming or
              understanding of their needs can put autistic people at risk for
              mental health conditions and exacerbate existing symptoms.
            </p>

            <h2 className="text-muted-foreground text-3xl font-bold">
              Autism Speaks prioritizes supporting the mental health and
              well-being of autistic individuals through the following:
            </h2>

            <h3>
              <strong>Advocacy</strong>
            </h3>
            <p>
              Our Advocacy team works at the state and federal level to ensure
              equitable healthcare treatment for autistic people and
              specifically improve access to mental health care. Among their
              initiatives:
            </p>
            <ul className="list-inside list-disc">
              <li>
                Championing the need for reauthorization of the Autism CARES
                Act, the primary source of federal funding for autism. Included
                is a $100 million Autism Center for Excellence program to
                accelerate the research into supporting the intersection of
                autism and mental health for autistic adults, among other
                related needs.
              </li>
              <li>
                Supporting the Mental Health Parity and Addiction Equity Act
                (MHPAEA) to reduce barriers to mental healthcare service.
              </li>
            </ul>

            <h3>
              <strong>Autism Response Team (ART)</strong>
            </h3>
            <p>
              ART is an information and referral support for the autism
              community. Team members are Certified Resource Specialists through
              Inform USA and are specially trained to provide personalized
              information and resources—including those related to mental
              health—to autistic individuals, families, service providers and
              the community.
            </p>

            <h3>
              <strong>Autism Care Network (ACNet)</strong>
            </h3>
            <p>
              Autism Care Network, a partnership of 21 medical centers across
              the U.S., aims to improve care for individuals with autism and
              their families. The ACNet developed the Clinical Logic Program
              Development and Best Practices for Treating Severe Behaviors in
              Autism to teach licensed professionals best practices in
              developing individual treatment programs to manage children and
              adults with autism at increased risk of engaging in severe and
              dangerous behaviors such as self-injury, aggression and
              destructive behavior.
            </p>

            <h3>
              <strong>Autism Friendly Training</strong>
            </h3>
            <p>
              Autism Friendly Training, for individuals, businesses and
              cities/towns, is for those aligned with Autism Speaks in creating
              a more inclusive and accepting community with autistic people.
              Developed with self-advocates and subject matter experts, the
              training teaches allies how to create autism-friendly spaces, and
              how to build community connections while promoting inclusion.
            </p>

            <h3>
              <strong>Workplace Inclusion Now™ (WIN)</strong>
            </h3>
            <p>
              WIN is a workforce development program designed to promote
              diversity in hiring and workplace cultures that embrace autistic
              workers. One component of WIN is online training courses designed
              to raise awareness around neurodiversity and provide strategies
              among those who hire autistic and related conditions in order to
              reduce bias and increase understanding.
            </p>

            <h2 className="text-muted-foreground text-3xl font-bold">
              Related resources on autism and mental health
            </h2>
            <ul className="list-inside list-disc">
              <li>Mental health resources for people with autism</li>
              <li>Common co-occurring mental health conditions with autism</li>
              <li>How to find a mental health provider</li>
              <li>Tips to improve mental health and wellness</li>
              <li>
                How to support someone with autism and a mental health issue
              </li>
              <li>Mental health in autistic adults</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
