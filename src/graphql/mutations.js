import { gql } from '@apollo/client';

const AUTHENTICATE = gql`
  mutation Mutation($credentials: AuthenticateInput!) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;

export default AUTHENTICATE;