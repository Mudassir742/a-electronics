const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [(true, "enter first name")],
    },
    lastName: {
      type: String,
      required: [(true, "enter last name")],
    },
    email: {
      type: String,
      required: [(true, "enter user email")],
    },
    password: {
      type: String,
      select: false,
      required: [(true, "enter user password")],
    },
    role: {
      type: String,
      enum: ["admin", "customer"],
      default: "customer",
    },
    address: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", userSchema);
