import { zip } from "lodash";

export function transpose<T = any>(matrix: Array<T[]>) {
  return zip(...matrix);
}
