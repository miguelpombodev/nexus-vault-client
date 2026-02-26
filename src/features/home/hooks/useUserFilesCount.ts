import { useQuery } from "@tanstack/react-query";

import { fetchUserFilesCount } from "../api/fetchUserFilesCount.service";
import { fetchUserRecentFiles } from "../api/fetchUserRecentFiles.service";

export function useUserFilesCount() {
  return useQuery({
    queryKey: ["file", "count"],
    queryFn: fetchUserFilesCount,
    staleTime: 1000 * 60 * 5,
  });
}

export function useUserRecentFiles() {
  return useQuery({
    queryKey: ["file", "recent"],
    queryFn: fetchUserRecentFiles,
    staleTime: 1000 * 60 * 2,
  });
}
