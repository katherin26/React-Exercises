const express = require("express");

//NOTE: Importing.
const { signup, login } = require("../controllers/auth.js");

const router = express.Router();

/*NOTE: We have to send the data from the front end
to the backend and only with the post routes and only with the post routes can you send a payload
the firstone is going to be /signup and the second one is going to be /login.
*/
router.post("/signup", signup);
router.post("/login", login);

module.exports = router;
