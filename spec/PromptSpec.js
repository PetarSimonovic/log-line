"use strict"

describe("Prompt", function() {
  var prompt;

  beforeEach(function() {
    prompt = new Prompt();
    spyOn(prompt,'makeChoice').and.returnValue(0);
  });

  it("should pick a positive adjective from the posAdjBank array", function () {
    expect(prompt.pickPosAdj()).toBe("happy");
  });

  it("should pick a negative adjective from the negAdjBank array", function () {
    expect(prompt.pickNegAdj()).toBe("lazy");
  });


  it("should pick a noun from the nounBank array", function () {
    expect(prompt.pickNoun()).toBe("computer");
  });

  it("should pick a first-person verb from the verbBank array", function () {
    expect(prompt.pickVerbFirstPerson()).toBe("rescue");
  });

  it("should pick a third-person verb from the verbBank array", function () {
    expect(prompt.pickVerbThirdPerson()).toBe("destroys");
  });

  it("should use the correct article for a noun", function () {
    expect(prompt.setArticle("alligator")).toBe("an alligator");
  });

  it("should use the article for a consonant noun", function () {
    expect(prompt.setArticle("turkey")).toBe("a turkey");
  });




  // it("should assign a word from posAdjBank array to the posAdj_1 variable", function () {
  //   expect(prompt.assignPosAdj_1()).toBe("happy");
  // });

  it("should construct the log line", function () {
    expect(prompt.constructLogLine()).toBe("A happy but lazy computer must rescue a happy computer before a lazy computer destroys a computer");
  });


  // it("should randomly pick a negative adjective from the negAdjBank array", function () {
  //   expect(prompt.pickNegAdj()).toBe("sad");
  // });




});
