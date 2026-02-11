
import ProductGrid from "../../components/organisms/productGrid/ProductGrid";
import products from "../../data/products";

function ProductList() {
  return (
    <>
      <h1 className="text-2xl mb-4">Products</h1>
      <ProductGrid products={products} />

    </>
  );
}

export default ProductList;
