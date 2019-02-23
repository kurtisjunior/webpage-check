const { homepage } = require("../controllers/homepage");
const apiRoutes = require("express").Router();

apiRoutes.route("/").get(homepage);

module.exports = apiRoutes;
