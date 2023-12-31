import { gql } from '@apollo/client';

const AUTHENTICATE = gql`
  mutation Authenticate($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;

const CREATE_REVIEW = gql`
  mutation CreateReview($review: CreateReviewInput) {
    createReview(review: $review) {
      id
    }
  }
`;

const DELETE_REVIEW = gql`
  mutation DeleteReview($deleteReviewId: ID!) {
    deleteReview(id: $deleteReviewId)
  }
`;

const CREATE_USER= gql`
  mutation CreateUser($user: CreateUserInput) {
    createUser(user: $user) {
      id
    }
  }
`;

export { AUTHENTICATE, CREATE_REVIEW, DELETE_REVIEW, CREATE_USER };