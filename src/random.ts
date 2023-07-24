export function random(num: number): number {
  if (num <= 0) {
    throw new Error("输入的数字必须大于0");
  }
  return Math.floor(Math.random() * (num + 1));
}
