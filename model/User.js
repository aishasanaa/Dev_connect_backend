// // model/User.js
// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   bio: { type: String, default: "" },
//   skills: { type: [String], default: [] },
//   github: { type: String, default: "" },
//   experience: { type: String, default: "" },
//   projects: { type: String, default: "" },
//   appliedJobs: [
//   {
//     title: String,
//     company: String,
//     location: String,
//     type: String,
//   }
// ]



// });

// module.exports = mongoose.model("User", userSchema);
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  bio: String,
  skills: [String],
  github: String,
  experience: String,
  projects: String,
  appliedJobs: [
  {
    title: String,
    company: String,
    location: String,
    description: String
  }
]

  
 
});

module.exports = mongoose.model("User", UserSchema);
