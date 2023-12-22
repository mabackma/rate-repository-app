import { View, Image, StyleSheet, Button, Pressable } from 'react-native';
import theme from '../theme';
import Text from './Text';
import * as Linking from 'expo-linking';
import { useNavigate } from 'react-router-native';

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    fontSize: theme.fontSizes.body,
  },
  boldText: {
    fontWeight: theme.fontWeights.bold,
  },
  flexContainerHor: {
    flexDirection: 'row',
    margin: 8,
  },
  wrapText: {
    flexWrap: 'wrap'
  },
  flexContainerHorSpread: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 8,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    margin: 10,
    marginTop: 4,
    marginBottom: 30,
  },
  blueContainer: {
    backgroundColor: 'blue',
    color: 'white',
    borderRadius: 4,
    padding: 4, 
    marginTop: 16,
    alignSelf: 'flex-start',
  },
  center: { 
    marginBottom: 8,
    alignItems: 'center',
  },
});

const UserInfo = ({fullName, description, language}) => (
  <View >
    <Text style={styles.boldText}>{fullName}</Text>
    <View style={{ width: '90%' }}>
      <Text>{description}</Text>
    </View>
    <Text style={styles.blueContainer}>{language}</Text>
  </View>
);

const Details = ({amount, detail}) => (
  <View>
    <Text style={styles.boldText}>{amount}</Text>
    <Text style={styles.wrapText}>{detail}</Text>
  </View>
);

const RepositoryItem = ({ownerAvatarUrl, fullName, description, language, stargazersCount, forksCount, reviewCount, ratingAverage, id, url, showButton}) => {
  const navigate = useNavigate();
  
  const selectRepository = (id) => {
    navigate(`/repositories/${id}`)
  }
  
  const toGitHub = (url) => {
    Linking.openURL(url)
  }

  return (
    <View testID="repositoryItem" style={styles.content}>
      <Pressable onPress={() => {selectRepository(id)}}>
        <View style={styles.flexContainerHor}>
          <Image style={styles.tinyLogo} source={{uri: ownerAvatarUrl}}/>
          <UserInfo fullName={fullName} description={description} language={language}/>
        </View>

        <View style={styles.flexContainerHorSpread}>
          <Details amount={stargazersCount} detail={"Stars"}/>
          <Details amount={forksCount} detail={"Forks"}/>
          <Details amount={reviewCount} detail={"Reviews"}/>
          <Details amount={ratingAverage} detail={"Rating"}/>
        </View>

        {showButton ? (
          <View style={styles.center}>
            <Button onPress={() => toGitHub(url)} title="Open in GitHub" />
          </View>
        ) : null}
      </Pressable>
    </View>
  )
};

export default RepositoryItem;