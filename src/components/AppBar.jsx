import { View, StyleSheet, ScrollView } from 'react-native';
import { Link } from "react-router-native";
import Constants from 'expo-constants';
import theme from '../theme';
import Text from './Text';
import useIsSignedIn from '../hooks/useIsSignedIn';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
    flexDirection: 'row'
  },
  title: {
    padding: 10,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
    color: "white",
  },
});

const AppBar = () => {
  const { me } = useIsSignedIn();
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const handleSignOut = async () => {
    // Remove the access token from storage
    await authStorage.removeAccessToken();

    // Reset the Apollo Client's store
    await apolloClient.resetStore();

    me = null
  };
  
  return (
  <View style={styles.container}>
    <ScrollView horizontal>
      <Link to="/">
        <Text style={styles.title}>Repositories</Text>
      </Link>
      {me ? (
        <Link to="/create-review">
          <Text style={styles.title}>Create a review</Text>
        </Link>
      ) : (null)}
      {me ? (
        <Link to="/my-reviews">
          <Text style={styles.title}>My reviews</Text>
        </Link>
      ) : (null)}
      {me ? (
        <Link onPress={handleSignOut} to="/">
          <Text style={styles.title}>Sign out</Text>
        </Link>
      ) : (
        <Link to="/sign-in">
          <Text style={styles.title}>Sign in</Text>
        </Link>
      )}
      {me ? (
        null
      ) : (
        <Link to="/sign-up">
          <Text style={styles.title}>Sign up</Text>
        </Link>
      )}
    </ScrollView>
  </View>
  );
};

export default AppBar;