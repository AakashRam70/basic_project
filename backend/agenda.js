// agenda.js
const Agenda = require('agenda');
const nodemailer = require('nodemailer');
require('dotenv').config();

// Initialize Agenda with MongoDB connection
const agenda = new Agenda({ db: { address: process.env.MONGO_URI } });

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Define the Agenda job for sending emails
agenda.define('send email', async (job) => {
    const { to, subject, text } = job.attrs.data;
    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to,
            subject,
            text,
        });
        console.log(`Email sent to ${to}`);
    } catch (error) {
        console.error('Failed to send email:', error);
    }
});

// Start the Agenda scheduler
(async () => {
    await agenda.start();
})();

module.exports = agenda;
