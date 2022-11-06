import { HasDate } from "../types/types";
import countries from "./countries.json";

export function daysAgoString(date: Date): string {
  const daysAgo = Math.floor(
    (new Date().getTime() - date.getTime()) / 86400000
  );
  if (daysAgo === 0) {
    return "today";
  } else if (daysAgo === 1) {
    return "yesterday";
  } else if (daysAgo < 60) {
    return `${daysAgo} days ago`;
  } else {
    const monthsAgo = Math.floor(daysAgo / 30);
    if (monthsAgo === 1) {
      return "1 month ago";
    } else if (monthsAgo < 24) {
      return `${monthsAgo} months ago`;
    }

    return `${Math.floor(monthsAgo / 12)} years ago`;
  }
}

export function countryNameToCode(countryName: string) {
  const country = countries.find((c) => c.name === countryName);
  return country?.code as string;
}

export function countryCodeToName(countryCode: string) {
  const country = countries.find((c) => c.code === countryCode);
  return country?.name as string;
}

export function getDateFromObj(objectWithDate: HasDate) {
  return new Date(Number(objectWithDate.date));
}
