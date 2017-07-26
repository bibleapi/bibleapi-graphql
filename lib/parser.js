import _ from 'lodash';
import { bcv_parser as bcvParser } from 'bible-passage-reference-parser/js/en_bcv_parser';
const bcv = new bcvParser;

const parse = (reference) => {
  const parsedEntities = bcv.parse(reference).parsed_entities();
  const entities = _.get(parsedEntities, '[0].entities');

  if (!entities) {
    console.error('Passages not found!');
    return null;
  }

  const passages = _.map(entities, entity => ({
    type: entity.type,
    start: entity.start,
    end: entity.end
  }));

  return passages;
};

export default { parse };