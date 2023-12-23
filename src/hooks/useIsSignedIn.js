import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CURRENT_USER } from '../graphql/queries';

const useIsSignedIn = (includeReviews = false) => {
  const { data } = useQuery(GET_CURRENT_USER, {
    variables: { includeReviews },
    fetchPolicy: 'cache-and-network',
  });

  useEffect(() => {
    if (data && data.me) {
      console.log('User is signed in. Reviews:', data.me);
    }
  }, [data]);

  return { me: data?.me };
};

export default useIsSignedIn;