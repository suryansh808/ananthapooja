
import { Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
        <div className="py-20 px-2.5">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-50 mb-6">Bring Divine Energy to Your Home Today</h2>
          <p className="text-xl text-amber-100 mb-8">Experience authentic Vedic rituals with complete peace of mind</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
                to="/poojabooking"
              className="bg-white text-orange-950 px-8 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 text-lg font-bold"
            >
              Book a Pooja
            </Link>
            <a
              href="tel:+918861571188"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-orange-900 transition-all duration-300 text-lg font-bold flex items-center justify-center space-x-2"
            >
              <Phone size={20} />
              <span>Call / WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
  )
}

export default CTA
