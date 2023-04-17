const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const nString = n.toString();
  let max = 0;

  for (let i = 0; i < n.toString().length; i++) {
    const element = Number(nString.substring(0, i) + nString.substring(i + 1));
    if (element > max) {
      max = element
    }
  }

  return max;
}

module.exports = {
  deleteDigit,
};
