/* modified so that vars aren't overwritten */
export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true;
    const task = false;
  }

  return [task, task2];
}
