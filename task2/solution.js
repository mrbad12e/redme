function sumOfTopTwoIntegers(arr) {
    if (arr.length < 2) throw new Error("Not enough elements");

    let largest = -Infinity;
    let second = -Infinity;

    for (let num of arr) {
    if (num > largest) {
      second = largest;
      largest = num;
    } else if (num > second) {
      second = num;
    }
  }
  
  return largest + second;
}

export default sumOfTopTwoIntegers;

const arr = [1, 4, 2, 3, 5];
console.log(sumOfTopTwoIntegers(arr));