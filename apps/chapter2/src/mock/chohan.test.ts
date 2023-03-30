import { chohan } from "./chohan";

jest.mock("./seed", () => {
  return {
    seed: jest
      .fn()
      .mockImplementationOnce(() => 0)
      .mockImplementationOnce(() => 1),
  };
});

describe("chohan", () => {
  it("returns 丁 when seed returns an even number", () => {
    expect(chohan()).toBe("丁");
  });
  it("returns 半 when seed returns an odd number", () => {
    expect(chohan()).toBe("半");
  });
});
