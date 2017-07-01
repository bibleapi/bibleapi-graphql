const { graphql } = require('graphql');
const schema = require('../schema');

graphql(schema, '{test}').then(result => {
   console.log(result);
});
