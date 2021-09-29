const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        bookCount: String
        savedBooks: [Book]
    }

    type Book {
        bookId: ID
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }

    type Auth {
        token: ID!
        user: User
  }

    type Query {
    users: [User]
    user(username: String!): User
    me: User
  }

  input bookInfo {
      authors: [String]
      description: String
      bookId: String
      image: String
      title: String
      link: String
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookData: bookInfo!): User
    removeBook(bookId: ID!): User
    }
`;


module.exports = typeDefs;
