import CoinCard from "./CoinCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LastCard = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <div className="bg-white">
      <h2 className="text-2xl font-bold  leading-5 mb-3 pt-16 pb-2 lg:px-16 lg:pb-3">
        You May Also Like
      </h2>

      <Slider {...settings} className="">
        {[...Array(7)].map((_, index) => (
          <div key={index} className="">
            <CoinCard />
          </div>
        ))}
      </Slider>

      <h2 className="text-2xl font-bold  leading-5 mb-3 py-2 lg:px-16 lg:pb-3">
        Trending Coins
      </h2>

      <Slider {...settings} className="-mx-1">
        {[...Array(7)].map((_, index) => (
          <div key={index} className="px-1">
            <CoinCard />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LastCard;
