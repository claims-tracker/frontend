export function unreachable(x: never | undefined) {
  // tslint:disable-next-line: no-console
  console.error(`This should be unreachable! but got ${x}`);
  // throw new Error(`This should be unreachable! but got ${x}`);
}
