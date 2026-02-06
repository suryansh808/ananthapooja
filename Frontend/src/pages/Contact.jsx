import { ChevronDown, Clock, MessageCircle , MailPlus } from "lucide-react"
import { faqs } from "../data/data"
import { useState } from "react";
import RequestedACall from "../components/RequestedACall";


const Contact = () => {
     const [open, setOpen] = useState(false);
  return (
    <div>
      <div className=" pt-32 pb-20 px-2.5 bg-linear-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-orange-950 mb-4">Contact Us</h1>
          <p className="text-xl text-stone-600">We're here to help with any questions</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="rounded-2xl p-8 shadow-lg border border-orange-100">
              <h2 className="text-2xl font-bold text-orange-950 mb-6">Get in Touch</h2>
              
              <div className="space-y-4">
                <button onClick={() => setOpen(true)} className="flex items-center w-full cursor-pointer space-x-4 p-4 bg-orange-50 rounded-xl hover:bg-orange-100 transition group">
                  <div className="w-12 h-12  bg-linear-to-r from-[#4D2268] to-[#2b0841] rounded-full flex items-center justify-center">
                    <MailPlus className="text-white" size={20} />
                  </div>
                  <div>
                       <h2>Fill the form</h2>
                  </div>
                </button>
                  {open && (
        <RequestedACall setOpen={setOpen} />
      )}

                <a href="https://wa.me/+918861571188/?text=Hello%20Anantha%20Pooja,%20I%20would%20like%20to%20inquire%20about%20pooja%20service." className="flex items-center space-x-4 p-4 rounded-xl hover:bg-orange-100 transition group">
                  <div className="w-12 h-12  bg-linear-to-r from-[#4D2268] to-[#2b0841] rounded-full flex items-center justify-center">
                    <MessageCircle className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-stone-600">WhatsApp</div>
                    <div className="font-bold text-orange-950 group-hover:text-[#4D2268] transition">+91 8861571188</div>
                  </div>
                </a>

                <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-orange-100 transition">
                  <div className="w-12 h-12  bg-linear-to-r from-[#4D2268] to-[#2b0841] rounded-full flex items-center justify-center">
                    <Clock className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-stone-600">Service Hours</div>
                    <div className="font-bold text-orange-950">10 AM - 5 PM (Mon - Sat)</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl p-8 border border-orange-950/20">
              <h3 className="text-xl font-bold text-orange-950 mb-3">Quick Response</h3>
              <p className="text-stone-700">
                For fastest response, please WhatsApp us. We typically respond within 30 minutes during service hours.
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className=" rounded-2xl p-4 shadow-lg border border-orange-100">
            <h2 className="text-2xl font-bold text-orange-950 mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {faqs.slice(0, 4).map((faq, idx) => (
                <details key={idx} className="group">
                  <summary className="cursor-pointer font-semibold text-orange-950 hover:text-[#4D2268] transition flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                    {faq.q}
                    <ChevronDown className="group-open:rotate-180 transition-transform text-[#2b0841]" size={20} />
                  </summary>
                  <p className="mt-2 text-stone-700 pl-3 pt-2 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact
