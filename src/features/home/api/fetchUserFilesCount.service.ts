import { httpClient } from "@/shared/api/httpClient";

import type { UserFilesCount } from "../types/responses/userFilesCount.type";

export async function fetchUserFilesCount() {
  const { data } = await httpClient.get<UserFilesCount>("/files/types/count");

  return data;
}
