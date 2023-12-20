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

const GET_REVIEWS_BY_ID = gql`
  query Repository($repositoryId: ID!) {
    repository(id: $repositoryId) {
      id
      fullName
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
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

export { GET_REPOSITORIES, GET_REPOSITORY_BY_ID, GET_REVIEWS_BY_ID, SIGNED_IN };