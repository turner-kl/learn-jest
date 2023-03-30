const numberValue = 0;
const stringValue = "文字列";
const booleanValue = true;

test("evaluates as equal for all the same primitive values when using toBe", () => {
  expect(numberValue).toBe(0);
  expect(stringValue).toBe("文字列");
  expect(booleanValue).toBe(true);
});

// toEqualでプリミティブな値を評価
test("evaluates as equal for all the same primitive values when using the toEqual function", () => {
  expect(numberValue).toEqual(0);
  expect(stringValue).toEqual("文字列");
  expect(booleanValue).toEqual(true);
});
// toStrictEqualでプリミティブな値を評価
test("evaluates as equal for all the same primitive values when using the toStrictEqual function", () => {
  expect(numberValue).toStrictEqual(0);
  expect(stringValue).toStrictEqual("文字列");
  expect(booleanValue).toStrictEqual(true);
});
