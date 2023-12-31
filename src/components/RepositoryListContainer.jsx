import { FlatList, View, StyleSheet, StatusBar } from 'react-native';
import RepositoryItem from './RepositoryItem';

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

export const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <View>
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
            id={item.id}
            url={item.url}
            showButton={false}
          />
        }
        keyExtractor={item => item.id}
      />
    </View>
  );
};
