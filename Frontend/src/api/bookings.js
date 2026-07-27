import { apiRequest } from "./client";

export async function createBooking({ listingId, startDate, endDate }) {
  return apiRequest("/api/bookings", {
    method: "POST",
    body: JSON.stringify({ listingId, startDate, endDate }),
  });
}

export async function getMyBookings() {
  const data = await apiRequest("/api/bookings/my-bookings");
  return data.bookings || [];
}

export async function getVendorBookings() {
  const data = await apiRequest("/api/bookings/vendor-bookings");
  return data.bookings || [];
}

export async function approveBooking(id) {
  return apiRequest(`/api/bookings/${id}/approve`, { method: "PUT" });
}

export async function rejectBooking(id) {
  return apiRequest(`/api/bookings/${id}/reject`, { method: "PUT" });
}

export async function cancelBooking(id) {
  return apiRequest(`/api/bookings/${id}`, { method: "DELETE" });
}

export async function getAllBookings() {
  const data = await apiRequest("/api/bookings/all");
  return data.bookings || [];
}
