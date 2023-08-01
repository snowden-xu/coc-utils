import { local } from '../src';

describe('local', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('should get value from localStorage', () => {
    // Arrange
    const key = 'testKey';
    const value = { name: 'John', age: 30 };
    localStorage.setItem(key, JSON.stringify(value));

    // Act
    const result = local.get(key);

    // Assert
    expect(result).toEqual(value);
  });

  test('should get null if key does not exist in localStorage', () => {
    // Arrange
    const key = 'nonExistingKey';

    // Act
    const result = local.get(key);

    // Assert
    expect(result).toBeNull();
  });

  test('should set value in localStorage', () => {
    // Arrange
    const key = 'testKey';
    const value = { name: 'John', age: 30 };

    // Act
    local.set(key, value);
    const result = localStorage.getItem(key);
  });

  test('should remove value from localStorage', () => {
    // Arrange
    const key = 'testKey';
    const value = { name: 'John', age: 30 };
    localStorage.setItem(key, JSON.stringify(value));

    // Act
    local.remove(key);
    const result = localStorage.getItem(key);

    // Assert
    expect(result).toBeNull();
  });

  test('should clear localStorage', () => {
    // Arrange
    const key1 = 'testKey1';
    const key2 = 'testKey2';
    const value1 = { name: 'John', age: 30 };
    const value2 = { city: 'New York', country: 'USA' };
    localStorage.setItem(key1, JSON.stringify(value1));
    localStorage.setItem(key2, JSON.stringify(value2));

    // Act
    local.clear();
    const result1 = localStorage.getItem(key1);
    const result2 = localStorage.getItem(key2);

    // Assert
    expect(result1).toBeNull();
    expect(result2).toBeNull();
  });
});
