import FAQ from "../components/FAQ";
import Navbar from "../components/Navbar";
import DesktopCard from "../components/DesktopCard";
import MobileCard from "../components/MobileCard";
import MidNavbar from "../components/MidNavbar";
import Fundamentals from "../components/Fundamentals";
import TrendingCoins from "../components/TrendingCoins";
import Sentiments from "../components/Sentiment";
import Team from "../components/Team";
import Navigation from "../components/Navigation";
import Tokenomics from "../components/Tokenomics";
import GraphShow from "../components/GraphShow";
import LastCard from "../components/LastCard";

const Home = () => {
  return (
    <section className="bg-default-gray min-h-screen">
      <Navbar />
      <Navigation />
      <div className="bg-default-gray w-full  max-w-[83rem] mx-auto xl:flex gap-5   ">
        <div className=" bg-white w-full  max-w-[55.0625rem]  xl:bg-default-gray pt-4 px-4 sm:px-0  xl:pt-0 ">
          <GraphShow />
          <MidNavbar />
          <Fundamentals />
          <Sentiments />
          <FAQ />
          <Tokenomics />
          <Team />
        </div>
        <div className="w-[95%] sm:w-full mx-auto  mt-[4.25rem] mb-[3.875rem] lg:mt-7 lg:mb-0">
          <MobileCard className="xl:hidden" />
          <DesktopCard className="hidden xl:block xl:mx-0" />
          <TrendingCoins className="hidden xl:block xl:mx-0"/>
        </div>
      </div>
      <LastCard />
    </section>
  );
};
export default Home;
