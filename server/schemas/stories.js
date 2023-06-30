const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Story {
    id: ID!
    title: String!
    content: String!
    author: User!
    comments: [Comment!]!
  }
  
  type Query {
    story(id: ID!): Story
    stories: [Story!]!
  }
  
  type Mutation {
    createStory(title: String!, content: String!, authorId: ID!): Story!
    updateStory(id: ID!, title: String, content: String): Story!
    deleteStory(id: ID!): Boolean!
  }  
`;

module.exports = typeDefs;