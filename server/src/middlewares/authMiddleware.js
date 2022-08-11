const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    return res.status(401).json({ error: "unauthorized" });
  }

  jwt.verify(token, process.env.JWT_Secret, (err, authorizedData) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "unexpected server error while fetching data" });
    }

    req.user = authorizedData;

    return next();
  });
};

exports.verifyRole = (Role) => {
  return (req, res, next) => {
    const { user } = req;

    if (!user) {
      return res.status(401).json({ error: "unauthorized", data: null });
    }

    if (Role.includes(user.role)) {
      return next();
    }

    return res.status(404).json({ error: "page not found" });
  };
};
