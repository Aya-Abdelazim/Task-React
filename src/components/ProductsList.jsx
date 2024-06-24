import Products from "./Products";

const ProductsList = (props) => {
  return (
    <ul className="xl:grid xl:grid-cols-4 md:grid md:grid-cols-2 grid sm:justify-center sm:items-center m-6">
      {props.product.map((product) => (
        <Products
          key={product.id}
          id={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
          cost={product.cost}
        />
      ))}
    </ul>
  );
};

export default ProductsList;
