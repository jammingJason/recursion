/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return;
  let num = nums.pop();
  if (nums.length !== 0) {
    num = num + product(nums);
  }
  return num;
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) return;
  let maxVal;

  let newVal = words.pop();
  longest(words);

  // console.log(newVal.length);

  return newVal.length;
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  // console.log(str);
  if (str.length === 0) return;

  for (let i = str.length - 1; i > 0; i--) {
    // console.log(str[i]);
  }

  if (str.length % 2 === 0) {
  }
  const newString = [...str];
  newString.shift();

  everyOther(newString);
  // return newString;
  // console.log(str.pop());
  // console.log(newString);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  for (let i = 0; i < str.length; i++) {
    return str[i] === str[str.length - 1 - i];
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  // ['duck', 'cat', 'pony'];
  if (arr.length === 0) return -1;
  const newVal = arr.pop();
  // console.log(arr);
  if (newVal === val) {
    return arr.length;
  }
  findIndex(arr, val);
  // return -1;
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length === 0) return;
  let newChar = str.slice(str.length - 1);
  const newString = str.substring(0, str.length - 1);
  if (newString.length !== 0) {
    newChar = newChar + revString(newString);
  }
  return newChar;
  console.log(newChar);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let newArray = [];
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const element = obj[key];
      if (typeof element === 'string') {
        newArray.push(element);
        // console.log(newArray);
      }
      if (typeof element === 'object') {
        gatherStrings(element);
      }
    }
  }
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  console.log(arr);
  if (arr.length === 0) return;
  const midIndex = Math.ceil(arr.length / 2);
  const newVal = arr[midIndex];
  if (newVal === val) {
    console.log(newVal);
    return midIndex;
  }
  newVal > val
    ? binarySearch(arr.slice(0, midIndex), val)
    : binarySearch(arr.slice(midIndex + 1), val);

  return -1;
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
