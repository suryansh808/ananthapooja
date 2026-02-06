import axiosInstance from "./axiosInstance";

export const submitCallRequest = async (formData) => {
  try {
    const response = await axiosInstance.post("/call-request", formData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Something went wrong" };
  }
};

// admin call requested fetch api
export const getCallRequests = async (page = 1, limit = 15) => {
  try {
    const res = await axiosInstance.get(`/call-request?page=${page}&limit=${limit}`);
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to fetch data" };
  }
};

// admin call requested status update
export const updateCallRequestStatus = async (id, status) => {
  try {
    const res = await axiosInstance.patch(`/call-request/${id}/status`, { status });
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Status update failed" };
  }
};
