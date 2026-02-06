import axiosInstance from "./axiosInstance";

export const createOrder = (amount) =>  axiosInstance.post("/payment/create-order", { amount });
