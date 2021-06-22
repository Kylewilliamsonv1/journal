// let journal = new Journal ("","")

export default function Journal (title, body) {
  this.title = title;
  this.body = body;
}

Journal.prototype.wordCount = function () {
  let wordArray = this.body.split(" ");
  return wordArray.length;
};

Journal.prototype.vowelCount = function () {
  let vowelArray = ["a","e","i","o","u"];
  let counter = 0;
  let bodyArray = this.body.split("");
  bodyArray.forEach(function(element) { 
    if (vowelArray.includes(element)) {
      counter++;
    }
  });
  return counter;
};
Journal.prototype.consCount = function () {
  let vowelArray = ["a","e","i","o","u"];
  let counter = 0;
  let bodyArray = this.body.split("");
  bodyArray.forEach(function(element) { 
    if (!vowelArray.includes(element)) {
      counter++;
    }
  });
  return counter;
};
Journal.prototype.getTeaser = function () {
  let teaserArray = [];
  let bodyArray = this.body.split(" ");
  teaserArray = bodyArray.slice(0,8);
  return teaserArray.join(" ");
}
