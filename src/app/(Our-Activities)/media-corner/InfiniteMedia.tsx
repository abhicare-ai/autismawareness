"use client";
import PeginationBar from "@/components/PeginationBar";
import { useMediaQuery } from "./use-media-hooks";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

interface InfiniteMediaProps {
  page: number;
}

export default function InfiniteMedia({ page }: InfiniteMediaProps) {
  const { data, isLoading } = useMediaQuery(page);

  return (
    <div className="space-y-5">
      <div className="mx-auto max-w-7xl px-3">
        {isLoading && <LoadingSkeleton />}

        {data?.media && data.media.length >= 2 && (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {data?.media.map((v) => (
              <div className="shadow-md border" key={v.id} >
                <Image
                  src={v.imgUrl}
                  alt="d"
                  width={400}
                  height={400}
                  className="object-cover h-full w-full"
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <PeginationBar
        currentPage={page}
        totalPages={Math.ceil((data?.totalCount || 1) / 9)}
      />
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 8 }).map((_, i) => (
        <Skeleton key={i} className="h-[26rem] w-full" />
      ))}
    </div>
  );
}
