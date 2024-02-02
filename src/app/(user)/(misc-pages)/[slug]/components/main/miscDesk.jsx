import DescHtml from "@/pages/(user)/components/slugs/description/descHtml";
import MiscDescLayout from "./miscDescLayout";

const MiscDesc = ({ description }) => {
  return (
    <MiscDescLayout>
      <DescHtml description={description} />
    </MiscDescLayout>
  );
};

export default MiscDesc;