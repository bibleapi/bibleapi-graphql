const {GraphQLObjectType, GraphQLString} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Passage',
  fields: {
    verse: {type:GraphQLString}
  }
});