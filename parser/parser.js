import _ from 'lodash';
import { bcv_parser as bcvParser } from 'bible-passage-reference-parser/js/en_bcv_parser';
const bcv = new bcvParser;

const parse = (reference) => {
  const parsedEntities = bcv.parse(reference).parsed_entities();
  const entities = _.get(parsedEntities, '[0].entities');
  // console.log('------', JSON.stringify(parsedEntities, null, 2));

  if (!entities) {
    console.error('Passages not found!');
    return null;
  }

  const passages = _.map(entities, entity => ({
    type: entity.type,
    start: entity.start,
    end: entity.end
  }));

  // console.log('passages------>>>', JSON.stringify(passages, null, 2));

  // console.log('query------->>>', JSON.stringify(getMongoQuery(passages), null, 2));

  return passages;
};

export default { parse };