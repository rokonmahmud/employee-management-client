// import bg from "../../assets/images/home/chef-service.jpg";

const AboutSection = () => {
  return (
    <div className="">
      <div
        className="hero lg:w-12/12 mx-auto h-80 my-8"
        style={{
          backgroundImage:
            "url(https://www.skillreactor.io/blog/wp-content/uploads/2024/04/Cybersecurity-Projects.jpeg)",
        }}
      >
        <div className="hero-overlay bg-[#00000068] w-11/12 lg:w-9/12 h-48  lg:h-56"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md p-4">
            <h1 className="mb-5 text-xl lg:text-5xl text-[#fff] font-bold">
              Bistro Boss
            </h1>
            <p className="mb-5  text-[#fff]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, libero accusamus laborum deserunt ratione dolor
              officiis praesentium! Deserunt magni aperiam
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
