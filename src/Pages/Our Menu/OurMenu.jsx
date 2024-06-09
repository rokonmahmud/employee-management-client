import PageHeader from "../Shared/PageHeader";
import { Helmet } from "react-helmet-async";

import img from "../../assets/images/menu/banner3.jpg";
import img2 from "../../assets/images/home/chef-service.jpg";
import SectionHeading from "../Shared/SectionHeading";
import useMenu from "../../hooks/useMenu";
import MenuItem from "../Shared/MenuItem";
import { Link } from "react-router-dom";
const OurMenu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((menu) => menu.category === "offered");
  const dessert = menu.filter((menu) => menu.category === "dessert");
  const pizza = menu.filter((menu) => menu.category === "pizza");
  const salad = menu.filter((menu) => menu.category === "salad");
  const soups = menu.filter((menu) => menu.category === "soup");
  return (
    <div>
      <Helmet>
        <title>BISTRO BOSS | MENU</title>
      </Helmet>
      <PageHeader
        heading={"OUR MENU"}
        img={img}
        subHeading={"Would you like to try a dish?"}
      />
      <SectionHeading heading={"TODAY'S OFFER"} title={"---Don't miss---"} />
      <div className="grid md:grid-cols-2 max-w-7xl  mx-auto gap-x-8 my-8">
        {offered.map((item) => (
          <MenuItem item={item} key={item._id} />
        ))}
      </div>

      <Link to={'/shop'} className=" rounded-lg block w-3/12 text-base mx-auto mt-4 px-2 py-2 border-t-2 border-slate-950 font-semibold hover:border-[#FF9000] border-b-2 text-center ">
        ORDER YOUR FAVOURITE FOOD
      </Link>
      {/* Desert Section */}

      <div className="my-8 ">
        <PageHeader
          heading={"DESSERTS"}
          img={img2}
          subHeading={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />
      </div>
      <div>
        <div className="grid md:grid-cols-2 max-w-7xl  mx-auto gap-x-8 my-8">
          {dessert.map((item) => (
            <MenuItem item={item} key={item._id} />
          ))}
        </div>
        <Link to={'/shop'} className=" rounded-lg block w-3/12 text-base mx-auto mt-4 px-2 py-2 border-t-2 border-slate-950 font-semibold hover:border-[#FF9000] border-b-2 text-center ">
        ORDER YOUR FAVOURITE FOOD
      </Link>
      </div>
      {/* pizza Section */}
      <div className="my-8 ">
        <PageHeader
          heading={"PIZZA"}
          img={img2}
          subHeading={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />
      </div>
      <div className="grid md:grid-cols-2 max-w-7xl  mx-auto gap-x-8 my-8">
        {pizza.map((item) => (
          <MenuItem item={item} key={item._id} />
        ))}
      </div>
      <Link to={'/shop'} className=" rounded-lg block w-3/12 text-base mx-auto mt-4 px-2 py-2 border-t-2 border-slate-950 font-semibold hover:border-[#FF9000] border-b-2 text-center ">
        ORDER YOUR FAVOURITE FOOD
      </Link>
      {/* Desert Section */}
      <div>
        <div className="my-8 ">
          <PageHeader
            heading={"PIZZA"}
            img={img2}
            subHeading={
              "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
          />
        </div>
        <div className="grid md:grid-cols-2 max-w-7xl  mx-auto gap-x-8 my-8">
          {salad.map((item) => (
            <MenuItem item={item} key={item._id} />
          ))}
        </div>
        <Link to={'/shop'} className=" rounded-lg block w-3/12 text-base mx-auto mt-4 px-2 py-2 border-t-2 border-slate-950 font-semibold hover:border-[#FF9000] border-b-2 text-center ">
        ORDER YOUR FAVOURITE FOOD
      </Link>
      </div>
      {/* Soups Section */}
      <div>
        <div className="my-8 ">
          <PageHeader
            heading={"SOUPS"}
            img={img2}
            subHeading={
              "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
          />
        </div>
        <div className="grid md:grid-cols-2 max-w-7xl  mx-auto gap-x-8 my-8">
          {soups.map((item) => (
            <MenuItem item={item} key={item._id} />
          ))}
        </div>
        <Link to={'/shop'} className=" rounded-lg block w-3/12 text-base mx-auto mt-4 px-2 py-2 border-t-2 border-slate-950 font-semibold hover:border-[#FF9000] border-b-2 text-center ">
        ORDER YOUR FAVOURITE FOOD
      </Link>
      </div>
    </div>
  );
};

export default OurMenu;
