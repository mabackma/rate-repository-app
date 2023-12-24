import { CREATE_REVIEW } from '../graphql/mutations';
import { useMutation } from '@apollo/client';

const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);
  
  const createReview = async ({ ownerName, rating, repositoryName, text }) => {
    await mutate({
      variables: { review: { ownerName, rating, repositoryName, text }},
    });
  };

  return [createReview, result];
};

export default useCreateReview;
