import useMenu from "../../hooks/useMenu";
import MenuCard from "../Shop/MenuCard";
// import MenuCard from "../../Pages/Shop/MenuCard"
const Services = () => {
  const [menu] = useMenu();
  //   const Populer = menu.slice()
  return (
    <div>
      <div>
        <h3 className="uppercase text-3xl font-semibold text-[#16A34A] text-center">
          popular Services
        </h3>
        <p className="text-center">
          We provide innovative solutions for your security needs.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3  mt-4 w-10/12 gap-4 mx-auto">
        {menu.map((item) => (
          <MenuCard item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default Services;
