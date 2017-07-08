import {GraphQLObjectType, GraphQLID, GraphQLInt, GraphQLString, GraphQLNonNull} from 'graphql';

module.exports = new GraphQLObjectType({
  name: 'Verse',

  fields: {
    id: { type: GraphQLID },
    book: { type: GraphQLString },
    chapter: { type: GraphQLInt },
    verse: { type: GraphQLInt },
    text: { type: new GraphQLNonNull(GraphQLString) },
  }
});