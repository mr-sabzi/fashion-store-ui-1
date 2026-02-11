
import ProductCard from "../../molecules/productCard/ProductCard";


function ProductGrid({ products }) {
  return (
    <div className="flex gap-4">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}

export default ProductGrid;
