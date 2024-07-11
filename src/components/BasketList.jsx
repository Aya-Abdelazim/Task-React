import { useContext } from "react";
import { Link } from "react-router-dom";
import ProductContext from "../store/ProductContext";

const BasketList = () => {
  const proContext = useContext(ProductContext);

  let content;

  if (proContext.total === 0) {
    content = <p>Basket Is Empty</p>;
  } else {
    content = proContext.data.map((product) => (
      <div
        key={product.id}
        className="shadow-slate-300 border shadow-md flex max-md:flex-col max-md:h-full max-md:m-4 box-border mb-5"
      >
        {/* Product Images */}
        <section className="border-slate-200 border flex sm:shadow-md max-md:flex-col max-md:mb-4 max-md:shadow-md">
          <div className="bg-slate-100 flex justify-center items-center border">
            <img
              src={product.image}
              alt={product.title}
              className="bg-slate-100 w-max"
            />
          </div>

          {/* Product Details (color, size) */}
          <div className="p-6 font-medium flex justify-around flex-col gap-3 w-52">
            <div className="flex gap-2">
              Color:
              <div
                className="color-choose 
                  bg-black w-7 h-7 rounded-full cursor-pointer transform duration-75 hover:scale-90"
              ></div>
            </div>
            <span>Size: 28mm</span>
          </div>
        </section>

        {/* Product Details */}
        <section className="h-full max-md:border xl:border-none">
          <div className="p-6">
            {/* Product Price */}
            <div className="text-2xl font-medium">{product.cost}</div>

            {/* Buttons */}
            <div className="flex flex-col w-fit mt-2">
              <button
                className="bg-red-700 text-white py-2 px-3 text-sm font-medium mt-3 hover:scale-95"
                onClick={() => proContext.removeFromBasket(product.id)}
              >
                Remove From Basket
              </button>

              <button className="bg-green-700 text-white py-2 px-3 text-sm font-medium mt-3 hover:scale-95">
                Check Out
              </button>
            </div>
          </div>
        </section>
      </div>
    ));
  }

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

      {/* Basket Items Section */}
      <div>{content}</div>
    </main>
  );
};

export default BasketList;
