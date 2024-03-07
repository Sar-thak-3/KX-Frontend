const Fundamentals = () => {
  return (
    <div className="bg-white w-[95%]  xl:w-[55.0625rem] max-w-[55.0625rem] mx-auto  pt-12 pb-16 lg:pt-6 lg:px-6 lg:pb-10 rounded-2xl xl:mb-24">
      <div>
        <h2 className="text-xl font-bold  leading-5 mb-3 lg:pb-3">
          Performance
        </h2>
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 pb-3.5 ">
          <tbody className="">
            <tr class="bg-white dark:bg-gray-800 gap-10 space-between">
              <th
                scope="row"
                class="font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Today's Low
              </th>
              <th style={{ width: "35rem" }}></th>
              <th
                scope="row"
                class="font-medium text-gray-900 whitespace-nowrap dark:text-white"
                style={{ textAlign: "end" }}
              >
                Today's High
              </th>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
              <td></td>
              <td>
                <div
                  style={{
                    height: "6px",
                    background: "linear-gradient(45deg, #ff3f00, #70ab20)",
                    textAlign: "center",
                  }}
                ></div>
              </td>
              <td></td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
              <td class="pl-2 py-1">46,930.22</td>
              <td class="pl-2 py-1"></td>
              <td class="pl-2 py-1" style={{ textAlign: "end" }}>
                46,343.83
              </td>
            </tr>
          </tbody>
        </table>

        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <tbody>
            <tr class="bg-white dark:bg-gray-800">
              <th
                scope="row"
                class="px-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                52W Low
              </th>
              <th style={{ width: "35rem" }}></th>
              <th
                scope="row"
                class="px-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                style={{ textAlign: "end" }}
              >
                52W High
              </th>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
              <td></td>
              <td>
                <div
                  style={{
                    height: "6px",
                    background: "linear-gradient(45deg, #ff3f00, #70ab20)",
                    textAlign: "center",
                  }}
                ></div>
              </td>
              <td></td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
              <td class="pl-2 py-1">16,930.22</td>
              <td class="pl-2 py-1"></td>
              <td class="pl-2 py-1" style={{ textAlign: "end" }}>
                49,743.83
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-bold  leading-5 pt-8 mb-3 lg:pb-3">
        Fundamentals
      </h2>

      <div className="flex flex-col lg:flex-row" style={{justifyContent: "space-between"}}>
        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Bitcoin Price
                </th>
                <td class="px-6 py-4">$16,815.45</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  24h High / 24h Low
                </th>
                <td class="px-6 py-4">$16,382.47 / $16874.32</td>
              </tr>
              <tr class="bg-white  border-b dark:bg-gray-800  dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  7d Low / 7d High
                </th>
                <td class="px-6 py-4">$16,382.47 / $16874.32</td>
              </tr>
              <tr class="bg-white  border-b dark:bg-gray-800  dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Trading Volume
                </th>
                <td class="px-6 py-4">$23,249,202,782</td>
              </tr>
              <tr class="bg-white  border-b dark:bg-gray-800  dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Market Cap Rank
                </th>
                <td class="px-6 py-4">#1</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Market Cap
                </th>
                <td class="px-6 py-4">$323,507,290,047</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Market Cap Dominance
                </th>
                <td class="px-6 py-4">38.343%</td>
              </tr>
              <tr class="bg-white  border-b dark:bg-gray-800  dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Volume / Market Cap
                </th>
                <td class="px-6 py-4">0.0718</td>
              </tr>
              <tr class="bg-white  border-b dark:bg-gray-800  dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  All-Time High
                </th>
                <td class="px-6 py-4 flex">
                    $69,044.77  
                    <p className="text-red-600 pl-2">-75.6%</p>
                </td>
              </tr>
              <tr class="bg-white  border-b dark:bg-gray-800  dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  All-Time Low
                </th>
                <td class="px-6 py-4 flex">
                    $67.81  
                    <p className="text-green-600 pl-2">24729.1%</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Fundamentals;
