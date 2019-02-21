const IsogramFinder = function (word) {
  this.word = word.split('');
}

IsogramFinder.prototype.isIsogram = function () {

  const lowercaseArray = this.word.map(letter => letter.toLowerCase());
  const uniqueSet = new Set(lowercaseArray)
  return (uniqueSet.size === lowercaseArray.length) ? true : false;
}

module.exports = IsogramFinder;
