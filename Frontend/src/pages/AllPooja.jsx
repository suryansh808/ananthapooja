import { useState } from 'react'
import { poojas  } from "../data/data";
import PoojaCard from '../components/PoojaCard';

const AllPooja = () => {
     const [selectedCategory, setSelectedCategory] = useState('all');
    
    const categories = {
      all: 'All Poojas',
      home: 'Home Poojas',
      property: 'House & Property',
      shanti: 'Special & Shanti Poojas'
    };

    const filteredPoojas = selectedCategory === 'all' 
      ? poojas 
      : poojas.filter(p => p.category === selectedCategory);

  return (
      <div className=" pt-32 pb-20 px-2.5 bg-linear-to-br from-orange-50 to-amber-50">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-orange-950 mb-4">Our Pooja Services</h1>
            <p className="text-xl text-stone-600">Authentic Vedic rituals for every occasion</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.entries(categories).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  selectedCategory === key
                    ? 'bg-linear-to-r from-[#4D2268] to-[#2b0841] text-white shadow-lg'
                    : ' cursor-pointer text-stone-700 hover:text-[#2b0841] border border-orange-950'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPoojas.map((pooja, idx) => (
              <PoojaCard pooja={pooja} idx={idx}/>
            ))}
          </div>
        </div>
      </div>
  )
}

export default AllPooja
