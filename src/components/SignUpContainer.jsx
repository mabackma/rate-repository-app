import { View, Button } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import * as yup from 'yup';

const initialValues = {
  name: '',
  password: '',
  confirmation: '',
};

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(5, 'Password must be at least 5 characters long'),
  confirmation: yup
    .string()
    .oneOf([yup.ref('password'), null])
    .required('Password confirmation is required'),
});

const SignUpContainer = ({onSubmit}) => {
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
          <FormikTextInput
            secureTextEntry
            name="confirmation"
            placeholder="Password confirmation"
          />
          <View style={{ margin: 10 }}>
            <Button onPress={handleSubmit} title="Sign Up" />
          </View>
        </View>
      )}
    </Formik>
  )
};

export default SignUpContainer;
