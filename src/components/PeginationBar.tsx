"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";
import { cn } from "@/lib/utils";

interface PaginationBarProps {
  currentPage: number;
  totalPages: number;
}

export default function PeginationBar({
  currentPage,
  totalPages,
}: PaginationBarProps) {
  const searchParams = useSearchParams();

  function getLink(page: number) {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("page", page.toString());
    return `?${newSearchParams.toString()}`;
  }

  if (totalPages <= 1) {
    return null;
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <Link href={getLink(currentPage - 1)} passHref>
            <PaginationPrevious
              className={cn(
                currentPage === 1 &&
                  "text-muted-foreground pointer-events-none",
              )}
            />
          </Link>
        </PaginationItem>

        {Array.from({ length: totalPages }).map((_, i) => {
          const page = i + 1;
          const isEdgePage = page === 1 || page === totalPages;
          const isNearCurrentPage = Math.abs(page - currentPage) <= 2;

          if (!isEdgePage && !isNearCurrentPage) {
            if (i === 1 || i === totalPages - 2) {
              return (
                <PaginationItem key={page} className="hidden md:block">
                  <PaginationEllipsis className="text-muted-foreground" />
                </PaginationItem>
              );
            }
            return null;
          }

          return (
            <PaginationItem
              key={page}
              className={cn(
                "hidden md:block",
                page === currentPage && "pointer-events-none block",
              )}
            >
              <Link href={getLink(page)} passHref>
                <PaginationLink isActive={page === currentPage}>
                  {page}
                </PaginationLink>
              </Link>
            </PaginationItem>
          );
        })}

        <PaginationItem>
          <Link href={getLink(currentPage + 1)} passHref>
            <PaginationNext
              className={cn(
                currentPage >= totalPages &&
                  "text-muted-foreground pointer-events-none",
              )}
            />
          </Link>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
