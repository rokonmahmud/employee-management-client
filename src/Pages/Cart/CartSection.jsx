import { FaTrash } from "react-icons/fa";
import useCart from "../../hooks/useCart";
// import SectionHeading from "../Shared/SectionHeading";
import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";
// import CartTable from "./CartTable";

const CartSection = () => {
  const [cart, refetch] = useCart();
  let totalCost = cart.reduce((total, item) => total + item.price, 0);
  let mainTotal = Math.trunc(totalCost);
  const axiosSecure = useAxios();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <div>
        <div>
          <h3 className="text-center text-4xl uppercase mt-8 font-semibold text-[#2aa444]">Your Services</h3>
        </div>
      </div>
      <div>
        <div className="flex justify-around mt-8 uppercase font-semibold">
          <h3>total item: {cart.length}</h3>
          <h3>total cost: ${mainTotal} </h3>
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="min-w-[90%] h-52 shadow-md border mx-auto border-gray-100 my-6">
              <thead className="text-white">
                <tr className="tableHeading">
                  <th className="py-4 px-6 text-lg text-left border-b uppercase">
                    ITEM IMAGE
                  </th>
                  <th className="py-4 px-6 text-lg text-left border-b uppercase">
                    Item Name
                  </th>
                  <th className="py-4 px-6 text-lg text-left border-b uppercase">
                    price
                  </th>

                  <th className="py-4 px-6 text-lg border-b text-end uppercase">
                    delete
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {cart.map((cart) => (
                  <tr
                    key={cart._id}
                    className="hover:bg-gray-50 border-b transition duration-300"
                  >
                    <td className="py-4 px-4 flex justify-start">
                      <img
                        src={cart.image}
                        alt="table navigate ui"
                        className="h-16 w-16 object-cover bg-gray-300"
                      />
                    </td>
                    <td className="py-4 px-6 border-b text-xl font-medium">
                      {cart.name}
                    </td>
                    <td className="py-4 px-6 border-b text-lg font-medium">
                      {cart.price}
                    </td>

                    <td className="py-4 px-6 border-b text-end">
                      <button
                        onClick={() => handleDelete(cart._id)}
                        className="bg-red-500 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSection;
