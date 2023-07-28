import { isValidJson } from '../src/isValidJson';


describe('isJsonString', () => {
    // 测试当传入的参数为有效的JSON对象时，应该返回true
    it('should return true for valid JSON object', () => {
        // 定义一个有效的JSON对象
        const jsonStr = '{"name": "John", "age": 30, "city": "New York"}';
        // 断言当传入的参数为有效的JSON对象时，应该返回true
        expect(isValidJson(jsonStr)).toBe(true);
    });

    // 测试当传入的参数为有效的JSON数组时，应该返回true
    it('should return true for valid JSON array', () => {
        // 定义一个有效的JSON数组
        const jsonStr = '[1, 2, 3]';
        // 断言当传入的参数为有效的JSON数组时，应该返回true
        expect(isValidJson(jsonStr)).toBe(true);
    });

    // 测试当传入的参数为无效的JSON时，应该返回false
    it('should return false for invalid JSON with trailing comma', () => {
        // 定义一个无效的JSON
        const jsonStr = '{"name": "John", "age": 30, "city": "New York",}';
        // 断言当传入的参数为无效的JSON时，应该返回false
        expect(isValidJson(jsonStr)).toBe(false);
    });

    // 测试当传入的参数为无效的JSON时，应该返回false
    it('should return false for invalid JSON', () => {
        // 定义一个无效的JSON
        const jsonStr = 'not a valid JSON';
        // 断言当传入的参数为无效的JSON时，应该返回false
        expect(isValidJson(jsonStr)).toBe(false);
    });
});
