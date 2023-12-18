import useSignIn from '../hooks/useSignIn';
import { useNavigate } from "react-router-dom";
import SignInContainer from './SignInContainer';

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
 
  return <SignInContainer onSubmit={onSubmit} />

};

export default SignIn;