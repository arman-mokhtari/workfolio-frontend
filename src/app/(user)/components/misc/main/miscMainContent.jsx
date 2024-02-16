import BannerCardLayout from "@/pages/(user)/components/slugs/card/bannerCardLayout";
import MainCardLayout from "@/pages/(user)/components/slugs/card/mainCardLayout";
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
