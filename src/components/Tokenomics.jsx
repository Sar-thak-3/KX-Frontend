import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(CategoryScale);

const data = {
  labels: ["Crowdscale Investors: 80%", "Foundation: 20%"],
  datasets: [
    {
      label: "Initial Distribution",
      data: [80, 20],
      backgroundColor: [
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
      pointStyle: 'rectRot',
      pointRadius: 5,
    },
  ],
};

const options = {
    cutout: '65%',
    plugins: {
      legend: {
        display: true,
        position: 'right',
      }
    }
  };

const Tokenomics = () => {
  return (
    <div className="bg-white w-[95%]  xl:w-[55.0625rem] max-w-[55.0625rem] mx-auto  pt-2 pb-16 lg:pt-2 lg:px-6 lg:pb-2 rounded-2xl xl:mb-24">
      <h2 className="text-2xl font-bold  leading-5 mb-3 lg:py-3">Tokenomics</h2>
      <h2 className="text-xl font-bold leading-5 pt-8">
        Initial Distribution
      </h2>
      <div style={{height: "400px", width: "500px", alignContent: "start", alignItems: "start"}}>
      <Doughnut data={data} options={options} />
      </div>

      <div className="mb-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reprehenderit perferendis, reiciendis at autem quod modi. Impedit aperiam eum officiis nulla. Neque esse asperiores iusto voluptas temporibus dolor consectetur dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eveniet nostrum suscipit quam voluptatem tenetur explicabo quo commodi sequi tempora ex cupiditate, itaque minima quod! Error alias optio delectus iure.
      </div>
    </div>
  );
};

export default Tokenomics;
