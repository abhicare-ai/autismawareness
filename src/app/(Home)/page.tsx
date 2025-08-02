import BannerCarousol from "./BannerSlider";
import "../styles.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  autisminformations,
  autisminresources,
  autisminservice,
  autisminserviceVidio,
} from "./list";
import annv from "@/assets/customer-service-handsome-man-grey-suit-with-computer-headset-taking-down-notes.jpg";
import BookAppointment from "@/components/BookAppointment";

import Oct_NDEAM from "@/assets/fl_img_20_11_2019_23_43_53 (2).jpg";
import ReviewsSlider from "./ReviewsSlider";
import { Bookmark } from "lucide-react";
import AOSWrapper from "@/components/AOSWrapper";
import Heading, { Paragraph } from "@/components/Heading";
import jh from "@/assets/IMG-20250727-WA0001.jpg";
import jh2 from "@/assets//IMG-20250727-WA0002.jpg";
import jh3 from "@/assets/IMG-20250727-WA0003.jpg";
import bi1 from "@/assets/IMG-20250727-WA0006.jpg";
import bi2 from "@/assets/IMG-20250727-WA0007.jpg";
import delhi1 from "@/assets/IMG-20250727-WA0011.jpg";
import helhi2 from "@/assets/IMG-20250727-WA0012.jpg";
import west1 from "@/assets/IMG-20250727-WA0016.jpg";

