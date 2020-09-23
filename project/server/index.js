import axios from 'axios';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 4206;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/catwalk', (req, res) => {
  return axios.get(`http://18.224.37.110/products/list`)
    .catch((err) => {
      console.log(`There was an error: ${err}`)
    })
});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
