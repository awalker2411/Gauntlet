const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String
        email: String
        password: String
        # character: [Character]
    }
    type Character {
        _id: ID!
        charName: String!
        charStats: String
        user: [User]
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: user
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
    }
`

module.exports = typeDefs;