const express = require('express');
const { authenticate } = require('../Middlewares/authMiddleware');
const { scheduleEmail } = require('../Controllers/emailController');
const router = express.Router();

router.post('/schedule-email', authenticate, scheduleEmail);

module.exports = router;
