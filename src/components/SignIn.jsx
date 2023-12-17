import { View, Button } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn';
import { useNavigate } from "react-router-dom";

const initialValues = {
  name: '',
  password: '',
};

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required'),
  password: yup
    .string()
    .required('Password is required'),
});

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { name, password } = values;

    try {
      await signIn({ username: name, password });
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => (
        <View>
          <FormikTextInput
            name="name"
            placeholder="Username"
          />
          <FormikTextInput
            secureTextEntry
            name="password"
            placeholder="Password"
          />
          <View style={{ margin: 10 }}>
            <Button onPress={handleSubmit} title="Sign In" />
          </View>
        </View>
      )}
    </Formik>
  )
};

export default SignIn;