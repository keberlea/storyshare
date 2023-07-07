const { gql } = require('apollo-server-express');
const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    firstName: String!
    lastName: String!
    password: String!
    stories: [Story!]!
    prompts: [Prompt!]!
  }

  type Story {
    id: ID!
    title: String!
    content: String!
    author: User!
    comments: [Comment!]!
    createdAt: String!
    updatedAt: String!
  }

  type Prompt {
    _id: ID
    title: String
    description: String
  }
  
  type Comment {
    _id: ID!
    commentText: String!
    commentAuthor: String!
    createdAt: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(userId: ID!): User
    storiesByUser(userId: ID!): [Story]
    prompts: [Prompt]
    prompt(promptId: ID!): Prompt
    stories: [Story]
    story(storyId: ID!): Story
    commentsByStory(storyId: ID!): [Comment]
    comment(commentId: ID!): Comment
  }
  
  type Mutation {
    createUser(username: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    createStory(userId: ID!, content: String!): User
    createPrompt(userId: ID!, title: String!, description: String!): User
    createComment(userId: ID!, content: String!, storyId: ID!): User
    updateStory(userId: ID!, storyId: ID!, content: String!): User
    updatePrompt(userId: ID!, promptId: ID!, title: String!, description: String!): User
    updateComment(userId: ID!, commentId: ID!, content: String!): User
    deleteUser(userId: ID!): User
    deleteStory(userId: ID!, storyId: ID!): User
    deletePrompt(userId: ID!, promptId: ID!): User
  }
`;

module.exports = typeDefs;