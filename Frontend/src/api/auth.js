import { apiRequest } from "./client";
import { saveAuth } from "../utils/auth";

export async function signup({ name, email, password, role }) {
  const data = await apiRequest("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ name, email, password, role }),
  });

  saveAuth(data.user, data.token);
  return data;
}

export async function login({ email, password }) {
  const data = await apiRequest("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  saveAuth(data.user, data.token);
  return data;
}
