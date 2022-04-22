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


/**********************  Enter your code above this line **********************/
export default piglatin;