import { Line } from "react-chartjs-2";
import bitcoin from "../assets/bitcoin.png";

const data = {
  labels: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  ],
  datasets: [
    {
      data: [
        7, 4, 3, 2, 5, 8, 6, 10, 1, 8, 4, 3, 2, 6, 9, 7, 2, 8, 5, 3, 1, 9, 7, 4,
        10, 3, 8, 5, 2, 6, 1, 9, 7, 4, 3, 2, 5, 8, 6, 10, 1, 8, 4, 3, 2, 6, 9,
        7, 2, 8, 5, 3, 1, 9, 7, 4, 10, 3, 8, 5, 2, 6, 1, 9, 7, 4, 3, 2, 5, 8, 6,
        10, 1, 8, 4, 3, 2, 6, 9, 7, 2, 8, 5, 3, 1, 9, 7, 4, 10, 3, 8, 5, 2, 6,
        1, 9, 7,
      ],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      pointStyle: "circle",
      pointRadius: 0,
      borderWidth: 1.5, // Set pointStyle to 'line' to hide data points
    },
  ],
};

const options = {
  scales: {
    x: {
      display: false, // Hide x axis
    },
    y: {
      display: false, // Hide y axis
    },
  },
  plugins: {
    legend: {
      display: false, // Hide legend
    },
  },
};

const CoinCard = () => {
  return (
    <div style={{height: "200px"}} className="bg-white w-[95%]  xl:w-[17.0625rem] max-w-[17.0625rem] mx-auto  pt-12 pb-16 lg:pt-6 lg:pl-2 lg:pb-10 rounded-2xl xl:mb-24 border-2">
      <div className="flex">
        <img src={bitcoin} style={{ width: "20px", height: "20px" }} />
        <h3 className="text-l font-bold text-gray-400 leading-5c pl-2 pr-1 lg:py-0">
          BTC
        </h3>

        <button
        style={{height: "22px"}}
          type="button"
          class="flex text-green-800 bg-gradient-to-r from-green-100 via-green-200 to-green-200 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-small rounded-lg text-sm px-1 text-center"
        >
          +5.26%
        </button>
      </div>

      <h3 className="text-xl text-black-600 leading-5 pl-2 pr-1 lg:py-2">
          $319.34
        </h3>
      <div className="ml-6" style={{ position: "relative", width: "300px", height: "100px" }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default CoinCard;
