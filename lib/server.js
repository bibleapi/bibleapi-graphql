import dotenv from 'dotenv';
import express from 'express';
import { MongoClient } from 'mongodb';
import graphqlHTTP from 'express-graphql';
import schema from '../schema';
import parser from '../parser/parser';
import queryMapper from '../db/queryMapper';

dotenv.config();

const app = express();

const mongoDbUrl = `mongodb://${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DATABASE}`;

MongoClient.connect(mongoDbUrl, (error, mongoPool) => {

  app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
    context: { parser, queryMapper, mongoPool }
  }));

  const port = process.env.PORT || 3333;

  app.listen(port, () => {
    console.log(`GraphQL server is listening on port ${port}`)
  });

});
