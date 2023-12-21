import { View, Button } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import * as yup from 'yup';

const initialValues = {
  name: '',
  repositoryName: '',
  rating: null,
  text: ''
};

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Repository owner name is required'),
  repositoryName: yup
    .string()
    .required('Repository name is required'),
  rating: yup
    .number()
    .integer('Rating must be an integer')
    .min(0, 'Rating must be between 0 and 100')
    .max(100, 'Rating must be between 0 and 100')
    .required('Rating is required'),
});

const CreateReviewContainer = ({onSubmit}) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => (
        <View>
          <FormikTextInput
            name="name"
            placeholder="Repository owner name"
          />
          <FormikTextInput
            name="repositoryName"
            placeholder="Repository name"
          />
          <FormikTextInput
            name="rating"
            placeholder="Rating between 0 and 100"
          />
          <FormikTextInput
            name="text"
            placeholder="Review"
          />
          <View style={{ margin: 10 }}>
            <Button onPress={handleSubmit} title="Create a review" />
          </View>
        </View>
      )}
    </Formik>
  )
};

export default CreateReviewContainer;