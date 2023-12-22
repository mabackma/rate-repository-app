import useSignUp from '../hooks/useSignUp';
import { useNavigate } from "react-router-dom";
import SignUpContainer from './SignUpContainer';
import useSignIn from '../hooks/useSignIn';

const SignUp = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { name, password } = values;

    try {
      await signUp({ username: name, password });
      await signIn({ username: name, password });
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };
 
  return <SignUpContainer onSubmit={onSubmit} />

};

export default SignUp;