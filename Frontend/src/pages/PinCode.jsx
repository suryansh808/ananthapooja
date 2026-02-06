import { MapPin, MessageCircle, Phone } from "lucide-react";
import { pincodes  } from "../data/data";

const PinCode = () => {
  return (
    <div>
      <div className=" pt-32 pb-20 px-2.5 bg-linear-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-orange-950 mb-4">Pincodes We Serve</h1>
          <p className="text-xl text-stone-600 mb-6">Currently active across Bangalore</p>
          <div className="inline-block  border border-orange-950 px-6 py-3 rounded-xl">
            <p className="text-orange-950 font-semibold">🚀 Expanding weekly across the city</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {pincodes.map((pc, idx) => (
            <div key={idx} className="rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-orange-100 group">
              <div className="flex items-start justify-between mb-4">
                <MapPin className="text-[#2b0841] shrink-0 group-hover:scale-110 transition-transform" size={32} />
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <h3 className="text-2xl font-bold text-orange-950 mb-2">{pc.area}</h3>
              <div className="text-3xl font-bold text-[#4D2268]">{pc.code}</div>
            </div>
          ))}
        </div>

        <div className="bg-linear-to-br from-orange-50 to-amber-50 rounded-2xl p-8 md:p-12 border border-orange-200 shadow-lg">
          <h2 className="text-3xl font-bold text-orange-950 mb-4">Don't See Your Pincode?</h2>
          <p className="text-lg text-stone-700 mb-6">
            We're rapidly expanding across Bangalore. Contact us to check if we can serve your area or to request service in your neighborhood.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/+918861571188/?text=Hello%20Anantha%20Pooja,%20I%20would%20like%20to%20inquire%20about%20pincode%20service."
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition flex items-center justify-center space-x-2"
            >
              <MessageCircle size={20} />
              <span className="font-semibold">WhatsApp Us</span>
            </a>
            <a
              href="tel:+918861571188"
              className=" px-6 py-3 border border-orange-950 rounded-lg hover:bg-orange-50 flex items-center justify-center space-x-2"
            >
              <Phone size={20} />
              <span className="font-semibold">Call Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default PinCode
