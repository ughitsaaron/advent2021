import { zip as transpose, flatten, sum, difference, ary } from "lodash";
import { run, partition, getInput } from "../lib";
import { readFile } from "node:fs/promises";

function parseInput(input: string): [number[], number[][][]] {
  const [numbers, ...rest] = input.split("\n\n").map((x) => x.trim());

  const boards = rest.map((board) => {
    return board
      .split("\n")
      .map((x) => x.trim())
      .map((x) => x.split(" ").filter(Boolean).map(Number));
  });

  return [numbers.split(",").map(Number), boards];
}

function checkRow(row: number[], acc: number[]) {
  return row.every((n) => acc.includes(n));
}

function checkBoard(board: number[][], acc: number[]) {
  return board.some((row) => checkRow(row, acc));
}

function checkBoards(numbers: number[], boards: number[][][], acc: number[] = []) {
  function result(board: number[][]) {
    const flattened = flatten(board);
    const matched = flattened.filter((n) => acc.includes(n));
    return { last: acc.slice(-1)[0], matched, unmatched: difference(flattened, matched) };
  }

  const matchX = boards.find((board) => checkBoard(board, acc));

  if (matchX) {
    return result(matchX);
  }

  const matchY = boards.find((board) => checkBoard(transpose(...board), acc));

  if (matchY) {
    return result(matchY);
  }

  const [next] = partition(numbers, acc.length + 1);
  return checkBoards(numbers, boards, next);
}

async function main() {
  const [numbers, boards] = parseInput(await readFile("./input/day_4_input.txt", { encoding: "utf-8" }));
  const { last, unmatched } = checkBoards(numbers, boards);
  return sum(unmatched) * last;
}

run(main);
