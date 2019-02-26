const cheerio = require("cheerio");

const findTitle = res => {
  const html = res.text;
  const $ = cheerio.load(res);

  let title = $.html("title");
  title = title.match("<title>(.*?)</title>")[0];
  let regex = "<title>";
  let regexEnd = "</title>";
  title = title.replace(regex, "");
  title = title.replace(regexEnd, "");
  return title;
};

module.exports = findTitle;
