import { ICategory } from "../types/types";

export default function (phrases: ICategory[]) {
  const filtered = phrases.filter(phrase => !phrase.selected);
  const randomIndex = Math.floor(Math.random() * filtered.length);
  return filtered[randomIndex];
}
