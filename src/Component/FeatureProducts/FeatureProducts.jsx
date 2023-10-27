import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

const FeatureProducts = () => {
  const [products, setProducts] = useState([]);
  const [temp, setTemp] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div className="">
      <h1 className="text-4xl font-bold text-center">Featured Products</h1>
      <div className="max-w-7xl mx-auto   my-10">
        {temp ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product) => (
              <ProductCard key={product._id} product={product}></ProductCard>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.length > 6
              ? products
                  .slice(0, 6)
                  .map((product) => (
                    <ProductCard
                      key={product._id}
                      product={product}
                    ></ProductCard>
                  ))
              : products.map((product) => (
                  <ProductCard
                    key={product._id}
                    product={product}
                  ></ProductCard>
                ))}
          </div>
        )}
      </div>
      <div className="flex justify-center">
        <button onClick={() => setTemp(!temp)} className="btn btn-neutral ">
          {temp ? "See Less" : "See more"}
        </button>
      </div>
    </div>
  );
};

export default FeatureProducts;
