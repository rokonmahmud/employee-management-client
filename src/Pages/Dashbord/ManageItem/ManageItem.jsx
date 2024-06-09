import { FaEdit, FaTrash } from "react-icons/fa";
import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";
import { Link } from "react-router-dom";

const ManageItem = () => {
  const [menu, refetch] = useMenu();
  console.log(menu);
  const axiosSecure = useAxios();
  //delete operation
  const handaleDelete = (item) => {
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
        axiosSecure.delete(`/menus/${item._id}`).then((res) => {
          console.log(res.data);
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
       
      </div>
      <div>
        <div>
          <h3 className="uppercase text-3xl text-center font-semibold mt-8">Manage services</h3>
        </div>
        <div>
          <div className="flex justify-around uppercase mt-4 font-semibold">
            <h3>total item: {menu.length}</h3>
          </div>
          <div className="divider divider-success w-5/12 mx-auto"></div>
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
                      Item Name
                    </th>
                    <th className="py-4 px-6 text-lg text-left border-b uppercase">
                      price
                    </th>

                    <th className="py-4 px-6 text-lg border-b text-end uppercase">
                      edit
                    </th>
                    <th className="py-4 px-6 text-lg border-b text-end uppercase">
                      delete
                    </th>
                  </tr>
                </thead>
                <tbody className="">
                  {menu.map((item) => (
                    <tr
                      key={item._id}
                      className="hover:bg-gray-50 border-b transition duration-300"
                    >
                      <td className="py-4 px-4 flex justify-start">
                        <img
                          src={item.image}
                          alt="table navigate ui"
                          className="h-16 w-16 object-cover bg-gray-300"
                        />
                      </td>
                      <td className="py-4 px-6 border-b text-xl font-medium">
                        {item.name}
                      </td>
                      <td className="py-4 px-6 border-b text-xl font-medium">
                        {item.category}
                      </td>
                      <td className="py-4 px-6 border-b text-lg font-medium">
                        {item.price}
                      </td>

                      <td className="py-4 px-6 border-b text-end">
                        <Link to={`/dashbord/updateitem/${item._id}`}>
                          <button className="tdButton hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md">
                            <FaEdit />
                          </button>
                        </Link>
                      </td>
                      <td className="py-4 px-6 border-b text-end">
                        <button
                          onClick={() => handaleDelete(item)}
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
    </div>
  );
};

export default ManageItem;
