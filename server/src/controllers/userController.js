const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/userModel");

exports.addNewUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ error: "bad input" });
    }

    const isEmailAlreadyExisted = await User.findOne({ email: email });

    if (isEmailAlreadyExisted) {
      return res.status(409).json({ error: "email already existed" });
    }

    const encryptedPasswrod = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: encryptedPasswrod,
    });

    if (!newUser) {
      return res.status(422).json({ error: "unable to register user" });
    }

    return res.status(200).json({
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
      .status(500)
      .json({ error: "unexpected server error while adding user" });
  }
};

//login an existing user
exports.userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "bad input" });
    }

    const existedUser = await User.findOne({ email: email }).select(
      "+password"
    );

    console.log(existedUser);

    if (!existedUser) {
      return res.status(404).json({ error: "user not found" });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existedUser.password
    );

    console.log(isPasswordCorrect);

    if (!isPasswordCorrect) {
      return res.status(401).json({ error: "incorrect email or password" });
    }

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

        return res.status(200).json({
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
      .json({ error: "unexpected server error while login" });
  }
};
