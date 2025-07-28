import AOSWrapper from "@/components/AOSWrapper";
import Budge from "@/components/Budge";
import React from "react";
import Image from "next/image";
import sigimg from "@/assets/Autism-increasing.gif";
import { Metadata } from "next";
import Heading, { ListTag, Paragraph } from "@/components/Heading";
export const metadata: Metadata = {
  title: "Autism statistics and facts",
};
export default function Page() {
  return (
    <main className="space-y-5">
      <AOSWrapper>
        <Budge>Autism statistics and facts</Budge>
        <div className="mx-auto max-w-7xl space-y-6 px-3">
          <div className="flex flex-col gap-5 md:flex-row">
            {/* Left Content */}
            <div className="space-y-3 md:basis-2/3">
              <Heading>Autism prevalence</Heading>

              <ListTag>
                <li>
                  <strong>1 in 31 children in the U.S. has autism</strong>, up
                  from the previous rate of 1 in 36.
                </li>
                <li>1 in 45 adults in the U.S. has autism.</li>
                <li>
                  In the U.S., about 4 in 100 boys and 1 in 100 girls have
                  autism. Boys are nearly 4 times more likely to be diagnosed
                  with autism than girls.
                </li>
                <li>
                  In the U.S., autism prevalence is lower among white children
                  than other racial and ethnic groups:
                  <ul className="ml-5 list-disc">
                    <li>Hispanic – 3.2%</li>
                    <li>Black – 3.1%</li>
                    <li>Asian or Pacific Islander – 3.6%</li>
                    <li>American Indian or Alaska Native – 3.8%</li>
                  </ul>
                </li>
                <li>
                  Around the world, 1 in 100 children are diagnosed with autism.
                </li>
              </ListTag>

              <Paragraph>
                * These changing rates reflect improvement in outreach,
                screening and de-stigmatization of autism diagnosis among
                minority communities.
              </Paragraph>

              {/* Diagnosis & early intervention */}
              <Heading>Diagnosis and early intervention</Heading>
              <ListTag>
                <li>
                  Autism can be reliably diagnosed by a specialist by age 2, but
                  the average age of diagnosis in the U.S. is 5.1 years.
                </li>
                <li>
                  The average age of first intervention in the U.S. is 4.7
                  years.
                </li>
                <li>
                  The average age of diagnosis for children in lower income
                  households is 4.7 years compared to 5.2 years in higher income
                  households.
                </li>
              </ListTag>

              {/* Special Education */}
              <Heading>Special education</Heading>
              <ListTag>
                <li>
                  74% of autistic students in the U.S. graduate with a diploma,
                  versus 86% of all students.
                </li>
                <li>10% of autistic students graduate with a certificate.</li>
                <li>
                  8% of autistic students in the U.S. don’t finish high school,
                  versus 5% of all students.
                </li>
              </ListTag>

              {/* Employment */}
              <Heading>Employment</Heading>
              <ListTag>
                <li>
                  Only 21% of people with disabilities, including autism, are
                  employed.
                </li>
                <li>
                  Nearly 60% of people with autism in the U.S. are unemployed.
                </li>
                <li>
                  Vocational Rehabilitation (VR) programs help autistic people
                  access postsecondary education, learn job skills and secure
                  competitive careers.
                </li>
                <li>
                  70% of eligible autistic students in the U.S. receive VR.
                </li>
              </ListTag>

              {/* Healthcare Costs */}
              <Heading>Healthcare costs</Heading>
              <Paragraph>
                The average costs of common autism services in the U.S. are:
              </Paragraph>
              <ListTag>
                <li>Behavioral services – $1,565.95</li>
                <li>Developmental screening – $165.95</li>
                <li>Psychiatric services – $197.32</li>
                <li>Psychology – $243.34</li>
                <li>Therapies (e.g. speech, occupational) – $174.07</li>
                <li>Transportation-related services – $175.44</li>
              </ListTag>
            </div>

            {/* Right Image */}
            <Image
              src={sigimg}
              alt="Autism statistics infographic"
              className="sticky top-3 h-fit"
              data-aos="fade-up"
            />
          </div>
        </div>
      </AOSWrapper>
    </main>
  );
}
