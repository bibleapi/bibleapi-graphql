import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { MongoClient } from 'mongodb';
import graphqlHTTP from 'express-graphql';

import parser from './parser';
import schema from '../schema';
import queryMapper from '../db/queryMapper';

dotenv.config();

const app = express();

const host = `${process.env.MONGODB_REPLICA_NODE_1},${process.env.MONGODB_REPLICA_NODE_2},${process.env.MONGODB_REPLICA_NODE_3}`;
const replicaSet = process.env.MONGODB_REPLICA_SET;
const useSsl = process.env.MONGODB_SSL;
const db = process.env.MONGODB_DATABASE;
const user = process.env.MONGODB_USERNAME;
const pass = process.env.MONGODB_PASSWORD;

const mongoDbUrl = `mongodb://${user}:${pass}@${host}/${db}?ssl=${useSsl}&replicaSet=${replicaSet}&authSource=admin`;

MongoClient.connect(mongoDbUrl, (error, mongoPool) => {

  if (error) {
    console.error(error);
    return;
  }

  // Enable CORS with various options
  // https://github.com/expressjs/cors
  app.use(cors());

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
