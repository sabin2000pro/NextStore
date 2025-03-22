const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a valid Name for the user"],
    },

    email: {
      type: String,
      unique: true,
    },

    password: {
      type: String,
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },

    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { virtuals: true }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
