"use strict"

describe("Prompt", function() {
  var prompt;

  beforeEach(function() {
    prompt = new Prompt();
  });

  it("should randomly pick a positive adjective from the posAdjBank array", function () {
    expect(prompt.pickPosAdj()).toBe("happy");
  });

  it("should randomly pick a negative adjective from the negAdjBank array", function () {
    expect(prompt.pickNegAdj()).toBe("lazy");
  });

  // it("should assign a word from posAdjBank array to the posAdj_1 variable", function () {
  //   expect(prompt.assignPosAdj_1()).toBe("happy");
  // });

  it("should construct the log line", function () {
    expect(prompt.constructLogLine()).toBe("A happy but lazy");
  });


  // it("should randomly pick a negative adjective from the negAdjBank array", function () {
  //   expect(prompt.pickNegAdj()).toBe("sad");
  // });




});
