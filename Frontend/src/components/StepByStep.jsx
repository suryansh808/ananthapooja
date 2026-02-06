import React from "react";
import { ArrowRight } from "lucide-react";
import {steps} from "../data/data"


export default function StepByStep() {
  return (
    <section className="py-20 px-2.5 bg-linear-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-orange-950 mb-4">
          Build your own Puja Step by Step
        </h2>
        <p className="text-lg text-stone-700 mb-14">
          We handle every ritual detail so you can focus on devotion.
        </p>

        {/* Steps Row */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className=" rounded-2xl p-6 w-72 shadow-md hover:shadow-xl transition-all">
                <img
                  loading="lazy"
                  src={step.img}
                  alt={step.title}
                  className="w-40 h-40 rounded-full mx-auto mb-4 object-cover object-top border-4 border-white shadow"
                />
                <h3 className="text-xl font-bold text-[#4D2268] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-stone-700">{step.desc}</p>
              </div>

              {index < steps.length - 1 && (
                <ArrowRight className="hidden lg:block text-[#4D2268]" size={32} />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Footer Text */}
        <p className="text-sm text-stone-600 mt-10 mb-2">
          You can skip anything that you don’t need.
        </p>

        {/* CTA Button */}
        <button className="bg-linear-to-r from-[#4D2268] to-[#2b0841] cursor-pointer text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-800 transition">
          Start Building Your Pooja
        </button>
      </div>
    </section>
  );
}
