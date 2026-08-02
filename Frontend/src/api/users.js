import { apiRequest } from "./client";

export async function getAllUsers() {
  const data = await apiRequest("/api/users/all");
  return data.users || [];
}

export async function getProfile() {
  return apiRequest("/api/users/profile");
}
export async function deleteUser(id) {
  return apiRequest(`/api/users/${id}`, {
    method: "DELETE",
  });
}