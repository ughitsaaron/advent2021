import { zip as transpose } from "lodash";
import { run, getInput, mostCommon, leastCommon, toDecimal, joinNumeric } from "../lib";

function parseInput(data: string[]) {
  return data.map((n) => n.split("").map(Number));
}

async function main() {
  const data = await getInput("../input/day_3_input.txt")
    .then(parseInput)
    .then((input) => transpose(...input));
  const gamma = joinNumeric(data.map(mostCommon));
  const epsilon = joinNumeric(data.map(leastCommon));
  return toDecimal(gamma) * toDecimal(epsilon);
}

run(main);
