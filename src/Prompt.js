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
    let posAdjBank = ["happy", "friendly", "charismatic", "gentle", "fast", "rich", "talented", "musical"];
    let posAdj = posAdjBank[this.makeChoice(posAdjBank)];
    console.log(posAdj)
    return posAdj
  };

  pickNegAdj() {
    let negAdjBank = ["lazy", "slow", "hungry", "immoral", "rude", "insulting", "violent", "tired", "ignorant"];
    let negAdj = negAdjBank[this.makeChoice(negAdjBank)];
    console.log(negAdj)
    return negAdj
  };

  pickNoun() {
    let nounBank = ["computer", "cat", "vampire", "plant", "chameleon", "penguin", "garden", "rubber duck"];
    let noun = nounBank[this.makeChoice(nounBank)];
    return noun
  };

  pickVerbFirstPerson() {
    let verbBankFP = ["rescue", "thank", "serenade", "create", "read", "teach"];
    let verbFP = verbBankFP[this.makeChoice(verbBankFP)];
    return verbFP
  };

  pickVerbThirdPerson() {
    let verbBankTP = ["destroys", "ruins", "surrenders to", "breaks", "threatens", "insults", "cajoles"];
    let verbTP = verbBankTP[this.makeChoice(verbBankTP)];
    return verbTP
  };


  constructLogLine() {
    return `A ${this.pickPosAdj()} but ${this.pickNegAdj()} ${this.pickNoun()} must ${this.pickVerbFirstPerson()} a ${this.pickPosAdj()} ${this.pickNoun()} before a ${this.pickNegAdj()} ${this.pickNoun()} ${this.pickVerbThirdPerson()} a ${this.pickNoun()}`
  };
}
