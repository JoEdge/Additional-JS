//Ten Simple Javascript Exercises

//Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.

function max (x,y) {
  if (x>y) {
     return x;
  } else
    return y;
};

//Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.

function maxOfThree(x,y,z) {
  if (x>y && x>z) {
    return x;
  } else if
    (y>x && y>z) {
      return y;
    }else
      return z;
};

//Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

function vowel(z) {
   if ('z' === 'a' || 'z'=== 'e' || 'z' === 'i' || 'z' === 'o' || 'z' === 'u') {
     return "true";
   } else
     return "false";
};

//Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".

var vowels = ['a', 'e', 'i', 'o', 'u'];

function translate(letter){

  if (letter === vowels){

  }

};

//Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.

var addNum = [1, 2, 3, 4];

var sum = addNum.reduce(function (x,y) {

    return x + y;
});

var multNum = [1, 2, 3, 4];

var multiply = multNum.reduce(function (a,b){

    return a * b;
});


//Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".

//Represent a small bilingual lexicon as a Javascript object in the following fashion {"merry":"god", "christmas":"jul", "and":"och", "happy":gott", "new":"nytt", "year":"år"} and use it to translate your Christmas cards from English into Swedish.

//Write a function findLongestWord() that takes an array of words and returns the length of the longest one.

//Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.

//Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
