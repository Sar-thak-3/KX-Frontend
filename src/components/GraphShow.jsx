import { Line } from "react-chartjs-2";
import bitcoin from "../assets/bitcoin.png";

const data = {
  labels: [
    "7 Mar",
    "8 Mar",
    "9 Mar",
    "10 Mar",
    "11 Mar",
    "12 Mar",
    "13 Mar",
    "14 Mar",
    "15 Mar",
    "16 Mar",
    "17 Mar",
    "18 Mar",
    "19 Mar",
    "20 Mar",
    "21 Mar",
    "22 Mar",
    "23 Mar",
    "24 Mar",
    "25 Mar",
    "26 Mar",
    "27 Mar",
    "28 Mar",
    "29 Mar",
    "30 Mar",
    "31 Mar",
    "1 Apr",
    "2 Apr",
    "3 Apr",
    "4 Apr",
    "5 Apr",
    "6 Apr",
    "7 Apr",
    "8 Apr",
    "9 Apr",
    "10 Apr",
    "11 Apr",
    "12 Apr",
    "13 Apr",
    "14 Apr",
    "15 Apr",
    "16 Apr",
    "17 Apr",
    "18 Apr",
    "19 Apr",
    "20 Apr",
    "21 Apr",
    "22 Apr",
    "23 Apr",
    "24 Apr",
    "25 Apr",
    "26 Apr",
    "27 Apr",
    "28 Apr",
    "29 Apr",
    "30 Apr",
    "1 May",
    "2 May",
    "3 May",
    "4 May",
    "5 May",
    "6 May",
    "7 May",
    "8 May",
    "9 May",
    "10 May",
    "11 May",
    "12 May",
    "13 May",
    "14 May",
    "15 May",
    "16 May",
    "17 May",
    "18 May",
    "19 May",
    "20 May",
    "21 May",
    "22 May",
    "23 May",
    "24 May",
    "25 May",
    "26 May",
    "27 May",
    "28 May",
    "29 May",
    "30 May",
    "31 May",
    "1 Jun",
    "2 Jun",
    "3 Jun",
    "4 Jun",
    "5 Jun",
    "6 Jun",
    "7 Jun",
    "8 Jun",
    "9 Jun",
    "10 Jun",
    "11 Jun",
    "12 Jun",
    "13 Jun",
    "14 Jun",
    "15 Jun",
    "16 Jun",
    "17 Jun",
    "18 Jun",
    "19 Jun",
    "20 Jun",
    "21 Jun",
    "22 Jun",
    "23 Jun",
    "24 Jun",
    "25 Jun",
    "26 Jun",
    "27 Jun",
    "28 Jun",
    "29 Jun",
    "30 Jun",
    "1 Jul",
    "2 Jul",
    "3 Jul",
    "4 Jul",
    "5 Jul",
    "6 Jul",
    "7 Jul",
    "8 Jul",
    "9 Jul",
    "10 Jul",
    "11 Jul",
    "12 Jul",
    "13 Jul",
    "14 Jul",
    "15 Jul",
    "16 Jul",
    "17 Jul",
    "18 Jul",
    "19 Jul",
    "20 Jul",
    "21 Jul",
    "22 Jul",
    "23 Jul",
    "24 Jul",
    "25 Jul",
    "26 Jul",
    "27 Jul",
    "28 Jul",
    "29 Jul",
    "30 Jul",
    "31 Jul",
    "1 Aug",
    "2 Aug",
    "3 Aug",
    "4 Aug",
    "5 Aug",
    "6 Aug",
    "7 Aug",
    "8 Aug",
    "9 Aug",
    "10 Aug",
    "11 Aug",
    "12 Aug",
    "13 Aug",
  ],
  datasets: [
    {
      //   label: "Bitcoin Price Chart (in USD)",
      //   data: [65, 59, 80, 81, 56, 55, 40],
      data: [
        41214, 41456, 41692, 44782, 42569, 44797, 41615, 45662, 41453, 44454,
        44756, 45825, 41492, 45138, 42173, 43229, 45810, 43001, 42271, 43058,
        42524, 42284, 44177, 42904, 42204, 45790, 41954, 41782, 44721, 41801,
        43969, 45252, 44584, 42361, 45777, 44295, 43813, 43990, 42466, 45557,
        43810, 45802, 45624, 43360, 44984, 45695, 42668, 43308, 42116, 44523,
        45593, 43118, 44494, 43834, 44683, 43905, 42623, 44286, 44241, 43415,
        42267, 43126, 43941, 45794, 43747, 44703, 45257, 41532, 42289, 41829,
        42815, 43159, 42874, 43291, 44765, 41407, 42890, 42927, 43701, 44994,
        43921, 41826, 41623, 42281, 44340, 44263, 42881, 42019, 43632, 43444,
        41629, 44425, 44966, 41759, 42968, 44832, 41603, 44754, 43705, 44667,
        44073, 42214, 42258, 45268, 45726, 44269, 42709, 43525, 41893, 43706,
        42251, 44527, 45747, 45813, 42164, 45449, 43660, 42604, 41479, 45801,
        44007, 45067, 42574, 42715, 42089, 45493, 41478, 41708, 43444, 45457,
        43323, 42039, 45157, 44302, 43105, 45623, 42022, 44358, 41977, 45111,
        44097, 45295, 42892, 42878, 42192, 45071, 45771, 45447, 42017, 45477,
        42343, 44120, 45846, 43578, 45656, 44016, 44107, 44834, 42977, 43721,
        44432, 42840, 42811, 41549, 42633, 43879, 44311, 45679, 45712, 41750,
        42259, 42019, 43348, 43153, 43116, 41450, 45877, 41715, 44813, 43688,
        43276, 43479, 42547, 43092, 43719, 44113, 45495, 44197, 43844, 43857,
        43616, 42399, 42590, 43101, 45601, 44564, 41467, 43592, 44242, 41589,
        45233, 42828, 44840, 45423, 45589, 45225, 42667, 44828, 42079, 44441,
        44412, 44222, 44223, 45292, 42813, 43482, 44393, 41492, 43151, 44832,
        42226, 42391, 43262, 42420, 43464, 41440, 44332, 43378, 43354, 41671,
      ],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
};

const options = {
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        maxTicksLimit: 10, // Display only every 20th label
      },
    },
    y: {
      //   beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      display: false, // Hide legend
    },
  },
};

