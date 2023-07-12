import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        id
        username
      }
    }
  }
`;

export const CREATE_USER = gql`

mutation createUser($username: String!, $password: String!) {
  createUser(username: $username, password: $password) {
    token
    user{
      username
      password
    }
  }
}
`;

export const CREATE_STORY = gql`
mutation createStory($title: String!, $prompt: String!, $storyText: String!) {
    addStory(title: $title, prompt: $prompt, storyText: $storyText) {
        id
        title
        prompt
        storyText
        createdAt
        username
    }
}
`;

export const CREATE_COMMENT = gql`
mutation createComment($storyId: ID!, $commentText: String!) {
    addComment(storyId: $storyId, commentText: $commentText) {
        id
        commentCount
        comments {
            _id
            commentText
            createdAt
            commentAuthor
        }
    }
}
`;

export const UPDATE_STORY = gql`
mutation updateStory($storyId: ID!, $title: String!, $prompt: String!, $storyText: String!) {
    updateStory(storyId: $storyId, title: $title, prompt: $prompt, storyText: $storyText) {
        _id
        title
        prompt
        storyText
        createdAt
        username
    }
}
`;

export const DELETE_STORY = gql`
mutation deleteStory($storyId: ID!) {
    deleteStory(storyId: $storyId) {
        _id
        title
        prompt
        storyText
        createdAt
        username
    }
}
`;


