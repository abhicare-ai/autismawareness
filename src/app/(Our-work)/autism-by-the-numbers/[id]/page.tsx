import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";

import Budge from "@/components/Budge";
import CardItem from "@/components/CardItem";
import AOSWrapper from "@/components/AOSWrapper";
import { autismNumber } from "./lis";
import StickyNavigation from "./StickyNavigation";

// ✅ Cache the data fetcher
const getExploreItem = cache(async (id: number) => {
  const item = autismNumber.find((v) => v.id === id);
  if (!item) notFound();
  return item;
});

// ✅ Metadata generation
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const item = await getExploreItem(Number(id));

  return {
    title: `${item.title}`,
    description: `Learn more about ${item.title}`,
    openGraph: {
      title: item.title,
      images: [item.img],
    },
  };
}

// ✅ Main page component
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = await getExploreItem(Number(id));

  return (
    <main className="space-y-5 ">
      <AOSWrapper>
        <Budge>{item.subtab.heading}</Budge>
        <div className="space-y-16">
          <div className="mx-auto flex max-w-7xl flex-col-reverse gap-5 px-3 md:flex-row">
            <StickyNavigation className="sticky top-3  md:basis-1/2 h-full" />
            <div className="prose max-w-none md:basis-3/2" data-aos="fade-left  overflow-hidden">
              <div
                dangerouslySetInnerHTML={{ __html: item.subtab.paragraph }}
              />
            </div>
          </div>

          <div className="mx-auto max-w-7xl space-y-10 px-3 overflow-hidden">
            {" "}
            <p
              className="text-muted-foreground text-center text-3xl font-bold"
              data-aos="fade-right"
            >
           Autism by the Numbers resources
            </p>
            <div className="grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3">
              {autismNumber
                .filter((v) => v.id !== Number(id))
                .map((v) => (
                  <CardItem cardDeta={v} key={v.id} />
                ))}
            </div>
          </div>
        </div>
      </AOSWrapper>
    </main>
  );
}
