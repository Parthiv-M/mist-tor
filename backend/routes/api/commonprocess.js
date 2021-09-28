const { Router } = require('express');
// this route is for processes that everyone can perform
const express = require('express');
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const router = express.Router();
const Complaints = require('../../middleware/Complaints');
const Proposals = require('../../models/Proposals');

// bitch(complain) about someone to the HR head
router.post('/bitch', auth, async (req, res) => {
  try {
    const user = await req.user;
    var complaint = new Complaints({
      name: user,
      complainText: req.body.complainText,
      date: new Date()
    });
    complaint.save().then((newComplaint) => {
      res.status(200).send({ newComplaint });
    });
  } catch (error) {
    res.status(401).send('Could not register your complaint. Try again');
  }
});

// explain your smart ass ideas to the board
router.post('/proposals', auth, async (req, res) => {
  try {
    const user = await req.user;
    var proposal = new Proposals({
      name: user,
      proposalText: req.body.proposalText,
      date: new Date()
    });
    proposal.save().then((newProposal) => {
      res.status(200).send({ newProposal });
    });
  } catch (error) {
    res.status(401).send('Could not register your proposal. Try again');
  }
});

module.exports = router;
