const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const User = require("../model/User");


const tryCatchMiddleware = require("../middleware/tryCatchMiddleware");

router.post("/register", tryCatchMiddleware(register));
router.post("/login", tryCatchMiddleware(login));
router.get("/me", auth, tryCatchMiddleware(getMe));

router.get("/profile", auth, tryCatchMiddleware(async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.json(user);
}));

router.put("/profile", auth, tryCatchMiddleware(async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(req.user.id, req.body, {
    new: true,
  }).select("-password");
  res.json(updatedUser);
}));

