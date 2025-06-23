const express = require("express");
const { register,login,getMe}=require("../controller/authController");
const tryCatchMiddleware = require("../middleware/tryCatch");
const router = express.Router();

router.post("/register",tryCatchMiddleware( register));
router.post("/login",tryCatchMiddleware(login));
router.get("/me",tryCatchMiddleware( getMe));

module.exports = router;

