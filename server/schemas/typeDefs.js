import { gql } from apollo-server-express;
import { userTypeDefs } from './users';
import { storyTypeDefs } from './stories';
import { promptTypeDefs } from './prompts';
import { commentTypeDefs } from './comments';



const typeDefs = gql`

  ${userTypeDefs}
  ${storyTypeDefs}
  ${promptTypeDefs}
  ${commentTypeDefs}

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
    createStory(userId: ID!, content: String!): Story
    createPrompt(userId: ID!, title: String!, description: String!): Prompt
    createComment(userId: ID!, content: String!, storyId: ID!): Comment
    updateStory(userId: ID!, storyId: ID!, content: String!): Story
    updatePrompt(userId: ID!, promptId: ID!, title: String!, description: String!): Prompt
    updateComment(userId: ID!, commentId: ID!, content: String!): Comment
    deleteUser(userId: ID!): User
    deleteStory(userId: ID!, storyId: ID!): Story
    deletePrompt(userId: ID!, promptId: ID!): Prompt
    deleteComment(userId: ID!, commentId:ID!): Comment
  }
`;

module.exports = typeDefs;