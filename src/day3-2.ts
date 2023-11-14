import { zip as transpose, matches, countBy, last } from "lodash";
import { run, getInput, mostCommon, leastCommon, toDecimal, joinNumeric } from "../lib";
const data = [
  "00100",
  "11110",
  "10110",
  "10111",
  "10101",
  "01111",
  "00111",
  "11100",
  "10000",
  "11001",
  "00010",
  "01010",
];

function parseInput(data: string[]) {
  return data.map((n) => n.split("").map(Number));
}

function reduceInput(input: number[][], placeValue = 0) {
  if (input.length > 1) {
    const counts = Object.entries(countBy(transpose(...input), last));
    const value = Object.values(counts)
    console.log({ counts, value });
    const filtered = input.filter(matches({ [placeValue]:  }));
    return reduceInput(filtered, placeValue + 1);
  }

  return input;
}

async function main() {
  // const input = await getInput("../input/day_3_input.txt").then(parseInput);
  const input = parseInput(data);
  // const epsilon = transpose(...input).map(leastCommon);

  return reduceInput(input);
}

run(main);
