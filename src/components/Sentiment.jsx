import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/circle.css";

const slides = [
  
  <div class="max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="flex">
      <svg
        class="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3 mr-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
      </svg>
      <a href="#">
        <h5 class="mb-2 text-l font-semibold tracking-tight text-gray-900 dark:text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing.
        </h5>
      </a>
    </div>
    <p class="pl-8 mb-3 font-normal text-gray-500 dark:text-gray-400">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima enim
      tenetur quia illo maiores culpa quisquam quaerat, possimus earum molestias
      mollitia nisi, eius dicta harum nostrum ipsam, at repellat laborum!
    </p>
  </div>,
  <div class="max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="flex">
      <svg
        class="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3 mr-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
      </svg>
      <a href="#">
        <h5 class="mb-2 text-l font-semibold tracking-tight text-gray-900 dark:text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing.
        </h5>
      </a>
    </div>
    <p class="pl-8 mb-3 font-normal text-gray-500 dark:text-gray-400">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima enim
      tenetur quia illo maiores culpa quisquam quaerat, possimus earum molestias
      mollitia nisi, eius dicta harum nostrum ipsam, at repellat laborum!
    </p>
  </div>,
];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "white",
        color: "black",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const Sentiments = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  return (
    <div className="bg-white w-[95%]  xl:w-[55.0625rem] max-w-[55.0625rem] mx-auto  pt-12 pb-16 lg:pt-6 lg:px-6 lg:pb-10 rounded-2xl xl:mb-24">
      <div>
        <h2 className="text-2xl font-bold  leading-5 mb-3 lg:pb-3">
          Sentiments
        </h2>

        <h3 className="text-xl font-bold text-gray-500 leading-5 mb-3 flex">
          Key Events
          <img
            className="ml-2"
            width="18"
            height="6"
            src="https://img.icons8.com/ios-filled/50/00000091/info.png"
            alt="info"
          />
        </h3>

        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index}>{slide}</div>
          ))}
        </Slider>

        <h3 className="pt-8 text-xl font-bold text-gray-500 leading-5 mb-3 flex">
          Analyst Estimates
          <img
            className="ml-2"
            width="18"
            height="6"
            src="https://img.icons8.com/ios-filled/50/00000091/info.png"
            alt="info"
          />
        </h3>

        <div className="flex">
          <div class="circle">
            <div class="circle__inner">
              <div class="circle__wrapper flex">
                <div class="circle__content">76%</div>
                {/* <div className="circle__smallcontent">%</div> */}
              </div>
            </div>
          </div>

          <div className="thisbar">
            <ul>
              <li>
                <div class="bar-one flex">
                  <span class="year pr-6">Buy</span>
                  <div class="bar" data-percentage="69.6%"></div>
                  <div className="pl-2">69.6%</div>
                </div>
              </li>
              <li>
                <div class="bar-two flex">
                  <span class="year pr-6">Hold</span>
                  <div class="bar" data-percentage="8%"></div>
                  <div className="pl-2">8%</div>
                </div>
              </li>
              <li>
                <div class="bar-three flex">
                  <span class="year pr-6">Sell</span>
                  <div class="bar" data-percentage="16%"></div>
                  <div className="pl-2">16%</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiments;
