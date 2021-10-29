const jwt = require("jsonwebtoken");

const fetchAdmin = (req, res, next) => {
  const token = req.header("auth-admin");
  if (!token) return res.status(401).json({msg: "Access Denied"});

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.admin = verified;
    next();
  } catch (error) {
    res.status(401).json({Error: "Unauthorized Access"});
  }
};

module.exports = fetchAdmin;
