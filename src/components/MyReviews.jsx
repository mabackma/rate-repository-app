import useIsSignedIn from "../hooks/useIsSignedIn";
import ReviewItem from "./ReviewItem";
import { View, FlatList, StyleSheet, Button, Alert } from 'react-native';
import { useNavigate } from "react-router-native";
import useDeleteReview from "../hooks/useDeleteReview";


const styles = StyleSheet.create({
  separator: {
    backgroundColor: '#e1e4e8',
    height: 10,
    marginVertical: 8,
  },
  flexContainerHorSpread: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 8,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const Buttons = ({reponame, me, refetch}) => {
  const navigate = useNavigate();
  const [deleteReview] = useDeleteReview();

  const getRepoId = (reponame) => {
    return reponame.replace(/\//g, '.');
  }

  const deleteUserReview = (reponame) => {
    reviewToDeleteId = me.id + '.' + getRepoId(reponame);

    Alert.alert('DELETE', 'Are you sure you want to delete this review?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
      },
      {        
        text: 'OK',
        onPress: async () => {
          await deleteReview(reviewToDeleteId);
          await refetch();
        },
      },
    ]);
  }

  return (
    <View style={styles.flexContainerHorSpread}>
      <Button 
        title="View repository" 
        color='blue'
        onPress={() => navigate(`/repositories/${getRepoId(reponame)}`)}
      />
      <Button
        title="Delete review"
        color='red'
        onPress={() => deleteUserReview(reponame)}
      />
    </View>
  )
}

const MyReviews = () => {
  const { me, refetch } = useIsSignedIn(true);

  const nodes = me?.reviews.edges.map((item => item.node));
  const reviews = nodes?.map(item => ({
    ...item,
    user: {username: item.repository.fullName}
  }));
  
  return (
    <FlatList
      data={reviews}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <>
          <ReviewItem review={item} />
          <Buttons reponame={item.user.username} me={me} refetch={refetch}/>
        </>
      )}
      keyExtractor={({ id }) => id}
    />
  )
}

export default MyReviews;