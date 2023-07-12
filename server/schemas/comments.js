const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Comment {
    id: ID
    content: String!
    user: User!
    story: Story!
  }
  
  type Query {
    comment(id: ID): Comment
    comments: [Comment!]!
  }
  
  type Mutation {
    createComment(content: String!, userId: ID!, storyId: ID!): Comment!
    updateComment(id: ID!, content: String): Comment!
    deleteComment(id: ID!): Boolean!
  }
  `;

module.exports = typeDefs;