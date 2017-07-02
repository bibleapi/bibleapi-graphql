const {GraphQLSchema, GraphQLObjectType, GraphQLString} = require('graphql');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    test: {
      type: GraphQLString,
      description: 'The sample text in GraphQL',
      resolve: () => 'Hi GraphQL!'
    }
  }
});

const schema = new GraphQLSchema({query: RootQueryType});

module.exports = schema;