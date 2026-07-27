import { apiRequest } from "./client";

export async function getAllListings() {
  const data = await apiRequest("/api/listings");
  return data.listings || [];
}

export async function getListingById(id) {
  return apiRequest(`/api/listings/${id}`);
}

export async function createListing(formData) {
  return apiRequest("/api/listings", {
    method: "POST",
    body: formData,
  });
}

export async function updateListing(id, payload) {
  return apiRequest(`/api/listings/${id}`, {
    method: "PUT",
    body: JSON.stringify(payload),
  });
}

export async function deleteListing(id) {
  return apiRequest(`/api/listings/${id}`, {
    method: "DELETE",
  });
}
