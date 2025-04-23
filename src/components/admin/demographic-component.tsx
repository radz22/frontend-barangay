import { useState } from "react";
import Count from "../../utils/count-data";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

const DemographicComponent = () => {
  const counts = Count();
  const currentYear = new Date().getFullYear();

  const [activeTab, setActiveTab] = useState<"age" | "population" | "gender">(
    "age"
  );

  const total = counts.totalOfMale + counts.totalOfFemale;
  const malePercentage = Math.round((counts.totalOfMale / total) * 100);
  const femalePercentage = Math.round((counts.totalOfFemale / total) * 100);

  const ratioString = `${malePercentage}:${femalePercentage}`;
  const ageData = {
    labels: ["Below 18", "18 and Above"],
    datasets: [
      {
        label: "Age Distribution",
        data: [25, 75],
        backgroundColor: ["rgba(54, 162, 235, 0.7)", "rgba(255, 99, 132, 0.7)"],
        borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };
  const populationData = {
    labels: ["2025", "2026", "2027", "2028", "2029", "2030"],
    datasets: [
      {
        label: "Population Projection (in thousands)",
        data: [
          counts.populationGet2025,
          counts.populationGet2026,
          counts.populationGet2027,
          counts.populationGet2028,
          counts.populationGet2029,
          counts.populationGet2030,
        ],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.1,
        fill: true,
      },
    ],
  };

  const genderData = {
    labels: ["Male", "Female"],
    datasets: [
      {
        label: "Gender Distribution",
        data: [counts.totalOfMale, counts.totalOfFemale],
        backgroundColor: ["rgba(54, 162, 235, 0.7)", "rgba(255, 99, 132, 0.7)"],
        borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const ageOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Age Distribution (%)",
        font: {
          size: 18,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  const populationOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Population Projection",
        font: {
          size: 18,
        },
      },
    },
  };

  const genderOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Gender Distribution (%)",
        font: {
          size: 18,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (
    <div className="max-w-6xl mx-auto p-6 ">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Demographic Analytics
      </h1>

      <div className="flex border-b border-gray-200 mb-6">
        <button
          className={`py-2 px-4 font-medium text-sm rounded-t-lg mr-2 ${
            activeTab === "age"
              ? "bg-blue-500 text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`}
          onClick={() => setActiveTab("age")}
        >
          Age Distribution
        </button>
        <button
          className={`py-2 px-4 font-medium text-sm rounded-t-lg mr-2 ${
            activeTab === "population"
              ? "bg-blue-500 text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`}
          onClick={() => setActiveTab("population")}
        >
          Population Trends
        </button>
        <button
          className={`py-2 px-4 font-medium text-sm rounded-t-lg ${
            activeTab === "gender"
              ? "bg-blue-500 text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`}
          onClick={() => setActiveTab("gender")}
        >
          Gender Breakdown
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-blue-50 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-blue-800">
            Total Population
          </h3>
          <p className="text-2xl font-bold text-blue-600">
            {counts.populationThisYear}
          </p>
          <p className="text-sm text-blue-500">Projected for {currentYear}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-green-800">Median Age</h3>
          <p className="text-2xl font-bold text-green-600">32.5</p>
          <p className="text-sm text-green-500">Years</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-purple-800">
            Gender Ratio
          </h3>
          <p className="text-2xl font-bold text-purple-600">{ratioString}</p>
          <p className="text-sm text-purple-500">Male:Female</p>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg shadow-inner w-full">
        {activeTab === "age" && (
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Age Distribution Analysis
            </h2>
            <div className="h-96">
              <Bar options={ageOptions} data={ageData} />
            </div>
            <div className="mt-4 text-gray-600">
              <p>• 25% of the population is under 18 years old</p>
              <p>• 75% of the population is 18 years or older</p>
            </div>
          </div>
        )}

        {activeTab === "population" && (
          <div className="w-full">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Population Growth Projection
            </h2>
            <div className="h-96 w-full">
              <Line options={populationOptions} data={populationData} />
            </div>
            <div className="mt-4 text-gray-600">
              <p>• Expected annual growth rate: ~4.2%</p>
              <p>• Projected to reach 1.45 million by 2030</p>
            </div>
          </div>
        )}

        {activeTab === "gender" && (
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Gender Distribution
            </h2>
            <div className="h-96">
              <Bar options={genderOptions} data={genderData} />
            </div>
            <div className="mt-4 text-gray-600">
              <p>• Female population slightly higher at 52%</p>
              <p>• Male population accounts for 48%</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DemographicComponent;
