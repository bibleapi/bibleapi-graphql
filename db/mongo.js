module.exports = mongoPool => {
  return {
    getVerse(ref) {
      return mongoPool.collection('bible')
        .findOne({book: ref.book, chapter: ref.chapter, verse: ref.verse})
        .then(verse => verse['text']);
    }
  }
};