import { gql } from '@apollo/client';

const GET_REPOSITORIES = gql`
  query Query($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
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

const GET_CURRENT_USER = gql`
  query getCurrentUser($includeReviews: Boolean = false) {
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            createdAt
            rating
            text
            repository {
              fullName
            }
          }
        }
      }
    }
  }
`;

export { GET_REPOSITORIES, GET_REPOSITORY_BY_ID, GET_REVIEWS_BY_ID, GET_CURRENT_USER };