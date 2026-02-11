import HeroImage from "../../molecules/heroImage/HeroImage";
import HeroText from "../../molecules/heroText/HeroText";

function HomeBanner() {
  return (
    <div className="bg-gradient-to-r from-skyblue to-mintgreen flex w-[90%] h-[622px] rounded-[16px] mt-14">
      <HeroText />
      <HeroImage />
    </div>
  );
}

export default HomeBanner;
