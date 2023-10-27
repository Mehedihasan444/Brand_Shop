import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";
import { Autoplay, Pagination } from "swiper/modules";



const Brands = ({ brands }) => {
  return (
    <div className=" my-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">All Brands</h1>
      </div>
      <Swiper
        // grabCursor={true}
        slidesPerView={5}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={false}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {brands?.map((brand) => (
          <SwiperSlide key={brand.id} className="">
            <Link to={`BrandDetailsPage/${brand.name}`}>
              <div className="flex text-center border p-5  items-center h-[255px] w-[280px] justify-center">
                <div className="">
                  <div className="flex justify-center items-center  ">
                    <img src={brand.image} alt="" className=" !h-[150px] " />
                  </div>
                  <h3 className="text-xl font-semibold cursor-pointer">
                    {brand.name}
                  </h3>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
