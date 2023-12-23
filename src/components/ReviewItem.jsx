import { View, StyleSheet } from "react-native";
import Text from "./Text";

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
  }
});

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
      <View style={{ width: '90%' }}>
        <Text>
          {`${review.text}`}
        </Text>
      </View>
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

export default ReviewItem;