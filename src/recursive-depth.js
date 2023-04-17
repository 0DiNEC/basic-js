const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let count = 0;
    if (Array.isArray(arr)) {
      count++;
      count += Math.max(0, ...arr.map( item => this.calculateDepth(item)));
    }
    return count;
  }
}


// calculateDepth(arr, c= 0) {
//   let count = c;

//   for (const element of arr) {
//     const e = element;
//     count += Array.isArray(e) ? this.calculateDepth(e) : 0;
//   }

//   return count;
// }

module.exports = {
  DepthCalculator,
};

// const depthCalc = new DepthCalculator();
// console.log(
//   depthCalc.calculateDepth([
//     1,
//     2,
//     3,
//     4,
//     [1, 2, [1, 2, [[[]]]]],
//     5,
//     [1, [[[[[[]]]]]]],
//   ])
// );
