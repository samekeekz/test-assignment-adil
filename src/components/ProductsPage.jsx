import ProductCard from './ProductCard';

const ProductsPage = () => {
  return (
    <div className="grid grid-cols-products place-items-start justify-items-stretch gap-4 py-10">
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductsPage;
