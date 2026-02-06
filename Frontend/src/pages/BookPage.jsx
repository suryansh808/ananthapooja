import { useState } from "react";
import { useParams , Link } from "react-router-dom";
import { poojas } from "../data/data";
import { ChevronRight, Send } from "lucide-react";
const BookPage = () => {
  const { id } = useParams();
  const selectedPooja = poojas.find((c) => c.id === id);

  const [formData, setFormData] = useState({
    poojaType: selectedPooja?.name || "",
    selectedPackage: null,
    date: "",
    time: "",
    pincode: "",
    language: "",
    name: "",
    mobile: "",
    location: "home",
    attendees: "",
    decoration: false,
    foodForPurohit: false,
    additionalInfo: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.selectedPackage) {
      alert("Please select a ritual package");
      return;
    }

    const base = formData.selectedPackage.price;
    const gst = Math.round(base * 0.18);
    const decoration = formData.decoration ? 5000 : 0;
    const totalAmount = base + gst + decoration;

    const bookingPayload = {
      ...formData,
      poojaId: selectedPooja.id,
      packageLabel: formData.selectedPackage.label,
      purohits: formData.selectedPackage.purohits,
      gst,
      decorationCharge: decoration,
      totalAmount,
    };

    console.log("BOOKING DATA", bookingPayload);
  };

  return (
    <div className="py-10 px-2.5 bg-linear-to-br from-orange-50 to-amber-50">
      <div className="max-w-3xl mx-auto">
         <Link
         to={`/poojadetail/${selectedPooja.id}`}
          className="text-orange-950 font-semibold hover:text-[#4D2268] transition flex items-center mb-8"
        >
          <ChevronRight size={20} className="rotate-180 mr-1" />
          Back to Services
        </Link>
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-3xl font-bold text-orange-950 mb-4">
            Book a {selectedPooja.name}
          </h1>
          <p className="text-xl text-stone-600">
            Fill in the details below and we'll confirm via WhatsApp within 2
            hours
          </p>
        </div>

        <div className=" rounded-2xl shadow-xl p-4 md:p-8 border border-orange-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-stone-700 font-semibold mb-2">
                Selected Pooja
              </label>
              <input
                value={selectedPooja.name}
                disabled
                className="w-full px-4 py-3 bg-gray-100 border border-orange-950/20 rounded-lg"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-stone-700 font-semibold mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-orange-950/20 rounded-lg focus:outline-none transition"
                />
              </div>
              <div>
                <label className="block text-stone-700 font-semibold mb-2">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="10-digit mobile"
                  value={formData.mobile}
                  onChange={(e) =>
                    setFormData({ ...formData, mobile: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-orange-950/20 rounded-lg focus:outline-none transition"
                />
              </div>
            </div>

 <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-stone-700 font-semibold mb-2">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-orange-950/20 rounded-lg focus:outline-none transition"
                />
              </div>
              <div>
                <label className="block text-stone-700 font-semibold mb-2">
                  Preferred Time *
                </label>
                <input
                  type="time"
                  required
                  value={formData.time}
                  onChange={(e) =>
                    setFormData({ ...formData, time: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-orange-950/20 rounded-lg focus:outline-none transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-stone-700 font-semibold mb-2">
                How many members will attend the pooja? *
              </label>
              <input
                type="number"
                required
                min="1"
                value={formData.attendees}
                onChange={(e) =>
                  setFormData({ ...formData, attendees: e.target.value })
                }
                className="w-full px-4 py-3 border border-orange-950/20 rounded-lg"
                placeholder="Enter number of people"
              />
            </div>
<div>
              <label className="block text-stone-700 font-semibold mb-2">
                Language Preference *
              </label>
              <select
                required
                value={formData.language}
                onChange={(e) =>
                  setFormData({ ...formData, language: e.target.value })
                }
                className="w-full px-4 py-3 border border-orange-950/20 rounded-lg focus:outline-none transition"
              >
                <option value="">Select Language</option>
                <option value="kannada">Kannada</option>
                <option value="tamil">Tamil</option>
                <option value="telugu">Telugu</option>
                <option value="hindi">Hindi</option>
                <option value="sanskrit">Sanskrit</option>
              </select>
            </div>

             <div>
              <label className="block text-stone-700 font-semibold mb-2">
                Pincode *
              </label>
              <input
                type="text"
                required
                placeholder="e.g., 560066"
                value={formData.pincode}
                onChange={(e) =>
                  setFormData({ ...formData, pincode: e.target.value })
                }
                className="w-full px-4 py-3 border border-orange-950/20 rounded-lg focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block text-stone-700 font-semibold mb-2">
                Location Type *
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {["home", "apartment", "office"].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setFormData({ ...formData, location: type })}
                    className={`px-4 py-3 rounded-lg font-semibold capitalize transition-all ${
                      formData.location === type
                        ? " bg-linear-to-r from-[#4D2268] to-[#2b0841] text-white"
                        : " text-stone-700 hover:text-[#4D2268] border border-orange-950/20"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {selectedPooja.packages && (
              <div>
                <label className="block text-stone-700 font-semibold mb-3">
                  Select Ritual Package *
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {selectedPooja.packages.map((pkg, idx) => {
                    const gst = Math.round(pkg.price * 0.18);
                    const total = pkg.price + gst;

                    return (
                      <button
                        type="button"
                        key={idx}
                        onClick={() =>
                          setFormData({ ...formData, selectedPackage: pkg })
                        }
                        className={`p-4 rounded-xl border text-left transition-all ${
                          formData.selectedPackage?.label === pkg.label
                            ? "border-[#4D2268] bg-purple-50 shadow-md"
                            : "border-orange-200 hover:border-[#4D2268]"
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <h4 className="font-bold text-orange-950">
                            {pkg.label}
                          </h4>
                          <span className="font-bold text-[#4D2268]">
                            ₹{pkg.price}
                          </span>
                        </div>

                        <p className="text-sm text-stone-600 mt-1">
                          👳 {pkg.purohits} Purohit{pkg.purohits > 1 ? "s" : ""}
                        </p>

                        {pkg.includes && (
                          <p className="text-xs text-green-700 mt-1">
                            Includes: {pkg.includes}
                          </p>
                        )}

                        <div className="mt-2 text-xs text-stone-600">
                          GST (18%): ₹{gst}
                        </div>
                        <div className="text-sm font-bold text-green-700">
                          Total: ₹{total}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            <div>
              <label className="block text-stone-700 font-semibold mb-3">
                Additional Services
              </label>

              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.decoration}
                    onChange={(e) =>
                      setFormData({ ...formData, decoration: e.target.checked })
                    }
                  />
                  <span>Decoration Setup – ₹5000</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.foodForPurohit}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        foodForPurohit: e.target.checked,
                      })
                    }
                  />
                  <span>Food for Purohits (Will discuss on call)</span>
                </label>
              </div>
            </div>

           

           

            <div>
              <label className="block text-stone-700 font-semibold mb-2">
                Additional Information (Optional)
              </label>
              <textarea
                rows="4"
                placeholder="Any special requirements or questions..."
                value={formData.additionalInfo}
                onChange={(e) =>
                  setFormData({ ...formData, additionalInfo: e.target.value })
                }
                className="w-full px-4 py-3 border border-orange-950/20 rounded-lg focus:outline-none transition resize-none"
              ></textarea>
            </div>

            {formData.selectedPackage && (
              <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                {(() => {
                  const base = formData.selectedPackage.price;
                  const gst = Math.round(base * 0.18);
                  const decoration = formData.decoration ? 5000 : 0;
                  const total = base + gst + decoration;

                  return (
                    <div className="text-sm space-y-1">
                      <div>Package: ₹{base}</div>
                      <div>GST (18%): ₹{gst}</div>
                      {decoration > 0 && <div>Decoration: ₹5000</div>}
                      <div className="font-bold text-lg text-green-700">
                        Total Payable: ₹{total}
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

            <button
              type="submit"
              className="w-full cursor-pointer bg-linear-to-r from-[#4D2268] to-[#2b0841] text-white px-8 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 text-lg font-bold flex items-center justify-center space-x-2"
            >
              <Send size={20} />
              <span>Submit</span>
            </button>

            {/* <p className="text-[12px] md:text-[14px] text-center text-stone-600">
              We'll confirm your booking via WhatsApp within 2 hours
            </p> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
