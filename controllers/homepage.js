const path = require("path");

exports.homepage = (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "/views/homepage.html"));
};
