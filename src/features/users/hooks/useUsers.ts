import { useQuery } from "@tanstack/react-query";

import { fetchUserData } from "../api/fetchUserData";

export function useUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchUserData,
  });
}
