const AnagramFinder = function (word) {

  this.word = word;

}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  const anagramsArray = []
  correctLengthWords = otherWords.filter(word => word.length === this.word.length);
  for (const otherWord of correctLengthWords) {
    const splitOtherWord = otherWord.toLowerCase().split('');
    const splitWord = this.word.toLowerCase().split('');

    const sortedOtherWord = splitOtherWord.sort();
    const sortedWord = splitWord.sort();

    let letterSnap = 0;
    sortedOtherWord.forEach(function(letter,index) {
        if (letter === sortedWord[index]) letterSnap += 1;
    });

    if (letterSnap === sortedWord.length) anagramsArray.push(otherWord);
    });
  }

  return anagramsArray;
}

module.exports = AnagramFinder;
