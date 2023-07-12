const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Prompt {
    id: ID
    description: String!
  } 
  
  type Query {
    prompt(id: ID): Prompt
    prompts: [Prompt!]!
  }
  
  type Mutation {
    createPrompt(description: String!): Prompt!
    updatePrompt(id: ID, description: String): Prompt!
    deletePrompt(id: ID): Boolean!
  }  
`;

module.exports = typeDefs;