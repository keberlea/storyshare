import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
        id
        username
        stories {
            id
            title
            prompt
            content
            createdAt
            username
            comments {
                id
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
            id
            title
            content
            createdAt
            author {
                username
            }
            comments {
                id
                content
                createdAt
                commentAuthor {
                    username
                }
            }
        }
    }
`;

export const QUERY_COMMENTS = gql `
    query comments {
        comments {
            id
            commentText
            createdAt
            commentAuthor
            story {
                id
            }
        }
    }
`;


