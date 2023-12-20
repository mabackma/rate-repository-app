import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORY_BY_ID } from '../graphql/queries';

const useRepository = (id) => {
  const { data, loading, refetch } = useQuery(GET_REPOSITORY_BY_ID, {
    variables: {repositoryId: id},
    fetchPolicy: 'cache-and-network',
  });

  const [repository, setRepository] = useState();

  useEffect(() => {
    if (!loading && data) {
      setRepository(data.repository);
    }
  }, [data, loading]);

  return { repository, loading, refetch };
};

export default useRepository;