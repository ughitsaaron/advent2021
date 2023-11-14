import { getInput, frame, lt, run } from "../lib";
import { countBy } from "lodash";

async function main() {
  const data = await getInput("day_1_input.txt", { parseNumbers: true });
  const result = countBy(frame<number>(data, 2), lt);
  return result.true;
}

run(main);
