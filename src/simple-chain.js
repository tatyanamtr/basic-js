const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length();
  },
  addLink(value) {
    // if (value) {
    this.value = '( '+String(value)+ ' )';

   //  }
   //  else {
   //    value = '( )';
   // }
   this.chain.push(this.value);
   return this;

  },
  removeLink(position) {
    if (typeof(position) == "number" && position%1 ==0) {
      this.chain.splice(position-1, 1);

    }
    else {
      this.chain = [];
      throw new Error;
      
    }
    return this;
  },
  reverseChain() {
   this.chain.reverse();
   return this;
  },
  finishChain() {
    let result = this.chain.join('~~');
    this.chain = [];
   return result;
   
  }
};

module.exports = chainMaker;
