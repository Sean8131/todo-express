import { minus, sum, multiply, divide } from "./calculate";

test("adds 6 + 2 to equal 8", () => {
    const expectedResult = sum(6,2);
    const result = 8;
  expect(expectedResult).toBe(result);
});

test("multiplies 6 + 2 to equal 12", () => {
    const expectedResult = multiply(6,2);
    const result = 12;
  expect(expectedResult).toBe(result);
});

test("divides 2 + 2 to equal 1", () => {
    const expectedResult = divide(2,2);
    const result = 1;
  expect(expectedResult).toBe(result);
});

test("minuses 4 + 2 to equal 2", () => {
  const expectedResult = minus(6,2);
  const result = 4;
expect(expectedResult).toBe(result);
});