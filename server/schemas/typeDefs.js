const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    _id: ID
    username: String!
    firstName: String
    lastName: String
    password: String!
    stories: [Story!]
    comments: [Comment!]
  }

  type Story {
    _id: ID
    title: String!
    content: String!
    storyAuthor: String!
    createdAt: String
    updatedAt: String
    comments: [Comment!]
  }

  type Comment {
    _id: ID
    commentText: String!
    commentAuthor: User!
    story: Story!
  }

  type Prompt {
    _id: ID
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
    createStory(title: String!, content: String!, storyAuthor: String!): Story
    createPrompt( description: String!): Prompt
    createComment(userId: ID!, commentText: String!, storyId: ID!): Comment
    updateStory(userId: ID!, storyId: ID!, content: String!): Story
    updatePrompt( description: String!): Prompt
    updateComment(userId: ID!, commentId: ID!, commentText: String!): Comment
    deleteUser(userId: ID!): User
    deleteStory(userId: ID!, storyId: ID!): Story
    deleteComment(userId: ID!, commentId:ID!): Comment
  }
`;

module.exports = typeDefs;