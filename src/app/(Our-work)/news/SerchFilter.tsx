"use client";

import { Button } from "@/components/ui/button";
import { ListFilter } from "lucide-react";
import React from "react";
import { newsList } from "./list";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter, useSearchParams } from "next/navigation";

export default function SerchFilter() {
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
   
      <div className="space-y-5 rounded-md border p-3 md:basis-1/2 h-96 sticky top-0  overflow-auto bg-card">
        <Button className="w-full cursor-default font-bold">
          <ListFilter className="mr-4 size-4" /> Filter With State
        </Button>
        <div className="space-y-3 ">
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
                      : selectedCollectionIds.filter(
                          (id) => id !== v.stateName,
                        ),
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
