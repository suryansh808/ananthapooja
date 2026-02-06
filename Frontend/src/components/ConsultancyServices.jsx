import {Link} from "react-router-dom"
import { services } from "../data/data";

export default function ConsultancyServices() {


  return (
    <section className="py-20 px-2.5 bg-linear-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-950 mb-3">
            Consultancy Services
          </h2>
          <p className="text-stone-700 text-lg">
            Get expert spiritual guidance tailored to your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className=" rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-amber-100 group"
            >
              {/* Image */}
              <div className=" overflow-hidden">
                <img
                  loading="lazy"
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-[#4D2268] mb-4">
                  {service.title}
                </h3>

                <Link to="/ritualdesk" className=" bg-linear-to-r from-[#4D2268] to-[#2b0841] cursor-pointer text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition">
                  Schedule
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
     
    </section>
  );
}
