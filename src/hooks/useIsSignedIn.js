import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CURRENT_USER } from '../graphql/queries';

const useIsSignedIn = (includeReviews = false) => {
  const { data, refetch } = useQuery(GET_CURRENT_USER, {
    variables: { includeReviews },
    fetchPolicy: 'cache-and-network',
  });

  useEffect(() => {
    if (data && data.me) {
      console.log(`${data.me.username} is signed in`);
    }
  }, [data]);

  return { me: data?.me, refetch };
};

export default useIsSignedIn;