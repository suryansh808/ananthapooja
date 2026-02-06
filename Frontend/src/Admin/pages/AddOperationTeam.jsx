import { useEffect, useState } from "react";
import {
  getOperationMembers,
  addOperationMember,
  updateOperationMember,
  deleteOperationMember,
} from "../../api/addoperationApi";

import TableSkeleton from "../components/TableSkeleton";
import { Edit, Delete } from "lucide-react";

const AddOperationTeam = () => {
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    role: "operation",
  });

  const fetchMembers = async () => {
    setLoading(true);
    const res = await getOperationMembers(page, 10);
    const result = res.data;

    setMembers(Array.isArray(result.data) ? result.data : []);
    setPages(result.pagination?.pages || 1);
    setLoading(false);
  };

  useEffect(() => {
    fetchMembers();
  }, [page]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    editingId
      ? await updateOperationMember(editingId, form)
      : await addOperationMember(form);

    setEditingId(null);
    setShowForm(false);
    fetchMembers();
  };

  const handleEdit = (m) => {
    setForm({ name: m.name, phone: m.phone, email: m.email , role:m.role });
    setEditingId(m._id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this member?")) {
      await deleteOperationMember(id);
      fetchMembers();
    }
  };

  return (
    <div className=" px-2.5 py-2 container h-full mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl sm:text-2xl font-bold">Add Opt Team</h1>
        <button
          title="open/close"
          onClick={() => setShowForm(!showForm)}
          className="bg-linear-to-r from-[#4D2268] to-[#2b0841] cursor-pointer text-white px-4 py-2 rounded-lg"
        >
          + Add New
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <div>
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow rounded-xl p-4 mb-8 grid gap-4 sm:grid-cols-2"
          >
            <input
              type="text"
              placeholder="Full Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-purple-700"
            />

            <input
              type="number"
              placeholder="Phone Number (Whatsapp)"
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-purple-700"
            />

            <input
              type="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-purple-700"
            />

            <select value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-purple-700">
              <option value="operation">Operation Team</option>
              <option value="admin">Admin</option>
            </select>

            <button className="bg-green-600 cursor-pointer text-white py-2 rounded col-span-full">
              Save Opt Details
            </button>
          </form>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow rounded-xl">
        {loading ? (
          <TableSkeleton />
        ) : (
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-100 text-xs uppercase">
              <tr>
                <th className="p-3">Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {members.map((m) => (
                <tr key={m._id} className="border-t">
                  <td className="p-3">{m.name}</td>
                  <td>{m.phone}</td>
                  <td>{m.email}</td>
                  <td>{m.role}</td>
                  <td className="space-x-2">
                    <button
                      onClick={() => handleEdit(m)}
                      className="text-blue-600"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(m._id)}
                      className="text-red-600"
                    >
                      <Delete size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div className="flex justify-center gap-4 mt-6">
        <button
          disabled={page === 1}
          onClick={() => setPage((m) => m - 1)}
          className="px-3 py-1 border rounded"
        >
          {" "}
          Prev{" "}
        </button>
        <span>
          {" "}
          Page {page} of {pages}{" "}
        </span>
        <button
          disabled={page === pages}
          onClick={() => setPage((m) => m + 1)}
          className="px-3 py-1 border rounded"
        >
          {" "}
          Next{" "}
        </button>
      </div>
    </div>
  );
};
export default AddOperationTeam;
