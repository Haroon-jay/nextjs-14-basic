"use server";

import { fetchData } from "@/lib/api";
import { USERS_URL } from "@/lib/config";

export const getUsers = async (): Promise<User[]> => {
  return fetchData(USERS_URL);
};
