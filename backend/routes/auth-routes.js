const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../schemas/user-schema');
const { createJWTToken } = require('../lib/auth');

const router = express.Router();

router.post('/login', async (req, res) => {
  try {
    const userObj = await User.findOne({ username: req.body.username });
    if (!userObj)
      return res.status(400).json({
        handledError: true,
        message: 'Invalid login credentials provided!',
      });

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      userObj.password
    );
    if (!isPasswordCorrect)
      return res.status(400).json({
        handledError: true,
        message: 'Invalid login credentials provided!',
      });

    const data = {
      _id: userObj._id,
    };
    const token = createJWTToken(data);
    console.log(token);

    return res.status(200).json({ success: true, token });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ handledError: false, error });
  }
});

router.post('/newuser', async (req, res) => {
  try {
    // TODO: need to check if email exists as well (if email added to schema)
    const doesUserExist = await User.exists({ username: req.body.username });
    if (doesUserExist)
      return res
        .status(400)
        .json({ handledError: true, message: 'User already exists!' });
    const encryptedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
      username: req.body.username,
      password: encryptedPassword,
    });
    await newUser.save(newUser);
    return res.status(200).json({ message: 'Success' });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ handledError: false, error });
  }
});

module.exports = router;
