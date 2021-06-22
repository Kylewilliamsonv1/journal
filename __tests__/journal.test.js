import Journal from './../src/journal.js';

describe('Journal', () => {
  
  test('it should create a journal object that includes a title and body', () => {
    const journal = new Journal("title","body");
    expect(journal.title).toEqual("title");
    expect(journal.body).toEqual("body");
  });
  test('it should return a wordcount upon entry', () => {
    const journal = new Journal("title","body"); // create journal first
    expect(journal.wordCount()).toEqual(1);
  });
  test('it should return number of vowels from the entry', () => {
    const journal = new Journal("title","body");
    expect(journal.vowelCount()).toEqual(1);
  });
  test('it should return number of consonants from the entry', () => {
    const journal = new Journal("title","body");
    expect(journal.consCount()).toEqual(3);
  });
  test('it should return the first 8 words of the body', () => {
    const journal = new Journal("title","One two three four five six seven eight nine");
    expect(journal.getTeaser()).toEqual("One two three four five six seven eight");
  });
});


// Create a journaling website where a user can write entries including at least a title and body. Create Entry objects that include a method to return the number of words in the entry. Then, add a separate method (or methods) to return the number of vowels and consonants in each entry. Finally, add a method called getTeaser to return the first sentence of the entry. If the sentence is over 8 words, only display those first 8 words.