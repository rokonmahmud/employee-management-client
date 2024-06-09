/* eslint-disable react-hooks/rules-of-hooks */
// import PageHeader from "../Shared/PageHeader";
// import img from "../../assets/images/shop/banner2.jpg";
import { Helmet } from "react-helmet-async";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
// import { useState } from "react";
import MenuCard from "./MenuCard";
import useMenu from "../../hooks/useMenu";
// import { useParams } from "react-router-dom";

const ourShop = () => {
  const [menu] = useMenu();
  console.log(menu);
  // const offered = menu.filter((menu) => menu.category === "offered");
 
  // console.log(pizza);
  return (
    <div className="">
      <Helmet>
        <title>BISTRO BOSS | SHOP</title>
      </Helmet>
      <div>
        <div className="bg-[#021428] text-center py-44">
          <h3 className="text-3xl mb-4 text-white uppercase">Services</h3>
          <p className="text-white">We provide innovative solutions for your security needs.</p>
        </div>
      </div>
      <div className="m-16 ">
       
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-4 md:mx-auto my-8 lg:max-w-6xl">
              {menu.map((item) => (
                <MenuCard item={item} key={item._id} />
              ))}
            </div>
           </div>
    </div>
  );
};

export default ourShop;
