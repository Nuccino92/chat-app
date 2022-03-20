const bcrypt = require("bcryptjs");

const generateHash = (password) => {
  const salt = bcrypt.genSaltSync(12);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};

const compareHash = (password, hashed) => {
  return bcrypt.compareSync(password, hashed);
};

module.exports = {
  generateHash,
  compareHash,
};
