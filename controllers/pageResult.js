const request = require("superagent");
const formatingObj = require("../utils/formatting");

exports.pageResult = (req, res, next) => {
  const url = req.query.url;

  return request
    .get(url)
    .then(res => {
      const title = formatingObj.findTitle(res.text);
      const links = formatingObj.findLinks(res.text);
    })
    .catch(err => {
      console.log(err);
    });
};
