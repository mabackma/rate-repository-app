import { FlatList, View, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { useState, useEffect } from 'react';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#e1e4e8',
  },
  separator: {
    marginVertical: 8,
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories } = useRepositories();

  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  console.log("REPOSITORY NODES:", repositoryNodes);

  return (
    <SafeAreaView style={styles.listContainer}>
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({item}) => 
          <RepositoryItem
            ownerAvatarUrl={item.ownerAvatarUrl}
            fullName={item.fullName} 
            description={item.description}
            language={item.language}
            stargazersCount={item.stargazersCount}
            forksCount={item.forksCount}
            reviewCount={item.reviewCount}
            ratingAverage={item.ratingAverage}
          />
        }
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};


export default RepositoryList;