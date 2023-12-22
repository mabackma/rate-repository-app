import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (order) => {
  let orderBy = 'CREATED_AT';
  let orderDirection = 'DESC';
  
  switch(order) {
    case 'highestRating':
      orderBy = 'RATING_AVERAGE';
      orderDirection = 'DESC';
      break;
    case 'lowestRating':
      orderBy = 'RATING_AVERAGE';
      orderDirection = 'ASC';
      break;
    default:
      orderBy = 'CREATED_AT';
      orderDirection = 'DESC';
  }

  const { data, loading, refetch } = useQuery(GET_REPOSITORIES, {
    variables: { orderBy, orderDirection },
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