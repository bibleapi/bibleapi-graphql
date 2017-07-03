const express = require('express');
const { graphql } = require('graphql');
const { MongoClient } = require('mongodb');
const graphqlHTTP = require('express-graphql');
const schema = require('../schema');
const { nodeEnv } = require('./env');
const mongoConfig = require('./mongo')[nodeEnv];

const app = express();

MongoClient.connect(mongoConfig.url, (error, mongoPool) => {

  app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
    context: { mongoPool }
  }));

  const port = process.env.PORT || 3000;

  app.listen(port, () => {
    console.log(`GraphQL server is listening on port ${port}`)
  });

});
