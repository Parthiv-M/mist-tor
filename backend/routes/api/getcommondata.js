const { Router } = require('express');
// this route is for querying data every member can see
const express = require('express');
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const router = express.Router();

// accept query as a userid and then send publically available details of that user
router.get('/profile', async (req, res) => {
  //write your code here
});

// send all announcements from the database as a JSON Object
router.get('/announcements', async (req, res) => {
  //write your code here
});

// send all proposals as a JSON object
router.get('/proposals', async (req, res) => {
  //write your code here
});

module.exports = router;
