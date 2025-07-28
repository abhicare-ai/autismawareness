import Budge from "@/components/Budge";

import StickyNavigation from "../what-autism/StickyNavigation";
import { Metadata } from "next";
import AOSWrapper from "@/components/AOSWrapper";
import Heading, { ListTag, Paragraph } from "@/components/Heading";
export const metadata: Metadata = {
  title: "Autism diagnostic criteria: DSM-5",
};
export default function Page() {
  return (
    <main className="space-y-5">
      <AOSWrapper>
        <Budge>Autism diagnostic criteria: DSM-5</Budge>
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col-reverse gap-5 md:flex-row">
            <StickyNavigation className="sticky top-3 h-fit md:basis-1/2" />
            <div className="space-y-3 px-3 md:basis-3/2">
              <Paragraph>
                What are the DSM-5 autism diagnostic criteria?
              </Paragraph>
              <Paragraph>
                The American Psychiatric Association (APA) Diagnostic and
                Statistical Manual of Mental Disorders (DSM) is the handbook
                used by health care professionals in the United States and much
                of the world as the authoritative guide to the diagnosis of
                mental disorders.
              </Paragraph>
              <Paragraph>
                In 2013, the APA released the fifth edition of DSM (DSM-5). It
                stated that an autism diagnosis requires persistent deficits in
                social communication and social interaction across multiple
                contexts, as manifested by the following: deficits in
                social-emotional reciprocity, in nonverbal communicative
                behaviors used for social interaction, and in developing,
                maintaining and understanding relationships. The full text of
                the DSM-5 diagnostic criteria for ASD is provided below with
                permission from the APA.
              </Paragraph>
              <Paragraph>
                In 2022 the APA released the DSM-5-TR, a text revision to the
                DSM-5, which included a clarification to the autism diagnostic
                criteria. Specifically, the phrase “manifested by the following”
                was revised to read “as manifested by all of the following” to
                improve the intent and clarity of the wording.
              </Paragraph>
              <Heading>
                Autism spectrum disorder DSM-5 diagnostic criteria: Full text
              </Heading>
              <p className="font-bold">
                A. Persistent deficits in social communication and social
                interaction across multiple contexts, as manifested by the
                following, currently or by history (examples are illustrative,
                not exhaustive, see text):
              </p>
              <ListTag>
                <li>
                  Deficits in social-emotional reciprocity, ranging, for
                  example, from abnormal social approach and failure of normal
                  back-and-forth conversation; to reduced sharing of interests,
                  emotions, or affect; to failure to initiate or respond to
                  social interactions.
                </li>
                <li>
                  Deficits in nonverbal communicative behaviors used for social
                  interaction, ranging, for example, from poorly integrated
                  verbal and nonverbal communication; to abnormalities in eye
                  contact and body language or deficits in understanding and use
                  of gestures; to a total lack of facial expressions and
                  nonverbal communication.
                </li>
                <li>
                  Deficits in developing, maintaining, and understanding
                  relationships, ranging, for example, from difficulties
                  adjusting behavior to suit various social contexts; to
                  difficulties in sharing imaginative play or in making friends;
                  to absence of interest in peers.
                </li>
                <li>
                  Specify current severity: Severity is based on social
                  communication impairments and restricted repetitive patterns
                  of behavior.
                </li>
              </ListTag>

              <p className="font-bold">
                B. Restricted, repetitive patterns of behavior, interests, or
                activities, as manifested by at least two of the following,
                currently or by history (examples are illustrative, not
                exhaustive; see text):
              </p>
              <p>Common co-occurring conditions include:</p>
              <ListTag>
                <li>
                  Stereotyped or repetitive motor movements, use of objects, or
                  speech (e.g., simple motor stereotypies, lining up toys or
                  flipping objects, echolalia, idiosyncratic phrases).
                </li>
                <li>
                  Insistence on sameness, inflexible adherence to routines, or
                  ritualized patterns or verbal nonverbal behavior (e.g.,
                  extreme distress at small changes, difficulties with
                  transitions, rigid thinking patterns, greeting rituals, need
                  to take same route or eat food every day).
                </li>
                <li>
                  Highly restricted, fixated interests that are abnormal in
                  intensity or focus (e.g, strong attachment to or preoccupation
                  with unusual objects, excessively circumscribed or
                  perseverative interest).
                </li>
                <li>
                  Hyper- or hyporeactivity to sensory input or unusual interests
                  in sensory aspects of the environment (e.g., apparent
                  indifference to pain/temperature, adverse response to specific
                  sounds or textures, excessive smelling or touching of objects,
                  visual fascination with lights or movement).
                </li>
              </ListTag>

              <Paragraph>
                Specify current severity: Severity is based on social
                communication impairments and restricted, repetitive patterns of
                behavior.
              </Paragraph>

              <p className="font-bold">
                C. Symptoms must be present in the early developmental period
                (but may not become fully manifest until social demands exceed
                limited capacities or may be masked by learned strategies in
                later life).
              </p>
              <p className="font-bold">
                D. Symptoms cause clinically significant impairment in social,
                occupational, or other important areas of current functioning.
              </p>
              <p className="font-bold">
                E. These disturbances are not better explained by intellectual
                disability (intellectual developmental disorder) or global
                developmental delay. Intellectual disability and autism spectrum
                disorder frequently co-occur; to make comorbid diagnoses of
                autism spectrum disorder and intellectual disability, social
                communication should be below that expected for general
                developmental level.
              </p>
              <Paragraph>
                <strong>Note:</strong> Individuals with a well-established
                DSM-IV diagnosis of autistic disorder, Asperger’s disorder, or
                pervasive developmental disorder not otherwise specified should
                be given the diagnosis of autism spectrum disorder. Individuals
                who have marked deficits in social communication, but whose
                symptoms do not otherwise meet criteria for autism spectrum
                disorder, should be evaluated for social (pragmatic)
                communication disorder.
              </Paragraph>
            </div>
          </div>
        </div>
      </AOSWrapper>
    </main>
  );
}
