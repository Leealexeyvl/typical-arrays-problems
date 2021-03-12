
// exports.min = function min (array) {
//   if (array === undefined || array.length == 0) {
//     return 0;
//   };
//   let result = array[0];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] < result) {
//       result = array[i];
//     }
//   }
//   return result;
// }

// exports.max = function max (array) {
//   if (array === undefined || array.length == 0) {
//     return 0;
//   };
//   let result = array[0];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > result) {
//       result = array[i];
//     }
//   }
//   return result;
// }

// exports.avg = function avg (array) {
//   if (array === undefined || array.length == 0) {
//     return 0;
//   };
//   let result = array[0];
//   for (let i = 1; i < array.length; i++) {
//       result += array[i];
//   }
//   return result / array.length;
// }
exports.min = function min (array) {
  if (array === undefined || array.length === 0) return 0;
  // let min = array[0];
  // for (let item of array) {
  //   min = Math.min(min, item);
  // }
  // return min;
  return array.reduce((acc, item) => Math.min(acc, item));
}

exports.max = function max (array) {
  if (array === undefined || array.length === 0) return 0;
  return array.reduce((acc, item) => Math.max(acc, item));
}

exports.avg = function avg (array) {
  if (array === undefined || array.length === 0) return 0;
  return array.reduce((acc, item) => acc + item) / array.length;
}