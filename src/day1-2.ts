import { getInput, frame, lt, run } from "../lib";
import { sum, countBy } from "lodash";

async function main() {
  const data = await getInput("day_1_input.txt", { parseNumbers: true });
  const sums = frame<number>(data, 3).map(sum);
  const result = countBy(frame<number>(sums, 2), lt);
  return result.true;
}

run(main);
