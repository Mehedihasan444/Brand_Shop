import axios from "axios";
import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router-dom";

const Phones = () => {
  const [phones, setPhones] = useState([]);
  const [category, setCategory] = useState("Phone");

  axios("http://localhost:5000/products/Phone").then((data) =>
    setPhones(data.data)
  );

  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="border p-3 flex justify-between items-center">
        <h1 className="text-4xl font-bold">Phones</h1>
        <Link to={`/ProductsPage/${category}`}>
          <button className={`btn btn-outline ${phones.length<=3?'hidden':''}`}>See All</button>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto   my-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {phones.length > 4 ? (
            <>
              {phones.slice(0, 3).map((phone) => (
                <ProductCard key={phone._id} product={phone}></ProductCard>
              ))}
            </>
          ) : (
            <>
              {phones.map((phone) => (
                <ProductCard key={phone._id} product={phone}></ProductCard>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Phones;
