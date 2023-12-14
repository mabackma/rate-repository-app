import { View, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
  },
  title: {
    padding: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});

const AppBar = ({title}) => {
  return (
  <View style={styles.container}>
    <Text style={styles.title}>
      {title}
    </Text>
  </View>
  );
};

export default AppBar;