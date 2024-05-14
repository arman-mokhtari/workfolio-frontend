import BannerCardLayout from "@/components/main/general/slugs/card/bannerCardLayout";
import MainCardLayout from "@/components/main/general/slugs/card/mainCardLayout";
import MiscCard from "../card/miscCard";
import MiscDesc from "./miscDesk";

const MiscMainContent = ({ pageData }) => {
  return (
    <>
      <BannerCardLayout>
        <MiscCard pageData={pageData} />
      </BannerCardLayout>
      <MainCardLayout>
        <MiscDesc description={pageData?.description} />
      </MainCardLayout>
    </>
  );
};

export default MiscMainContent;
