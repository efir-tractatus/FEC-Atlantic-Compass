const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 4206;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
  res.status(200).send('./index.html')
});

app.get('/catwalk', (req, res) => {
  return axios.get(`http://18.224.37.110/products`)
    .catch((err) => {
      console.log(`There was an error: ${err}`);
    })
});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
