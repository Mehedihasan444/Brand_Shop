import axios from "axios";
import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router-dom";

const Tablets = () => {
  const [Tablets, setTablets] = useState([]);
  const [category, setCategory] = useState("Tablet");

  axios("http://localhost:5000/products/Tablet").then((data) =>
    setTablets(data.data)
  );

  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="border p-3 flex justify-between items-center">
        <h1 className="text-4xl font-bold">Tablets</h1>
        <Link to={`/ProductsPage/${category}`}>
          <button className={`btn btn-outline ${Tablets.length<=3?'hidden':''}`}>See All</button>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto   my-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Tablets.length > 4 ? (
            <>
              {Tablets.slice(0, 3).map((tablet) => (
                <ProductCard key={tablet._id} product={tablet}></ProductCard>
              ))}
            </>
          ) : (
            <>
              {Tablets.map((tablet) => (
                <ProductCard key={tablet._id} product={tablet}></ProductCard>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tablets;
