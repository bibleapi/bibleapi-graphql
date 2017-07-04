import express from 'express';
import { MongoClient } from 'mongodb';
import graphqlHTTP from 'express-graphql';
import schema from '../schema';
import { nodeEnv } from './env';
import mongoConfig from './mongo';

const app = express();

MongoClient.connect(mongoConfig[nodeEnv].url, (error, mongoPool) => {

  app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
    context: { mongoPool }
  }));

  const port = process.env.PORT || 3333;

  app.listen(port, () => {
    console.log(`GraphQL server is listening on port ${port}`)
  });

});
