var express = require('express');
var router = express.Router();
var user = require('../models/users');

    
router.post('/getAuth', (req, res, next) => {

  
    user.findOne({
            email: req.body.email,
            password: req.body.password
        }).then((u) => {
    
      res.status(200).json({
        message: "authentification Valide",
        User: u
      })
  
    }
    ).catch(err => {
      console.log(err);
    });
  
  });
// router.post('/getAuth', (req, res, next) => {
//   user.findOne({
//       email: req.body.email,
//       password: req.body.password
//   }).then((u) => {
//     res.status(200).json({
//       message: "user login",
//       User: u
//     })
//   }).catch(err => {
//     console.log(err);
//   });

// });
module.exports = router;