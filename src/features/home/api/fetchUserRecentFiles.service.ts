import { httpClient } from "@/shared/api/httpClient";

import type { UserRecentFile } from "../types/responses/userRecentFile.type";

export async function fetchUserRecentFiles(): Promise<UserRecentFile[]> {
  const { data } = await httpClient.get<UserRecentFile[]>("/files/recent");

  return data;
}
