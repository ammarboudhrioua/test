var express = require('express');
var router = express.Router();
var user = require('../models/users');


router.post('/addUser', (req, res, next) => {
  const User = new user(req.body)
  User.save().then((u) => {
      res.status(201).json({
          message: "User created",
          User: u
        })
      }).catch(err => {
        console.log(err);
      })
      
    })
module.exports = router;
