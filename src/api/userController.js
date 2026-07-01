// Mock Backend API Controller
const users = [];

function registerUser(username, email) {
  if (!username || !email) {
    throw new Error('Username and email are required');
  }
  const newUser = { id: Date.now(), username, email };
  users.push(newUser);
  return newUser;
}

function getUserCount() {
  return users.length;
}

module.exports = { registerUser, getUserCount };
