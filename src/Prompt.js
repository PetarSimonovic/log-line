"use strict";

class Prompt {

  constructor(){
  this.posAdj = "testPosAdj";
};

  pickPosAdj() {
    let posAdjBank = ["happy"];
    let choice = Math.floor(Math.random() * posAdjBank.length);
    console.log(choice);
    this.posAdj = posAdjBank[choice];
    return this.posAdj;
  };


}
