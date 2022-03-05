import express from "express";
import { signin, signup } from "../controllers/user.js";

const router = express.Router();

//Why post, because you have to send some data to the backend more specifically , you need
//to send all of the details from the form to the backend.
router.post("/signin", signin);
router.post("/signup", signup);

export default router;
