
exports.min = function min (arr) {
  if (!Array.isArray(arr) || arr.length == 0) return 0;
  let min = arr[0]
  for (let index = 1; index < arr.length; index++) {
    if (arr[index] < min) {
      min = arr[index]
    }
    
  }
  return min;
}

exports.max = function max (arr) {
  if (!Array.isArray(arr) || arr.length == 0) return 0;
  let max = arr[0]
  for (let index = 1; index < arr.length; index++) {
    if (arr[index] > max) {
      max = arr[index]
    }
    
  }
  return max;
}

exports.avg = function avg (arr) {
  if (!Array.isArray(arr) || arr.length == 0) return 0;
  let sum = 0
  for (let index = 0; index < arr.length; index++) {
    sum += arr[index]
  }
  return sum / arr.length;
}
