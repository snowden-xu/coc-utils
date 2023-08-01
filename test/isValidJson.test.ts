import { isValidJson } from "../src";

describe("isJsonString", () => {
  // 测试当传入的参数为有效的JSON对象时，应该返回true
  it("should return true for valid JSON object", () => {
    expect(isValidJson('{"name": "John", "age": 30, "city": "New York"}')).toBe(
      true,
    );
    expect(isValidJson("[1, 2, 3]")).toBe(true);
  });

  // 测试当传入的参数为无效的JSON时，应该返回false
  it("should return false for invalid JSON", () => {
    expect(
      isValidJson('{"name": "John", "age": 30, "city": "New York",}'),
    ).toBe(false);
    expect(isValidJson("not a valid JSON")).toBe(false);
    expect(isValidJson("  ")).toBe(false);
  });
});
