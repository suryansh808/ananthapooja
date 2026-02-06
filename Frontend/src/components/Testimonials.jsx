import { Star } from "lucide-react";
import { testimonials  } from "../data/data";

const Testimonials = () => {
  return (
    <div>
      <div className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-orange-950 mb-4">What Families Say</h2>
            <div className="w-24 h-1 bg-linear-to-r from-orange-600 to-red-700 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((test, idx) => (
              <div key={idx} className="bg-linear-to-br from-orange-50 to-amber-50 p-8 rounded-2xl shadow-md border border-orange-100">
                <div className="flex mb-3">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="text-orange-500 fill-current" size={18} />
                  ))}
                </div>
                <p className="text-stone-700 italic mb-4 leading-relaxed">"{test.text}"</p>
                <div className="text-sm">
                  <div className="font-bold text-orange-950">{test.author}</div>
                  <div className="text-stone-600">{test.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
