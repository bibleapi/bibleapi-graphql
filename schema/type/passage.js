const {GraphQLObjectType, GraphQLString} = require('graphql');

const mongoDb = require('../../db/mongo');

module.exports = new GraphQLObjectType({
  name: 'Passage',
  fields: {
    verse: {
      type:GraphQLString,
      resolve(obj, args, { mongoPool }) {
        // Fetch data from MongoDB
        return mongoDb(mongoPool).getVerse(obj);
      }
    }
  }
});