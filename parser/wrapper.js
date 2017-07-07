const bcvParverWrapper = (bcv) => {
  let result = {};

  switch(bcv.type) {
    case 'bcv':
      result = [
        {
          type: 'bcv',
          start: { book: 'Gen', chapter: 1, verse: 1 },
          end: { book: 'Gen', chapter: 1, verse: 1 },
        }
      ];
      break;
    case 'range':
      result = [
        {
          type: 'range',
          start: { book: 'Gen', chapter: 1, verse: 1 },
          end: { book: 'Gen', chapter: 1, verse: 5 },
        }
      ];
      break;
    case 'sequence':
      result = [
        {
          type: 'bcv',
          start: { book: 'Gen', chapter: 1, verse: 1 },
          end: { book: 'Gen', chapter: 1, verse: 1 },
        },
        {
          type: 'range',
          start: { book: 'Gen', chapter: 1, verse: 1 },
          end: { book: 'Gen', chapter: 1, verse: 5 },
        }
      ];
      break;
  }

  return result;
};

export default bcvParverWrapper();