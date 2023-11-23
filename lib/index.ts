export { getInput } from "./getInput";
export { print, run } from "./print";
export { frame } from "./frame";
export { gt, lt, mostCommon, leastCommon } from "./compare";
export { toDecimal, joinNumeric } from "./parse";

export function partition<T = any>(arr: T[], index: number) {
  return [arr.slice(0, index), arr.slice(index)];
}
