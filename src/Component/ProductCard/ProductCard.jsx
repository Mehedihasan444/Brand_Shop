import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ProductCard = ({ product }) => {
  const { _id, title, price,rating, description, category, brand, imgURL } = product;



  return (
    <div >
      <div className="relative flex flex-col text-gray-700 bg-white border  rounded-xl bg-clip-border">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-60 rounded-xl bg-clip-border">
          <img src={imgURL} className="object-contain w-full h-full" />
        </div>
        <div className="p-6">
          <p className="">{brand}</p>
          <div className=" mb-2">
            <p className="block font-sans text-xl antialiased font-medium leading-relaxed text-blue-gray-900">
              {title}
            </p>
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
              Price : ${price}.00
            </p>
            <p className="flex items-center font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
              <span className="pr-4"> Rating : {rating}</span>
              <AiFillStar></AiFillStar>
            </p>
          </div>
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
            With plenty of talk and listen time, voice-activated Siri access,
            and an available wireless charging case.
          </p>
        </div>
        <div className="p-6 pt-0 flex gap-5 justify-between">
          <Link to={`/ProductDetails/${_id}`}>
            <button className="select-none rounded-lg bg-white  border-2 border-black py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
              DETAILS
            </button>
          </Link>
          <Link to={`/products/${_id}`}>
            <button
              // onClick={handleUpdate}
              className="select-none rounded-lg bg-black py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Update
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
