import Budge from "@/components/Budge";
import React from "react";
import Image from "next/image";
import InformUSA from "@/assets/InformUSA Badge.png";
import logo from "@/assets/web_logo_2.png";
import Link from "next/link";
import { Metadata } from "next";
import Heading, { ListTag, Paragraph } from "@/components/Heading";

export const metadata: Metadata = {
  title: "Autism Response Team (ART)",
};
export default function Page() {
  return (
    <main className="space-y-5">
      <Budge>Autism Response Team (ART)</Budge>
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-3 md:flex-row">
        <div className="2/3 space-y-3">
          <Paragraph>
            The Autism Response Team (ART) is an information and referral
            support for the autism community. Our team members are Certified
            Resource Specialists through Inform USA and are specially trained to
            provide personalized information and resources to autistic
            individuals, families, service providers, and the community.
          </Paragraph>
          <Heading>How to contact ART</Heading>
          <Link href={""} className="text-primary hover:underline">
            Contact us online
          </Link>
          <Paragraph>
            Please use this form and select &ldquo;Resources, information, or
            support for myself or someone I know&ldquo; to send a message
            directly to our team.
          </Paragraph>
          <Paragraph>
            We also have dedicated <strong>English language </strong> support
            that can be accessed by emailing{" "}
            <a
              href="mailto:autismawareness@rajeevclinic.com"
              target="_blank"
              className="text-primary hover:underline"
            >
              autismawareness@rajeevclinic.com
            </a>
          </Paragraph>
          <Heading>Who can contact us?</Heading>
          <Paragraph>
            We are happy to provide support to autistic individuals, parents,
            grandparents, friends, teachers, social workers, and everyone in
            between.
          </Paragraph>
          <Paragraph>
            Even if you have no connection to autism but have a question, please
            feel free to reach out. We assist people of all ages, including
            children, teens, and adults with autism.
          </Paragraph>
          <Heading>What does ART provide?</Heading>
          <Paragraph>
            The Autism Response Team can answer your questions, connect you with
            tools and resources, and help you find autism services and supports
            in your community.
          </Paragraph>
          <Paragraph>
            We are not a direct service provider, so we don&lsquo;t make
            appointments or direct referrals. However, our team will provide you
            with support, encouragement, and assistance with locating autism
            service providers in your community.
          </Paragraph>
          <Heading>
            The Autism Response Team can help you learn more about:
          </Heading>
          <ListTag>
            <li>Where to get a diagnosis</li>
            <li>Schools and special education</li>
            <li>Advocacy and support</li>
            <li>
              Adult services - including post-secondary programs and employment
            </li>
            <li>Inclusion and community activities</li>
          </ListTag>

          <p className="italic">
            Autism Speaks does not provide medical or legal advice or services.
            Rather, Autism Speaks provides general information about autism as a
            service to the community. The information provided in this email is
            not a recommendation, referral or endorsement of any resource,
            therapeutic method, or service provider and does not replace the
            advice of medical, legal or educational professionals. Autism Speaks
            has not validated and is not responsible for any information or
            services provided by third parties. You are urged to use independent
            judgment and request references when considering any resource
            associated with the provision of services related to autism.
          </p>
        </div>
        <div className="basis-1/3 space-y-16">
          <Image src={logo} alt="basis-1/3" />
          <Image src={InformUSA} alt="basis-1/3" />
        </div>
      </div>
    </main>
  );
}
