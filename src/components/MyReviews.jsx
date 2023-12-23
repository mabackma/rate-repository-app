import useIsSignedIn from "../hooks/useIsSignedIn";
import ReviewItem from "./ReviewItem";
import { View, FlatList, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  separator: {
    backgroundColor: '#e1e4e8',
    height: 10,
    marginVertical: 8,
  }
});

const MyReviews = () => {
  const { me } = useIsSignedIn(true);

  const ItemSeparator = () => <View style={styles.separator} />;

  const nodes = me?.reviews.edges.map((item => item.node));
  const reviews = nodes?.map(item => ({
    ...item,
    user: {username: item.repository.fullName}
  }));
  
  return (
    <FlatList
      data={reviews}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
    />
  )
}

export default MyReviews;