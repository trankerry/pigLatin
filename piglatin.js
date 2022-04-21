/*
Write a function called piglatin that is given a word and expected to translate that word into Pig Latin

- For words that begin with consonants: 
  All letters before the initial vowel are placed at the end of the word sequence. Then, "ay" is added.
  "y at the beginning of a word is considered a consonant sound
  "y" is otherwise considered a vowel

- For Words that begin with consonant clusters (multiple consonants that form one sound):
  The whole sound is added to the end when speaking or writing
  "qu" is considered a consonant sound

- For words that begin with vowel sounds
  Add "way"

  Examples: 

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

