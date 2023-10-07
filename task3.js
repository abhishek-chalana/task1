// Q1: Create a function that will work as the modulus operator % without using the modulus operator. The modulus operator is a way to determine the remainder of a division operation. Instead of returning the result of the division, the modulo operation returns the whole number remainder.

const findRemainder = (divident, divisor) => {
  return divident - divisor * parseInt(divident / divisor);
};
const result = findRemainder(25, 12);
console.log(result); // output -> 1
console.log("-------------");
// Q2: Create a function that takes three collections of arguments and returns the sum of the product of numbers. Add the result of the first digit in each collection multiplied together to the result of the second digit in each collection multiplied together to get the final solution.
// Product(1,2)(1,1)(2,3)

const product1 = (a, b) => {
  const product2 = (c, d) => {
    const product3 = (e, f) => {
      return a * c * e + b * d * f;
    };
    return product3;
  };
  return product2;
};
const result1 = product1(1, 2)(1, 1)(2, 3); // output = (1 * 1 * 2) + (2 * 1 * 3) = 8
console.log(result1);
console.log("-------------");

// Q3 Create a function which takes an array arr of integers as an argument. This function must     return another function, which takes a single integer as an argument and returns a new array.
// The returned array should consist of each of the elements from the first array multiplied by the integer.

const getMultiply = (arr) => {
  const multiplyNum = (n) => {
    for (let index = 0; index < arr.length; index++) {
      arr[index] = arr[index] * n;
    }
    return arr;
  };
  return multiplyNum;
};
console.log(getMultiply([4, 35, 46])(4)) //output [ 16, 140, 184]
console.log("-------------");


// Q4: Create a function which takes a parameter n and returns a function such that it, when called n times, returns the string "HelloWorld".

// Examples: 
// lambdaDepth(0) ➞ "HelloWorld"
// lambdaDepth(1)() ➞ "HelloWorld"
// lambdaDepth(2)()() ➞ "HelloWorld"

const lambdaDepth = (n) => {
    if(n === 0){
        return "Hello World"
    }
    return function(){
        let result = "Hello World"
        for (let index = 0; index < n - 1; index++) {
            result = lambdaDepth(0)
        }
        return result;
    }
}
console.log(lambdaDepth(0)) // -> Hello World
console.log(lambdaDepth(1)()) // -> Hello World
console.log(lambdaDepth(2)()) // -> Hello World

