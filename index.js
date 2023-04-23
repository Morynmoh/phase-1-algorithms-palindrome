function isPalindrome(word) {
  // Write your algorithm here

    word = word.toLowerCase();
    
      if (word === word.split('').reverse().join('')){
        return true;
      }  else {
        return false;
      }
  }
  
  console.log(isPalindrome('racecar'));
  console.log(isPalindrome('Book'));


/* 
  Add your pseudocode here
  Convert the string to lowercase
  Reverse the string and compare with the original
*/

/*
  Add written explanation of your solution here

  The code takes the word and converts it to lower case using toLowerCase()
  the word is then converted into an array of characters using split()
  the order of the word is reversed using the method reverse()
  The word characters are then joined back using the method join()

  we compare the two words using if statement if true or false. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
