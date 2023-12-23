import RepositoryItem from "./RepositoryItem";
import useRepository from "../hooks/useRepository";
import { useParams } from "react-router-native";
import { useEffect } from "react";
import useReviews from "../hooks/useReviews";
import { FlatList, View, StyleSheet } from "react-native";
import ReviewItem from "./ReviewItem";


const styles = StyleSheet.create({
  separator: {
    backgroundColor: '#e1e4e8',
    height: 10,
    marginVertical: 8,
  }
});

const RepositoryInfo = ({ repository }) => {
  return (
    <View>
      <RepositoryItem
        ownerAvatarUrl={repository?.ownerAvatarUrl}
        fullName={repository?.fullName} 
        description={repository?.description}
        language={repository?.language}
        stargazersCount={repository?.stargazersCount}
        forksCount={repository?.forksCount}
        reviewCount={repository?.reviewCount}
        ratingAverage={repository?.ratingAverage}
        id={repository?.id}
        url={repository?.url}
        showButton={true}
      />
      <ItemSeparator />
    </View>
  )
};

const ItemSeparator = () => <View style={styles.separator} />;

const SingleRepository = () => {
  const params = useParams();
  const { repository, refetch } = useRepository(params.repoId);
  const { reviews } = useReviews(params.repoId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await refetch();
      } catch (error) {
        console.error('Error fetching repository:', error);
      }
    };

    fetchData();
  }, [repository]);

  console.log("SINGLE REPOSITORY REVIEWS:", reviews)
  return (
    <FlatList
      data={reviews}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
    />
  )
};

export default SingleRepository;