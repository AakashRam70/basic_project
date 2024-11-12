// controllers/emailController.js
const agenda = require('../agenda');

// Controller function to handle scheduling email
exports.scheduleEmail = async (req, res) => {
    const { email, subject, text } = req.body;

    if (!email || !subject || !text) {
        return res.status(400).json({ error: 'Missing email, subject, or text' });
    }

    try {
        // Schedule the email to be sent 1 hour later
        await agenda.schedule('in 1 hour', 'send email', { to: email, subject, text });

        res.status(200).json({ message: 'Email scheduled to be sent in 1 hour' });
    } catch (error) {
        console.error('Error scheduling email:', error);
        res.status(500).json({ error: 'Failed to schedule email' });
    }
};
