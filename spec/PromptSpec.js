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
    expect(prompt.pickNegAdj()).toBe("sad");
  });




});
