const PangramFinder = function (phrase) {
  this.alphabet = phrase.split('');
}

PangramFinder.prototype.isPangram = function () {
  const lowercaseArray = this.alphabet.map(letter => letter.toLowerCase());
  const filterNonLetters1 = lowercaseArray.filter(letter => letter.charCodeAt(0) >= 97);
  const filterNonLetters2 = filterNonLetters1.filter(letter => letter.charCodeAt(0) <= 122);
  const uniqueArray = new Set(filterNonLetters2);
  return (uniqueArray.size === 26) ? true : false;

}



module.exports = PangramFinder;
