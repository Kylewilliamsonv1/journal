// let journal = new Journal ("","")

export default function Journal (title, body) {
  this.title = title;
  this.body = body;
}

Journal.prototype.wordCount = function () {
  let wordArray = this.body.split(" ");
  return wordArray.length;
};