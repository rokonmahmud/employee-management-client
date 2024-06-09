import { useLoaderData } from "react-router-dom";
import SectionHeading from "../../Shared/SectionHeading";
import { FaUtensils } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
const image_hosting_key = import.meta.env.VITE_IMAGE_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdateItem = () => {
  const { register, handleSubmit , reset} = useForm();
  const {name, recipe, price, category, _id} = useLoaderData();
  const AxiosPublic = useAxiosPublic();
  const AxiosSecure = useAxios();
  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await AxiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        image: res.data.data.display_url,
      };

      const menuRes = await AxiosSecure.patch(`/menus/${_id}`, menuItem);
      console.log(menuRes.data);

      if (menuRes.data.modifiedCount > 0) {
        //show success message
        reset()
        Swal.fire({
          position: "center",
          icon: "success",
          title: "ITEM IS UPDATED",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log(res.data);
  };
  return (
    <div>
      <div>
        <SectionHeading title={"---change item---"} heading={"update item"} />
      </div>
      <div>
        <div>
          <div className="bg-base-200 w-9/12 mx-auto py-8">
            <form className="w-8/12 mx-auto " onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control my-4">
                <label className="mb-2">
                  <span>Item Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  defaultValue={name}
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-2xl"
                />
              </div>
              <div className="grid grid-cols-2 my-4 gap-4 max-w-2xl w-full">
                <div className="form-control ">
                  <label className="mb-2">
                    <span>Category</span>
                  </label>
                  <select
                    defaultValue={category}
                    {...register("category", { required: true })}
                    className="select   select-bordered uppercase max-w-[336px] w-full"
                  >
                    <option disabled value={"default"}>
                      Category
                    </option>
                    <option>Salad</option>
                    <option>Pizza</option>
                    <option>Soup</option>
                    <option>DESSERTS</option>
                    <option>DRINKS</option>
                  </select>
                </div>
                <div className="form-control">
                  <label className="mb-2">
                    <span>Item Price</span>
                  </label>
                  <input
                    {...register("price", { required: true })}
                    type="text"
                    name="price"
                    defaultValue={price}
                    placeholder="Price"
                    className="input input-bordered max-w-[336px] w-full"
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="mb-2">
                  <span>Message</span>
                </label>
                <textarea
                  {...register("recipe", { required: true })}
                  defaultValue={recipe}
                  name="recipe"
                  placeholder="Recipe"
                  rows={4}
                  cols={40}
                  className=" border-2 w-full max-w-2xl p-4"
                />{" "}
              </div>
              <br />

              <div className="mb-4">
                <label
                  htmlFor="type2-3"
                  className="flex w-full max-w-[380px] md:w-[380px]"
                ></label>

                <input
                  {...register("image", { required: true })}
                  type="file"
                  className="file-input file-input-bordered w-full max-w-xs"
                />
              </div>
              <button
                className=" btn uppercase hover:bg-[#B58130] bg-[#B58130] text-white"
                type="submit"
              >
                Update Item
                <FaUtensils />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateItem;
