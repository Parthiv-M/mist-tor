const { Router } = require('express');
// this route is for processes that everyone can perform
const express = require('express');
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const router = express.Router();

// bitch(complain) about someone to the HR head
router.post('/bitch', async (req, res) => {
  //write your code here
});

// explain your smart ass ideas to the board
router.post('/proposals', async (req, res) => {
  //write your code here
});

module.exports = router;
