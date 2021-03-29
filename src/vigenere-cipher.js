const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt(message, key) {
  	if (!message || !key) {
  		throw new Error;
  	}

   
  }    
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
  		throw new Error;
  	}
  }
}

module.exports = VigenereCipheringMachine;
