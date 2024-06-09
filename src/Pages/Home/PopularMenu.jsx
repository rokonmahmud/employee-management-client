// import { useEffect, useState } from "react";
import useMenu from "../../hooks/useMenu";
import MenuItem from "../Shared/MenuItem";
// import SectionHeading from "../Shared/SectionHeading";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((menu) => menu.category === "popular");

  return (
    <div>
      <div className="grid md:grid-cols-2 max-w-7xl  mx-auto gap-x-8 ">
        {popular.map((item) => (
          <MenuItem item={item} key={item._id} />
        ))}
      </div>
      
    </div>
  );
};

export default PopularMenu;
