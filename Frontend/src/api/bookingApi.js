import axiosInstance from "./axiosInstance";

export const confirmBooking = (data) =>  axiosInstance.post("/payment/confirm", data);

export const getBookingDetails = (page = 1, limit = 15) => axiosInstance.get(`/payment/bookingdetails?page=${page}&limit=${limit}`);