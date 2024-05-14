import ReviewFormLayout from "@/components/main/general/review/reviewFormLayout";
import ReviewFormMainContent from "./reviewFormMainContent";

const ReviewForm = ({ product }) => {
  return (
    <ReviewFormLayout>
      <ReviewFormMainContent pId={product._id} />
    </ReviewFormLayout>
  );
};

export default ReviewForm;
