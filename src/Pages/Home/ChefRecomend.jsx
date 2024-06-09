import { useEffect, useState } from "react";

const ChefRecomend = () => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const chefRecomend = data.slice(10, 13);
        setItem(chefRecomend);
      });
  }, []);
  return (
    <div className="grid grid-cols-1 mx-24 md:grid-cols-3  gap-4 md:mx-auto my-8 max-w-6xl">
      {item.map((item) => (
        <div className="" key={item._id}>
          <div className="">
            <div className="max-[350px] mx-auto space-y-6 rounded-2xl bg-slate-100/70 px-6 py-4 shadow-md dark:bg-[#18181B] md:w-[350px]">
              {/* Card Image */}
              <img
                width={350}
                height={190}
                className="h-[190px] w-[350px] rounded-2xl bg-gray-400"
                src={item.image}
                alt="card navigate ui"
              />
              {/* Card Heading */}
              <div className="space-y-2">
                <h2 className="font-medium text-slate-800 sm:text-lg md:text-xl dark:text-white/90">
                  {item.name}
                </h2>
              </div>
              {/* Price and action button */}
              <div className="mt-5 flex items-center justify-between">
                <h2 className="font-medium text-gray-700 md:text-xl dark:text-white/60">
                  {item.price}
                </h2>
                <button className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white hover:bg-slate-900 sm:text-sm md:text-base">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChefRecomend;
