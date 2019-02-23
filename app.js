const apiRoutes = require("./routes/apiRoutes");

const express = require("express");
const app = express();
const port = 9090;

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use("/api", apiRoutes);

module.exports = app;

//sort out key and config for authors big five
