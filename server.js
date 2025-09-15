import express from "express";
import { createClient } from "@supabase/supabase-js";

const app = express();
app.use(express.json());

// Supabase ulanishi
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

// Misol uchun: user qo‘shish
app.post("/add", async (req, res) => {
  const { name, age } = req.body;

  const { data, error } = await supabase
    .from("users")
    .insert([{ name, age }]);

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

// Misol uchun: userlarni olish
app.get("/users", async (req, res) => {
  const { data, error } = await supabase.from("users").select("*");
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server ${port}-portda ishlayapti`);
});
