import {  packages  } from "../data/data";
export default function ChoosePkg() {
  
  return (
    <section className="py-20 px-2.5 bg-linear-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-950 mb-3">
            Choose What You Need
          </h2>
          <p className="text-lg text-stone-700">
            Book exactly what you need for your pooja whether it's a pandit,
            samagri, food, or decorations.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {packages.map((item, index) => (
            <div key={index} className=" rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden" >
                <div className=" overflow-hidden">
                    <img
                      loading="lazy"
                src={item.img}
                alt={item.title}
                className="w-full object-cover hover:scale-105 transition-transform duration-300"
              />
                </div>

              <div className="p-6 text-center space-y-3">
                <h3 className="text-xl font-bold text-orange-950">
                  {item.title}
                </h3>
                <p className="text-stone-600 text-sm max-w-xs mx-auto">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
