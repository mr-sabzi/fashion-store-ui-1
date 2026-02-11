import { useParams } from "react-router-dom";
import products from "../../data/products";

function Product() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) return <p>Product not found</p>;

  return (
    <>
      <h1>{product.title}</h1>
      <p className="mt-2">${product.price}</p>
    </>
  );
}

export default Product;
