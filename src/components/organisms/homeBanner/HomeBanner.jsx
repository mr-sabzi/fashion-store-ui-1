import HeroImage from "../../molecules/heroImage/HeroImage";
import HeroText from "../../molecules/heroText/HeroText";

function HomeBanner() {
  return (
    <div className=" md:overflow-visible overflow-hidden bg-gradient-to-r from-skyblue to-mintgreen flex flex-col md:flex-row items-center w-[90%] md:h-[605px] h-[875px] rounded-[16px] mt-14 gap-[32px] md:gap-0">
      <HeroText />
      <HeroImage />
    </div>
  );
}

export default HomeBanner;
