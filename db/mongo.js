module.exports = mongoPool => {
  return {
    getVerses(query) {
      return mongoPool.collection('bible')
        .find(query)
        .toArray()
        .then(rows =>
          rows.map((row) => ({
            id: row._id,
            book: row.bookRef,
            chapter: row.chapter,
            verse: row.verse,
            text: row.text
          })));
    },
    getText(query) {
      return mongoPool.collection('bible')
        .find(query)
        .toArray()
        .then(rows =>
          rows.reduce((text, row) =>
            text.concat(row.text, ' '), ''));
    },
  }
};