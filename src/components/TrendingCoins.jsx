const TrendingCoins = (props) => {
  return (
    <div
      className={`bg-white w-[95%]  xl:w-[55.0625rem] w-full max-w-[26.6875rem] mx-auto  pt-12 pb-16 lg:pt-6 lg:px-6 lg:pb-10 rounded-2xl xl:mb-24 ${
        props.className ? props.className : ""
      }`}
      style={{ marginTop: "24px" }}
    >
      <h3 className="text-xl font-bold  leading-5 mb-3 lg:pb-3">
        Trending Coins (24hr)
      </h3>

      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <tbody>
          <tr class="bg-white dark:bg-gray-800">
            <th
              scope="row"
              class="px-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Ethereum (ETH)
            </th>
            <td class="pl-28 py-1">
            <button type="button" class="flex text-green-800 bg-gradient-to-r from-green-200 via-green-300 to-green-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-3 py-1 text-center me-1 mb-1">
                    <img width="12" height="12" className="py-1" src="https://img.icons8.com/fluency-systems-filled/48/40C057/triangle.png" alt="triangle"/> 8.32%
                </button>
            </td>
          </tr>
          <tr class="bg-white dark:bg-gray-800">
            <th
              scope="row"
              class="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Bitcoin (BTC)
            </th>
            <td class="pl-28 py-1">
            <button type="button" class="flex text-green-800 bg-gradient-to-r from-green-200 via-green-300 to-green-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-3 py-1 text-center me-1 mb-1">
                    <img width="12" height="12" className="py-1" src="https://img.icons8.com/fluency-systems-filled/48/40C057/triangle.png" alt="triangle"/> 5.26%
                </button>
            </td>
          </tr>
          <tr class="bg-white dark:bg-gray-800">
            <th
              scope="row"
              class="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Polygon (MATIC)
            </th>
            <td class="pl-28 py-1">
                <button type="button" class="flex text-green-800 bg-gradient-to-r from-green-200 via-green-300 to-green-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-3 py-1 text-center me-1 mb-1">
                    <img width="12" height="12" className="py-1" src="https://img.icons8.com/fluency-systems-filled/48/40C057/triangle.png" alt="triangle"/> 4.32%
                </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TrendingCoins;
