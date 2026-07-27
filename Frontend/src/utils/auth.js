export function saveAuth(user, token) {
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
}

export function clearAuth() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
}

export function getCurrentUser() {
  try {
    const stored = localStorage.getItem("user");
    if (!stored) return null;
    const parsed = JSON.parse(stored);
    if (typeof parsed === "string") {
      return { email: parsed };
    }
    return parsed;
  } catch {
    const email = localStorage.getItem("user");
    return email ? { email } : null;
  }
}

export function isLoggedIn() {
  return Boolean(localStorage.getItem("token"));
}

export function getToken() {
  return localStorage.getItem("token");
}
