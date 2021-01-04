var express = require('express');
var router = express.Router();
var user = require('../models/users');

    
router.get('/getAuth', (req, res, next) => {
    user.findOne({email: req.body.email}).then((u) => {
        if(u &&( u.password === req.body.password)){
      res.status(200).json({
        message: "authentification Valide",
        User: u
      })
    }
    }).catch(err => {
      console.log(err);
    });
  
  });
module.exports = router;