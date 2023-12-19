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
          id
          url
        }
      }
    }
  }
`;

const GET_REPOSITORY_BY_ID = gql`
  query Repository($repositoryId: ID!) {
    repository(id: $repositoryId) {
      fullName
      description
      language
      ownerAvatarUrl
      reviewCount
      ratingAverage
      stargazersCount
      forksCount
      id
      url
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

export { GET_REPOSITORIES, SIGNED_IN, GET_REPOSITORY_BY_ID };