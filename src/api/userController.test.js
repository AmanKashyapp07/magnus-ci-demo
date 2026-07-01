const { registerUser, getUserCount } = require('./userController');

describe('User Controller API', () => {
  test('should successfully register a new user', () => {
    const user = registerUser('john_doe', 'john@example.com');
    expect(user.username).toBe('john_doe');
    expect(user.email).toBe('john@example.com');
    expect(user.id).toBeDefined();
  });

  test('should fail if email is missing', () => {
    expect(() => {
      registerUser('jane_doe', null);
    }).toThrow('Username and email are required');
  });

  test('should accurately track total user count', () => {
    const initialCount = getUserCount();
    registerUser('alice', 'alice@test.com');
    expect(getUserCount()).toBe(initialCount + 1);
  });
});
