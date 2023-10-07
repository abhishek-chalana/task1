// const checkNumbers = function (operation, arr) {
//   return arr.map((element) => {
//     if (isNaN(element) ) {
//       return "Not a number";
//     } else {
//       return operation(element) ? "even" : "odd";
//     }
//   });
// };

// const isEven = (num) => num % 2 === 0;
// const array = [2, 8, "hello", 3, "string"];
// const result = checkNumbers(isEven, array);
// console.log(result);

function Evaluate(number) {
  function checkNumbers(operation, arr) {
    return arr.map((element) => {
      if (isNaN(element)) {
        return "not a number";
      } else {
        return operation(element) ? "even" : "odd";
      }
    });
  }

  const isEven = (num) => num % 2 === 0; 

  return checkNumbers(isEven, number)
}

console.log(Evaluate([2 , 8 , 7 ,"hello"]))
