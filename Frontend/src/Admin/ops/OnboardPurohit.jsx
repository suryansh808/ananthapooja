// import { useEffect, useState } from "react";
// import {
//   getPurohits,
//   addPurohit,
//   updatePurohit,
// } from "../../api/purohitApi";

// import TableSkeleton from "../components/TableSkeleton";
// import { Edit, Delete } from "lucide-react";

// const OnboardPurohit = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [editingId, setEditingId] = useState(null);
//   const [purohits, setPurohits] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [page, setPage] = useState(1);
//   const [pages, setPages] = useState(1);
//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     city: "",
//     state: "",
//     pincode: "",
//     experience: "",
//     specializations: "",
//     languages: "",
//     calendlyLink: "",
//   });
//   const fetchPurohits = async () => {
//     setLoading(true);
//     const res = await getPurohits(page, 10);
//     setPurohits(res.data);
//     setPages(res.pagination.pages);
//     setLoading(false);
//   };
//   useEffect(() => {
//     fetchPurohits();
//   }, [page]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const payload = {
//       ...form,
//       specializations: form.specializations.split(",").map((s) => s.trim()),
//       languages: form.languages.split(",").map((l) => l.trim()),
//     };

//     editingId
//       ? await updatePurohit(editingId, payload)
//       : await addPurohit(payload);

//     setEditingId(null);
//     setForm({
//      name: "",
//     phone: "",
//     city: "",
//     state: "",
//     pincode: "",
//     experience: "",
//     specializations: "",
//     languages: "",
//     calendlyLink: "",
//     })
//     setShowForm(false);
//     fetchPurohits();
//   };
//   const handleEdit = (p) => {
//     setForm({
//       ...p,
//       specializations: p.specializations.join(", "),
//       languages: p.languages.join(", "),
//     });
//     setEditingId(p._id);
//     setShowForm(true);
//   };

//   return (
//     <div className=" px-2.5 py-2 container h-full mx-auto">
 
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-xl sm:text-2xl font-bold">Onboard Purohit</h1>
//         <button
//           title="open/close"
//           onClick={() => setShowForm(!showForm)}
//           className="bg-linear-to-r from-[#4D2268] to-[#2b0841] cursor-pointer text-white px-4 py-2 rounded-lg"
//         >
//           + Add New
//         </button>
//       </div>

//       {showForm && (
//         <div>
//           <form
//             onSubmit={handleSubmit}
//             className="bg-white shadow rounded-xl p-4 mb-8 grid gap-4 sm:grid-cols-2"
//           >
//             <input
//               placeholder="Full Name"
//               required
//               value={form.name}
//               onChange={(e) => setForm({ ...form, name: e.target.value })}
//               className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-purple-700"
//             />

//             <input
//               placeholder="Phone Number (Whatsapp)"
//               required
//               value={form.phone}
//               onChange={(e) => setForm({ ...form, phone: e.target.value })}
//               className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-purple-700"
//             />

//             <input
//               placeholder="City"
//               required
//               value={form.city}
//               onChange={(e) => setForm({ ...form, city: e.target.value })}
//               className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-purple-700"
//             />

//             <input
//               placeholder="State"
//               required
//               value={form.state}
//               onChange={(e) => setForm({ ...form, state: e.target.value })}
//               className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-purple-700"
//             />

//             <input
//               placeholder="Pincode"
//               required
//               value={form.pincode}
//               onChange={(e) => setForm({ ...form, pincode: e.target.value })}
//               className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-purple-700"
//             />

//             <input
//               placeholder="Experience (years)"
//               type="number"
//               required
//               value={form.experience}
//               onChange={(e) => setForm({ ...form, experience: e.target.value })}
//               className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-purple-700"
//             />
//             <input
//               placeholder="Calendly Booking Link"
//               value={form.calendlyLink}
//               onChange={(e) =>
//                 setForm({ ...form, calendlyLink: e.target.value })
//               }
//               className="w-full border col-span-full border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-purple-700"
//             />

//             <input
//               placeholder="Specializations (comma separated)"
//               value={form.specializations}
//               onChange={(e) =>
//                 setForm({ ...form, specializations: e.target.value })
//               }
//               className="w-full col-span-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-purple-700"
//             />

//             <input
//               placeholder="Languages (comma separated)"
//               value={form.languages}
//               onChange={(e) => setForm({ ...form, languages: e.target.value })}
//               className="w-full col-span-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-purple-700"
//             />

//             <button className="bg-green-600 cursor-pointer text-white py-2 rounded col-span-full">
//                    {editingId? "Update Purohit" : " Save Purohit "}
//             </button>
//           </form>
//         </div>
//       )}

//       <div className="overflow-x-auto bg-white shadow rounded-xl">
//         {loading ? (
//           <TableSkeleton />
//         ) : (
//           <table className="min-w-full text-sm text-left">
//             <thead className="bg-gray-100 text-xs uppercase">
//               <tr>
//                 <th className="p-3">Name</th>
//                 <th>Phone</th>
//                 <th>Location</th>
//                 <th>Exp</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {purohits.map((p) => (
//                 <tr key={p._id} className="border-t">
//                   <td className="p-3">{p.name}</td>
//                   <td>{p.phone}</td>
//                   <td>
//                     {p.city},{p.pincode}
//                   </td>
//                   <td>{p.experience} yrs</td>
//                   <td className="space-x-2">
//                     <button
//                       onClick={() => handleEdit(p)}
//                       className="text-blue-600 cursor-pointer"
//                       title="Edit"
//                     >
//                       <Edit />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//       <div className="flex justify-center gap-4 mt-6">
//         <button
//           disabled={page === 1}
//           onClick={() => setPage((p) => p - 1)}
//           className="px-3 py-1 border rounded"
//         >
//           {" "}
//           Prev{" "}
//         </button>
//         <span>
//           {" "}
//           Page {page} of {pages}{" "}
//         </span>
//         <button
//           disabled={page === pages}
//           onClick={() => setPage((p) => p + 1)}
//           className="px-3 py-1 border rounded"
//         >
//           {" "}
//           Next{" "}
//         </button>
//       </div>
//     </div>
//   );
// };
// export default OnboardPurohit;

import AddPurohit from '../pages/AddPurohit'

const OnboardPurohit = () => {
  return (
    <div>
       <AddPurohit/>
    </div>
  )
}

export default OnboardPurohit
