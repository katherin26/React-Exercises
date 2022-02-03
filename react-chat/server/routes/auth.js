const express = require("express");
const router = express.Router();

/*NOTE: We have to send the data from the front end
to the backend and only with the post routes */
router.post("/signup");
router.post("/login");
