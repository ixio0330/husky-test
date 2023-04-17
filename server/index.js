const express = require('express');

const app = express();

app.use(express.static('wwwroot'));

app.listen(3001, () => {
  console.log('http://localhost:3001');
});

app.get('/', (_, res) => {
  const filePath = path.join(__dirname, 'wwwroot', 'index.html');
  res.sendFile(filePath);
});
