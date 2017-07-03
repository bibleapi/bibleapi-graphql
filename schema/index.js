const {GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLNonNull} = require('graphql');
const Passage = require('./type/passage');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    text: {
      type: GraphQLString,
      description: 'The sample text in GraphQL',
      resolve: () => 'Hi GraphQL!'
    },
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