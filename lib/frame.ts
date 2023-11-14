export function frame<T = any>(list: T[], size: 1): Array<[T]>;
export function frame<T = any>(list: T[], size: 2): Array<[T, T]>;
export function frame<T = any>(list: T[], size: 3): Array<[T, T, T]>;
export function frame<T = any>(list: T[], size: 4): Array<[T, T, T, T]>;
export function frame<T = any>(list: T[], size: 5): Array<[T, T, T, T, T]>;
export function frame<T = any>(list: T[], size: number) {
  return list.map((_, index, self) => self.slice(index, index + size));
}
