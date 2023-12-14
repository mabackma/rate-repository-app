import { Text, View, Image, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    fontSize: 16,
  },
  boldText: {
    fontWeight: 'bold',
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
  }
});

const UserInfo = ({fullName, description, language}) => (
  <View >
    <Text style={styles.boldText}>{fullName}</Text>
    <Text>{description}</Text>
    <Text style={styles.blueContainer}>{language}</Text>
  </View>
);

const Details = ({amount, detail}) => (
  <View>
    <Text style={styles.boldText}>{amount}</Text>
    <Text style={styles.wrapText}>{detail}</Text>
  </View>
);

const RepositoryItem = ({ownerAvatarUrl, fullName, description, language, stargazersCount, forksCount, reviewCount, ratingAverage}) => (
  <View style={styles.content}>
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
  </View>
);

export default RepositoryItem;