const GraphShow = () => {
  return (
    <div className="bg-white w-[95%]  xl:w-[55.0625rem] max-w-[55.0625rem] mx-auto  pt-12 pb-16 lg:pt-6 lg:px-6 lg:pb-10 rounded-2xl xl:mb-24">
      <div className="flex">
        <img src={bitcoin} style={{ width: "30px", height: "30px" }} />
        <h2 className="text-xl font-bold  leading-5 mb-3 px-2 lg:py-3">
          Bitcoin
        </h2>
        <h3 className="text-base font-bold text-gray-400 leading-5 mb-3 pr-6 lg:py-3">
          BTC
        </h3>

        <button
          class="bg-gray-500 text-white px-1 rounded"
          style={{ height: "35px", borderRadius: "7px" }}
        >
          Rank #1
        </button>
      </div>

      <div className="flex">
        <h2 className="text-2xl font-bold  leading-5 mb-3 pl-2 pr-8 lg:py-2">
          $46,953.04
        </h2>
        <button
          type="button"
          style={{height: "30px"}}
          class="flex text-green-800 bg-gradient-to-r from-green-200 via-green-300 to-green-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-3 py-1 text-center"
        >
          <img
            width="12"
            height="12"
            className="py-1"
            src="https://img.icons8.com/fluency-systems-filled/48/40C057/triangle.png"
            alt="triangle"
          />{" "}
          8.32%
        </button>
        <p className="text-gray-400 pl-4">(24H)</p>
      </div>
      <h2 className="text-base font-bold  leading-5 mb-3 px-2 lg:py-1">
        ₹39,42,353
      </h2>

      <div className="bg-divider opacity-60 w-full h-[1px] my-[15px]"></div>

      <div className="flex justify-between">
        <div>
          <h2 className="text-base font-bold  leading-5 mb-3 lg:py-3">
            Bitcoin Price Chart (USD)
          </h2>
        </div>
        <div className="">
          <button
            className="hover:bg-blue-200 text-gray-500 px-1 hover:text-blue-600 rounded-full"
            style={{ marginTop: "6px" }}
          >
            1H
          </button>
          <button
            className="hover:bg-blue-200 text-gray-500 px-1 hover:text-blue-600 rounded-full"
            style={{ marginTop: "6px" }}
          >
            24H
          </button>
          <button
            className="hover:bg-blue-200 text-gray-500 px-1 hover:text-blue-600 rounded-full"
            style={{ marginTop: "6px" }}
          >
            7D
          </button>
          <button
            className="hover:bg-blue-200 text-gray-500 px-1 hover:text-blue-600 rounded-full"
            style={{ marginTop: "6px" }}
          >
            1M
          </button>
          <button
            className="hover:bg-blue-200 text-gray-500 px-1 hover:text-blue-600 rounded-full"
            style={{ marginTop: "6px" }}
          >
            3M
          </button>
          <button
            className="hover:bg-blue-200 text-gray-500 px-1 hover:text-blue-600 rounded-full bg-blue-200"
            style={{ marginTop: "6px" }}
          >
            6M
          </button>
          <button
            className="hover:bg-blue-200 text-gray-500 px-1 hover:text-blue-600 rounded-full"
            style={{ marginTop: "6px" }}
          >
            1Y
          </button>
          <button
            className="hover:bg-blue-200 text-gray-500 px-1 hover:text-blue-600 rounded-full"
            style={{ marginTop: "6px" }}
          >
            ALL
          </button>
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <Line data={data} options={options} />
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            display: "flex",
            flexDirection: "column",
          }}
        ></div>
      </div>
    </div>
  );
};

export default GraphShow;
