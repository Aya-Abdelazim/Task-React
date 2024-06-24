import { Link } from "react-router-dom";

const Products = (props) => {
  return (
    <Link to={"/details"}>
      <li className="card cursor-pointer ml-4 mb-4 bg-white shadow-lg relative overflow-hidden sm:max-w-md ">
        <div className="image sm:h-52 bg-slate-200 overflow-hidden">
          <img
            src={props.image}
            alt={props.title}
            className=" w-full h-full sm:w-{500px} object-cover"
          />
        </div>
        <div className="text p-4 text-center mb-2 ">
          <h3 className="pb-2">{props.title}</h3>
          <p className=" text-slate-400 ">{props.description}</p>
          <span className="inline-block pt-4 font-bold">{props.cost}</span>
        </div>

        <button
          className="w-full bg-gray-800 text-white p-4 absolute -bottom-10 left-0 transform sc -translate-x-1 opacity-0 transition-opacity duration-300 ease-in-out"
          onClick={() => {}}
        >
          Add to Basket
        </button>
      </li>
    </Link>
  );
};

export default Products;
