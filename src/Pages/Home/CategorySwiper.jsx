import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import img1 from "../../assets/images/home/3016880_6d56_3.jpg";
import img2 from "../../assets/images/home/role-of-cyber-security-in-protecting-personal-data-2.png";
import img3 from "../../assets/images/home/security1.jpg";
import img4 from "../../assets/images/home/sbu-cybersecurity-job-outlook-feature.jpg";
import img5 from "../../assets/images/home/security.jpg";
// import img6 from "../../assets/images/home/slide6.jpg";
import "swiper/css";
import "swiper/css/pagination";
const CategorySwiper = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper m-16"
      >
        <SwiperSlide className="h-52">
          <img className="h-" src={img1} alt="" />
          <h3 className="-m-16 text-center uppercase text-white text-xl lg:text-3xl"></h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
          <h3 className="-m-16 text-center uppercase text-white text-xl lg:text-3xl"></h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
          <h3 className="-m-16 text-center uppercase text-white text-xl lg:text-3xl"></h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
          <h3 className="-m-16 text-center uppercase text-white text-xl lg:text-3xl"></h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="" src={img5} alt="" />
          <h3 className="-m-16 pb-32 text-center uppercase text-white text-xl lg:text-3xl"></h3>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default CategorySwiper;
