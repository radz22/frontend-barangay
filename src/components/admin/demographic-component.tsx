import { useState } from "react";
import Count from "../../utils/count-data";
import { exportPDF } from "../demographic-pdf";

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
  const data = {
    totalPopulation: counts.populationtotal,
    female: counts.totalOfFemale,
    male: counts.totalOfMale,
    legalAge: counts.populationunder18,
    minorAge: counts.populationbelow18,
    seniorAge: counts.populationunder60,
    topEducationLevel: counts.collegeGraduate,
    employmentStatus: counts.employed,
    unemployed: counts.unemployed,
    selftemployed: counts.selfEmployed,
    student: counts.student,
    retired: counts.retired,
  };
  const [activeTab, setActiveTab] = useState<
    "age" | "population" | "gender" | "education" | "employment"
  >("age");

  const total = counts.totalOfMale + counts.totalOfFemale;
  const malePercentage = Math.round((counts.totalOfMale / total) * 100);
  const femalePercentage = Math.round((counts.totalOfFemale / total) * 100);

  const ratioString = `${malePercentage}:${femalePercentage}`;
  const ageData = {
    labels: ["Minor", "Adult", "Senior"],
    datasets: [
      {
        label: "Age Distribution",
        data: [
          counts.populationbelow18,
          counts.populationunder18,
          counts.populationunder60,
        ],
        backgroundColor: [
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 99, 132, 0.7)",
          "rgba(255, 206, 86, 0.7)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const populationData = {
    labels: ["2025", "2026", "2027", "2028", "2029", "2030"],
    datasets: [
      {
        label: "Population Projection",
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

  const educationData = {
    labels: [
      "No Education",
      "Pre School",
      "Kindergarten",
      "K-12",
      "Old Curriculum",
      "Higher Education",
      "College Graduate",
      "Post-Graduate",
    ],
    datasets: [
      {
        label: "Education Distribution",
        data: [
          counts.noEducation,
          counts.preschool,
          counts.kindergarten,
          counts.k12,
          counts.oldCurriculum,
          counts.higherEducation,
          counts.collegeGraduate,
          counts.postGraduate,
        ],
        backgroundColor: [
          "rgba(54, 162, 235, 0.7)", // No Education
          "rgba(255, 99, 132, 0.7)", // Pre School
          "rgba(75, 192, 192, 0.7)", // Kindergarten
          "rgba(153, 102, 255, 0.7)", // K-12
          "rgba(255, 159, 64, 0.7)", // Old Curriculum
          "rgba(255, 205, 86, 0.7)", // Higher Education
          "rgba(54, 162, 235, 0.7)", // College Graduate
          "rgba(255, 99, 132, 0.7)", // Post-Graduate
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)", // No Education
          "rgba(255, 99, 132, 1)", // Pre School
          "rgba(75, 192, 192, 1)", // Kindergarten
          "rgba(153, 102, 255, 1)", // K-12
          "rgba(255, 159, 64, 1)", // Old Curriculum
          "rgba(255, 205, 86, 1)", // Higher Education
          "rgba(54, 162, 235, 1)", // College Graduate
          "rgba(255, 99, 132, 1)", // Post-Graduate
        ],
        borderWidth: 1,
      },
    ],
  };

  const employmentData = {
    labels: ["Employed", "Unemployed", "Self-Employed", "Student", "Retired"],
    datasets: [
      {
        label: "Employment Distribution",
        data: [
          counts.employed,
          counts.unemployed,
          counts.selfEmployed,
          counts.student,
          counts.retired,
        ],
        backgroundColor: [
          "rgba(54, 162, 235, 0.7)", // Employed
          "rgba(255, 99, 132, 0.7)", // Unemployed
          "rgba(75, 192, 192, 0.7)", // Self-Employed
          "rgba(153, 102, 255, 0.7)", // Student
          "rgba(255, 159, 64, 0.7)", // Retired
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)", // Employed
          "rgba(255, 99, 132, 1)", // Unemployed
          "rgba(75, 192, 192, 1)", // Self-Employed
          "rgba(153, 102, 255, 1)", // Student
          "rgba(255, 159, 64, 1)", // Retired
        ],
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
  const educationOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Education Distribution (%)",
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

  const employmentOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Employment Distribution (%)",
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
      <div className="w-full flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Demographic Analytics
        </h1>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
          onClick={() => exportPDF(data)}
        >
          Export PDF
        </button>
      </div>

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
        <button
          className={`py-2 px-4 font-medium text-sm rounded-t-lg ${
            activeTab === "education"
              ? "bg-blue-500 text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`}
          onClick={() => setActiveTab("education")}
        >
          Education Distribution
        </button>
        <button
          className={`py-2 px-4 font-medium text-sm rounded-t-lg ${
            activeTab === "employment"
              ? "bg-blue-500 text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`}
          onClick={() => setActiveTab("employment")}
        >
          Employment Distribution
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
          <p className="text-2xl font-bold text-green-600">
            {counts.medianAge}
          </p>
          <p className="text-sm text-green-500">Years Old</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-purple-800">
            Gender Ratio
          </h3>
          <p className="text-2xl font-bold text-purple-600">{ratioString}</p>
          <p className="text-sm text-purple-500">Male:Female</p>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-yellow-800">
            Top Education Level
          </h3>
          <p className="text-2xl font-bold text-yellow-600">
            {counts.populationtotal
              ? (
                  (counts.collegeGraduate / counts.populationtotal) *
                  100
                ).toFixed(2)
              : 0}
            %
          </p>
          <p className="text-sm text-yellow-500">College Graduate (%)</p>
        </div>

        <div className="bg-pink-50 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-pink-800">
            Employment Status
          </h3>
          <p className="text-2xl font-bold text-pink-600">
            {counts.populationtotal
              ? ((counts.employed / counts.populationtotal) * 100).toFixed(2)
              : 0}
            %
          </p>
          <p className="text-sm text-pink-500">Employed (%)</p>
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
          </div>
        )}

        {activeTab === "education" && (
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Education Distribution Analysis
            </h2>
            <div className="h-96">
              <Bar options={educationOptions} data={educationData} />
            </div>
          </div>
        )}

        {activeTab === "employment" && (
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Employment Distribution Analysis
            </h2>
            <div className="h-96">
              <Bar options={employmentOptions} data={employmentData} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DemographicComponent;
