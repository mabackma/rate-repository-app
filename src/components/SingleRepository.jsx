import RepositoryItem from "./RepositoryItem";
import useRepository from "../hooks/useRepository";
import { useParams } from "react-router-native";
import { useEffect } from "react";
import Text from "./Text";
import useReviews from "../hooks/useReviews";
import { FlatList, View, StyleSheet } from "react-native";


const styles = StyleSheet.create({
  flexContainerHor: {
    flexDirection: 'row',
    margin: 8,
  },
  circle: {
    width: 50,  
    height: 50,
    borderRadius: 25,  
    borderColor: 'blue',
    borderWidth: 2, 
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8, 
  },
  circleText: {
    fontSize: 20,
    color: 'blue',
  },
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

const Rating = ({review}) => {
  return (
    <View style={styles.circle}>
      <Text style={styles.circleText}>
        {`${review.rating}`}
      </Text>
    </View>
  )
}

const UserItem = ({review}) => {
  const createDate = (inputDate) => {
    const dateObject = new Date(inputDate);
    return dateObject.toLocaleDateString('fi-FI').toString();
  }

  return (
    <View>
      <Text style={{ fontWeight: 'bold' }}>
        {`${review.user.username}`}
      </Text>
      <Text>
        {`${createDate(review.createdAt)}`}
      </Text>
      <Text>
        {`${review.text}`}
      </Text>
    </View>
  )
}

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.flexContainerHor}>
      <Rating review={review} />
      <UserItem review={review} />
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