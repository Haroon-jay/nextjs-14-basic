"use server";

import { fetchData } from "../api";
import { USERS_URL } from "../config";

export const getUsers = async (): Promise<User[]> => {
  return fetchData(USERS_URL);
};
