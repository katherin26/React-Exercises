const express = require("express");
const cors = require("cors"); //This is used for cross origin requests

/*NOTE: Adding Routes for the signin and register, we can do that by requiring routes. */
const authRoutes = require("./routes/auth.js");

const app = express();
const PORT = process.env.PORT || 5000;

require("dotenv").config();

//NOTE: Using Twilio Api. We are going to set up one more route, we are going to do this using webhooks.
//stream is going to trigger a specific endpoint on our server and then we're going to send a message, that
//end point is going to be app.post and inside we can set up our route which is going to be simply /.
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioClient = require("twilio")(accountSid, authToken);

/*NOTE: This is going to allow us to make cross=origin requests */
app.use(cors());

/*NOTE: This will allow us to pass json payloads from the frontEnd to the backEnd. */
app.use(express.json());

/*NOTE: This is a built-in middelware function in express it's going to be urlencoded() */
app.use(express.urlencoded());

/*NOTE: We are ready to create our first route and that's going to be app.get and is going to be a root route.*/
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

//Twilio route
app.post("/", (req, res) => {
  const { message, user: sender, type, members } = req.body;

  if (type === "message.new") {
    members.forEach(({ user }) => {
      if (!user.online) {
        twilioClient.messages.create({
          body: `You have a new message from ${message.user.fullName} - ${message.text}`,
        });
      }
    });
  }
});

/*NOTE: ADD ROUTES */
app.use("/auth", authRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
