
import { MediaCornerResponse } from "@/app/api/media-corner/route";
import { fetchData } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";


export function useMediaQuery(page: number) {
  return useQuery({
    queryKey: ["MediaCorner", page],
    queryFn: () =>
      fetchData<MediaCornerResponse>(`/api/media-corner?page=${page}`),
  });
}
