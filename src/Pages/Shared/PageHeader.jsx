/* eslint-disable react/prop-types */
// import img from "../../assets/images/menu/banner3.jpg"

const PageHeader = ({ heading, subHeading, img }) => {
  return (
    <div>
      <div
        className="hero  md:min-h-[500px] "
        style={{
          backgroundImage:
            `url(${img})`,
        }}
      >
        <div className="hero-overlay w-8/12 h-64 my-16 md:w-6/12 md:h-60 bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-white text-xl md:text-5xl font-bold">{heading}</h1>
            <p className="mb-5 text-white">
             {subHeading}
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
