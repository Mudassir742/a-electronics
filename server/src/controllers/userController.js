const bcrypt = require("bcrypt");

const User = require("../models/userModel");

//create an account for new user
exports.addNewUser = async (req, res) => {
  try {
    //get user info from request
    const { firstName, lastName, email, password } = req.body;

    //return response with error if any of the field is empty
    if (!firstName || !lastName || !email || !password) {
      return res.status(422).json({ error: "fields are empty", data: null });
    }

    //check if the email is already registered with any other user
    const isEmailAlreadyExisted = await User.find({ email: email });

    //if email is already registered return response with error
    if (isEmailAlreadyExisted.length !== 0) {
      return res
        .status(422)
        .json({ error: "email already existed", data: null });
    }

    //encrypt the password before saving in database
    const encryptedPasswrod = await bcrypt.hash(password, 10);

    //create a new user and save it in database
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: encryptedPasswrod,
    });

    //if user is not saved return response with error
    if (!newUser) {
      return res
        .status(422)
        .json({ error: "unable to register user", data: null });
    }

    //return the newly registered name & role in response
    return res.status(201).json({
      error: null,
      data: {
        userID: newUser._id,
        role: newUser.role,
        name: newUser.firstName + " " + newUser.lastName,
      },
    });
  } catch (err) {
    console.log(err.message);
    return res
      .status(422)
      .json({ error: "unexpected error in catch", data: null });
  }
};
