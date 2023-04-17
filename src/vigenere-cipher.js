const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(reverse = true) {
    this.reverse = reverse;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
  
    // Convert input to upper case once, rather than multiple times inside the loop
    message = message.toUpperCase();
    key = key.toUpperCase();
  
    let encryptedMessage = '';
    let j = 0; // Index of current character in key
  
    for (let i = 0; i < message.length; i++) {
      const char = message[i];
  
      if (char.match(/[A-Z]/)) { // Check if the character is an upper-case letter
        const messageCharCode = char.charCodeAt(0) - 65;
        const keyCharCode = key.charCodeAt(j % key.length) - 65;
        const encryptedCharCode = (messageCharCode + keyCharCode) % 26 + 65;
  
        encryptedMessage += String.fromCharCode(encryptedCharCode);
        j++;
      } else {
        encryptedMessage += char;
      }
    }
  
    return this.reverse ? encryptedMessage : encryptedMessage.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    const encryptedMessageLength = encryptedMessage.length;
    const keyLength = key.length;
    let decryptedMessage = '';

    for (let i = 0, j = 0; i < encryptedMessageLength; i++) {
      if (encryptedMessage[i].match(/[A-Z]/)) {
        const encryptedCharCode = encryptedMessage.charCodeAt(i) - 65;
        const keyCharCode = key.charCodeAt(j % keyLength) - 65;
        const decryptedCharCode = (encryptedCharCode - keyCharCode + 26) % 26 + 65;

        decryptedMessage += String.fromCharCode(decryptedCharCode);
        j++;
      } else {
        decryptedMessage += encryptedMessage[i];
      }
    }

    return this.reverse ? decryptedMessage : decryptedMessage.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
