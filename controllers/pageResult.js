const request = require("superagent");
const formatingObj = require("../utils/formatting");

exports.pageResult = (req, res, next) => {
  const url = req.query.url;

  return request
    .get(url)
    .then(res => {
      console.log(Object.keys(res));
      console.log(res);

      const title = formatingObj.findTitle(res.text);
      const allLinks = formatingObj.findLinks(res.text);
      const links = allLinks[0];
      const uniqueLinks = allLinks[1];
    })
    .catch(err => {
      console.log(err);
    });
};
