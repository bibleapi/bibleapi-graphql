import dotenv from 'dotenv';
import express from 'express';
import { MongoClient } from 'mongodb';
import graphqlHTTP from 'express-graphql';
import schema from '../schema';
import parser from './parser';
import queryMapper from '../db/queryMapper';

dotenv.config();

const app = express();

const host = process.env.MONGODB_HOST;
const port = process.env.MONGODB_PORT;
const db = process.env.MONGODB_DATABASE;
const user = process.env.MONGODB_USERNAME;
const pass = process.env.MONGODB_PASSWORD;

const mongoDbUrl = `mongodb://${user}:${pass}@${host}:${port}/${db}`;

MongoClient.connect(mongoDbUrl, (error, mongoPool) => {

  if (error) {
    console.error(error);
    return;
  }

  app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
    context: { parser, queryMapper, mongoPool }
  }));

  const nodePort = process.env.NODE_PORT || 3333;

  app.listen(nodePort, () => {
    console.info(`GraphQL server is listening on port ${nodePort}`);
  });

});
