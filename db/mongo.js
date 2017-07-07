module.exports = mongoPool => {
  return {
    getVerse(ref) {
      return mongoPool.collection('bible')
        .findOne({bookRef: ref.b, chapter: ref.c, verse: ref.v})
        .then(verse => verse['text']);
    },
    select(query) {
      return mongoPool.collection('bible')
        .findOne(query)
        .then(verse => verse['text']);
    },
    executeQuery(query) {
      return mongoPool.collection('bible')
        .find(query)
        .toArray((err, result) => {
          // console.log(result[0]['text']);
          return result[0]['text'];
        });
    }
  }
};