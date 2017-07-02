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
        // get verse data
        return args.reference === 'Gen 1:1'
          ? { verse: 'In the beginning God created the heaven and the earth.' }
          : { verse: 'Not found' };
      }
    }
  }
});

const schema = new GraphQLSchema({query: RootQueryType});

module.exports = schema;