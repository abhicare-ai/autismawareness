import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";

import Budge from "@/components/Budge";
import CardItem from "@/components/CardItem";
import AOSWrapper from "@/components/AOSWrapper";

import { newsData } from "../list";

import ParagraphRenderer from "./ParagraphRenderer";

// ✅ Cache the data fetcher
const getExploreItem = cache(async (id: number) => {
  const item = newsData.find((v) => v.id === id);
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
    <>
      <main className="space-y-5 overflow-hidden">
        <AOSWrapper>
          <Budge>{item.title}</Budge>
          <div className="space-y-16">
            <div className="prose prose-neutral mx-auto max-w-7xl px-3">
              <ParagraphRenderer
                htmlContent={item.subtab.paragraph}
                dialogImage={item.img}
              />
            </div>

            <div className="mx-auto max-w-7xl space-y-10 px-3">
              {" "}
              <p
                className="text-muted-foreground text-center text-3xl font-bold"
                data-aos="fade-right"
              >
                Other similar News to {item.title}
              </p>
              <div className="grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3">
                {newsData
                  .filter((v) => v.id !== Number(id))
                  .filter((v) => v.title === item.title)
                  .map((v) => (
                    <CardItem cardDeta={v} key={v.id} />
                  ))}
              </div>
            </div>
          </div>
        </AOSWrapper>
      </main>
    </>
  );
}
