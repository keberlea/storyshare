import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;export const CREATE_USER = gql`
mutation addUser($username: String!, $password: String!) {
  addUser(username: $username, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;

export const CREATE_STORY = gql`
mutation addStory($title: String!, $prompt: String!, $storyText: String!) {
    addStory(title: $title, prompt: $prompt, storyText: $storyText) {
        _id
        title
        prompt
        storyText
        createdAt
        username
        comments {
            _id
            commentText
            createdAt
            username
        }
    }
}
`;

export const CREATE_COMMENT = gql`
mutation addComment($storyId: ID!, $commentText: String!) {
    addComment(storyId: $storyId, commentText: $commentText) {
        _id
        commentCount
        comments {
            _id
            commentText
            createdAt
            username
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
        comments {
            _id
            commentText
            createdAt
            username
        }
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
        comments {
            _id
            commentText
            createdAt
            username
        }
    }
}
`;


