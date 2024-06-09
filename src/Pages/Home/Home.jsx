// import { Banner } from "./Banner";
import { Helmet } from "react-helmet-async";
import AboutSection from "./AboutSection";
import Benner from "./Banner";
import CategorySwiper from "./CategorySwiper";
import ChefRecomend from "./ChefRecomend";
import FeturedSection from "./FeturedSection";
import Testimonial from "./Testimonial";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>SiberSec | HOME</title>
      </Helmet>
      <Benner></Benner>
      <div className="w-11/12 mx-auto">
        {/* Banner Section */}
        <div className="   mx-auto mt-8">
          {/* Banner Section End */}
          {/* Category Swiper*/}
          <div className="max-w-5xl mx-auto">
            <CategorySwiper />
          </div>
          {/* Category Swiper End*/}
        </div>
        {/* About Section */}
        <div className="max-w-5xl mx-auto">
          <AboutSection />
        </div>
        {/* About Section End*/}

        {/* Popular Menu Section*/}

        <div className="  mx-auto mt-8">
          <div className="  mx-auto">
            {" "}
            
          </div>
        </div>
      </div>
      <Services/>

      {/* Contact Section*/}
      <div>
        <div className="  mx-auto mt-8">
         
        </div>
        {/* Contact Section End*/}
        <ChefRecomend />
      </div>
      <div className="my-8">
        <FeturedSection />
      </div>
      <div></div>
      <div className="my-8">
        <Testimonial />
      </div>
    </div>
  );
};

export default Home;
