import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        password
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        email
        username
        password
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($bookText: String!) {
    saveBook(bookText: $bookText) {
      bookData
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookText: String!) {
    removeBook(bookText: $bookText) {
     bookData
      }
    }
`;