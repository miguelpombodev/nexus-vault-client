import { httpClient } from "@/shared/api/httpClient";

import type { UserDataResponse } from "../types/responses/userDataResponse.type";

export async function fetchUserData(): Promise<UserDataResponse> {
  const { data } = await httpClient.get<UserDataResponse>("/users");

  const user: UserDataResponse = {
    id: data.id,
    name: data.name,
    avatar:
      "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/094.png",
    email: data.email,
  };

  return user;
}
