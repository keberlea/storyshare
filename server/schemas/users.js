const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    stories: [Story!]!
    comments: [Comment!]!
  }

  type Query {
    user(id: ID!): User
    users: [User!]!
  }

  type Mutation {
    createUser(username: String!): User!
    updateUser(id: ID!, username: String): User!
    deleteUser(id: ID!): Boolean!
  }
`;

module.exports = typeDefs;
