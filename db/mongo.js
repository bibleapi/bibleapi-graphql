module.exports = mongoPool => {
  return {
    getVerse(ref) {
      return mongoPool.collection('bible')
        .findOne({bookRef: ref.b, chapter: ref.c, verse: ref.v})
        .then(verse => verse['text']);
    }
  }
};