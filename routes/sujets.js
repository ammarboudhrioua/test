var express = require('express');
var router = express.Router();
var sujet = require('../models/sujets');
var vote = require('../models/votes');

router.post('/addSujet', (req, res, next) => {
  const Sujet = new sujet(req.body)
  Sujet.save().then((u) => {
      res.status(201).json({
          message: "Sujet created",
          Sujet: u
        })
      }).catch(err => {
        console.log(err);
      }) 
    })
    
router.get('/allSujets', (req, res, next) => {
  sujet.find().then((u) => {
    res.status(200).json({
     
      Sujet: u
    })
  }).catch(err => {
    console.log(err);
  });
})


    router.post('/addVote/:idSujet/', (req, res, next) => {
      const Vote = new vote(req.body) 
      Vote.save().then(() => {
          sujet.findByIdAndUpdate(req.params.idSujet, { $push:{ votes: Vote} }
            ).then(() => {
              res.status(201).json({
                message: "updated successfully!",
              })
            }).catch((err) => {
              res.status(400).json({
                error: err
              });
            });
          })
        })
        // router.get('/getSujetById/:id', (req, res) => {
  
        //   User.findById(req.params.id).then((u) => {
        //     res.status(200).json({
        //       message: " user by id",
        //       user: u
        //     })
        //   }).catch(err => {
        //     console.log(err);
        //   });
        // })

module.exports = router;
