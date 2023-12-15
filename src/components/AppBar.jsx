import { View, StyleSheet, ScrollView } from 'react-native';
import { Link } from "react-router-native";
import Constants from 'expo-constants';
import theme from '../theme';
import Text from './Text';

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
  return (
  <View style={styles.container}>
    <ScrollView horizontal>
      <Link to="/">
        <Text style={styles.title}>Repositories</Text>
      </Link>
      <Link to="/sign-in">
        <Text style={styles.title}>Sign in</Text>
      </Link>
    </ScrollView>
  </View>
  );
};

export default AppBar;