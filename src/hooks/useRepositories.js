import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import GET_REPOSITORIES from '../graphql/queries';

const useRepositories = () => {
  const { data, error, loading, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  useEffect(() => {
    // You can handle data, error, and loading here if needed
    if (loading) {
      console.log('Loading...');
    }
    if (error) {
      console.error('Error fetching repositories:', error);
    }
    if (data) {
      console.log('Data:', data);
    }
  }, [data, error, loading]);

  return { repositories: data?.repositories, loading, refetch };
};

export default useRepositories;