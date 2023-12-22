import { CREATE_USER } from '../graphql/mutations';
import { useMutation } from '@apollo/client';

const useSignUp = () => {
  const [mutate, result] = useMutation(CREATE_USER);

  const signUp = async ({ username, password }) => {
    const { data } = await mutate({
      variables: { user: { username, password } },
    });
  };

  return [signUp, result];
};

export default useSignUp;