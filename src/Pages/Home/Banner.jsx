import bgimg from "../../assets/images/home/home bg.png";

const Banner = () => {
  return (
    <div className="">
      <div className="bg-[#03162C]  py-16">
        <div className="w-10/12  lg:h-screen mx-auto flex items-center lg:flex-row-reverse flex-col">
          <div>
            <img src={bgimg} alt="" />
          </div>
          <div className="text-center lg:text-left mt-4">
            <p className="text-[#13B564] font-semibold">TRUSTED CYBER SECURITY COMPANY</p>
            <h3 className="text-white text-5xl font-semibold my-4">Secure your <br /> cyberspace, secure <br /> your digital life.</h3>
            <p className="text-white my-4 lg:w-5/6">
              Massa nam vitae inceptos elit volutpat. Aliquet letius lorem
              dignissim molestie feugiat accumsan et. Augue si sapien mollis
              aenean suscipit at.
            </p>
            <button className="btn bg-green-600 border-none text-white">DISCOVER MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
