/* eslint-disable react/prop-types */

import { useContext } from "react";
import { Authcontext } from "../../Provider/AuthProvider";
// import axios from "axios";
import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";
import useCart from "../../hooks/useCart";

const MenuCard = ({ item }) => {
  const { image, name, price, _id } = item;
  console.log(item.category);
  const {user} = useContext(Authcontext)
  const axiosSecure = useAxios();
  const [, refetch] = useCart();
  const handleCart = (food)=>{
    console.log(food);
    const cartItem ={
      menuId: _id,
      email: user.email,
      name,
      image,
      price 
    }
    axiosSecure.post('/carts', cartItem)
    .then(res =>{
      if(res.data.insertedId){
        Swal.fire({
          position: "middle",
          icon: "success",
          title: "Your Food Is Added",
          showConfirmButton: false,
          timer: 1500
        });
        refetch();
      }
      console.log(res.data);
    })
    
  }

  return (
    <div className="max-[350px] mx-auto space-y-6 rounded-2xl bg-slate-100/70 px-6 py-4 shadow-md dark:bg-[#18181B] md:w-[350px]">
      {/* Card Image */}
      <img
        width={350}
        height={190}
        className="h-[190px] w-[350px] rounded-2xl bg-gray-400"
        src={image}
        alt="card navigate ui"
      />
      {/* Card Heading */}
      <div className="space-y-2">
        <h2 className="font-medium text-slate-800 sm:text-lg md:text-xl dark:text-white/90">
          {name}
        </h2>
        {/* rating  */}
      </div>
      {/* Price and action button */}
      <div className="mt-5 flex items-center justify-between">
        <h2 className="font-medium text-gray-700 md:text-xl dark:text-white/60">
          {price}
        </h2>
        <button onClick={()=>handleCart(item)} className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white hover:bg-slate-900 sm:text-sm md:text-base">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
