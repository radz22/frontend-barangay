import Count from "../../utils/count-data";
const DashBoardContent = () => {
  const counts = Count();

  return (
    <div className="w-full h-auto flex items-center justify-center flex-col p-4">
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
