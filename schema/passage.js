import {GraphQLObjectType, GraphQLList, GraphQLString} from 'graphql';
import mongoDb from '../db/mongo';
import Verse from './verse';

module.exports = new GraphQLObjectType({
  name: 'Passage',
  fields: {
    verses: {
      type: new GraphQLList(Verse),
      resolve(obj, args, { queryMapper, mongoPool }) {
        const query = queryMapper.mapQuery(obj);
        return mongoDb(mongoPool).getVerses(query);
      }
    },
    text: {
      type: GraphQLString,
      resolve(obj, args, { queryMapper, mongoPool }) {
        const query = queryMapper.mapQuery(obj);
        return mongoDb(mongoPool).getText(query);
      }
    }
  }
});