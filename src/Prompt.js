"use strict";

class Prompt {

  constructor(){
  this.posAdj_1 = "testPosAdj";
  this.negAdj_2 = "testNegAdj";
};

  assignPosAdj_1() {
    return this.pickPosAdj();
  }

  pickPosAdj() {
    let posAdjBank = ["happy"];
    let choice = Math.floor(Math.random() * posAdjBank.length);
    console.log(choice);
    let posAdj = posAdjBank[choice];
    console.log(posAdj)
    return posAdj
  };

  pickNegAdj() {
    let negAdjBank = ["lazy"];
    let choice = Math.floor(Math.random() * negAdjBank.length);
    console.log(choice);
    let negAdj = negAdjBank[choice];
    console.log(negAdj)
    return negAdj
  };

  pickNoun() {
    let nounBank = ["computer"];
    let choice = Math.floor(Math.random() * nounBank.length);
    console.log(choice);
    let noun = nounBank[choice];
    console.log(noun)
    return noun
  };

  pickVerbFirstPerson() {
    let verbBank = ["rescue"];
    let choice = Math.floor(Math.random() * verbBank.length);
    console.log(choice);
    let verb = verbBank[choice];
    console.log(verb)
    return verb
  };

  pickVerbThirdPerson() {
    let verbBank = ["destroys"];
    let choice = Math.floor(Math.random() * verbBank.length);
    console.log(choice);
    let verb = verbBank[choice];
    console.log(verb)
    return verb
  };


  constructLogLine() {
    return `A ${this.pickPosAdj()} but ${this.pickNegAdj()} ${this.pickNoun()} must ${this.pickVerbFirstPerson()} a ${this.pickPosAdj()} ${this.pickNoun()} before a ${this.pickNegAdj()} ${this.pickNoun()} ${this.pickVerbThirdPerson()} a ${this.pickNoun()}`
  };
}
