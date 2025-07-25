import BannerCarousol from "./BannerSlider";
import "../styles.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { autisminformations, autisminresources, autisminservice } from "./list";
import annv from "@/assets/empower_walk5k.png.webp";
import hill from "@/assets/Hill Day.png.webp";
import Oct_NDEAM from "@/assets/Oct-NDEAM-570x402.png.webp";
import ReviewsSlider from "./ReviewsSlider";
import { Bookmark, Heart } from "lucide-react";
import AOSWrapper from "@/components/AOSWrapper";

export default function Page() {
  return (
    <main className="space-y-16 overflow-hidden">
      <AOSWrapper>
      <div className="space-y-5">
        <div className="bg-primary w-full space-y-5 pt-10 pb-26">
          <h1 className="text-card px-3 text-center text-4xl font-bold">
            Redefine Possible
          </h1>
          <BannerCarousol />
        </div>

        <div className="bg-sidebar-accent-foreground w-full px-3 py-10">
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
      <div className="mx-auto max-w-7xl space-y-10 px-3"  data-aos="fade-right">
        <p className="text-center text-4xl font-bold text-gray-600">
          Autism information and support
        </p>

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

      <div className="mx-auto max-w-7xl space-y-10 px-3" data-aos="fade-down">
        <p className="text-center text-4xl font-bold text-gray-600">
          Find autism services and events in your community
        </p>

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

      <div className="mx-auto max-w-7xl space-y-10 px-3"  data-aos="fade-left">
        <p className="text-center text-4xl font-bold text-gray-600">
          Find the information right for you
        </p>

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
          <Image src={annv} alt="annv" className="w-full md:w-1/2" />
          <div className="text-card space-y-5 py-8 md:w-1/2">
            <h5 className="text-4xl font-bold">
              Join the Empower Walk & 5K Run
            </h5>
            <p>
              The Empower Walk & 5K Run combines our signature Walk with an
              exciting new 5K Run. While we’ve updated the name and logo, our
              mission remains unchanged: to create a more inclusive world. The
              Empower Walk & 5K Run is for everyone who wants to make a
              difference in the autism community. Whether you choose to walk or
              run, participate as an individual or as part of a team — join us
              today to be a part of something truly impactful!
            </p>
            <Button variant="secondary" className="w-full">
              Register
            </Button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl space-y-10 px-3" data-aos="fade-down-left">
        <p className="text-center text-4xl font-bold text-gray-600">
          Autism news
        </p>

        <div className="grid grid-cols-1 gap-8 px-4 lg:grid-cols-2">
          <div className="space-y-10">
            <div className="flex flex-col gap-5 md:flex-row">
              <Image src={hill} alt="hill" />
              <div>
                <Link
                  href="/"
                  className="text-primary text-lg font-bold hover:underline"
                >
                  Hill Day 2025: Pushing for progress in autism research and
                  care
                </Link>
                <p className="text-sm">
                  Autism Speaks CSO Andy Shih reflects on the Hill Day event and
                  highlights the urgent need to close persistent gaps in
                  care—especially in adult
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5 md:flex-row">
              <Image src={hill} alt="hill" />
              <div>
                <Link
                  href="/"
                  className="text-primary text-lg font-bold hover:underline"
                >
                  Hill Day 2025: Pushing for progress in autism research and
                  care
                </Link>
                <p className="text-sm">
                  Autism Speaks CSO Andy Shih reflects on the Hill Day event and
                  highlights the urgent need to close persistent gaps in
                  care—especially in adult
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5 md:flex-row">
              <Image src={hill} alt="hill" />
              <div>
                <Link
                  href="/"
                  className="text-primary text-lg font-bold hover:underline"
                >
                  Hill Day 2025: Pushing for progress in autism research and
                  care
                </Link>
                <p className="text-sm">
                  Autism Speaks CSO Andy Shih reflects on the Hill Day event and
                  highlights the urgent need to close persistent gaps in
                  care—especially in adult
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5 md:flex-row">
              <Image src={hill} alt="hill" />
              <div>
                <Link
                  href="/"
                  className="text-primary text-lg font-bold hover:underline"
                >
                  Hill Day 2025: Pushing for progress in autism research and
                  care
                </Link>
                <p className="text-sm">
                  Autism Speaks CSO Andy Shih reflects on the Hill Day event and
                  highlights the urgent need to close persistent gaps in
                  care—especially in adult
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-10">
            <div className="flex flex-col gap-5 md:flex-row">
              <Image src={hill} alt="hill" />
              <div>
                <Link
                  href="/"
                  className="text-primary text-lg font-bold hover:underline"
                >
                  Hill Day 2025: Pushing for progress in autism research and
                  care
                </Link>
                <p className="text-sm">
                  Autism Speaks CSO Andy Shih reflects on the Hill Day event and
                  highlights the urgent need to close persistent gaps in
                  care—especially in adult
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5 md:flex-row">
              <Image src={hill} alt="hill" />
              <div>
                <Link
                  href="/"
                  className="text-primary text-lg font-bold hover:underline"
                >
                  Hill Day 2025: Pushing for progress in autism research and
                  care
                </Link>
                <p className="text-sm">
                  Autism Speaks CSO Andy Shih reflects on the Hill Day event and
                  highlights the urgent need to close persistent gaps in
                  care—especially in adult
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5 md:flex-row">
              <Image src={hill} alt="hill" />
              <div>
                <Link
                  href="/"
                  className="text-primary text-lg font-bold hover:underline"
                >
                  Hill Day 2025: Pushing for progress in autism research and
                  care
                </Link>
                <p className="text-sm">
                  Autism Speaks CSO Andy Shih reflects on the Hill Day event and
                  highlights the urgent need to close persistent gaps in
                  care—especially in adult
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5 md:flex-row">
              <Image src={hill} alt="hill" />
              <div>
                <Link
                  href="/"
                  className="text-primary text-lg font-bold hover:underline"
                >
                  Hill Day 2025: Pushing for progress in autism research and
                  care
                </Link>
                <p className="text-sm">
                  Autism Speaks CSO Andy Shih reflects on the Hill Day event and
                  highlights the urgent need to close persistent gaps in
                  care—especially in adult
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary" data-aos="flip-left">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-3 md:flex-row">
          <Image src={Oct_NDEAM} alt="annv" className="w-full md:w-1/2" />
          <div className="text-card space-y-5 py-8 md:w-1/2">
            <h5 className="text-4xl font-bold">
              Do you have a job that&lsquo;s right for someone with autism? If
              you&lsquo;re hiring, the answer is yes!
            </h5>
            <p>Our Workplace Inclusion Now (WIN) program can help!</p>
            <Button variant="secondary" className="w-full">
              Learn more about WIN
            </Button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl space-y-10 px-3" data-aos="flip-right">
        <p className="text-center text-4xl font-bold text-gray-600">
          Reviews on the spectrum
        </p>

        <ReviewsSlider />
      </div>

      <div className={"bg- bg-primary w-full px-3 py-10"}>
        <div className="text-card mx-auto max-w-7xl space-y-9">
          <div className="flex items-center justify-center">
            <Bookmark className="size-8" />
            <Bookmark className="size-8" />
          </div>
          <p className={"text-center text-5xl font-bold"}>
            If you&lsquo;ve met one person with autism, you&lsquo;ve met one
            person with autism.
          </p>
          <p className="text-center">- Dr. Rajeev Kumar</p>
        </div>
      </div>

      <Button className="fixed top-1/2 right-0 z-20 origin-bottom-right rotate-[-90deg] py-7 text-2xl">
        {" "}
        <Heart className="size-8" /> Donate
      </Button>
      </AOSWrapper>
      <div className="h-[400px] w-full"></div>

    </main>
  );
}
