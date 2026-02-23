import { validParentheses } from "./valid-parentheses";
import { twoSum } from "./two-sum";
import { Problem } from "../types/problem";

export const problems: Record<string, Problem> = {
  "two-sum": twoSum,
  "valid-parentheses": validParentheses, // เพิ่มบรรทัดนี้
};