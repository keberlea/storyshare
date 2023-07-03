const typeDefs = gql`
    type User {
        _id: ID
        username: String
        password: String
        stories: [Story]
        prompts: [Prompt]
    }

    type Story {
        _id: ID
        content: String
    }

    type Prompt {
        _id: ID
        title: String
        description: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]
        user(userId: ID!): User
    }

    type Mutation {
        createUser(username: String!, password: String!): Auth
        login(username: String!, password: String!): Auth
        addStory(userId: ID!, content: String!): User
        addPrompt(userId: ID!, title: String!, description: String!): User
        deleteUser(userId: ID!): User
        deleteStory(_id: ID!): Boolean
        deletePrompt(_id: ID!): Boolean

    }

`;

module.exports = typeDefs;