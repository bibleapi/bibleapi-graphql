import {GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLNonNull} from 'graphql';
import Passage from './passage';

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    passage: {
      type: Passage,
      description: 'Get Bible passage',
      args: {
        reference: {type: new GraphQLNonNull(GraphQLString)}
      },
      resolve: (obj, args, { parser }) => {
        return parser.parse(args.reference);
      }
    }
  }
});

const schema = new GraphQLSchema({query: RootQueryType});

module.exports = schema;