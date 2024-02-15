import BannerCardLayout from "@/pages/(user)/components/slugs/card/bannerCardLayout";
import MainCardLayout from "@/pages/(user)/components/slugs/card/mainCardLayout";
import MiscCard from "./card/miscCard";
import MiscDesc from "./main/miscDesk";

const MiscMainContent = ({ miscPage }) => {


  const pageUrl = `https://workfolio.ir/misc-pages/${miscPage?.slug}`;

  return (
    <>
      <BannerCardLayout>
        <MiscCard pageUrl={pageUrl} miscPage={miscPage} />
      </BannerCardLayout>
      <MainCardLayout>
        <MiscDesc description={miscPage?.description} />
      </MainCardLayout>
    </>
  );
};

export default MiscMainContent;
