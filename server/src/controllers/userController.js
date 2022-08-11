const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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

//login an existing user
exports.userLogin = async (req, res) => {
  try {
    //get user info from request
    const { email, password } = req.body;

    //return response with error if any of the field is empty
    if (!email || !password) {
      return res.status(422).json({ error: "fields are empty", data: null });
    }

    //check if the email is registered with user
    const existedUser = await User.findOne({ email: email }).select(
      "+password"
    );

    console.log(existedUser);

    //if user with this email not found return response with error
    if (!existedUser) {
      return res.status(422).json({ error: "user not found", data: null });
    }

    //authenticate the password
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existedUser.password
    );

    console.log(isPasswordCorrect);

    //if password not matched return response with error
    if (!isPasswordCorrect) {
      return res
        .status(422)
        .json({ error: "incorrect email or password", data: null });
    }

    //sign a JWT token with logged in user info
    jwt.sign(
      {
        name: existedUser.name,
        userId: existedUser._id,
        password: existedUser.password,
        role: existedUser.role,
      },
      process.env.JWT_Secret,
      { expiresIn: "30d" },
      async (err, token) => {
        //if (err) throw err.message;
        if (err) {
          console.log(err.message);
          return res
            .status(422)
            .json({ error: "unable to generate token", data: null });
        }

        console.log(token);

        //return response with user info and token
        return res.status(201).json({
          error: null,
          data: {
            name: existedUser.firstName + " " + existedUser.lastName,
            userID: existedUser._id,
            role: existedUser.role,
            token: token,
          },
        });
      }
    );
  } catch (err) {
    console.log("Error in Login catch : ", err.message);
    return res
      .status(500)
      .json({ error: "unexpected server error while login", data: null });
  }
};
