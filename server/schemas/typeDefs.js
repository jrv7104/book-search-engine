const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        bookCount: String
        savedBooks: [Book]
    }

    type Book {
        bookId: id
        authors: [String]
        description: String
        title: String
        image: Image
        link: String
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
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookAuthor: ID!, bookTitle: ID!, image: image!, link: link!): User
    removeBook(bookId: ID!): User
    }
`;


module.exports = typeDefs;
