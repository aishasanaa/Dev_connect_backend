// const express = require("express");
// const router = express.Router();
// const { register, login, getMe } = require("../controller/authController");
// const auth = require("../middleware/authMiddleware");
// const User = require("../model/User");
// const { getProfile, updateProfile } = require("../controller/profileController");

// const tryCatchMiddleware = require("../middleware/tryCatchMiddleware");

// router.post("/register", tryCatchMiddleware(register));
// router.post("/login", tryCatchMiddleware(login));
// router.get("/me", auth, tryCatchMiddleware(getMe));

// router.get("/profile", auth, tryCatchMiddleware(async (req, res) => {
//   const user = await User.findById(req.user.id).select("-password");
//   res.json(user);
// }));

// router.put("/profile", auth, tryCatchMiddleware(async (req, res) => {
//   const updatedUser = await User.findByIdAndUpdate(req.user.id, req.body, {
//     new: true,
//   }).select("-password");
//   res.json(updatedUser);
// }));


// // GET and PUT profile
// router.get("/profile", auth, getProfile);
// router.put("/profile", auth, updateProfile);

// module.exports = router; 




const express = require("express");
const router = express.Router();
const { register, login, getMe,getProfile,updateProfile } = require("../controller/authController");

const auth = require("../middleware/authMiddleware");
const tryCatchMiddleware = require("../middleware/tryCatchMiddleware");

router.post("/register", tryCatchMiddleware(register));
router.post("/login", tryCatchMiddleware(login));
router.get("/me", auth, tryCatchMiddleware(getMe));

router.get("/profile", auth, tryCatchMiddleware(getProfile));
router.put("/profile", auth, tryCatchMiddleware(updateProfile));

module.exports = router;
