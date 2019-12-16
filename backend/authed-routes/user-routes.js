const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../schemas/user-schema');

const router = express.Router();

module.exports = router;

router.get('/getuser/:id', async (req, res) => {
  try {
    const user = User.findById(req.params._id);
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
