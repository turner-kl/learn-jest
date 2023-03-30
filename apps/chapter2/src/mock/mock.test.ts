test("return Hello", () => {
  const mockFunction = jest.fn(() => "Hello");
  expect(mockFunction()).toBe("Hello");
});
