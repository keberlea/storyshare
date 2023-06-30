const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { schema, resolvers } = require('./graphql'); // Import your GraphQL schema and resolvers

const app = express();

// Define your routes and middleware here

app.listen(3000, () => {
  console.log('Server running on port 3001');
});
