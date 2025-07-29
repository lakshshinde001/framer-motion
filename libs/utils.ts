// src/lib/utils.ts or src/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// This merges Tailwind classes properly, avoiding duplicates like `p-4 p-2`
export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}
