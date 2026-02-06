import { Check, ChevronRight,MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import bannerimg from "../assets/banner.webp"


const Hero = () => {
  
  return (
      <div className="relative pt-30 pb-20 px-2.5 overflow-hidden bg-cover bg-fixed bg-center"
         style={{backgroundImage: `url(${bannerimg})`}}
        >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 bg-orange-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
        </div>
        
        <div  className="container mx-auto relative z-10 animate-fade-in">
          <div  className="text-left space-y-2 md:space-y-5">
            <div className="inline-block">
              <div className="text-orange-950 text-xs font-medium mb-2 tracking-widest uppercase">Sacred Traditions · Modern Convenience</div>
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-orange-950 leading-tight">Sacred Poojas.<br /><span className="text-orange-950">Authentic Rituals.</span> </h1>
            <p className="text-[14px] md:text-2xl text-stone-700 max-w-3xl leading-relaxed">
              Book trusted purohits with complete pooja arrangements at your home or community across Bangalore
            </p>
            
            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl pt-8">
              {[
                'Vedic-trained Purohits',
                'Complete Samagri Included',
                'Pincode-wise Availability',
                'Transparent Pricing'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-3 rounded-xl shadow-sm">
                  <Check size={18} className="text-green-600 shrink-0" />
                  <span className="text-sm text-stone-800 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center pt-6">
              <Link to="/allpooja"
                className="bg-linear-to-r from-[#4D2268] to-[#2b0841] text-white px-8 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 text-lg font-semibold group transform hover:scale-105"
              >
                Book a Pooja
                <ChevronRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <a
                href="https://wa.me/+918861571188"
                className=" border-[#4D2268] border text-[#4D2268] px-8 group py-4 rounded-xl hover:scale-105 transition-all duration-300 text-lg font-semibold flex items-center space-x-2"
              >
                <MessageCircle  size={20} />
                <span>WhatsApp Now</span>
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-orange-50 to-transparent"></div>
      </div>

  )
}
export default Hero
