import piglatin from "./piglatin";

describe("piglatin", () => {
  it("works", () => {
    const inputToOutput = {
      hello: "ellohay",
      smile: "ilesmay",
      eat: "eatway",
      squeal: "ealsquay",
      question: "estionquay",
      yellow: "ellowyay",
      mystery: "ysterymay"
    };

    Object.keys(inputToOutput).forEach(input =>
      expect(piglatin(input)).toEqual(inputToOutput[input])
    );
  });
});
