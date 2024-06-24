import { Link } from "react-router-dom";
import { useState } from "react";

const DetailsList = (props) => {
  const [isSelected, setIsSelected] = useState({
    black: false,
    purple: false,
    red: false,
    blue: false,
    brown: false,
  });

  const colors = [
    { name: "black", bgColor: "bg-black" },
    { name: "purple", bgColor: "bg-purple-500" },
    { name: "red", bgColor: "bg-red-700" },
    { name: "blue", bgColor: "bg-blue-900" },
    { name: "brown", bgColor: "bg-red-950" },
  ];

  // Function to handle click on color options
  const handleClick = (color) => {
    setIsSelected((prevColors) => ({
      // Reset all colors to false
      ...Object.fromEntries(Object.keys(prevColors).map((key) => [key, false])),
      // Set the clicked color to true
      [color]: true,
    }));
  };

  return (
    <main className="lg:mx-40 sm:mx-28 my-10">
      {/* Back to Shop Link */}
      <Link to={"/"} className="my-5 p-4 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          width={12}
          className=""
        >
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
        </svg>
        <h3 className="font-bold ml-2">Back To Shop</h3>
      </Link>

      {/* Product Details Section */}
      <div className="shadow-slate-300  border shadow-md flex max-md:flex-col max-md:h-full max-md:m-4 box-border">
        {/* Product Images */}
        <section className="border-slate-200 border bg-slate-300  flex  sm:shadow-md max-md:flex-col-reverse max-md:mb-4 max-md:shadow-md">
          <div className="bg-white p-3 shadow-slate-500 border max-md:flex max-md:gap-2 xl:flex-col">
            <div>
              <img
                src={props.image}
                alt={props.title}
                className="border w-40 h-30 cursor-pointer mb-2"
              />
            </div>
          </div>

          <div className="bg-slate-100 flex justify-center items-center border">
            <img
              src={props.image}
              alt={props.title}
              className="bg-slate-100 w-max "
            />
          </div>
        </section>

        {/* Product Details */}
        <section className=" h-full border xl:border-none ">
          <div className="p-6">
            <span className="text-xs mb-1 text-slate-500 font-bold">
              {props.description}
            </span>
            <h3 className="font-medium text-3xl mb-6">{props.title}</h3>
            <p className="text-sm font-medium mb-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Sapiente, vel consequuntur reiciendis aliquam hic corporis
              mollitia.
            </p>
            <div className="w-full h-px bg-slate-300"></div>

            {/* Select Size Dropdown */}
            <div className="mt-6">
              <span className="text-xs text-slate-500 font-bold">
                Lens Width and Frame Size
              </span>
              <select
                id="--Select Size--"
                className="w-full border outline-none cursor-pointer p-2 rounded-md m-2 text-sm box-border"
              >
                <option value="">--Select Size--</option>
                <option value="option1">28 mm</option>
                <option value="option2">36 mm</option>
                <option value="option3">42 mm</option>
              </select>
            </div>

            {/* Choose Color Section */}
            <span className="text-xs text-slate-500 font-bold">
              Choose Color
            </span>
            <div className="flex gap-2 mt-4">
              {colors.map((color, index) => (
                <div
                  key={index}
                  className={`color-choose ${
                    isSelected[color.name] ? "selected" : ""
                  } ${
                    color.bgColor
                  } w-8 h-8 rounded-full cursor-pointer transform duration-75 hover:scale-90`}
                  onClick={() => handleClick(color.name)}
                ></div>
              ))}
            </div>

            {/* Product Price */}
            <div className="text-2xl mt-4 font-medium">{props.cost}</div>

            {/* Add to Basket Button */}
            <Link to={"/basket"}>
              <button className="bg-black text-white py-2 px-3 text-sm font-medium mt-3 hover:scale-95">
                Add To Basket
              </button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default DetailsList;
