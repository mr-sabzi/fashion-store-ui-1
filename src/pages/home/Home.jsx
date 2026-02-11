import HomeBanner from "../../components/organisms/homeBanner/HomeBanner";

function Home() {
  return (
    <>
      <div className="flex flex-col items-center w-full ">
        <HomeBanner />
      </div>

      <div className="h-[100vh]"></div>
    </>
  );
}
export default Home;
