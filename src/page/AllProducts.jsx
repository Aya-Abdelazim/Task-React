import Data from "../Data/Data";
import ProductsList from "../components/ProductsList";

const AllProducts = () => {
  return (
    <section>
      <ProductsList products={Data} />
    </section>
  );
};

export default AllProducts;
