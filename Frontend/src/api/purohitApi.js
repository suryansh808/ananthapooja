import axiosInstance from "./axiosInstance";

export const addPurohit = async (data) => {
  try {
    const res = await axiosInstance.post("/purohits", data);
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to add purohit" };
  }
};

export const getPurohits = (page, limit, role, username) => axiosInstance.get(`/purohits?page=${page}&limit=${limit}&role=${role}&username=${username}`);

export const getPurohitsAll = (page, limit,) => axiosInstance.get(`/purohits/all?page=${page}&limit=${limit}`);

export const updatePurohit = (id, data) => axiosInstance.put(`/purohits/${id}`, data);

export const deletePurohit = (id) => axiosInstance.delete(`/purohits/${id}`);

export const togglePurohitStatus = (id) => axiosInstance.patch(`/purohits/${id}/status`);