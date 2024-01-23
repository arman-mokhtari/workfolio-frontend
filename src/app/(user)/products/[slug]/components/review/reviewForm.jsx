import ReviewFormMainContent from "./reviewFormMainContent";
import ReviewFormLayout from "../../../../components/review/reviewFormLayout";

const ReviewForm = ({ product }) => {
  return (
    <ReviewFormLayout>
      <ReviewFormMainContent pId={product._id} />
    </ReviewFormLayout>
  );
};

export default ReviewForm;
