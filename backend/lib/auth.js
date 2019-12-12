const jwt = require('jsonwebtoken');
const fs = require('fs');

const jwtKey = fs.readFileSync('key/jwtRS256.key');

module.exports = {
  verifyJWTToken: token => {
    return jwt.verify(token, jwtKey);
  },
  createJWTToken: data => {
    return jwt.sign(data, jwtKey, {
      algorithm: 'RS256',
      expiresIn: 60 * 60,
    });
  },
};
