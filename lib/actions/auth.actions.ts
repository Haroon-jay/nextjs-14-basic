"use server";

import { loginCredentials, cookieConfig as config } from "@/lib/config";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

export const login = async (email: string, password: string) => {
  if (
    email === loginCredentials.email &&
    password === loginCredentials.password
  ) {
    const jwt = "fake-jwt";
    cookies().set("jwt", jwt, config);

    return parseStringify({ jwt, user: loginCredentials });
  } else {
    throw new Error("Invalid credentials");
  }
};
export const logoutAccount = async () => {
  try {
    cookies().delete("jwt");
  } catch (error) {
    return null;
  }
};
