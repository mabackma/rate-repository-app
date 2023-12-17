import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { SIGNED_IN } from '../graphql/queries';

const useIsSignedIn = () => {
  const { data } = useQuery(SIGNED_IN, {
    fetchPolicy: 'cache-and-network',
  });

  useEffect(() => {
    if (data && data.me) {
      console.log('User is signed in', data.me.username);
    }
  }, [data]);

  return { username: data?.me?.username };
};

export default useIsSignedIn;