import { RepositoryListContainer } from './RepositoryListContainer';
import useRepositories from '../hooks/useRepositories';
import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { useState } from 'react';
import OrderPicker from './OrderPicker';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#e1e4e8',
  }
});

const RepositoryList = () => {
  const [order, setOrder] = useState('latest');
  const { repositories } = useRepositories(order);

  return (
    <SafeAreaView style={styles.container}>
      <OrderPicker order={order} setOrder={setOrder}/>
      <RepositoryListContainer repositories={repositories} />
    </SafeAreaView>
  )
};


export default RepositoryList;