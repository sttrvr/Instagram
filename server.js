
import { createClient } from '@supabase/supabase-js'

const express = require("express");
const { createClient } = require("@supabase/supabase-js");

const app = express();
app.use(express.json());

// Env'dan o'qish
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Ma'lumot saqlash
app.post("/save", async (req, res) => {
  const { name, age } = req.body;
  const { error } = await supabase.from("users").insert([{ name, age }]);
  if (error) {
    console.error(error);
    return res.status(500).send("❌ Saqlashda xatolik");
  }
  res.send("✅ Ma'lumot saqlandi!");
});

// Ma'lumot olish
app.get("/users", async (req, res) => {
  const { data, error } = await supabase.from("users").select("*");
  if (error) {
    console.error(error);
    return res.status(500).send("❌ O'qishda xatolik");
  }
  res.json(data);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server ishlayapti: ${PORT}`));
