import {
  mediaGallery,
  socialActivities,
} from "@/app/(Our-Activities)/media-corner/list";
import { NextResponse } from "next/server";

export type MediaCornerResponse = {
  media: mediaGallery[];
  nextCursor: number | null;
  totalCount: number;
};
export async function GET(request: Request) {
  const url = new URL(request.url);
  const pageParam = url.searchParams.get("page");
  const page = pageParam ? parseInt(pageParam, 10) : 1;

  const pageSize = 9;
  const startIndex = (page - 1) * pageSize;

  // Simulate delay
  const delay = Math.floor(Math.random() * 700) + 300;
  await new Promise((resolve) => setTimeout(resolve, delay));

  // Optional random error
  if (Math.random() < 0.1) {
    return NextResponse.json(
      { error: "Failed to fetch comments" },
      { status: 500 },
    );
  }

  const paginatedItems = socialActivities.slice(
    startIndex,
    startIndex + pageSize,
  );

  return NextResponse.json({
    media: paginatedItems,
    nextCursor: null, // optional if you're using page-based system
    totalCount: socialActivities.length,
  });
}
