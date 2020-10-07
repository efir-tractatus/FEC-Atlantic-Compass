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

app.get('/catwalk/:id', (req, res) => {
  console.log(req.params)
  var id = req.params.id
  const params = [
    axios.get(`http://18.224.37.110/products/${id}`),
    axios.get(`http://18.224.37.110/products/${id}/styles`),
    axios.get(`http://18.224.37.110/products/${id}/related`),
    axios.get(`http://18.224.37.110/qa/questions/?product_id=${id}&count=10`),
    axios.get(`http://18.224.37.110/reviews?product_id=${id}&count=50`),
    axios.get(`http://18.224.37.110/reviews/meta?product_id=${id}`)
  ];

  let results = {};
  return axios.all(params)
    .then(axios.spread((primaryProduct, primaryProductStyles, primaryRelatedProducts, primaryProductQuestions, primaryProductReviews, primaryProductReviewsNumbers) => {
      results = {
        'primaryProduct': primaryProduct.data,
        'primaryProductStyles': primaryProductStyles.data,
        'primaryRelatedProducts': primaryRelatedProducts.data,
        'primaryProductQuestions': primaryProductQuestions.data,
        'primaryProductReviews': primaryProductReviews.data,
        'primaryProductReviewsNumbers': primaryProductReviewsNumbers.data
      };

      let secondRoundCalls = [];
      for (let i = 0; i < primaryRelatedProducts.data.length; i++) {
        secondRoundCalls.push(axios.get(`http://18.224.37.110/products/${primaryRelatedProducts.data[i]}`))
        secondRoundCalls.push(axios.get(`http://18.224.37.110/reviews/meta?product_id=${primaryRelatedProducts.data[i]}`))
        secondRoundCalls.push(axios.get(`http://18.224.37.110/products/${primaryRelatedProducts.data[i]}/styles`))
      }
      return axios.all(secondRoundCalls)
    }))

    .then(axios.spread((...args) => {
      const relatedProductsArray = [];
      let j = 0
      for (let i = 0; i < args.length; i += 3) {
        relatedProductsArray.push(args[i].data)
        relatedProductsArray[j].ratings = args[i + 1].data.ratings
        relatedProductsArray[j].photo = args[i + 2].data.results[0].photos[1]
        j++
      }
      results.relatedProducts = relatedProductsArray
      res.send(results)
    }))

    .catch((err) => {
      console.log(err)
      res.status(404).send('could not find product info')
    })
});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
