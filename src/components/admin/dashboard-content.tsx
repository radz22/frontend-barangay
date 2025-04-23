import Count from "../../utils/count-data";
const DashBoardContent = () => {
  const counts = Count();

  // const data = {
  //   labels: ["Male", "Female"],
  //   datasets: [
  //     {
  //       label: "GENDER",
  //       data: [counts.totalOfMale, counts.totalOfFemale],
  //       backgroundColor: [
  //         "rgb(255, 99, 132)",
  //         "rgb(54, 162, 235)",
  //         "rgb(255, 205, 86)",
  //       ],
  //       borderColor: [
  //         "rgb(255, 99, 132)",
  //         "rgb(255, 99, 132)",
  //         "rgb(255, 99, 132)",
  //       ],
  //       borderWidth: 1,
  //     },
  //   ],
  // };

  // const elemetaryStatistic = {
  //   labels: ["Elementary Graduate", "Elementary Under Graduate"],
  //   datasets: [
  //     {
  //       label: "ELEMENTARY STATISTIC",
  //       data: [counts.elementary.grad, counts.elementary.underGrad],
  //       backgroundColor: [
  //         "rgb(75, 192, 192)", // Teal
  //         "rgb(153, 102, 255)", // Purple
  //       ],
  //       borderColor: [
  //         "rgb(75, 192, 192)", // Teal
  //         "rgb(153, 102, 255)", // Purple
  //       ],
  //       borderWidth: 1,
  //     },
  //   ],
  // };

  // const HighSchoolStatistic = {
  //   labels: ["High School Graduate", "High School Under Graduate"],
  //   datasets: [
  //     {
  //       label: "HIGH SCHOOL STATISTIC",
  //       data: [counts.highSchool.grad, counts.highSchool.underGrad],
  //       backgroundColor: [
  //         "rgb(255, 159, 64)", // Orange
  //         "rgb(54, 162, 235)", // Blue
  //       ],
  //       borderColor: [
  //         "rgb(255, 159, 64)", // Orange
  //         "rgb(54, 162, 235)", // Blue
  //       ],
  //       borderWidth: 1,
  //     },
  //   ],
  // };

  // const SeniorHighSchoolStatistic = {
  //   labels: [
  //     "Senior High School Graduate",
  //     "Senior High School Under Graduate",
  //   ],
  //   datasets: [
  //     {
  //       label: "SENIOR HIGH SCHOOL STATISTIC",
  //       data: [counts.seniorHighSchool.grad, counts.seniorHighSchool.underGrad],
  //       backgroundColor: [
  //         "rgb(102, 204, 255)", // Light Blue
  //         "rgb(255, 140, 0)", // Dark Orange
  //       ],
  //       borderColor: [
  //         "rgb(102, 204, 255)", // Light Blue
  //         "rgb(255, 140, 0)", // Dark Orange
  //       ],
  //       borderWidth: 1,
  //     },
  //   ],
  // };
  // const CollegeStatistic = {
  //   labels: ["College Graduate", "College Under Graduate"],
  //   datasets: [
  //     {
  //       label: "COLLEGE STATISTIC",
  //       data: [counts.college.grad, counts.college.underGrad],
  //       backgroundColor: [
  //         "rgb(75, 192, 192)", // Teal
  //         "rgb(255, 159, 64)", // Orange
  //       ],
  //       borderColor: [
  //         "rgb(75, 192, 192)", // Teal
  //         "rgb(255, 159, 64)", // Orange
  //       ],
  //       borderWidth: 1,
  //     },
  //   ],
  // };
  return (
    <div className="w-full h-auto flex items-center justify-center flex-col p-4">
      {/* <div>
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
      </div> */}
      <div className="w-[70%] rounded-lg shadow-md p-6">
        <div className="bg-blue-100 p-4 rounded-lg">
          <div className="text-3xl font-bold text-center">
            {counts.populationtotal}
          </div>
          <div className="text-lg font-semibold text-center mt-2">
            POPULATION
          </div>
          <div className="text-sm text-gray-600 text-center mt-1">
            Total Population
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 pt-4">
          {/* Population Section */}

          {/* Male Section */}
          <div className="bg-yellow-100 p-4 rounded-lg">
            <div className="text-3xl font-bold text-center">
              {counts.totalOfMale}
            </div>
            <div className="text-lg font-semibold text-center mt-2">MALE</div>
            <div className="text-sm text-gray-600 text-center mt-1">
              Total Male
            </div>
          </div>

          {/* Female Section */}
          <div className="bg-pink-100 p-4 rounded-lg">
            <div className="text-3xl font-bold text-center">
              {counts.totalOfFemale}
            </div>
            <div className="text-lg font-semibold text-center mt-2">FEMALE</div>
            <div className="text-sm text-gray-600 text-center mt-1">
              Total Female
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardContent;
