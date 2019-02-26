const formatingObj = require("../utils/formatting");

describe("formatting", () => {
  it("finds the title", () => {
    const test = "<title>Arsenal.com - Homepage</title>";
    expect(formatingObj.findTitle(test)).toBe("Arsenal.com - Homepage");
  });
});
