/* eslint-disable react/prop-types */
const MenuItem = ({ item }) => {
  const { image, name, price } = item;
  // console.log(item);
  return (
    <div>
      <div className="flex items-center gap-8 my-4">
        <div className="">
          <img
            style={{ borderRadius: "0 200px 200px 200px" }}
            className="w-28 h-24 object-cover"
            src={image}
            alt=""
          />
        </div>
        <div>
          <h3 className="md:text-xl font-semibold text-lg"> {name} ------ </h3>
          <p className="md:w-96 w-52  text-sm text-[#737373]">
            Roasted duck breast (served pink) with gratin potato and a griottine
            cherry sauce
          </p>
        </div>
        <div className="">
          <p className="text-[#BB8506] font-semibold">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
