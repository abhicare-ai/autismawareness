import AOSWrapper from "@/components/AOSWrapper";
import Budge from "@/components/Budge";
import { Metadata } from "next";
import React from "react";
import { IndiaMapApp } from "../IndiaMap";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import annv from "@/assets/ABN-Image-1_0.png.webp";
import Heading from "@/components/Heading";

export const metadata: Metadata = {
  title: "Autism services",
};
export default function Page() {
  return (
    <main className="space-y-5 overflow-hidden">
      <AOSWrapper>
        <Budge>Autism Services</Budge>
        <div className="space-y-3">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 px-3 xl:flex-row">
            <IndiaMapApp className="overflow-x-auto xl:w-1/2" />
            <div className="space-y-3 xl:w-1/2">
              <Heading
              >
                Autism services in Indian cities and states
              </Heading>
              <p data-aos="fade-left">
                In Uttar Pradesh, autism awareness programs are growing through
                government schools and private initiatives, especially in cities
                like Lucknow and Noida. Early intervention centers are also
                expanding.
              </p>
              <p data-aos="fade-right">
                Maharashtra offers comprehensive autism support in cities like
                Mumbai and Pune, including therapy centers, special schools, and
                inclusive education programs supported by local NGOs and
                healthcare providers.
              </p>
              <p data-aos="fade-left">
                Bihar has seen increasing demand for autism-related services.
                While rural areas face challenges, Patna is home to several
                emerging therapy clinics and awareness workshops for parents and
                educators.
              </p>
              <p data-aos="fade-right">
                In Tamil Nadu, Chennai leads with well-established autism
                intervention centers and inclusive schooling policies.
                Government schemes and private foundations offer therapy,
                diagnosis, and parent training.
              </p>
              <p data-aos="fade-left">
                West Bengal, especially Kolkata, has a strong network of autism
                support groups. The state supports children with neurodiverse
                needs through special educators and structured learning
                environments.
              </p>
              <p data-aos="fade-right">
                Rajasthan is building up its autism infrastructure, with cities
                like Jaipur and Udaipur introducing early screening programs and
                training for caregivers under state health missions.
              </p>
              <p data-aos="fade-left">
                In Karnataka, Bengaluru stands out as a tech-enabled hub for
                autism care. Parents can access speech therapy, occupational
                therapy, and inclusive education with ease.
              </p>
              <p data-aos="fade-right">
                Odisha is gradually improving autism support, with Bhubaneswar
                hosting a growing number of therapy centers and initiatives
                promoting early detection and inclusive schooling.
              </p>
              <p data-aos="fade-left">
                Delhi has some of the best autism support networks in India,
                including diagnostic centers, therapy clinics, government-run
                special schools, and advocacy programs run by NGOs.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-3">
            <p data-aos="fade-right">
              In Andhra Pradesh, cities like Visakhapatnam and Vijayawada are
              seeing a rise in autism awareness campaigns. Several private
              clinics now offer speech and behavioral therapies, and state
              health departments are beginning to promote early screening
              programs for children.
            </p>
          </div>
        </div>

        <div className="bg-primary" data-aos="fade-down-right">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 px-3 md:flex-row">
            <Image src={annv} alt="annv" className="h-fit w-full md:w-1/2" />
            <div className="text-card space-y-5 py-8 md:w-1/2">
              <h5 className="text-3xl font-bold">Take your services from me</h5>
              <p>
                Autism by the Numbers is an interactive Dashboard informed by
                the needs of autistic individuals, families, advocates and
                policymakers to better understand what autism services look like
                across the country. This tool can help you learn about select
                autism services and policies in your state.
              </p>
              <p>
                Autism by the Numbers is an interactive Dashboard informed by
                the needs of autistic individuals, families, advocates and
                policymakers to better understand what autism services look like
                across the country. This tool can help you learn about select
                autism services and policies in your state.
              </p>

              <Button variant="secondary" className="w-full" asChild>
                <Link href="/contact-us"> Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </AOSWrapper>
    </main>
  );
}
