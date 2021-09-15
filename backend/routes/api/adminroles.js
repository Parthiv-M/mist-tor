const { Router } = require('express');
// this route is for all actions that can be carried out by the board
const express = require('express');
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const Users = require('../../models/Users');
const giveclearance = require('../../middleware/clearanceauth');
const router = express.Router();

// create a new member profile for freshers
router.post('/create', 

  //checks for valid email, existence of password and 9-digit registration number 
  [
    check('email', 'Please include a valid email').isEmail(),
    check('registration', 'Please give a valid registration number').isNumeric().isLength({min:9, max: 9}),
    check('password', 'Password is required').exists()
  ], 

  giveclearance, async (req, res) => {
  
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    return res.status(400).json({ errors: errors.array() });
  }

  if(req.clearance=="board"){
    try {
      var user = new Users({
        name: req.body.name,
        email: req.body.email,
        registration: req.body.registration,
        password: req.body.password,
        clearance: req.body.clearance,
        position: req.body.position,
        editorial: req.body.editorial,
        avatar: req.body.avatar
      });
      user.save().then((newuser) => {
        res.status(200).send({newuser});
      });
    } catch (error) {
      res.status(401).send('Could not create new user. Try again');
    };
  } else{
    res.status(404).send("Access denied!");
  }

});

// route to accept proposals that are confirmed
router.get('/manageproposals/accept', async (req, res) => {
  //write your code here
});

//route to delete proposals that are declined
router.delete('/manageproposals/decline', async (req, res) => {
  //write your code here
});

// send prosals in JSON format
router.get('/viewproposals', async (req, res) => {
  //write your code here
});

//route to delete a user, takes in query as a userid
router.delete('/kick', async (req, res) => {
  //write your code here
});

module.exports = router;
