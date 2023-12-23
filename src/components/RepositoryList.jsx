import { RepositoryListContainer } from './RepositoryListContainer';
import useRepositories from '../hooks/useRepositories';
import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { useState } from 'react';
import OrderPicker from './OrderPicker';

import { Searchbar } from 'react-native-paper';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#e1e4e8',
  }
});

const RepositoryList = () => {
  const [order, setOrder] = useState('latest');
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);

  const { repositories } = useRepositories(order, searchQuery);

  return (
    <SafeAreaView style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <OrderPicker order={order} setOrder={setOrder}/>
      <RepositoryListContainer repositories={repositories} />
    </SafeAreaView>
  )
};


export default RepositoryList;