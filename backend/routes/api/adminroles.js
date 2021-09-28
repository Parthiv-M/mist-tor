const { Router } = require('express');
// this route is for all actions that can be carried out by the board
const express = require('express');
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const Users = require('../../models/Users');
const Proposals = require('../../models/Proposals');
const clearanceAuth = require('../../middleware/clearanceAuth');
const router = express.Router();

router.post(
  '/create',

  //checks for valid email, existence of password and 9-digit registration number
  [
    check('email', 'Please include a valid email').isEmail(),
    check('registration', 'Please give a valid registration number')
      .isNumeric()
      .isLength({ min: 9, max: 9 }),
    check('password', 'Password is required').exists()
  ],

  auth,

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      return res.status(400).json({ errors: errors.array() });
    }

    if (req.user.clearance == 'board') {
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
        user.save().then((newUser) => {
          res.status(200).send({ newUser });
        });
      } catch (error) {
        res.status(401).send('Could not create new user. Try again');
      }
    }
  }
);

// route to accept proposals that are confirmed
router.get('/manageProposals/accept/:id', auth, async (req, res) => {
  try {
    const proposal = await Proposals.findById(req.params.id);

    try {
      const updatedProposal = await Proposals.findByIdAndUpdate(
        req.params.id,
        {
          $set: { status: true }
        },
        { new: true }
      );
      res.status(200).json(updatedPost);
    } catch (err) {
      res.status(500).json(err);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//route to delete proposals that are declined
router.delete('/manageProposals/decline/:id', auth, async (req, res) => {
  try {
    const proposal = await Proposals.findById(req.params.id);

    try {
      await proposal.delete();
      res.status(200).json('Post has been declined...');
    } catch (err) {
      res.status(500).json(err);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/viewProposals', auth, async (req, res) => {
  try {
    let proposals = await Proposals.find();
    res.status(200).json(proposals);
  } catch (err) {
    res.status(500).json(err);
  }
});

//route to delete a user, takes in query as a userid
router.delete('/kick/:id', auth, async (req, res) => {
  try {
    const boardUser = await req.user;
    if (boardUser.position == 'Prezzi' || boardUser.position == 'HR') {
      try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json('User has been deleted...');
      } catch (err) {
        res.status(500).json(err);
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
