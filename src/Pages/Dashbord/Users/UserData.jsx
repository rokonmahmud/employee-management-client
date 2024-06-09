import { FaTrash, FaUsersCog } from "react-icons/fa";
import useAxios from "../../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const UserData = () => {
  const AxiosSecure = useAxios();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await AxiosSecure.get("/users");

      return res.data;
    },
  });
  // console.log(users[0]._id);

  //make admin

  const handaleAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `to make admin ${user.name}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Make Admin",
    }).then((result) => {
      if (result.isConfirmed) {
        AxiosSecure.patch(`/user/admin/${user._id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "ADMIN UPDATED!",
              text: `${user.name} ARE ADMIN NOW`,
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handeleDeleteUser = (user) => {
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
        AxiosSecure.delete(`/user/${user._id}`).then((res) => {
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
      
       <h3 className="text-center text-4xl font-semibold my-4 text-[#16A34A]">MANAGE USER</h3>
      
      <div>
        <div className="flex justify-around mt-8 uppercase font-semibold">
          <h3>total users: {users.length}</h3>
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="min-w-[90%] h-52 shadow-md border mx-auto border-gray-100 my-6">
              <thead className="text-white">
                <tr className="tableHeading">
                  <th className="py-4 px-6 text-lg text-left border-b uppercase">
                    name
                  </th>
                  <th className="py-4 px-6 text-lg text-left border-b uppercase">
                    email
                  </th>

                  <th className="py-4 px-6 text-lg border-b text-end uppercase">
                    role
                  </th>
                  <th className="py-4 px-6 text-lg border-b text-end uppercase">
                    delete
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {users.map((user) => (
                  <tr
                    key={user._id}
                    className="hover:bg-gray-50 border-b transition duration-300"
                  >
                    <td className="py-4 px-4 flex justify-start font-medium">
                      {user.name}
                    </td>
                    <td className="py-4 px-6 border-b  font-medium">
                      {user.email}
                    </td>

                    <td className="py-4 px-6 border-b text-end">
                      {user.role === "admin" ? (
                        <div className="badge badge-accent">Admin</div>
                      ) : (
                        <button
                          onClick={() => handaleAdmin(user)}
                          className=" tdButton  hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md bg-blue-500"
                        >
                          <FaUsersCog />
                        </button>
                      )}
                    </td>
                    <td className="py-4 px-6 border-b text-end">
                      <button
                        onClick={() => handeleDeleteUser(user)}
                        className="bg-red-500  hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md"
                      >
                        <div className="flex gap-2 items-center">
                        <FaTrash />
                        Fire
                        </div>
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

export default UserData;
