import { ChevronRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { poojas } from "../data/data";

const PoojaDetailPage = () => {
  const { id } = useParams();
  const selectedPooja = poojas.find((c) => c.id === id);
  console.log(selectedPooja);

  if (!selectedPooja) return <div className="pt-32 text-center">Pooja not found</div>;

  return (
    <div className="py-10 px-2.5 bg-linear-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto">
        <Link
          to="/allpooja"
          className="text-orange-950 font-semibold hover:text-[#4D2268] transition flex items-center mb-8"
        >
          <ChevronRight size={20} className="rotate-180 mr-1" />
          Back to Services
        </Link>

        <div className="rounded-2xl shadow-xl overflow-hidden border border-orange-100">
          <div className="h-4 bg-linear-to-r from-[#4D2268] to-[#2b0841]"></div>

          <div className="p-8 md:p-8">
             <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1  justify-between">
                <div className="">
                   <h1 className="text-4xl md:text-5xl font-bold text-orange-950 mb-6">   {selectedPooja.name}  </h1>
                    <div className="space-y-6 mb-10">
              <div>
                <h3 className="text-2xl font-bold text-orange-950 mb-3">Purpose</h3>
                <p className="text-lg text-stone-700">{selectedPooja.purpose}</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-orange-950 mb-3">When to Perform</h3>
                <p className="text-lg text-stone-700">{selectedPooja.when}</p>
              </div>
                    </div>
                </div>
                <div className="overflow-hidden rounded-2xl bg-red-800 h-90">
                   <img src={selectedPooja.image} alt="selected pooja image" className=" rounded-2xl hover:scale-110 duration-300 transition-all " />
                </div>
             </div>

            {/* PACKAGES */}
            {selectedPooja.packages ? (
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-orange-950 mb-6">
                  Available Ritual Packages
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  {selectedPooja.packages.map((pkg, idx) => (
                    <div
                      key={idx}
                      className=" border border-orange-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-lg font-bold text-orange-950">{pkg.label}</h4>
                        <span className="text-xl font-bold text-[#4D2268]">₹{pkg.price}</span>
                      </div>

                      <p className="text-sm text-stone-600 mb-3">
                        👳 {pkg.purohits} Purohit{pkg.purohits > 1 ? "s" : ""}
                      </p>

                      {pkg.includes && (
                        <p className="text-sm text-green-700 font-medium">
                          Includes: {pkg.includes}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="mb-10 bg-orange-50 border border-orange-200 p-6 rounded-xl">
                <p className="text-orange-900 font-medium">
                  Detailed package pricing available on request. Please contact us.
                </p>
              </div>
            )}

            <Link
              to={`/poojabooking/${selectedPooja.id}`}
              className="w-full inline-block text-center bg-linear-to-r from-[#4D2268] to-[#2b0841] text-white px-8 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 text-lg font-bold"
            >
              Book This Pooja Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoojaDetailPage;
