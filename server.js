const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/save-data', (req, res) => {
  const newData = req.body;

  let existingData = [];
  const filePath = path.join(__dirname, 'danniye.json');

  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    existingData = JSON.parse(fileContent);
  } catch (error) {
    console.log('Создание нового файла данных...');
  }

  existingData.push(newData);

  fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2), 'utf8');

  res.send('Данные сохранены');
});

app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});