const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../schemas/user-schema');

const router = express.Router();

router.post('/newuser', async (req, res) => {
  try {
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
