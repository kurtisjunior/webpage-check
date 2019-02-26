const request = require("superagent");
const findTitle = require("../utils/formatting");

exports.pageResult = (req, res, next) => {
  const url = req.query.url;

  return request
    .get(url)
    .then(res => {
      const title = findTitle(res.text);
      console.log(title);
    })
    .catch(err => {
      console.log(err);
    });
};
