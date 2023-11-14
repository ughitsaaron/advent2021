import { run, getInput } from "../lib";
import { cond, matches, constant } from "lodash";

type Direction = "forward" | "down" | "up";

function parseInput(strs: string[]) {
  return strs.map((str) => {
    const [direction, rawNumber] = str.split(" ") as [string, string];
    return [direction, parseInt(rawNumber)] as [Direction, number];
  });
}

function handleDirection([[x, y, aim], [direction, value]]: [[number, number, number], [Direction, number]]) {
  return cond<Direction, [number, number, number]>([
    [matches("forward"), constant([x + value, y + aim * value, aim])],
    [matches("down"), constant([x, y, aim + value])],
    [matches("up"), constant([x, y, aim - value])],
  ])(direction);
}

async function main() {
  const data = await getInput("../input/day_2_input.txt").then(parseInput);
  const [x, y] = data.reduce((acc, instruction) => handleDirection([acc, instruction]), [0, 0, 0]);
  return x * y;
}

run(main);
