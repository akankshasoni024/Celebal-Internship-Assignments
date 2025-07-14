const bcrypt = require('bcryptjs');

const hashedPassword = bcrypt.hashSync('password123', 10);

const users = [
  {
    id: 1,
    username: 'akanksha',
    password: hashedPassword // hashed
  }
];

module.exports = users;
