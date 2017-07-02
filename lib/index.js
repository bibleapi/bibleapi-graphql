const express = require('express');
const { graphql } = require('graphql');
const graphqlHTTP = require('express-graphql');
const schema = require('../schema');

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`GraphQL server is listening on port ${port}`)
});
