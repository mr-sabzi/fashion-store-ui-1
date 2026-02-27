import HomeBanner from "../../components/organisms/homeBanner/HomeBanner";
import SponsorsSection from "../../components/organisms/sponsorsSection/SponsorsSection";

function Home() {
  return (
    <>
      <div className="flex flex-col items-center w-full ">
        <HomeBanner />
        <SponsorsSection/>
      </div>

      <div className="h-[100vh]"></div>
    </>
  );
}
export default Home;
