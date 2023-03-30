describe("Math.random with spyon", () => {
  let spy;

  afterEach(() => {
    spy.mockRestore();
  });

  it("Math random return 1", () => {
    spy = jest.spyOn(Math, "random").mockImplementation(() => 1);
    expect(Math.random()).toBe(1);
  });

  it("Math random return under 1", () => {
    expect(Math.random()).toBeLessThan(1);
  });
});
