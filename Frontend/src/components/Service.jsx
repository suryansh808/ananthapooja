import { ChevronRight, MapPin } from 'lucide-react'
import {  pincodes  } from "../data/data";
import { Link } from 'react-router-dom';

const Service = () => {
  return (
    <div>
      <div className="py-20 px-2.5 bg-linear-to-b from-orange-50 to-amber-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-orange-950 mb-4">Currently Serving Bangalore</h2>
            <p className="text-xl text-stone-600">Expanding weekly across the city</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {pincodes.slice(0,6).map((pc, idx) => (
              <div key={idx} className=" rounded-xl p-6 shadow-md hover:shadow-lg transition flex items-center space-x-4 border border-orange-100">
                <MapPin className="text-[#2b0841] shrink-0" size={24} />
                <div>
                  <div className="font-bold text-orange-950 text-lg">{pc.area}</div>
                  <div className="text-stone-600">{pc.code}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/pincode"
              className="text-[#4D2268] font-semibold hover:text-[#2b0841] transition text-lg flex items-center justify-center mx-auto"
            >
              Check Your Pincode
              <ChevronRight size={20} className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
