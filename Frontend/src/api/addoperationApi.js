import axiosInstance from "./axiosInstance";

export const addOperationMember = (data) =>
  axiosInstance.post("/operation-team", data);

export const getOperationMembers = (page = 1, limit = 10) =>
  axiosInstance.get(`/operation-team?page=${page}&limit=${limit}`);

export const updateOperationMember = (id, data) =>
  axiosInstance.put(`/operation-team/${id}`, data);

export const deleteOperationMember = (id) =>
  axiosInstance.delete(`/operation-team/${id}`);
