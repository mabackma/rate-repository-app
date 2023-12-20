import RepositoryItem from "./RepositoryItem";
import useRepository from "../hooks/useRepository";
import { useParams } from "react-router-native";
import { useEffect, useState } from "react";
import Text from "./Text";


const RepositoryInfo = ({ repository }) => {
  return (
    <RepositoryItem
      ownerAvatarUrl={repository.ownerAvatarUrl}
      fullName={repository.fullName} 
      description={repository.description}
      language={repository.language}
      stargazersCount={repository.stargazersCount}
      forksCount={repository.forksCount}
      reviewCount={repository.reviewCount}
      ratingAverage={repository.ratingAverage}
      id={repository.id}
      url={repository.url}
      showButton={true}
    />
  )
};

const SingleRepository = () => {
  const params = useParams();

/*
  const { repository } = useRepository(params.repoId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await repository.refetch();
      } catch (error) {
        console.error('Error fetching repository:', error);
      }
    };

    fetchData();
  }, [repository]);

  return <RepositoryInfo repository={repository} />;
*/
  const { repository, loading, error } = useRepository(params.repoId);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error || !repository) {
    return <Text>Error loading repository</Text>;
  }

  return (
    <RepositoryInfo repository={repository}/>
  )

};

export default SingleRepository;