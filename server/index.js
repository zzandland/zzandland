const express = require('express');
const path = require('path');
const app = express();

const port = 80;

app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, () => {
  console.log(`server lisetening at ${port}`);
});
