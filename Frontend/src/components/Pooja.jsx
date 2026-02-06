
import { poojas } from "../data/data";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import PoojaCard from "./PoojaCard";

const Pooja = () => {
  return (
    <div>
      <div className="py-20 px-2.5 bg-linear-to-br from-orange-50 to-amber-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-orange-950 mb-4">
              Popular Poojas
            </h2>
            <p className="text-xl text-stone-600">
              Authentic Vedic rituals for every occasion
            </p>
          </div>

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={4}
            // navigation
            loop
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: { slidesPerView: 1.2 },
              480: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="rounded-2xl"
          >
            {poojas.slice(0, 6).map((pooja, idx) => (
              <SwiperSlide key={pooja.id}>
                <PoojaCard pooja={pooja} idx={idx} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="text-center mt-12">
            <Link
              to="/allpooja"
              className="bg-linear-to-r from-[#4D2268] to-[#2b0841] text-white px-8 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 text-lg font-semibold"
            >
              View All Poojas
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pooja;
