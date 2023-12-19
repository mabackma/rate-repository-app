import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORY_BY_ID } from '../graphql/queries';

const useRepository = (id) => {
  const { data, error, loading, refetch } = useQuery(GET_REPOSITORY_BY_ID, {
    variables: {repositoryId: id},
    fetchPolicy: 'cache-and-network',
  });

  useEffect(() => {
    if (loading) {
      console.log('Loading...');
    }
    if (error) {
      console.error('Error fetching repository:', error);
    }
    if (data) {
      console.log('Data received');
    }
  }, [data, error, loading]);

  return { repository: data?.repository, loading, refetch };
};

export default useRepository;