export default function Page() {
  return (
    <main className="space-y-16 overflow-hidden">
      <AOSWrapper>
        <div className="space-y-5">
          <div className="bg-primary w-full pt-10 pb-10 md:pb-26">
            <BannerCarousol />
          </div>

          <div
            className="bg-sidebar-accent-foreground w-full px-3 py-10"
            data-aos="fade-up"
          >
            <div className="text-card mx-auto max-w-7xl space-y-5">
              <p className="text-2xl font-bold">Advocacy priorities</p>
              <p className="text-card">
                Autism Speaks influences policy at the state and federal
                government levels. To do this, we work with Congress, the White
                House, state legislators, agencies, and regulators.
              </p>
              <Button variant="default" asChild>
                <Link href="/advocacy-priorities">
                  See our advocacy priorities
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl space-y-10 px-3" data-aos="fade-up">
          <Heading>Success stories</Heading>

          <div className="grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3">
            {autisminserviceVidio.map((v) => (
              <div
                key={v.id}
                className="overflow-hidden rounded border bg-white shadow-md transition hover:shadow-lg"
              >
                <Link href={v.ifram}>
                  {/* <Image
                    src={v.image}
                    alt={v.title}
                    width={400}
                    height={300}
                    className="h-[250px] w-full object-cover duration-300 hover:scale-105"
                  /> */}
                  <iframe
                    className="w-full"
                    height="315"
                    src={v.ifram}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </Link>
                <div className="space-y-3 p-5 text-center">
                  <Link
                    href={v.ifram}
                    className="text-xl font-semibold text-blue-600 hover:underline"
                  >
                    {v.title}
                  </Link>
                  <div className="flex justify-center">
                    <span className="h-1 w-10 rounded bg-gray-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
       
      

        <div className="mx-auto max-w-7xl space-y-10 px-3" data-aos="fade-up">
          <Heading>Autism information and support</Heading>

          <div className="grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3">
            {autisminformations.map((v) => (
              <div
                key={v.id}
                className="overflow-hidden rounded border bg-white shadow-md transition hover:shadow-lg"
              >
                <Link href={v.link}>
                  <Image
                    src={v.image}
                    alt={v.title}
                    width={400}
                    height={300}
                    className="h-[250px] w-full object-cover duration-300 hover:scale-105"
                  />
                </Link>
                <div className="space-y-3 p-5 text-center">
                  <Link
                    href={v.link}
                    className="text-xl font-semibold text-blue-600 hover:underline"
                  >
                    {v.title}
                  </Link>
                  <div className="flex justify-center">
                    <span className="h-1 w-10 rounded bg-gray-300" />
                  </div>
                  <p className="text-sm text-gray-700">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-7xl space-y-10 px-3" data-aos="fade-up">
          <Heading>Find Autism services from our clinic</Heading>

          <div className="grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3">
            {autisminservice.map((v) => (
              <div
                key={v.id}
                className="overflow-hidden rounded border bg-white shadow-md transition hover:shadow-lg"
              >
                <Link href={v.link}>
                  <Image
                    src={v.image}
                    alt={v.title}
                    width={400}
                    height={300}
                    className="h-[250px] w-full object-cover duration-300 hover:scale-105"
                  />
                </Link>
                <div className="space-y-3 p-5 text-center">
                  <Link
                    href={v.link}
                    className="text-xl font-semibold text-blue-600 hover:underline"
                  >
                    {v.title}
                  </Link>
                  <div className="flex justify-center">
                    <span className="h-1 w-10 rounded bg-gray-300" />
                  </div>
                  <p className="text-sm text-gray-700">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-7xl space-y-10 px-3" data-aos="fade-left">
          <Heading>Find the information right for you</Heading>

          <div className="grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3">
            {autisminresources.map((v) => (
              <div
                key={v.id}
                className="overflow-hidden rounded border bg-white shadow-md transition hover:shadow-lg"
              >
                <Link href={v.link}>
                  <Image
                    src={v.image}
                    alt={v.title}
                    width={400}
                    height={300}
                    className="h-[250px] w-full object-cover duration-300 hover:scale-105"
                  />
                </Link>
                <div className="space-y-3 p-5 text-center">
                  <Link
                    href={v.link}
                    className="text-xl font-semibold text-blue-600 hover:underline"
                  >
                    {v.title}
                  </Link>
                  <div className="flex justify-center">
                    <span className="h-1 w-10 rounded bg-gray-300" />
                  </div>
                  <p className="text-sm text-gray-700">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary" data-aos="fade-down-right">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 px-3 md:flex-row">
            <Image src={annv} alt="annv" className="h-fit w-full md:w-1/2" />
            <div className="text-card space-y-5 py-8 md:w-1/2">
              <h5 className="text-3xl font-bold">
                Book an appointment with our team
              </h5>
              <Paragraph>
                We offer personalized therapy and support sessions for children
                with autism, tailored to meet their unique needs. Book an
                appointment with our experienced specialists to begin a journey
                of care, understanding, and development. Our team is dedicated
                to providing compassionate guidance to both the child and the
                family.
              </Paragraph>
              <Paragraph>
                Autism se affected bachchon ke liye hum special therapy aur
                support sessions provide karte hain. Ab aap asaani se hamare
                experienced specialists ke saath appointment book kar sakte
                hain. Hamara goal hai har bachche ke unique needs ko samajhna
                aur uske development mein madad karna.
              </Paragraph>

              <BookAppointment />
            </div>
          </div>
        </div>

        <div
          className="mx-auto max-w-7xl space-y-10 px-3"
          data-aos="fade-down-left"
        >
          <Heading>News</Heading>

          <div className="grid grid-cols-1 gap-8 px-4 lg:grid-cols-2">
            <div className="space-y-10">
              <div className="flex flex-col gap-5 md:flex-row">
                <Image
                  src={jh}
                  alt="hill"
                  className="h-[120px] w-[170px] object-cover"
                />
                <div>
                  <Link
                    href="/news/1"
                    className="text-primary text-lg font-bold hover:underline"
                  >
                    Jharkhand
                  </Link>
                  <p className="text-sm">
                    A heartfelt look into the lives of special children in
                    Jharkhand and the support they receive.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-5 md:flex-row">
                <Image
                  src={jh2}
                  alt="hill"
                  className="h-[120px] w-[170px] object-cover"
                />
                <div>
                  <Link
                    href="/news/3"
                    className="text-primary text-lg font-bold hover:underline"
                  >
                    Jharkhand
                  </Link>
                  <p className="text-sm">
                    A devoted mother in rural India advocates for her
                    son&lsquo;s right to learn and grow.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-5 md:flex-row">
                <Image
                  src={jh3}
                  alt="hill"
                  className="h-[120px] w-[170px] object-cover"
                />
                <div>
                  <Link
                    href="/news/5"
                    className="text-primary text-lg font-bold hover:underline"
                  >
                    Jharkhand
                  </Link>
                  <p className="text-sm">
                    A group photo showing unity, diversity, and happiness in a
                    remote village.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-5 md:flex-row">
                <Image
                  src={bi1}
                  alt="hill"
                  className="h-[120px] w-[170px] object-cover"
                />
                <div>
                  <Link
                    href="/news/11"
                    className="text-primary text-lg font-bold hover:underline"
                  >
                    Bihar
                  </Link>
                  <p className="text-sm">
                    A caring father brings his son to a local homeopathy center
                    for regular checkups.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-10">
              <div className="flex flex-col gap-5 md:flex-row">
                <Image
                  src={bi2}
                  alt="hill"
                  className="h-[120px] w-[170px] object-cover"
                />
                <div>
                  <Link
                    href="/news/12"
                    className="text-primary text-lg font-bold hover:underline"
                  >
                    Bihar
                  </Link>
                  <p className="text-sm">
                    A young girl overcomes severe allergies with dedicated
                    homeopathy care in Bihar.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-5 md:flex-row">
                <Image
                  src={delhi1}
                  alt="hill"
                  className="h-[120px] w-[170px] object-cover"
                />
                <div>
                  <Link
                    href="/news/21"
                    className="text-primary text-lg font-bold hover:underline"
                  >
                    Delhi
                  </Link>
                  <p className="text-sm">
                    In the heart of Delhi, a girl finds hope and healing through
                    holistic homeopathy care.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-5 md:flex-row">
                <Image
                  src={helhi2}
                  alt="hill"
                  className="h-[120px] w-[170px] object-cover"
                />
                <div>
                  <Link
                    href="/news/23"
                    className="text-primary text-lg font-bold hover:underline"
                  >
                    Delhi
                  </Link>
                  <p className="text-sm">
                    A father-daughter duo embraces healing at a community
                    wellness center in Delhi.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-5 md:flex-row">
                <Image
                  src={west1}
                  alt="hill"
                  className="h-[120px] w-[170px] object-cover"
                />
                <div>
                  <Link
                    href="/news/31"
                    className="text-primary text-lg font-bold hover:underline"
                  >
                    West Bengal
                  </Link>
                  <p className="text-sm">
                    A dedicated mother brings her child to a Kolkata center for
                    regular developmental therapy.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Button asChild>
              <Link href="/news"> Know all news </Link>
            </Button>
          </div>
        </div>

        <div className="bg-primary" data-aos="fade-down-right">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 px-3 md:flex-row">
            <Image
              src={Oct_NDEAM}
              alt="annv"
              className="h-fit w-full md:w-1/2"
            />
            <div className="text-card space-y-5 py-8 md:w-1/2">
              <h5 className="text-3xl font-bold">
                Find services in your state
              </h5>
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
                <Link href="/autism-by-the-numbers/autism-services">
                  {" "}
                  View The Dashboard
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div
          className="mx-auto max-w-7xl space-y-10 px-3 md:mb-[100px]"
          data-aos="fade-down-left"
        >
          <Heading>Reviews on the spectrum</Heading>

          <ReviewsSlider />
        </div>

        <div className={"bg- bg-primary w-full px-3 py-10"}>
          <div className="text-card mx-auto max-w-7xl space-y-9">
            <div className="flex items-center justify-center">
              <Bookmark className="size-8" />
              <Bookmark className="size-8" />
            </div>
            <p className={"text-center text-5xl font-bold"}>
             Every child with autism speaks a different language of love — our job is to listen with patience, and heal with understanding.
            </p>
            <p className="text-center">- Dr. Rajeev Kumar</p>
          </div>
        </div>
      </AOSWrapper>
    </main>
  );
}
