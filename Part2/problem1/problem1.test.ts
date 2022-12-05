import fiboTopDown from "./problem1";

test("Test 1", () => {
  expect(fiboTopDown(0)).toEqual(0);
});
test("Test 2", () => {
  expect(fiboTopDown(1)).toEqual(1);
});
test("Test 3", () => {
  expect(fiboTopDown(2)).toEqual(1);
});
test("Test 4", () => {
  expect(fiboTopDown(3)).toEqual(2);
});
test("Test 5", () => {
  expect(fiboTopDown(5)).toEqual(5);
});
test("Test 6", () => {
  expect(fiboTopDown(6)).toEqual(8);
});
test("Test 7", () => {
  expect(fiboTopDown(7)).toEqual(13);
});
test("Test 8", () => {
  expect(fiboTopDown(9)).toEqual(34);
});
test("Test 9", () => {
  expect(fiboTopDown(10)).toEqual(55);
});
