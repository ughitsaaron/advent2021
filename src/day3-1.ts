import { zip as transpose, ary } from "lodash";
import { run, getInput, mostCommon, leastCommon, toDecimal, joinNumeric } from "../lib";

function parseInput(data: string[]) {
  return data.map((n) => n.split("").map(Number));
}

const most = (input) => toDecimal(joinNumeric(input.map(ary(mostCommon, 1))));
const least = (input) => toDecimal(joinNumeric(input.map(ary(leastCommon, 1))));

async function main() {
  const data = await getInput("../input/day_3_input.txt")
    .then(parseInput)
    .then((input) => transpose(...input));
  return most(data) * least(data);
}

run(main);
