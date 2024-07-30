// server/index.js

const express = require('express');
const app = express();
const port = 3001; // 클라이언트와 포트를 다르게 설정

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
