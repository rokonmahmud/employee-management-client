import imagebg from "../../assets/images/home/sectionbg.jpg";
// import SectionHeading from "../Shared/SectionHeading";

const FeturedSection = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/HqQ9DfS/sectionbg.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-5xl">
            
            <div className="flex flex-col md:flex-row justify-around gap-8">
              <div>
                <img className="min-w-96" src={imagebg} alt="" />
              </div>
              <div>
                <p className="text-left">
                  March 20, 2023 WHERE CAN I GET SOME? Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Error voluptate facere,
                  deserunt dolores maiores quod nobis quas quasi. Eaque repellat
                  recusandae ad laudantium tempore consequatur consequuntur
                  omnis ullam maxime tenetur. <br />
                  <button className=" btn text-white mt-4 bg-green-600 border-none ">DISCOVER MORE</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeturedSection;
