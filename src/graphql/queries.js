import { gql } from '@apollo/client';

const GET_REPOSITORIES = gql`
  query Query {
    repositories {
      edges {
        node {
          fullName
          description
          language
          ownerAvatarUrl
          reviewCount
          ratingAverage
          stargazersCount
          forksCount
        }
      }
    }
  }
`;

const SIGNED_IN = gql`
  query Query {
    me {
      username
    }
  }
`;

export { GET_REPOSITORIES, SIGNED_IN };