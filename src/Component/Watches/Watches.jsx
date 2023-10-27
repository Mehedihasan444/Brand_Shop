import axios from "axios";
import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router-dom";

const Watches = () => {
  const [Watches, setWatches] = useState([]);
  const [category, setCategory] = useState("Watch");

  axios("http://localhost:5000/products/Watch").then((data) =>
    setWatches(data.data)
  );

  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="border p-3 flex justify-between items-center">
        <h1 className="text-4xl font-bold">Watches</h1>
        <Link to={`/ProductsPage/${category}`}>
          <button className={`btn btn-outline ${Watches.length<=3?'hidden':''}`}>See All</button>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto   my-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Watches.length > 4 ? (
            <>
              {Watches.slice(0, 3).map((watch) => (
                <ProductCard key={watch._id} product={watch}></ProductCard>
              ))}
            </>
          ) : (
            <>
              {Watches.map((watch) => (
                <ProductCard key={watch._id} product={watch}></ProductCard>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Watches;
