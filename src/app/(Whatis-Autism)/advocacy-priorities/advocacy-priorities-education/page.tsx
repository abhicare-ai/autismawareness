import Budge from "@/components/Budge";

import { Metadata } from "next";

import Heading, { ListTag, Paragraph } from "@/components/Heading";
import AOSWrapper from "@/components/AOSWrapper";
import StickyNavigation from "../StickyNavigation";

export const metadata: Metadata = {
  title: "Education",
};

export default function Page() {
  return (
    <main className="space-y-5">
      <AOSWrapper>
        <Budge>Education</Budge>
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col-reverse gap-5 md:flex-row">
            <StickyNavigation className="sticky top-3 h-fit md:basis-1/2" />
            <div className="space-y-3 px-3 md:basis-3/2">
              <Paragraph>
                We support core principles of access, quality and enforcement of
                legal safeguards. In support of these principles, we work to
                <strong>
                  {" "}
                  increase the investment in educational research and encourage
                  states and school districts to begin official transition
                  planning by age 14
                </strong>{" "}
                .
              </Paragraph>
              <Paragraph>
                We work to ensure meaningful access to quality education
                services for all students with autism. We advocate on
                initiatives based not only in the classroom or school building,
                but also in local communities, and at all ages. These
                initiatives range from Early and Periodic Screening, Diagnostic
                and Treatment benefits to PreK-12 special education,
                postsecondary transition, career and technical education and
                higher education.
              </Paragraph>
              <p className="font-bold">
                Access, affordability and quality of health care services are
                crucial factors influencing health outcomes for people with
                autism.
              </p>
              <Paragraph>
                We believe all{" "}
                <strong>
                  {" "}
                  students with autism must be safe, supported and ready to
                  learn{" "}
                </strong>{" "}
                - no matter the specifics of their race, gender, socioeconomic
                status or disability. All students with autism are unique
                individuals and deserve individualized supports.
              </Paragraph>

              <Heading>
                Our advocacy on education is undergirded by 3 core principles:
              </Heading>

              <ListTag>
                <li>
                  Increasing access to educational services is a critical piece
                  of our advocacy work. We strive to make sure that all students
                  with autism can avail themselves of a spectrum of supports and
                  receive the guidance to choose the most suitable services for
                  them.
                </li>
              </ListTag>
              <Heading>Quality</Heading>
              <ListTag>
                <li>
                  Increasing the number of students who access services does not
                  truly help anyone if those services are not appropriate for
                  the specific individual in the specific situation, or if those
                  services are not of high quality. We work to promote quality
                  in education in several ways:
                </li>
                <li>
                  <strong> Improve the professional educator pipeline </strong>{" "}
                  so that the next generation of educators is well-versed in
                  ways to support students with autism;
                </li>
                <li>
                  <strong>
                    {" "}
                    Ensure that services are consistently individualized{" "}
                  </strong>{" "}
                  to the student, accounting for their wishes, strengths and
                  needs. While the process to ensure delivery of services can
                  and should be standardized, the services themselves must never
                  be born from a cookie-cutter process;
                </li>
                <li>
                  <strong>
                    {" "}
                    Increase the continuity of educational services over time
                  </strong>
                  . Over the course of a student’s life, they will encounter
                  many different school personnel and systems, especially during
                  times of transition. We work to improve continuity of services
                  from the student’s and family’s perspective.
                </li>
              </ListTag>
              <Heading>Enforcement</Heading>
              <ListTag>
                <li>
                  The legal rights of all students are laid out in a large
                  number of federal laws, their respective regulations and their
                  analogues at the state level. Students with disabilities share
                  in these rights and protections but also benefit from a
                  separate body of law designed to ensure they do not face
                  discrimination based on disability and that their special
                  education rights are protected. We work to ensure that
                  students with autism can learn, supported by the full panoply
                  of legal safeguards available to them, and to improve those
                  legal safeguards.
                </li>
                <li>
                  <strong>
                    {" "}
                    Part of this work is ensuring that students with autism are
                    safe in schools
                  </strong>{" "}
                  . Issues of school safety can take many forms, such as
                  questions related to inclusive emergency preparedness,
                  wandering prevention and response, seclusion and restraint,
                  bullying, response to challenging behaviors and
                  disproportionality. We strive to share evidence-based,
                  practical responses to critical safety issues.
                </li>
              </ListTag>
              <Heading>
                Consistent with these principles, we focus on increasing the
                investment in educational research
              </Heading>
              <Paragraph>
                The India Department of Education (ED) supports autism-related
                services, supports and research through programs administered
                primarily by the Institute of Education Sciences and the Office
                of Special Education and Rehabilitative Services. Growth in
                educational research supported by ED will redound to the benefit
                of the autism community.
              </Paragraph>

              <Paragraph>
                <strong>
                  {" "}
                  We also focus on encouraging states and school districts to
                  begin official transition planning through the creation of an
                  individualized transition plan by age 14
                </strong>
                , as allowed but not required by federal law, which sets 16 as
                the age by which such services must begin. For many young people
                on the spectrum, the transition to adult life is complex and
                challenging, filled with potential but fraught with
                uncertainties. Early transition planning better enables students
                to access the services and supports needed for adult life.
              </Paragraph>
            </div>
          </div>
        </div>
      </AOSWrapper>
    </main>
  );
}
