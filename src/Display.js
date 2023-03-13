import React from 'react';
import {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
} from './recursion';

const Display = () => {
  const animals = ['dog', 'duck', 'cat', 'pony'];
  const nestedObj = {
    firstName: 'Lester',
    favoriteNumber: 22,
    moreData: {
      lastName: 'Testowitz',
    },
    funFacts: {
      moreStuff: {
        anotherNumber: 100,
        deeplyNestedString: {
          almostThere: {
            success: 'you made it!',
          },
        },
      },
      favoriteString: 'nice!',
    },
  };

  return (
    <>
      <div>Product - {product([1, 2, 3, 4, 5])}</div>
      <div>Logest Word - {longest(['hello', 'hi', 'hola'])}</div>
      <div>Every Other Letter = {everyOther('hello')}</div>
      <div>Palindrome = {isPalindrome('racecar')}</div>
      <div>Find Index = {findIndex(animals, 'pig')}</div>
      <div>Reverse String = {revString('porcupine')}</div>
      <div>Gather String = {gatherStrings(nestedObj)}</div>
      <div>Binary Search = {binarySearch([1, 2, 3, 4], 3)}</div>
    </>
  );
};

export default Display;
