import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link
      to={`/products/${product.id}`}
      className="bg-slate-500"
    >
      <h3>{product.title}</h3>
      <p>${product.price}</p>
    </Link>
  );
}

export default ProductCard;
