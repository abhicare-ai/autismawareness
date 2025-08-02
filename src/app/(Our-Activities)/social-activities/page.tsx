import { Metadata } from "next";
import InfiniteMedia from "./InfiniteMedia";
import AOSWrapper from "@/components/AOSWrapper";
import Budge from "@/components/Budge";

export const metadata: Metadata = {
  title: "Social activities",
};
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) {
  // const { page } = await searchParams;
  const { page = "1" } = await searchParams;
  console.log(page);

  return (
    <main className="space-y-5">
      <AOSWrapper>
        <Budge>Social activities</Budge>
        <InfiniteMedia page={parseInt(page)} />
      </AOSWrapper>
    </main>
  );
}
