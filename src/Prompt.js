"use strict";

class Prompt {

  constructor(){
  this.posAdj_1 = "testPosAdj";
  this.negAdj_2 = "testNegAdj";
};

  makeChoice(bank) {
    return Math.floor(Math.random() * bank.length);
  }

  pickPosAdj() {
    let posAdjBank = ["happy"];
    let posAdj = posAdjBank[this.makeChoice(posAdjBank)];
    console.log(posAdj)
    return posAdj
  };

  pickNegAdj() {
    let negAdjBank = ["lazy"];
    let negAdj = negAdjBank[this.makeChoice(negAdjBank)];
    console.log(negAdj)
    return negAdj
  };

  pickNoun() {
    let nounBank = ["computer"];
    let noun = nounBank[this.makeChoice(nounBank)];
    return noun
  };

  pickVerbFirstPerson() {
    let verbBankFP = ["rescue"];
    let verbFP = verbBankFP[this.makeChoice(verbBankFP)];
    return verbFP
  };

  pickVerbThirdPerson() {
    let verbBankTP = ["destroys"];
    let verbTP = verbBankTP[this.makeChoice(verbBankTP)];
    return verbTP
  };


  constructLogLine() {
    return `A ${this.pickPosAdj()} but ${this.pickNegAdj()} ${this.pickNoun()} must ${this.pickVerbFirstPerson()} a ${this.pickPosAdj()} ${this.pickNoun()} before a ${this.pickNegAdj()} ${this.pickNoun()} ${this.pickVerbThirdPerson()} a ${this.pickNoun()}`
  };
}
