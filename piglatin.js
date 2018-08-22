/*
Words that begin with consonants, 
  All letters before the initial vowel are placed at the end of the word sequence. 
  Then, "ay" is added
Words that begin with consonant clusters (multiple consonants that form one sound), 
  The whole sound is added to the end when speaking or writing
For words that begin with vowel sounds
  Add "way"
"qu" is considered a consonant sound
"y at the beginning of a word is considered a consonant sound
"y" is otherwise considered a vowel
*/

function piglatin(word) {
  console.log(word);
  //1 turn string into an array
  let array = word.split("");
  console.log(array);
  //2 find first vowel in the array

  //3 take all letters off before the vowel and place to the back of the array
  //4 Add ay if the word starts with an consanant,
  //5 Add way if the fist letter is a vowel and do not manipulate original word
  //6 Edge case: y is a consanant at the beginning of the word and a vowel anywhere else
  //return word;
}

export default piglatin;
