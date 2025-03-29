import BarChart from "../chart/bar-chart";
import Count from "../../utils/count-data";
const DashBoardContent = () => {
  const {
    totalOfMale,
    totalOfFemale,
    elementaryGraduateTotal,
    elementaryUnderGraduateTotal,
    highSchoolGraduateTotal,
    highSchoolUnderGraduateTotal,
    seniorHighSchoolGraduateTotal,
    seniorHighSchoolUnderGraduateTotal,
    collegeGraduateTotal,
    collegeUnderGraduateTotal,
  } = Count();
  const data = {
    labels: ["Male", "Female"],
    datasets: [
      {
        label: "GENDER",
        data: [totalOfMale, totalOfFemale],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 99, 132)",
          "rgb(255, 99, 132)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const elemetaryStatistic = {
    labels: ["Elementary Graduate", "Elementary Under Graduate"],
    datasets: [
      {
        label: "ELEMENTARY STATISTIC",
        data: [elementaryGraduateTotal, elementaryUnderGraduateTotal],
        backgroundColor: [
          "rgb(75, 192, 192)", // Teal
          "rgb(153, 102, 255)", // Purple
        ],
        borderColor: [
          "rgb(75, 192, 192)", // Teal
          "rgb(153, 102, 255)", // Purple
        ],
        borderWidth: 1,
      },
    ],
  };

  const HighSchoolStatistic = {
    labels: ["High School Graduate", "High School Under Graduate"],
    datasets: [
      {
        label: "HIGH SCHOOL STATISTIC",
        data: [highSchoolGraduateTotal, highSchoolUnderGraduateTotal],
        backgroundColor: [
          "rgb(255, 159, 64)", // Orange
          "rgb(54, 162, 235)", // Blue
        ],
        borderColor: [
          "rgb(255, 159, 64)", // Orange
          "rgb(54, 162, 235)", // Blue
        ],
        borderWidth: 1,
      },
    ],
  };

  const SeniorHighSchoolStatistic = {
    labels: [
      "Senior High School Graduate",
      "Senior High School Under Graduate",
    ],
    datasets: [
      {
        label: "SENIOR HIGH SCHOOL STATISTIC",
        data: [
          seniorHighSchoolGraduateTotal,
          seniorHighSchoolUnderGraduateTotal,
        ],
        backgroundColor: [
          "rgb(102, 204, 255)", // Light Blue
          "rgb(255, 140, 0)", // Dark Orange
        ],
        borderColor: [
          "rgb(102, 204, 255)", // Light Blue
          "rgb(255, 140, 0)", // Dark Orange
        ],
        borderWidth: 1,
      },
    ],
  };
  const CollegeStatistic = {
    labels: ["College Graduate", "College Under Graduate"],
    datasets: [
      {
        label: "COLLEGE STATISTIC",
        data: [collegeGraduateTotal, collegeUnderGraduateTotal],
        backgroundColor: [
          "rgb(75, 192, 192)", // Teal
          "rgb(255, 159, 64)", // Orange
        ],
        borderColor: [
          "rgb(75, 192, 192)", // Teal
          "rgb(255, 159, 64)", // Orange
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="w-full h-auto ">
      <div>
        <h1 className="text-2xl font-semibold">Over View</h1>
      </div>
      <div className="w-full flex items-center justify-center gap-10">
        <div className="w-[40%]">
          <BarChart labels={data.labels} datasets={data.datasets} />
        </div>

        <div className="w-[40%]">
          <BarChart
            labels={elemetaryStatistic.labels}
            datasets={elemetaryStatistic.datasets}
          />
        </div>
      </div>

      <div className="w-full flex items-center justify-center gap-10 mt-5">
        <div className="w-[40%]">
          <BarChart
            labels={HighSchoolStatistic.labels}
            datasets={HighSchoolStatistic.datasets}
          />
        </div>

        <div className="w-[40%]">
          <BarChart
            labels={SeniorHighSchoolStatistic.labels}
            datasets={SeniorHighSchoolStatistic.datasets}
          />
        </div>
      </div>
      <div className="w-full flex items-center justify-center gap-10 mt-5">
        <div className="w-[40%]">
          <BarChart
            labels={CollegeStatistic.labels}
            datasets={CollegeStatistic.datasets}
          />
        </div>

        <div className="w-[40%]"></div>
      </div>
    </div>
  );
};

export default DashBoardContent;
