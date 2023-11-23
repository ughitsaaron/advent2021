import { gt as _gt, lt as _lt, countBy, last, maxBy, minBy } from "lodash";

export function gt([a, b]: [number, number]) {
  return _gt(a, b);
}

export function lt([a, b]: [number, number]) {
  return _lt(a, b);
}

function valueBy(list: any[], comparator: (...args: any[]) => any, whenEqual?: (counts: any) => any) {
  const counts = countBy(list);
  const areEqual = new Set(Object.values(counts)).size === 1;

  if (areEqual && whenEqual) {
    return whenEqual(counts);
  }

  const entries = Object.entries(counts);
  const [key, __count] = comparator(entries, last);
  return key;
}

export const mostCommon = (list: number[], whenEqual?: (counts: any) => any) => Number(valueBy(list, maxBy, whenEqual));
export const leastCommon = (list: number[], whenEqual?: (counts: any) => any) =>
  Number(valueBy(list, minBy, whenEqual));
