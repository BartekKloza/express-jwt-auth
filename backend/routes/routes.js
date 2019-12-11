const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../schemas/userSchema');

const router = express.Router();

router.post('/newuser', async (req, res) => {
  try {
    const encryptedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
      username: req.body.username,
      password: encryptedPassword,
    });
    await newUser.save(newUser);

    return res.status(200).json({ message: 'success' });
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

router.get('/getuser', async (req, res) => {
  res.status(200).json({ msg: 'hello' });
});

module.exports = router;
