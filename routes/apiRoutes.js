const { homepage } = require("../controllers/homepage");
const { pageResult } = require("../controllers/pageResult");

const apiRoutes = require("express").Router();

apiRoutes.route("/").get(homepage);
apiRoutes.route("/result").get(pageResult);

module.exports = apiRoutes;
