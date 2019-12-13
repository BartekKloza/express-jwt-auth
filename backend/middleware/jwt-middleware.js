const { verifyJWTToken } = require('../lib/auth');

module.exports = {
  verifyJWTMiddleware: (req, res, next) => {
    const { token } = req.body;
    const decodedToken = verifyJWTToken(token);
    if (decodedToken) {
      req.tokenData = decodedToken;
      return next();
    }
    return res.status(400).json({
      handledError: true,
      message: 'Authentication failed!',
    });
  },
};
