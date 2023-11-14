import { gt as _gt, lt as _lt, countBy, last, maxBy, minBy } from "lodash";

export function gt([a, b]: [number, number]) {
  return _gt(a, b);
}

export function lt([a, b]: [number, number]) {
  return _lt(a, b);
}

function valueBy(list: any[], comparator: (...args: any[]) => any) {
  const entries = Object.entries(countBy(list));
  const [key, __count] = comparator(entries, last);
  return key;
}

export const mostCommon = (list: number[]) => Number(valueBy(list, maxBy));
export const leastCommon = (list: number[]) => Number(valueBy(list, minBy));
