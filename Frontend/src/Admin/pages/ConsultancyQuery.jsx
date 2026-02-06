import { useEffect, useState } from "react";
import TableSkeleton from "../components/TableSkeleton";
import { getBookingDetails } from "../../api/bookingApi";

const ConsultancyQuery = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [selectedPurohit, setSelectedPurohit] = useState(null);
  const fetchRequests = async () => {
    setLoading(true);
    try {
      const res = await getBookingDetails(page, 15);
      console.log(res.data);
      const result = res.data;
      setData(Array.isArray(result.data) ? result.data : []);
      setPages(res.pagination?.pages || 1);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, [page]);

  return (
    <div className=" px-2.5 py-2 container h-full mx-auto">
      <h1 className="text-md sm:text-xl font-bold mb-4 text-center">
        Consultancy Requests
      </h1>

      <div className="overflow-x-auto bg-white shadow rounded-xl">
        {loading ? (
          <div className="p-4">
            <TableSkeleton />
          </div>
        ) : (
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
              <tr>
                <th className="px-4 py-3">Customer</th>
                <th className="px-4 py-3">Phone</th>
                <th className="px-4 py-3">Service</th>
                <th className="px-4 py-3">Amount</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Purohit</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item._id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">{item.userName}</td>
                  <td className="px-4 py-3">{item.phone}</td>
                  <td className="px-4 py-3">{item.service}</td>
                  <td className="px-4 py-3">₹{item.amount}</td>
                  <td className="px-4 py-3">{item.status}</td>
                  <td className="px-4 py-3">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </td>

                  <td className="px-4 py-3">
                    <button
                      onClick={() => setSelectedPurohit(item.purohitId)}
                      className="text-indigo-600 hover:underline text-sm"
                    >
                      View Purohit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

       {selectedPurohit && (
  <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
    <div className="bg-white w-full max-w-lg rounded-xl shadow-lg p-6 relative">
      
      <button
        onClick={() => setSelectedPurohit(null)}
        className="absolute top-3 right-3 text-gray-500 hover:text-black"
      >
        ✕
      </button>

      <h2 className="text-lg font-bold mb-4">Purohit Details</h2>

      <div className="space-y-2 text-sm">
         <p><strong>Onboard by:</strong> {selectedPurohit.createdBy}</p>
        <p><strong>Name:</strong> {selectedPurohit.name}</p>
        <p><strong>Phone:</strong> {selectedPurohit.phone}</p>
        <p><strong>City:</strong> {selectedPurohit.city}</p>
        <p><strong>State:</strong> {selectedPurohit.state}</p>
        <p><strong>Specializations:</strong> {selectedPurohit.specializations}</p>
        <p><strong>Experience:</strong> {selectedPurohit.experience} years</p>
        <p>
          <strong>Calendly:</strong>{" "}
          <a
            href={selectedPurohit.calendlyLink}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline"
          >
            Open Booking Page
          </a>
        </p>
      </div>
    </div>
  </div>
)}


      {/* Pagination */}
      <div className="flex justify-center items-center gap-3 mt-8 flex-wrap">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="px-4 py-2 border rounded-lg disabled:opacity-40"
        >
          Prev
        </button>

        <span className="text-sm font-medium">
          Page {page} of {pages}
        </span>

        <button
          disabled={page === pages}
          onClick={() => setPage((p) => p + 1)}
          className="px-4 py-2 border rounded-lg disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ConsultancyQuery;
