const request = require("superagent");
const cheerio = require("cheerio");

exports.pageResult = (req, res, next) => {
  const url = req.query.url;

  return request
    .get(url)
    .then(res => {
      const html = res.text;
      const $ = cheerio.load(html);
      let title = $.html("title");
      title = title.match(/title(.*?)title>/);

      console.log(title[0]);
    })
    .catch(err => {
      console.log(err);
    });
};

//begin to regex and find what the spec needs
