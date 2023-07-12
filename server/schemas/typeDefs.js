const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    id: ID
    username: String!
    firstName: String
    lastName: String
    password: String!
    stories: [Story!]
    comments: [Comment!]
  }

  type Story {
    id: ID
    title: String!
    content: String!
    author: User!
    createdAt: String
    updatedAt: String
    comments: [Comment!]!
  }

  type Comment {
    id: ID
    content: String!
    user: User!
    story: Story!
  }

  type Prompt {
    id: ID
    description: String!
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
    comment(commentId: ID): Comment
  }
  
  type Mutation {
    createUser(username: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    createStory(userId: ID!, title:String, content: String!): Story
    createPrompt( description: String!): Prompt
    createComment(userId: ID!, content: String!, storyId: ID!): Comment
    updateStory(userId: ID!, storyId: ID!, content: String!): Story
    updatePrompt( description: String!): Prompt
    updateComment(userId: ID!, commentId: ID!, content: String!): Comment
    deleteUser(userId: ID!): User
    deleteStory(userId: ID!, storyId: ID!): Story
    deleteComment(userId: ID!, commentId:ID!): Comment
  }
`;

module.exports = typeDefs;