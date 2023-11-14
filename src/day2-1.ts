import { run, getInput } from "../lib";
import { cond, matches, constant } from "lodash";
type Direction = "forward" | "down" | "up";
const data: Array<[Direction, number]> = [
  ["forward", 5],
  ["down", 5],
  ["forward", 8],
  ["up", 3],
  ["down", 8],
  ["forward", 2],
];

function handleDirection([[x, y], [direction, value]]: [[number, number], [Direction, number]]) {
  return cond<Direction, [number, number]>([
    [matches("forward"), constant([x + value, y])],
    [matches("down"), constant([x, y + value])],
    [matches("up"), constant([x, y - value])],
  ])(direction);
}

function parseInput(strs: string[]) {
  return strs.map((str) => {
    const [direction, rawNumber] = str.split(" ") as [string, string];
    return [direction, parseInt(rawNumber)] as [Direction, number];
  });
}

async function main() {
  const data = await getInput("../input/day_2_input.txt").then(parseInput);
  const [x, y] = data.reduce((acc, instruction) => handleDirection([acc, instruction]), [0, 0]);
  return x * y;
}

run(main);
