//Create a backend to list orders create razer by order and confirm the payment in razer pay
//- first step is gonna be importing express , mongoose,razorpay.

const express = require("express"); //construir nuestro api.
const mongoose = require("mongoose"); //guardar en la base de datos
const Razorpay = require("razorpay"); //manejar pagos (api);
const dotenv = require("dotenv"); //you need this to read razer pay key and secret from that env file in the project folder.
dotenv.config(); //run node server.js

//Next step is creating a instance of express and after that connect to the mongodb database.
//We use mongoose.connect function and the connection string is coming from dot env file.

const app = express();
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("mongodb connected");
});

//Middleware express.json
//Our express application is gonna read the content of request body in the api.

app.use(express.json({ extended: false }));

//The next step is going to be defining a schema for the orders.
//We use mongoose.schema to define the schema, we have is paid status it's boolean amount,
//is the value that we're gonna pay and the razer pay object contains the order id for razer
//pay payment id and the signature.

const OrderSchema = mongoose.Schema({
  isPaid: Boolean,
  amount: Number,
  razorpay: {
    orderId: String,
    paymentId: String,
    signature: String,
  },
});

//The last step is gonna be creating order model using mongoose.model and the first parameter
//is 'Order': is the name of this collection and the second parameter is the schema that we're
//gonna create a model based on.

const Order = mongoose.model("Order", OrderSchema);

//Let's go for the routes the first api that we're gonna implement is for getting razer pay,
//key from backend, this is the definition of this api the url is /get-razorpay-key and what
//it returns is this json that contains the key and the value is razer pay key id in the env
//file.

app.get("/get-razorpay-key", (req, res) => {
  res.send({ key: process.env.RAZORPAY_KEY_ID });
});

//For getting the key in the .env file, we will create an account in the razer pay
// and get the key from razer pay website.

//The next step is gonna be creating an order in the razer page
//This api it's a post request and the url is create-order inside this async function
//What we do is to create a new instance of razer pay it's coming from const Razorpay = require('razorpay);
//an instance of razer pay package after creating an instance we define options and the options,
//contains two values amount it's coming from the request body and currency it's in the end
//rupees.
//In the next line we call instance.orders.create, what it does is to connect to razorpay
//and create an order for us, if the order is null, we send this error('Some error occurred),
//Otherwise we send the order to the front end if there is an error, we return status,
//of error and the error message to the frontend.

app.post("/create-order", async (req, res) => {
  try {
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    });
    const options = {
      amount: req.body.amount,
      currency: "INR",
    };
    const order = await instance.orders.create(options);
    if (!order) return res.status(500).send("Some error ocurred");
    res.send(order);
  } catch (error) {
    res.status(500).send(error);
  }
});

//The next step is gonna be creating pay order api,
//Is a post request and inside this async function what we do is to read the amount raiser pay payment id
//razer  pay order id and razer based signature from frontend and then create a new order based on the order
//model in the mongodb database and then save that order after that we send this message payment was successful
//if there is an error , return the error message to the front end .

app.post("/pay-order", async (req, res) => {
  try {
    const { amount, razorpayPaymentId, razorpayOrderId, razorpaySignature } =
      req.body;
    const newPayment = Order({
      isPaid: true,
      amount: amount,
      razorpay: {
        orderId: razorpayOrderId,
        paymentId: razorpayPaymentId,
        signature: razorpaySignature,
      },
    });
    await newPayment.save();
    res.send({
      msg: "Payment was succesfull",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

//The next step is gonna be creating an api to list orders we're gonna show list of orders to the user it's very
//simple we just defined list orders as a get request and inside that we get all orders in the database and return
//them to the frontend to create express app, we need to define the port and the port is coming from env.port but
//if it's null we use 5000 as a default backend port.
//at the end it's time to call app.listen to the port and show this message in the terminal.

app.get("/list-orders", async (req, res) => {
  const orders = await Order.find();
  res.send(orders);
});

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`server started on http://localhost:${port}`)
);
