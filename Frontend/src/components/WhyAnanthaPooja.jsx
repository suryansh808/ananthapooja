import { Check, Clock,  MessageCircle, Phone, Star, Users } from "lucide-react";

const WhyAnanthaPooja = () => {
  return (
      <div className="py-20 px-2.5 bg-linear-to-br from-orange-50 to-amber-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-orange-950 mb-4">Why Families Trust Ananthapooja</h2>
            <div className="w-24 h-1 bg-linear-to-r from-[#4D2268] to-[#2b0841] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: 'Verified & Experienced Purohits', desc: 'Background-verified, Vedic-trained priests with years of experience' },
              { icon: MessageCircle, title: 'Language & Tradition Preference', desc: 'Choose your preferred language: Kannada, Tamil, Telugu, Hindi, Sanskrit' },
              { icon: Check, title: 'End-to-End Pooja Setup', desc: 'Complete samagri, setup, ritual guidance, and cleanup included' },
              { icon: Star, title: 'Transparent Pricing', desc: 'Clear pricing with no hidden charges. Pay only for what you book' },
              { icon: Clock, title: 'On-Time, Respectful Service', desc: 'Punctual arrivals with utmost respect for your time and space' },
              { icon: Phone, title: 'Digital Booking & Support', desc: 'Easy online booking with WhatsApp confirmation and 24/7 support' }
            ].map((feature, idx) => (
              <div key={idx} className="bg-linear-to-br from-orange-50 to-amber-50 px-4 py-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-orange-100">
                <div className="w-14 h-14 bg-linear-to-r from-[#4D2268] to-[#2b0841] rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <feature.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-orange-950 mb-3">{feature.title}</h3>
                <p className="text-stone-600 text-[14px]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default WhyAnanthaPooja
