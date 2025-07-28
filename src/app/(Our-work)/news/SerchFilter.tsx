"use client";

import { ListFilter } from "lucide-react";
import React from "react";
import { newsList } from "./list";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter, useSearchParams } from "next/navigation";

interface SerchFilterProps {
  className: string;
}
export default function SerchFilter({ className }: SerchFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedCollectionIds = searchParams.getAll("statename");

  function updateFilters(collectionIds: string[]) {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.delete("statename");

    collectionIds.forEach((collectionId) => {
      newSearchParams.append("statename", collectionId);
    });

    router.push(`?${newSearchParams.toString()}`);
  }
  return (
    <div className={className}>
      <div className="bg-primary text-card sticky top-0 flex w-full cursor-default gap-5 px-3 py-3 font-bold">
        <ListFilter className="mr-4 size-4" /> Filter With State
      </div>
      <div className="h-96 space-y-3 overflow-auto border p-3">
        {newsList.map((v) => (
          <label
            className="flex cursor-pointer items-center gap-2 font-medium"
            key={v.id}
          >
            <Checkbox
              id={String(v.id)}
              checked={selectedCollectionIds.includes(v.stateName)}
              onCheckedChange={(cheked) => {
                updateFilters(
                  cheked
                    ? [...selectedCollectionIds, v.stateName]
                    : selectedCollectionIds.filter((id) => id !== v.stateName),
                );
              }}
            />
            <span className="line-clamp-1 break-all">{v.stateName}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
