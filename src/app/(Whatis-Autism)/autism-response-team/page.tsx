import Budge from "@/components/Budge";
import React from "react";
import Image from "next/image";
import InformUSA from "@/assets/InformUSA Badge.png";
import logo from "@/assets/web_logo_2.png";
import Link from "next/link";

export default function Page() {
  return (
    <div className="space-y-5">
      <Budge>Autism Response Team (ART)</Budge>
      <div className="mx-auto flex max-w-7xl gap-5 px-3 md:flex-row flex-col">
        <div className="2/3 space-y-3">
          <p>
            The Autism Response Team (ART) is an information and referral
            support for the autism community. Our team members are Certified
            Resource Specialists through Inform USA and are specially trained to
            provide personalized information and resources to autistic
            individuals, families, service providers, and the community.
          </p>
          <p className="text-muted-foreground text-xl font-bold">
            How to contact ART
          </p>
          <Link href={""} className="text-primary hover:underline">
            Contact us online
          </Link>
          <p>
            Please use this form and select &ldquo;Resources, information, or
            support for myself or someone I know&ldquo; to send a message
            directly to our team.
          </p>
          <p>
            We also have dedicated <strong>English language </strong> support
            that can be accessed by emailing{" "}
            <a
              href="mailto:autismawareness@rajeevclinic.com"
              target="_blank"
              className="text-primary hover:underline"
            >
              autismawareness@rajeevclinic.com
            </a>
          </p>
          <p className="text-muted-foreground text-xl font-bold">
            Who can contact us?
          </p>
          <p>
            We are happy to provide support to autistic individuals, parents,
            grandparents, friends, teachers, social workers, and everyone in
            between.
          </p>
          <p>
            Even if you have no connection to autism but have a question, please
            feel free to reach out. We assist people of all ages, including
            children, teens, and adults with autism.
          </p>
          <p className="text-muted-foreground text-xl font-bold">
            What does ART provide?
          </p>
          <p>
            The Autism Response Team can answer your questions, connect you with
            tools and resources, and help you find autism services and supports
            in your community.
          </p>
          <p>
            We are not a direct service provider, so we don&lsquo;t make
            appointments or direct referrals. However, our team will provide you
            with support, encouragement, and assistance with locating autism
            service providers in your community.
          </p>
          <p className="text-muted-foreground text-xl font-bold">
            The Autism Response Team can help you learn more about:
          </p>
          <ul className="list-inside list-disc">
            <li>Where to get a diagnosis</li>
            <li>Schools and special education</li>
            <li>Advocacy and support</li>
            <li>
              Adult services - including post-secondary programs and employment
            </li>
            <li>Inclusion and community activities</li>
          </ul>

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
    </div>
  );
}
