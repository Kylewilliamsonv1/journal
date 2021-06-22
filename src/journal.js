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
  let bodyArray = this.body.split(" ");
  let slicePos = 0;
  if (bodyArray.length >= 8) {
    slicePos = 8;
  } else { 
    slicePos = bodyArray.length;
  }
  for (let i=0; i < slicePos; i++) {
    if (bodyArray[i].includes(".")) {
      slicePos = i+1;
    } else {
    }
  }
  let teaserArray = bodyArray.slice(0,slicePos);
    if (slicePos >= 8) {
      return (teaserArray.join(" ")+"...");

    }else {
      return teaserArray.join(" ");
    }  
      
};
