import { useParams } from "react-router-dom";
import ProductCard from "../../Component/ProductCard/ProductCard";
import { useEffect, useState } from "react";

const ProductsPage = () => {
  const params = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/products/${params.category}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [params.category]);

  if (loading) {
    return (
      <div className="w-full flex justify-center mt-20">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }


  
  return (
    <div className=" my-16">
      <h1 className="text-4xl font-bold text-center p-5 border mb-10">
        {params.category}
      </h1>
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-6">
        {data.length==0?<div className=" flex justify-center items-center"><h1 className="text-4xl font-bold  text-center">No Product Available!</h1></div>:
        data?.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
