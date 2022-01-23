/*WE'LL BUILD
  Amazon data, Scraper is the easiest way to get access to product, price, sales and reviews data from 
  Amazon in JSON format.
*/

/*Features: 
  GET Search Results.
  GET Product Offer.
  GET Product Reviews.
  GET Product Details.
*/

/*This is going to be our api instead of here we can say :
const express = 
const request = 
const app = 
const PORT =  
app.use(express.json()) = this is going to allow our application to parse json input .
THen every express application needs  at least one route , app.get(the first one  is the initial route
   route  )

   AT THE END TO RUN IT = npm run dev .
*/

const express = require("express");
const request = require("request-promise");

const PORT = process.env.PORT || 5000;
const app = express();

const generateScrapetUrl = (apiKey) =>
  `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;

app.use(express.json());

//  Welcome route
// We have our request and the response then we can return something we're going to have a function
// block right inside of here, so what we want to send back once somebody visits this, specific url
//on our api. So we can said res.send(`asbsdfds`);
app.get("/", async (req, res) => {
  res.send("Welcome to Amazon Scraper API!!.....");
});

//GET PRODUCT DETAILS
//:productId = This means that the product is going to be dynamic, then we can add a callback function
//and is going to be async and it's also going to have a request.

app.get("/products/:productId", async (req, res) => {
  const { productId } = req.params;
  const { api_key } = req.query;

  try {
    const response = await request(
      `${generateScrapetUrl(
        api_key
      )}&url=https://www.amazon.com/dp/${productId}`
    );
    res.json(JSON.parse(response));
  } catch (error) {
    res.json(error);
  }
});

//GET PRODUCT REVIEWS.

app.get("/products/:productId/reviews", async (req, res) => {
  const { productId } = req.params;
  const { api_key } = req.query;

  try {
    const response = await request(
      `${generateScrapetUrl(
        api_key
      )}&url=https://www.amazon.com/product-reviews/${productId}`
    );
    res.json(JSON.parse(response));
  } catch (error) {
    res.json(error);
  }
});

//GET PRODUCT OFFERS.

app.get("/products/:productId/offers", async (req, res) => {
  const { productId } = req.params;
  const { api_key } = req.query;

  try {
    const response = await request(
      `${generateScrapetUrl(
        api_key
      )}&url=https://www.amazon.com/gp/offer-listing/${productId}`
    );
    res.json(JSON.parse(response));
  } catch (error) {
    res.json(error);
  }
});

//GET SEARCH RESULTS.

app.get("/search/:searchQuery", async (req, res) => {
  const { searchQuery } = req.params;
  const { api_key } = req.query;

  try {
    const response = await request(
      `${generateScrapetUrl(
        api_key
      )}&url=https://www.amazon.com/s?k=${searchQuery}`
    );
    res.json(JSON.parse(response));
  } catch (error) {
    res.json(error);
  }
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
