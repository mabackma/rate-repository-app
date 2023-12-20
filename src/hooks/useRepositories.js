import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const { data, loading, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  const [repositories, setRepositories] = useState(null);

  useEffect(() => {
    if (!loading && data) {
      setRepositories(data.repositories);
    }
  }, [data, loading]);

  return { repositories, loading, refetch };
};

export default useRepositories;