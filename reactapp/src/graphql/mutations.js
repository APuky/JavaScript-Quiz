import { gql } from 'graphql-request';

export const LOGIN_MUTATION = gql`
  mutation LOGIN_MUTATION($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        sessionToken
        item {
          id
          name
          email
          isAdmin
        }
      }
    }
  }
`;

export const REGISTER_MUTATION = gql`
  mutation REGISTER_MUTATION($data: UserCreateInput!) {
    createUser(data: $data) {
      name
      email
    }
  }
`;
