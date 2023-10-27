import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const ProductDetails = () => {
  const products = useLoaderData();
  const params = useParams();
  const [product, setProduct] = useState(products);
  const { user } = useContext(AuthContext);

  // console.log(params._id);
  useEffect(() => {
    const desiredProduct = products.find(
      (product) => product._id === params._id
    );
    setProduct(desiredProduct);
  }, [params._id, products]);

  const handleAddToCart = () => {
  
    const newData = {
      title: product.title,
      price: product.price,
      imgURL: product.imgURL,
      description: product.description,
      brand: product.brand,
      category: product.category,
      userEmail: user.email,
    };
    // console.log(newData);

    fetch("http://localhost:5000/addToCart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          icon: "success",
          title: "Oops...",
          text: " product is add on the cart successfully!",
          // footer: '<a href="">Why do I have this issue?</a>'
        });
        console.log(data);
      });
  };

  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex justify-between gap-5">
        <div className="flex-1 border flex justify-center items-center">
          <img src={product.imgURL} alt="" className="h-[50vh]" />
        </div>
        <div className="flex-1 space-y-4">
          <span className="">
            {product.brand}/{product.category}
          </span>
          <h1 className="text-4xl font-bold">{product.title}</h1>
          <p className="">price: ${product.price}.00</p>

          <button className="select-none rounded-lg bg-black py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" onClick={handleAddToCart}>
            ADD TO CART
          </button>
        </div>
      </div>

      <div className="mt-10">
        <h1 className="text-3xl font-bold border my-5 p-3">
          Product Description{" "}
        </h1>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;

// useEffect(() => {
//   fetch("http://localhost:5000//products")
//     .then((res) => res.json())
//     .then((data) => {
//       setProducts(data)
//       const desiredProduct = products.find((product) => product._id === params._id);

//       setSingleProduct(desiredProduct);
//       console.log(desiredProduct);
//     });

// }, [params._id, products]);
