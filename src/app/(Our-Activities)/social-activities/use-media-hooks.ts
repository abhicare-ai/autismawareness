

import { MediaCornerResponse } from "@/app/api/social-activities/route";
import { fetchData } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";


export function useMediaQuery(page: number) {
  return useQuery({
    queryKey: ["socialActivities", page],
    queryFn: () =>
      fetchData<MediaCornerResponse>(`/api/social-activities?page=${page}`),
  });
}
