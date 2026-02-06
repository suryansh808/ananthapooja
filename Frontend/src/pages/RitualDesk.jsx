import { useEffect, useState } from "react";
import { getPurohitsAll } from "../api/purohitApi";
import { SkeletonCard } from "../Admin/components/SkeletonCard";
import { PopupModal } from "react-calendly";
import loadRazorpay from "../utils/loadRazorpay";
import { createOrder } from "../api/paymentApi";
import { confirmBooking } from "../api/bookingApi";
import { MessageCircleMore, X } from "lucide-react";

const RitualDesk = () => {
  const [purohits, setPurohits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  const [selectedPurohit, setSelectedPurohit] = useState(null);
  const [showBooking, setShowBooking] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);
  const [calendlyUrl, setCalendlyUrl] = useState("");

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    amount: 0,
  });

  const openBookingModal = (purohit) => {
    setSelectedPurohit(purohit);
    setShowBooking(true);
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    console.log("yeh chala");
    if (!user.amount) return alert("Please select a service");

    const loaded = await loadRazorpay();
    if (!loaded) return alert("Payment SDK failed");

    const { data: order } = await createOrder(user.amount);

    const options = {
      key: "rzp_test_SCLSaDT7GXHwKY",
      amount: order.amount,
      currency: "INR",
      name: "Ritual Booking",
      description: `${selectedPurohit.name} - ${user.service}`,
      order_id: order.id,
      handler: async function (response) {
        await handleConfirmBooking(response);
      },
      prefill: user,
      theme: { color: "#d97706" },
    };

    new window.Razorpay(options).open();
  };

  const handleConfirmBooking = async (paymentData) => {
    const res = await confirmBooking({
      ...paymentData,
      purohitId: selectedPurohit._id,
      user,
    });

    setShowBooking(false);

    setCalendlyUrl(
      `${selectedPurohit.calendlyLink}?name=${user.name}&email=${user.email}&a1=${res.data.bookingId}`,
    );

    setShowCalendly(true);
  };

  const fetchPurohits = async () => {
    try {
      setLoading(true);
      const res = await getPurohitsAll(page, 10);
      const result = res.data;
      setPurohits(Array.isArray(result.data) ? result.data : []);
      setPages(res.pagination?.pages || 1);
    } catch (err) {
      console.error("Error fetching purohits", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPurohits();
  }, [page]);

  const handleClose = () => {
    setShowBooking(false);
  };

  return (
    <div className="py-25 px-2.5 bg-linear-to-br from-orange-50 to-amber-50 min-h-screen">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-4xl font-bold text-orange-950 mb-1">
            Sanatan Advisory and Ritual Experts
          </h2>
          <p className="text-stone-700 text-lg">
            Get expert spiritual guidance tailored to your needs
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
            : purohits.map((p) => (
                <div
                  key={p._id}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-amber-100 group"
                >
                  {/* IMAGE */}
                  <div className="h-48 bg-linear-to-br from-orange-100 to-amber-200 flex items-center justify-center text-orange-700 text-sm font-medium">
                    Image Coming Soon
                  </div>

                  {/* CONTENT */}
                  <div className="p-5 space-y-3">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-semibold text-orange-900">
                        {p.name}
                      </h3>
                      <span
                        className={`text-xs px-2 py-1 rounded-full font-medium ${
                          p.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-200 text-gray-600"
                        }`}
                      >
                        {p.status}
                      </span>
                    </div>

                    <p className="text-sm text-stone-600">
                      📍 {p.city}, {p.state}
                    </p>

                    <p className="text-sm text-stone-700">
                      🧘 Experience: <strong>{p.experience} years</strong>
                    </p>

                    {/* LANGUAGES */}
                    <div className="flex flex-wrap gap-2">
                      {p.languages?.map((lang, i) => (
                        <span
                          key={i}
                          className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>

                    {/* SPECIALIZATIONS */}
                    <div className="flex flex-wrap gap-2">
                      {p.specializations?.map((spec, i) => (
                        <span
                          key={i}
                          className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>

                    <div className="text-sm text-stone-600">
                      🚗 Travel Available:{" "}
                      <strong>{p.travelAvailable ? "Yes" : "No"}</strong>
                    </div>
                    <button
                      onClick={() => openBookingModal(p)}
                      className="w-full mt-4 bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-lg font-medium transition"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
        </div>

        {/* PAGINATION */}
        <div className="flex justify-center gap-4 mt-10 items-center">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
            className="px-4 py-2 border rounded-lg bg-white hover:bg-orange-50 disabled:opacity-50"
          >
            Prev
          </button>
          <span className="text-stone-700 font-medium">
            Page {page} of {pages}
          </span>
          <button
            disabled={page === pages}
            onClick={() => setPage((p) => p + 1)}
            className="px-4 py-2 border rounded-lg bg-white hover:bg-orange-50 disabled:opacity-50"
          >
            Next
          </button>
        </div>

        {showBooking && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50  ">
            <div className="bg-white p-4 rounded-xl w-full max-w-md animate-fade-in">
              <div className="flex items-center justify-between my-2">
                <h2 className="text-lg font-bold">
                  Book {selectedPurohit.name}
                </h2>
                <span onClick={handleClose}>
                  <X size={20} />
                </span>
              </div>
              <form onSubmit={handlePayment} className="space-y-4">
                <input
                  placeholder="Name"
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                 className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-purple-700"
                />

                <input
                  placeholder="Email"
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                 className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-purple-700"
                />

                <input
                  placeholder="Phone"
                  onChange={(e) => setUser({ ...user, phone: e.target.value })}
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-purple-700"
                />

                {/* Service Options */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-purple-700">
                    <input
                      type="radio"
                      name="service"
                      onChange={() =>
                        setUser({
                          ...user,
                          service: "30 mins - 1 hr",
                          amount: 500,
                        })
                      }
                    />
                    <span>30mins To 1hour – ₹500/-</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-purple-700">
                    <input
                      type="radio"
                      name="service"
                      onChange={() =>
                        setUser({
                          ...user,
                          service: "1 hr - 2 hr",
                          amount: 1500,
                        })
                      }
                    />
                    <span>1hour To 2hour – ₹1500/-</span>
                  </label>
                </div>
                     
                {/* personal visit */}
                <div title="Whatsapp Us" className=" w-fit mx-auto  animate-bounce">
                      <a  href="https://wa.me/+918861571188" className="hover:opacity-75 flex items-center gap-2 hover:text-green-700 transition-opacity" target="_blank" rel="noopener noreferrer"><p className="text-sm">Personal Visit</p><MessageCircleMore size={15}/></a>
                </div>

                <button
                  disabled={!user.amount}
                  className="w-full bg-green-600 text-white py-2 rounded disabled:opacity-50"
                >
                  Pay ₹{user.amount || 0} & Continue
                </button>
              </form>
            </div>
          </div>
        )}

        {showCalendly && (
          <PopupModal
            url={calendlyUrl}
            open={showCalendly}
            onModalClose={() => setShowCalendly(false)}
            rootElement={document.getElementById("root")}
          />
        )}
      </div>
    </div>
  );
};

export default RitualDesk;
