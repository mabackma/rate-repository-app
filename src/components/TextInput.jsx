import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';


const styles = StyleSheet.create({
  signIn: {
    borderWidth: 1,
    padding: 2,
    paddingLeft: 5,
    margin: 5,
    marginLeft: 10,
    marginRight: 10,
    fontSize: theme.fontSizes.body
  },
  inputError: {
    borderWidth: 2,
    borderColor: '#d73a4a',
    padding: 2,
    paddingLeft: 5,
    margin: 5,
    marginLeft: 10,
    marginRight: 10,
    fontSize: theme.fontSizes.body
  }
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style, styles.signIn];

  return <NativeTextInput style={error ? [styles.inputError, textInputStyle] : textInputStyle} {...props} />;
};

export default TextInput;