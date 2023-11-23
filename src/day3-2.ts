import { matches, constant } from "lodash";
import { run, getInput, mostCommon, leastCommon, toDecimal, joinNumeric } from "../lib";
function parseInput(data: string[]) {
  return data.map((n) => n.split("").map(Number));
}

function getRating(input: number[][], placeValue = 0, comparator, whenEqual) {
  if (input.length > 1) {
    const data = input.map((row) => row[placeValue]);
    const value = comparator(data, whenEqual);
    const filtered = input.filter(matches({ [placeValue]: value }));
    return getRating(filtered, placeValue + 1, comparator, whenEqual);
  }

  return toDecimal(joinNumeric(input[0]));
}

const most = (input) => getRating(input, 0, mostCommon, constant(1));
const least = (input) => getRating(input, 0, leastCommon, constant(0));

async function main() {
  const input = parseInput(await getInput("../input/day_3_input.txt"));
  return most(input) * least(input);
}

run(main);
