const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Prompt {
    id: ID!
    topic: String!
    description: String!
  } 
  
  type Query {
    prompt(id: ID!): Prompt
    prompts: [Prompt!]!
  }
  
  type Mutation {
    createPrompt(topic: String!, description: String!): Prompt!
    updatePrompt(id: ID!, topic: String, description: String): Prompt!
    deletePrompt(id: ID!): Boolean!
  }  
`;

module.exports = typeDefs;