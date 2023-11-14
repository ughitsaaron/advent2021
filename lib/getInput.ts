import { join } from "node:path";
import { readFile } from "node:fs/promises";

export async function getInput(fileName: string, opts?: { parseNumbers: false }): Promise<string[]>;
export async function getInput(fileName: string, opts?: { parseNumbers: true }): Promise<number[]>;
export async function getInput(fileName: string, opts = { parseNumbers: false }) {
  const rawFile = await readFile(join("input", fileName), { encoding: "utf-8" });
  const strs = rawFile.trim().split("\n");

  if (opts.parseNumbers) {
    return strs.map((line) => parseInt(line)) as number[];
  }

  return strs;
}
