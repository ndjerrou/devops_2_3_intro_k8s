const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('OK');
});

app.listen(2000, () => {
  console.log('Listening on port 2000');
});
