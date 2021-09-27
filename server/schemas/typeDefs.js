const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        book: [Book]
    }

    type Book {
        _id: ID
        bookTitle: String
        bookAuthor: String
    }

    type Auth {
    token: ID!
    user: User
  }

    type Query {
    users: [User]
    user(username: String!): User
    book(username: String): [Book]
    book(bookTitle: ID!): Book
    book(bookAuthor: ID!): Book
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBook(bookTitle: String!): Book
    addBook(bookAuthor: ID! bookText: String!): Book
    removeBook(bookId: ID!): Book
    }
`;


module.exports = typeDefs;
