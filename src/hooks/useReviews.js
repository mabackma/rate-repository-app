import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REVIEWS_BY_ID } from '../graphql/queries';

const useReviews = (id) => {
  const { data, loading, refetch } = useQuery(GET_REVIEWS_BY_ID, {
    variables: {repositoryId: id},
    fetchPolicy: 'cache-and-network',
  });

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!loading && data && data.repository) {
      // Map the reviews from the data
      const onlyReviews = data.repository.reviews.edges.map(edge => edge.node)
      setReviews(onlyReviews);
    }
  }, [data, loading]);

  return { reviews, loading, refetch };
};

export default useReviews;