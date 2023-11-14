import { isPromise } from "util/types";

export function print(...args: any[]) {
  console.log(...args);
}

export function run(fn: () => any) {
  const result = fn();

  if (isPromise(result)) {
    return result.then(print);
  }

  print(result);
}
