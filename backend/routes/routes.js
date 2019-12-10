const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
const User = require('../schemas/userSchema');
dotenv.config();

router.get('/getimages', function(req, res) {
    Image.find({}, (err, images) => {
        if(err){
            return res.status(400).json(err);
        }
        return res.status(200).json(images);
    });
});


module.exports = router;