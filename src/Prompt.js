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

  constructLogLine() {
    return `A ${this.pickPosAdj()} but ${this.pickNegAdj()}`
  };
}
