import { SEARCH_QUERY_KEY } from "@/constant";
import { search } from "@/services";
import { useQuery } from "@tanstack/react-query";

export const useSearch = (urlParams?: string) =>
  useQuery({
    queryKey: SEARCH_QUERY_KEY,
    queryFn: () => search(urlParams),
    enabled: false,
  });
