const cheerio = require("cheerio");

const formatingObj = {
  findTitle: function findTitle(res) {
    // const html = res.text;
    const $ = cheerio.load(res);

    let title = $.html("title");
    title = title.match("<title>(.*?)</title>")[0];
    let regex = "<title>";
    let regexEnd = "</title>";
    title = title.replace(regex, "");
    title = title.replace(regexEnd, "");
    return title;
  },
  findLinks: function findLinks(res) {
    const $ = cheerio.load(res);
    let links = $.html("a");
    links = links.match(/<a[^>]*>([^<]+)<\/a>/g);

    const linksAndUnique = links => {
      const finalArr = [];
      const unique = [];
      links.forEach(ref => {
        if (!unique.includes(ref)) unique.push(ref);
      });
      finalArr.push(links.length);
      finalArr.push(unique.length);
      return finalArr;
    };
    return linksAndUnique(links);
  }
};

module.exports = formatingObj;
