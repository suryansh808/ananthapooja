import { ChevronRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const PoojaCard = ({ pooja, idx }) => {
  return (
    <div
      key={idx}
      className="block rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-orange-100 group"
    >
      <div className="overflow-hidden h-64 w-full">
        <img
          loading="lazy"
          src={pooja.image}
          alt={pooja.name}
          className=" object-cover object-center hover:scale-105 duration-300 ease-linear"
        />
      </div>
      <div className="px-3 py-4 space-y-1">
        <h3 className="text-xl line-clamp-1 font-bold text-orange-950 group-hover:text-[#4D2268] transition-colors">
          {pooja.name}
        </h3>
        <p className="text-stone-600 text-xl line-clamp-1">{pooja.purpose}</p>
        <Link to={`/poojadetail/${pooja.id}`}  className="text-[#4D2268] font-bold hover:text-[#2b0841] transition flex items-center group">
              View Details
          <ChevronRight
            size={18}
            className="ml-1 group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </div>
    </div>
  );
};

export default PoojaCard;
