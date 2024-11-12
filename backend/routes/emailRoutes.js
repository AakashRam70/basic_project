// routes/emailRoutes.js
const express = require('express');
const { scheduleEmail } = require('../controllers/emailController');
const router = express.Router();

// POST route to schedule an email
router.post('/schedule-email', scheduleEmail);

module.exports = router;
