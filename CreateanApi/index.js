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

app.use(express.json());

//  Welcome route
app.get("/", async (req, res) => {
  res.send("Welcome to Amazon Scraper API!!");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
