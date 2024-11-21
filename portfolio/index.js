const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const accountSid = 'ACb5a276df3336b6da6a1a18427a54429c';
const authToken = '[AuthToken]';
const client = require('twilio')(accountSid, authToken);
client.messages
    .create({
        body: 'Ahoy 👋',
        messagingServiceSid: 'MG4161e6eb282ae371952563e2e44002c5',
        to: '+917563948430'
    })
    .then(message => console.log(message.sid));

const app = express();
app.use(bodyParser.json());

app.post('/send-notification', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        await client.messages.create({
            body: `New message from ${name}:\nEmail: ${email}\nMessage: ${message}`,
            from: '+12567332245',  // Replace with your Twilio number
            to: '+91 7563948430'     // Replace with your mobile number
        });
        res.json({ message: 'Notification sent successfully!' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Notification failed to send' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
