import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
        _id
        username
        stories {
            title
            prompt
            content
            createdAt
            storyAuthor {
                username
            }
            comments {
                commentText
                createdAt
                commentAuthor
                }
            }
        }
    }
`;

//query prompts
export const QUERY_PROMPTS = gql`
    query prompts {
        prompts {
            description
        }
    }
`;


export const QUERY_STORIES = gql`
    query stories {
        stories {
            title
            content
            createdAt
            storyAuthor
            comments {
                commentText
            }
        }
    }
`;

export const QUERY_COMMENTS = gql`
    query comments {
        comments {
            commentText
            createdAt
            commentAuthor
            story {
                id
            }
        }
    }
`;


