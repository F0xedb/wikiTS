import { stripWhitespace } from "./strip-whitespace.pipe";

describe("StripStartingWhitespacePipe", () => {
  it("create an instance", () => {
    const pipe = new stripWhitespace();
    expect(pipe).toBeTruthy();
  });
});
