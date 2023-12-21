import useCreateReview from '../hooks/useCreateReview';
import { useNavigate } from "react-router-dom";
import CreateReviewContainer from './CreateReviewContainer';

const CreateReview = () => {
  const [createReview] = useCreateReview();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { name, rating, repositoryName, text } = values;

    try {
      await createReview({ ownerName: name, rating: parseInt(rating, 10), repositoryName, text });
      navigate(`/repositories/${name}.${repositoryName}`);
    } catch (e) {
      console.log(e);
    }
  };
 
  return <CreateReviewContainer onSubmit={onSubmit} />

};

export default CreateReview;