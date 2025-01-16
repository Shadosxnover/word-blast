import words from 'an-array-of-english-words';

const dictionary = new Set(words);

export const getRandomSequence = () => {
    let validWords = words.filter(word => word.length >= 4);
    const word = validWords[Math.floor(Math.random() * validWords.length)];
    
    const minLength = 2;
    const maxLength = 3;
  
    const sequenceLength = Math.random() < 0.1 ? maxLength : minLength;
    const startIndex = Math.floor(Math.random() * (word.length - sequenceLength + 1));
    
    return word.slice(startIndex, startIndex + sequenceLength);
  };
  

export const validateWord = (word, sequence) => {
  const normalizedWord = word.toLowerCase().trim();
  const normalizedSequence = sequence.toLowerCase();
  console.log('Checking word:', normalizedWord);
  console.log('With sequence:', normalizedSequence);
  console.log('Word exists:', dictionary.has(normalizedWord));
  console.log('Contains sequence:', normalizedWord.includes(normalizedSequence));
  
  return dictionary.has(normalizedWord) && normalizedWord.includes(normalizedSequence);
};