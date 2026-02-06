
import callback from "../assets/callback.jpg";
import { Phone } from "lucide-react";
import RequestedACall from "./RequestedACall";
import { useState } from "react";

export default function PanditHelpCTA() {
   const [open, setOpen] = useState(false);

  return (
    <section   className="relative h-120 px-2.5 flex justify-center items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center lg:bg-top"
       style={{ backgroundImage: `url(${callback})` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative container mx-auto text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Not sure which pooja you need?
        </h2>
        <p className="text-lg md:text-xl mb-8 text-amber-100">
          Talk directly to a knowledgeable purohits before booking.
        </p>

        <button onClick={() => setOpen(true)} className="inline-flex items-center cursor-pointer active:scale-110 gap-3 bg-linear-to-r from-[#4D2268] to-[#2b0841] text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition-all duration-300" >
          <Phone size={20} />
            Request a Call from Purohits
        </button>
      </div>
       {open && (
        <RequestedACall setOpen={setOpen} />
      )}
    </section>
  );
}
