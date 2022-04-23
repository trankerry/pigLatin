/*
Write a function called piglatin whose input is a string representing a word and is expected
to translate that word into Pig Latin and return that translated string back.

- For words that begin with consonants: 
  All letters before the initial vowel are placed at the end of the word sequence. 
  Then, "ay" is added.
  - "y" at the beginning of a word is considered a consonant sound
  - "y" is otherwise considered a vowel

- For Words that begin with consonant clusters (multiple consonants that form one sound),
  the whole consonant cluster is moved to the end of the word and then "ay" is added.
  - "qu" is considered a consonant cluster

- For words that begin with vowels add "way" to the end

  Examples: 
      ---------------------------
      word: Pig Latin Translation
      ---------------------------
      hello: "ellohay",
      smile: "ilesmay",
      eat: "eatway",
      squeal: "ealsquay",
      question: "estionquay",
      yellow: "ellowyay",
      mystery: "ysterymay"

*/

/**********************  Enter your code below this line **********************/
function piglatin(str) {
  //set up the vowels
  let vowel = 'aeiou'
  //go through the given str and grab everything before a vowel
  let strArr = str.split('')
  let front = ''
  //if the first letter is a vowel then add 'way to the end of it
  if(vowel.includes(strArr[0])){
    return str += 'way'
  }
  //iterate through given str
  for(let i = 0; i < strArr.length; i++){
    //after the first letter, 'Y' becomes a vowel
    if(i > 0){
      vowel = 'aeiouy'
    }
    //if the curr letter is a vowel stop the loop
    if(vowel.includes(strArr[i])){
      break;
    }else if(strArr[i] == 'q'){
      //if the letter is a 'q' make sure to bring the 'u' along with it
      front += 'qu'
      i++
    }else{
      //all the constants to the front variable
      front += strArr[i]
    }
  }
  //take off the front part of the word.
  strArr.splice(0, front.length)
  //push the front part to the end of the word and add 'ay'
  strArr.push(front,'ay')
  //join back into a string
  return strArr.join('')
}

/**********************  Enter your code above this line **********************/
export default piglatin;