/* modified so that vars aren't overwritten */
export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    const taskInBlock = true;
    const task2InBlock = false;
  }

  return [task, task2];
}
