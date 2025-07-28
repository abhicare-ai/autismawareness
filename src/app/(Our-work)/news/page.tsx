import AOSWrapper from "@/components/AOSWrapper";
import Budge from "@/components/Budge";
import { Metadata } from "next";
import React from "react";
import SerchFilter from "./SerchFilter";
import { newsData } from "./list";
import CardItem from "@/components/CardItem";

interface PageProps {
  searchParams: Promise<{
    statename?: string[];
  }>;
}
export const metadata: Metadata = {
  title: "News",
};
export default async function Page({ searchParams }: PageProps) {
  const { statename } = await searchParams;

  // Normalize into an array (even if it's a single string)
  const statenameArray = statename
    ? Array.isArray(statename)
      ? statename
      : [statename]
    : [];

  const filteredData =
    statenameArray.length > 0
      ? newsData.filter((item) =>
          statenameArray.some(
            (state) =>
              item.title.trim().toLowerCase() ===
              decodeURIComponent(state).trim().toLowerCase(),
          ),
        )
      : newsData;

  // Optional fallback: if no matches, return all
  const finalData = filteredData.length > 0 ? filteredData : [];

  return (
    <main className="space-y-5">
      <AOSWrapper>
        <Budge>News</Budge>
        <div className="relative mx-auto flex max-w-7xl flex-col-reverse gap-5 px-3 md:flex-row">
          <SerchFilter className="bg-card sticky top-3 h-fit rounded-md md:basis-1/2" />
          <div className="flex gap-5 md:basis-3/2">
            <div className="grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3">
              {finalData.length >= 1 ? (
                <>
                  {finalData.map((v) => (
                    <CardItem cardDeta={v} key={v.id} />
                  ))}
                </>
              ) : (
                <div className="text-muted-foreground flex items-center justify-center text-center text-3xl font-bold">
                  No any new found.
                </div>
              )}
            </div>
          </div>
        </div>
      </AOSWrapper>
    </main>
  );
}
