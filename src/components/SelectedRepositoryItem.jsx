import RepositoryItem from "./RepositoryItem";
import useRepository from "../hooks/useRepository";
import { useParams } from "react-router-native";
import Text from "./Text";

const SelectedRepositoryItem = () => {
  const params = useParams();
  const { repository, loading, error } = useRepository(params.repoId);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error || !repository) {
    return <Text>Error loading repository</Text>;
  }

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

export default SelectedRepositoryItem;