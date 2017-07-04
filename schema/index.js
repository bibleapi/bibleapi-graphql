import {GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLNonNull} from 'graphql';
import Passage from './type/passage';

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    passage: {
      type: Passage,
      description: 'Get Bible passage',
      args: {
        reference: {type: new GraphQLNonNull(GraphQLString)}
      },
      resolve: (obj, args, ctx) => {
        // Parse passage reference
        return args.reference === 'Gen 1:1'
          ? { book: 1, chapter: 1, verse: 1 }
          : { book: 2, chapter: 1, verse: 1 };
      }
    }
  }
});

const schema = new GraphQLSchema({query: RootQueryType});

module.exports = schema;