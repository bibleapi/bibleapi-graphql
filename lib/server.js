import express from 'express';
import { MongoClient } from 'mongodb';
import graphqlHTTP from 'express-graphql';
import schema from '../schema';
import { nodeEnv } from './env';
import mongoConfig from './config';
import parser from '../parser/parser';

const app = express();

MongoClient.connect(mongoConfig[nodeEnv].mongoDbUrl, (error, mongoPool) => {

  app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
    context: { parser, mongoPool }
  }));

  const port = process.env.PORT || 3333;

  app.listen(port, () => {
    console.log(`GraphQL server is listening on port ${port}`)
  });

});
