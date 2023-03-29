const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes/index.js');
const PORT = 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log('server listening to the port ', PORT);
});
