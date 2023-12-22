import { View, StyleSheet } from 'react-native';
import RepositoryList from './RepositoryList';
import SingleRepository from './SingleRepository';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { Route, Routes, Navigate } from 'react-router-native';
import AppBar from './AppBar';
import CreateReview from './CreateReview';


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
        <Route path="/repositories/:repoId" element={<SingleRepository />} />  
        <Route path="/create-review" element={<CreateReview/>} />
        <Route path="/sign-in" element={<SignIn/>} />
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;