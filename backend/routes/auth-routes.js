const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../schemas/user-schema');
const { createJWTToken } = require('../lib/auth');

const router = express.Router();

router.post('/login', async (req, res) => {
  try {
    const userObj = await User.findOne({ username: req.body.username });
    if (!userObj)
      return res
        .status(400)
        .json({ handledError: true, message: "Username doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      userObj.password
    );
    if (!isPasswordCorrect)
      return res
        .status(400)
        .json({ handledError: false, message: 'Incorrect password' });
    const data = {
      foo: 'bar',
    };
    const token = createJWTToken(data);
    console.log(token);

    return res.status(200).json({ message: 'Success' });
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

module.exports = router;
