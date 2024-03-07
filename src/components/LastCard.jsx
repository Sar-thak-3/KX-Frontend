import CoinCard from "./CoinCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LastCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="bg-white">
      <Slider {...settings}>
        {[...Array(7)].map((_, index) => (
          <div key={index} className="">
            <CoinCard />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LastCard;
