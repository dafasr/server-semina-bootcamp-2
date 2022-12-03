const jwt = require('jsonwebtoken');
const { jwtSecret, jwtExpiration } = require('../config');

const createJWT = ({ payload }) => {
  const token = jwt.sign(payload, jwtSecret, {
    expiresIn: jwtExpiration,
  });
  return token;
};

const isTokenvalid = ({ token }) => jwt.verify(token, jwtSecret);

module.exports = {
  createJWT,
  isTokenvalid,
};
