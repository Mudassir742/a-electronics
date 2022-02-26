const jwt = require("jsonwebtoken");

//middleware for user authentication
exports.verifyToken = (req, res, next) => {
  //get user token from request header
  const token = req.headers["x-access-token"];

  //if token not given return response with error
  if (!token) {
    return res.status(422).json({ error: "token not given" });
  }

  //verify and decode the token info
  jwt.verify(token, process.env.JWT_Screte, (err, authorizedData) => {
    if (err) {
      return res
        .status(422)
        .json({ error: "unexpected error while comparing token", data: null });
    }

    req.user = authorizedData;

    //token is authenticated
    return next();
  });
};
