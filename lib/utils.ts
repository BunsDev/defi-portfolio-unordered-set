import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { formatUnits } from "viem"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getEtherWithPrecison(eth: bigint, precision: number = 3, decimal: number = 18) {
  const formattedEther = formatUnits(eth, decimal);
  const dotPos = formattedEther.indexOf(".");
  return formattedEther.substring(0, dotPos + 1 + precision);
}

export function getTimestampOffset(seconds: number): bigint {
  const d = new Date();
  d.setSeconds(d.getSeconds() + seconds);
  return BigInt(Math.ceil(d.valueOf() / 1000));
}