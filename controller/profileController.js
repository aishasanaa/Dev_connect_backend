// const User = require("../model/User");

// // @desc    Get logged in user's profile
// // @route   GET /api/user/profile
// // @access  Private
// exports.getProfile = async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id).select("-password");
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }
//     res.json(user);
//   } catch (err) {
//     console.error("Error fetching profile:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // @desc    Update logged in user's profile
// // @route   PUT /api/user/profile
// // @access  Private
// exports.updateProfile = async (req, res) => {
//   try {
//     const updatedUser = await User.findByIdAndUpdate(
//       req.user.id,
//       req.body,
//       { new: true, runValidators: true }
//     ).select("-password");

//     if (!updatedUser) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res.json({
//       message: "Profile updated successfully",
//       user: updatedUser,
//     });
//   } catch (err) {
//     console.error("Error updating profile:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// };
