import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
const [Categories,setCategories]=useState([])
useEffect(()=>{
    fetch('/Categories.json')
    .then(res=>res.json())
    .then(data=>setCategories(data))
},[])

  return (
    <div className="max-w-4xl mx-auto my-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold ">All Categories</h1>
      </div>
      <div className="grid md:grid-cols-3 gap-5 justify-center items-center">
        {Categories.map((Category) => (
          <Link to={`/ProductsPage/${Category.category}`} key={Category.id} className="flex justify-center items-center">
            {" "}
            <div className="flex flex-col text-center border p-5 h-[200px] w-[250px] justify-center items-center">
              <div className="flex justify-center items-center flex-grow">
                <img src={Category.image} alt="" className="" />
              </div>
              <h3 className="text-xl font-semibold cursor-pointer">
                {Category.category}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;