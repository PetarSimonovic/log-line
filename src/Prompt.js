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
    let posAdjBank = ["happy", "sentient", "friendly", "charismatic", "gentle", "fast", "rich", "talented", "musical", "organised", "chic", "fashionable", "intelligent", "smart", "harmonious", "famous", "generous", "fun", "funny", "traditional", "honest", "bright", "adventurous", "easygoing", "chilled out", "considerate", "loyal", "sincere", "sympathetic"];
    let posAdj = posAdjBank[this.makeChoice(posAdjBank)];
    console.log(posAdj)
    return posAdj
  };

  pickNegAdj() {
    let negAdjBank = ["lazy", "slow", "hungry", "immoral", "rude", "insulting", "violent", "tired", "ignorant", "angry", "annoyed", "alienated", "sleepy", "boring", "bored", "bumbling", "clumsy", "evil", "satanic", "disenchanted", "boorish", "vulgar", "unfashionable", "moaning", "aggressive", "belligerent", "hostile", "cruel", "repressed", "uptight"];
    let negAdj = negAdjBank[this.makeChoice(negAdjBank)];
    console.log(negAdj)
    return negAdj
  };

  pickNoun() {
    let nounBank = ["watch maker", "ghost", "ninja", "pond", "frog", "dog", "robot", "android", "computer", "cat", "vampire", "plant", "chameleon", "penguin", "garden", "rubber duck", "alien", "turkey", "bartender", "lawyer", "criminal", "horse thief", "auditor", "beekeper", "hot dog", "astronaut", "scuba diver", "dancer", "coder", "liar", "CEO", "cook", "writer", "guitarist", "pedestrian", "electronic musician", "DJ", "wrestler", "rapper", "king", "queen", "pilot", "singer", "planet", "book", "engineer", "werewolf", "witch", "detective", "farmer", "editor", "writer", "brewer", "doctor", "salad", "pizza"];
    let noun = nounBank[this.makeChoice(nounBank)];
    return noun
  };

  pickVerbFirstPerson() {
    let verbBankFP = ["rescue", "thank", "serenade", "create", "teach", "help", "cheer up", "console", "hug", "understand", "vindicate", "defend", "find", "free", "cooperate with", "simulate", "study", "harness", "believe", "launch", "inspire", "enlighten", "hide", "surprise"];
    let verbFP = verbBankFP[this.makeChoice(verbBankFP)];
    return verbFP
  };

  pickVerbThirdPerson() {
    let verbBankTP = ["destroys", "ruins", "surrenders to", "breaks", "threatens", "insults", "cajoles", "murders", "robs", "ignores", "fights", "attacks", "hurts", "upsets", "drains", "vandalises", "truncates", "annoys", "swears at", "slaps", "glares at", "intimidates"];
    let verbTP = verbBankTP[this.makeChoice(verbBankTP)];
    return verbTP
  };

  pickVerbPastTense() {
    let verbBankPast = ["destroyed", "ate", "ruined", "broke", "threatened", "insulted", "cajoled", "attacked", "ignored", "fought", "hurt", "upset", "drained", "vandalised", "truncated", "annoyed", "swore at", "slapped", "glared at", "intimidated"];
    let verbPast = verbBankPast[this.makeChoice(verbBankPast)];
    return verbPast
  }

  pickExcuse() {
  let excuseBank = ["missed your wedding", "didn't come to work", "missed the deadline", "forgot your birthday", "wasn't at school", "missed your dinner party", "ate all of the cake", "sold your record collection", "threw away your hat", "fell asleep while you were talking", "interrupted you"];
  let excuse = excuseBank[this.makeChoice(excuseBank)];
  return excuse
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

  constructExcuse() {
    return `Sorry I ${this.pickExcuse()} but I had to ${this.pickVerbFirstPerson()} ${this.setArticle(this.pickPosAdj())} ${this.pickNoun()} because ${this.setArticle(this.pickNegAdj())} ${this.pickNoun()} ${this.pickVerbPastTense()} ${this.setArticle(this.pickNoun())}`
  };
}
