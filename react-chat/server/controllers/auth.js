const { connect } = require("getstream");
const bcrypt = require("bcrypt");
const StreamChat = require("stream-chat").StreamChat;
const crypto = require("crypto");

/*NOTE: This is going to allow us to call the enviroment variables right inside of our node application*/
require("dotenv").config();

const api_key = process.env.STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;
const api_id = process.env.STREAM_API_ID;

/*NOTE: Now we have to implement the logic of receiving the data from the front end and finally creating 
or logging in the user a reasonable first step would be create the sign up first because we have to have the 
users to be able to log them in 
*/
const signup = async (req, res) => {
  try {
    const { fullName, username, password, phoneNumber } = req.body;

    const userId = crypto.randomBytes(16).toString("hex");
    const serverClient = connect(api_key, api_secret, api_id);
    //The 10 specifies the level of encryption.
    const hashedPassword = await bcrypt.hash(password, 10);
    const token = serverClient.createUserToken(userId);

    res
      .status(200)
      .json({ token, fullName, username, userId, hashedPassword, phoneNumber });
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: error });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const serverClient = connect(api_key, api_secret, api_id);
    const client = StreamChat.getInstance(api_key, api_secret, api_id);
    const { users } = await client.queryUsers({ name: username });
    //If there not users return an error message.
    if (!users.length)
      return res.status(400).json({ message: "User not found" });
    //If we go over this point that means that our user does exist and we have to decrypt the password
    //and see if it matches the one that the user created the account with , so we can say const succes is
    //equal await bcrypt.compare()
    const success = await bcrypt.compare(password, users[0].hashedPassword);
    const token = serverClient.createUserToken(users[0].id);
    if (success) {
      res.status(200).json({
        token,
        fullName: users[0].fullName,
        username,
        userId: users[0].id,
      });
    } else {
      res.status(500).json({ message: "Incorrect Password" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

/*NOTE: Now we are exporting the functionalities which are going to happen once we go to specific route  */
module.exports = { signup, login };
