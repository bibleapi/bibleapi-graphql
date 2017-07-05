import _ from 'lodash';
import { bcv_parser as bcvParser } from 'bible-passage-reference-parser/js/en_bcv_parser';
const bcv = new bcvParser;

const parseRef = (reference) => {
  const entities = bcv.parse(reference).parsed_entities();
  const entity = _.get(entities, '[0].entities[0].start');

  if (!entity) {
    console.error('Passages not found!');
    return null;
  }

  return entity;
};

export default { parseRef };