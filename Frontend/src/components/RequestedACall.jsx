import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { submitCallRequest } from "../api/callRequestApi";
import { Toaster, toast } from "react-hot-toast";
const RequestedACall = ({ setOpen, service }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    pincode: "",
    message: "",
    consultancy: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (service) {
      setForm((prev) => ({ ...prev, consultancy: service.title }));
    }
  }, [service]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await submitCallRequest(form);

      if (data.success) {
        toast.success(data.message);
        setLoading(false);
        setTimeout(() => {
          setOpen(false);
        }, 2000);
      }
    } catch (error) {
      toast.error(error.message || "Submission failed");
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <Toaster />
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />

      {/* Modal Box */}
      <div className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl p-4 animate-fade-in">
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute cursor-pointer top-4 right-4 text-gray-500 hover:text-black"
        >
          <X size={22} />
        </button>

        <h3 className="text-md  font-bold text-purple-900 mb-2">
          Request a Call for Consulting
        </h3>
        <p className="text-sm  text-gray-600 mb-6">
          Our purohit will contact you shortly
        </p>

        <form onSubmit={handleSubmit} className="space-y-2">
          <input
            type="text"
            required
            placeholder="Full Name"
            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-purple-700"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            type="number"
            required
            placeholder="Phone Number"
            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-purple-700"
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />

          <input
            type="text"
            required
            placeholder="Pincode or Area"
            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-purple-700"
            onChange={(e) => setForm({ ...form, pincode: e.target.value })}
          />
          <input
            type="text"
            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-purple-700"
            value="Consulting"
            readOnly
            onChange={(e) => setForm({ ...form, consultancy: e.target.value })}
          />

          <textarea
            rows="3"
            placeholder="Message (Optional)"
            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-purple-700 resize-none"
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />

          <button
            type="submit"
            className="w-full cursor-pointer bg-linear-to-r from-[#4D2268] to-[#2b0841] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            {loading ? "Requsting....." : " Request Call"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RequestedACall;
