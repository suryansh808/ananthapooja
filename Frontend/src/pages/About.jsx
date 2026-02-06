import { Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.webp';

const About = () => {
  return (

      <div className=" pt-32 pb-20 px-2.5 bg-linear-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
            <div className='flex items-center justify-center'>
               <img src={logo} alt="lgoo" className='h-20' />
            </div>
          <h1 className="text-5xl md:text-6xl font-bold text-orange-950 mb-4">About Ananthapooja</h1>
          <div className="w-24 h-1 bg-linear-to-r from-[#4D2268] to-[#2b0841] mx-auto rounded-full"></div>
        </div>

        <div className=" rounded-2xl shadow-xl p-8 md:p-8 mb-12 space-y-2 ">
          <p className="text-xl text-stone-700 leading-relaxed">
            Ananthapooja.com was created with a simple intention to make authentic Vedic poojas accessible, reliable, and peaceful for modern families.
          </p>
          <p className="text-xl text-stone-700 leading-relaxed">
            Rooted in tradition and enabled by technology, we connect families with experienced, verified purohits, complete pooja materials, and guided rituals all through a simple booking process.
          </p>
          <p className="text-xl text-stone-700 leading-relaxed">
            Ananthapooja is part of the Anantha Ecosystem, committed to preserving Sanatana Dharma while adapting it to today's lifestyle.
          </p>
        </div>

        <div className="rounded-2xl p-8 md:p-12 border border-orange-950/20">
          <h2 className="text-3xl font-bold text-orange-950 mb-6">Our Promise</h2>
          <div className="space-y-4">
            {[
              { title: 'Authenticity over shortcuts', desc: 'We never compromise on traditional Vedic practices' },
              { title: 'Devotion over transaction', desc: 'Every pooja is performed with genuine spiritual intention' },
              { title: 'Trust over scale', desc: 'Quality service and customer satisfaction come before growth' }
            ].map((promise, idx) => (
              <div key={idx} className="flex items-start space-x-4">
                <Check className="text-green-600 shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-bold text-orange-950 mb-1">{promise.title}</h3>
                  <p className="text-stone-700">{promise.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link to="/allpooja"
            className=" bg-linear-to-r from-[#4D2268] to-[#2b0841] text-white px-10 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 text-lg font-bold"
          >
            Book Your Pooja Today
          </Link>
        </div>
      </div>
    </div>
    
  )
}

export default About
