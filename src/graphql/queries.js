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

export default GET_REPOSITORIES;