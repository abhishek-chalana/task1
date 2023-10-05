//Q1. This function should return an object, where the keys are the unique elements and the values are the frequency in which those elements occur
// Ans.
console.log("/////////////////////////////////////////////////");
const uniqueElement = (arr) => {
  let frequency = {};

  arr.forEach((element) => {
    if (frequency[element]) {
      frequency[element]++;
    } else {
      frequency[element] = 1;
    }
  });
  console.log(frequency);
};

uniqueElement(["A", "B", "A", "A", "A"]);
uniqueElement([1, 2, 3, 3, 2]);
uniqueElement([true, false, true, false, false]);
uniqueElement([]);

console.log("/////////////////////////////////////////////////");

//Q2. The .length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:
// [1, [2, 3]]
// Ans.
const myArray = [1, [2, 3]];

const totalElementCount = myArray.flat(Infinity).length;

console.log(totalElementCount);

console.log("/////////////////////////////////////////////////");

// Q3. Given a word, create an object that stores the indexes of each letter in an array.

// Make sure the letters are the keys.
// Make sure the letters are symbols.
// Make sure the indexes are stored in an array and those arrays are values.

function mapLetters(word) {
  return word.split("").reduce((acc, char, index) => {
    acc[char] = acc[char] || [];
    acc[char].push(index);
    // console.log(acc[char]);
    return acc;
  }, {});
}

const result = mapLetters("froggy");
console.log(result);

console.log("////////////////////////////////////////////////");

// Create a function that gets the name of the piece of jewelry with the highest price and returns "The most expensive one is the {name of jewelry piece}".
// mostExpensive ({
//  "Diamond Earrings": 980,
//  "Gold Watch": 250,
//  "Pearl Necklace": 4650
// }) ➞ "The most expensive one is the Pearl Necklace"

const expensiveJewellery = (jewellery) => {
  let entries = Object.entries(jewellery);

  if (entries.length === 0) {
    return "NO Jewellery Found";
  }

  let [mostExpensiveItem, maxPrice] = entries[0];

  entries.forEach(([item, price]) => {
    if (price > maxPrice) {
      mostExpensiveItem = item;
      maxPrice = price;
    }
  });
  return (
    `The most expensive item is ${mostExpensiveItem}` +
    ` the price is ${maxPrice}`
  );
};

const result1 = expensiveJewellery({
  "Diamond Earrings": 980,
  "Gold Watch": 250,
  "Pearl Necklace": 4650,
});

console.log(result1);

console.log("////////////////////////////////////////////////");

// Q5. Create a function that takes one, two or more numbers as arguments and adds them together to get a new number. The function then repeatedly multiplies the digits of the new number by each other, yielding a new number, until the product is only 1 digit long. Return the final product.
// sumDigProd(16, 28) ➞ 6
// 16 + 28 = 44
// 4 * 4 = 16
// 1 * 6 = 6

// Ans.

//  pending not understand

// Q6. Create a function that takes an array of names in the format "First Name Last Name" (e.g. "SIMRAN kAUR"), and returns an array of these names sorted by the length of their last names. If the length of multiple last names are the same, then proceed to sort alphabetically by last name.

const sortName = (names) => {
  const Names = names.map((name) => {
    const [firstName, lastName] = name.split(" ");
    return { firstName, lastName };
    
  });

  Names.sort((a,b)=>{
    const lengthDiff = a.lastName.length - b.lastName.length

    return lengthDiff;
  })

  const sortedNames = Names.map(nameObj => `${nameObj.firstName} ${nameObj.lastName}`)
  return sortedNames;
};

const names = ["SIMRAN kAUR", "John Doe", "Alice Johnson", "Jane Smith"];
const result3 = sortName(names);
console.log(result3);
