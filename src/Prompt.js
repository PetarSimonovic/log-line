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
    let posAdjBank = ["happy", "friendly", "charismatic", "gentle", "fast", "rich", "talented", "musical", "orgnaised", "chic", "fashionable", "intelligent", "smart", "harmonious", "famous", "generous", "fun", "funny", "traditional"];
    let posAdj = posAdjBank[this.makeChoice(posAdjBank)];
    console.log(posAdj)
    return posAdj
  };

  pickNegAdj() {
    let negAdjBank = ["lazy", "slow", "hungry", "immoral", "rude", "insulting", "violent", "tired", "ignorant", "angry", "annoyed", "alienated", "sleepy", "boring", "bored", "bumbling", "clumsy", "evil", "satanic", "disenchanted", "borish", "vulgar"];
    let negAdj = negAdjBank[this.makeChoice(negAdjBank)];
    console.log(negAdj)
    return negAdj
  };

  pickNoun() {
    let nounBank = ["computer", "cat", "vampire", "plant", "chameleon", "penguin", "garden", "rubber duck", "alien", "turkey", "bartender", "lawyer", "criminal", "horse thief", "auditor", "beekeper", "hot dog", "astronaut", "scuba diver", "dancer", "coder", "liar", "CEO", "cook", "writer", "guitarist", "rapper", "singer", "engineer"];
    let noun = nounBank[this.makeChoice(nounBank)];
    return noun
  };

  pickVerbFirstPerson() {
    let verbBankFP = ["rescue", "thank", "serenade", "create", "read", "teach", "help", "cheer up", "console", "hug", "understand", "vindicate", "defend", "find", "free", "cooperate with"];
    let verbFP = verbBankFP[this.makeChoice(verbBankFP)];
    return verbFP
  };

  pickVerbThirdPerson() {
    let verbBankTP = ["destroys", "ruins", "surrenders to", "breaks", "threatens", "insults", "cajoles", "murders", "robs", "ignores", "fights", "attacks", "hurts", "upsets", "drains", "vandalises", "truncates", "annoys"];
    let verbTP = verbBankTP[this.makeChoice(verbBankTP)];
    return verbTP
  };

  setArticle(word) {
    let vowels = ["a", "e", "i", "o", "u"]
    let letter = word.charAt(0)
    if (vowels.includes(letter)) {
      return `an ${word}`
    }
    else {
      return `a ${word}`
    }
  }

  constructLogLine() {
    let firstNoun = this.setArticle(this.pickPosAdj());
    return `${firstNoun.replace(`${firstNoun.charAt(0)}`, "A")} but ${this.pickNegAdj()} ${this.pickNoun()} must ${this.pickVerbFirstPerson()} ${this.setArticle(this.pickPosAdj())} ${this.pickNoun()} before ${this.setArticle(this.pickNegAdj())} ${this.pickNoun()} ${this.pickVerbThirdPerson()} ${this.setArticle(this.pickNoun())}`
  };
}
