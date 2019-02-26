const apiRoutes = require("./routes/apiRoutes");

const express = require("express");
const app = express();
const port = 9090;

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(express.static("/public"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
app.use(express.static("public"));

app.use("/api", apiRoutes);

module.exports = app;

//sort out key and config for authors big five

/*
App should:
1. get the title X
2. get the number of links on page
3. number of unique domains the links go to
4. whether the page was served securely
5. check if google analytics was used 
*/
