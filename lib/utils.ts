import { type ClassValue, clsx } from "clsx";
import { get } from "http";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));
