import FaqsSection from "./faqsSection";
import DescriptionLayout from "./descriptionLayout";
import DescHtml from "./descHtml";

const MainDescription = ({ description, faqs }) => {
  return (
    <DescriptionLayout>
      <DescHtml description={description} />
      <FaqsSection faqs={faqs} />
    </DescriptionLayout>
  );
};

export default MainDescription;
