import { session } from '../src';

describe('session', () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  test('should get value from sessionStorage', () => {
    // Arrange
    const key = 'testKey';
    const value = { name: 'John', age: 30 };
    sessionStorage.setItem(key, JSON.stringify(value));

    // Act
    const result = session.get(key);

    // Assert
    expect(result).toEqual(value);
  });

  test('should get null if key does not exist in sessionStorage', () => {
    // Arrange
    const key = 'nonExistingKey';

    // Act
    const result = session.get(key);

    // Assert
    expect(result).toBeNull();
  });

  test('should set string value in sessionStorage', () => {
    // Arrange
    const key = 'testKey';
    const value = 'hello';

    // Act
    session.set(key, value);
    const result = sessionStorage.getItem(key);

    // Assert
    expect(result).toBe(value);
  });

  test('should set non-string value as JSON in sessionStorage', () => {
    // Arrange
    const key = 'testKey';
    const value = { name: 'John', age: 30 };

    // Act
    session.set(key, value);
    const result = sessionStorage.getItem(key);
  });

  test('should remove value from sessionStorage', () => {
    // Arrange
    const key = 'testKey';
    const value = { name: 'John', age: 30 };
    sessionStorage.setItem(key, JSON.stringify(value));

    // Act
    session.remove(key);
    const result = sessionStorage.getItem(key);

    // Assert
    expect(result).toBeNull();
  });

  test('should clear sessionStorage', () => {
    // Arrange
    const key1 = 'testKey1';
    const key2 = 'testKey2';
    const value1 = { name: 'John', age: 30 };
    const value2 = { city: 'New York', country: 'USA' };
    sessionStorage.setItem(key1, JSON.stringify(value1));
    sessionStorage.setItem(key2, JSON.stringify(value2));

    // Act
    session.clear();
    const result1 = sessionStorage.getItem(key1);
    const result2 = sessionStorage.getItem(key2);

    // Assert
    expect(result1).toBeNull();
    expect(result2).toBeNull();
  });
});
