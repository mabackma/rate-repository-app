import { View, StyleSheet } from 'react-native';
import RepositoryList from './RepositoryList';
import SelectedRepositoryItem from './SelectedRepositoryItem';
import SignIn from './SignIn';
import { Route, Routes, Navigate } from 'react-router-native';
import AppBar from './AppBar';


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  }
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar/>
      <Routes>
        <Route path="/" element={<RepositoryList/>} />  
        <Route path="/repositories/:repoId" element={<SelectedRepositoryItem />} />  
        <Route path="/sign-in" element={<SignIn/>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};
//<Route path="/" element={<RepositoryList/>} />
export default Main;