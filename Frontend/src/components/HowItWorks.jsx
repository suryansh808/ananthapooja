import { ChevronRight } from "lucide-react";

const HowItWorks = () => {
  return (
    <div>
      <div className="py-20 px-2.5 bg-linear-to-br from-orange-50 to-amber-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-orange-950 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-stone-600">Simple, seamless, sacred</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Choose Pooja", desc: "Pick your ritual" },
              { step: "2", title: "Set Schedule", desc: "Date and time" },
              { step: "3", title: "Pandit Arrives", desc: "With all samagri" },
              { step: "4", title: "Sacred Ritual", desc: "Performed properly" },
            ].map((item, idx) => (
              <div key={idx} className="text-center relative">
                <div className="w-20 h-20 bg-linear-to-r from-[#4D2268] to-[#2b0841] rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4 shadow-xl">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-orange-950 mb-2">
                  {item.title}
                </h3>
                <p className="text-stone-600 leading-relaxed">{item.desc}</p>
                {idx < 3 && (
                  <ChevronRight
                    className="hidden md:block absolute top-8 -right-4 text-[#2b0841]"
                    size={32}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
