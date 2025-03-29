import image from "../../assets/image-community.png";
export const HomeContent = () => {
  return (
    <div className="py-3 px-10 w-full flex items-center h-auto">
      <div className="w-3/6">
        <img src={image} alt="" className="w-full h-full" />
      </div>
      <div className="w-3/6	">
        <div className="px-3 flex items-center justify-center flex-col">
          <div className="w-[75%]">
            <div>
              <h1 className="text-2xl font-normal text-[#595959]">
                WELCOME TO
              </h1>
            </div>
            <div>
              <h1 className="font-semibold text-3xl text-[#7F265B] mt-1">
                BARANGAY CALOOCAN
              </h1>
            </div>
            <div className="mt-5">
              <p className="text-sm font-normal text-[#595959]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia quam natus, hic aspernatur et consequatur similique
                corrupti doloribus! Impedit ipsum dolores rerum a qui sit
                quibusdam neque quia molestias ea!
              </p>
            </div>
            <div>
              <button className="bg-[#7F265B] text-white py-2 px-5 rounded-lg mt-5 font-semibold">
                About Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
