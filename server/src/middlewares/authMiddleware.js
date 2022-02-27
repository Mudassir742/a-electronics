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
  jwt.verify(token, process.env.JWT_Secret, (err, authorizedData) => {
    if (err) {
      return res
        .status(422)
        .json({ error: "unexpected error while comparing token", data: null });
    }

    //attach the decoded user info with the request
    req.user = authorizedData;

    //token is authenticated
    return next();
  });
};

//middleware for user authorization
exports.verifyRole = (Role) => {
  return (req, res, next) => {
    //get the user info from request
    const { user } = req;

    //if user not given return response with error
    if (!user) {
      return res.status(422).json({ error: "token not given", data: null });
    }

    //if the user role match with the authorized roles send request to controller
    if (Role.includes(user.role)) {
      return next();
    }

    //if role not found return response with error
    return res.status(422).json({ error: "page not found", data: null });
  };
};
