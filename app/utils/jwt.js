const jwt = require('jsonwebtoken');
const { jwtSecret, jwtExpiration } = require('../config/index');

const createJWT = ({ payload }) => {
  const token = jwt.sign(payload, jwtSecret, {
    expiresIn: jwtExpiration,
  });
};

const isTokenvalid = ({ token }) => jwt.verify(token, jwtSecret);

module.export = {
  createJWT,
  isTokenvalid,
};
