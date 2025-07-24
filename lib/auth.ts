import type { User, LoginCredentials } from "@/types/auth"

export const AUTH_STORAGE_KEY = "isAuthenticated"
export const USER_STORAGE_KEY = "user"

export function validateCredentials(credentials: LoginCredentials): boolean {
  return credentials.email === "admin" && credentials.password === "admin"
}

export function setAuthStorage(user: User): void {
  localStorage.setItem(AUTH_STORAGE_KEY, "true")
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user))
}

export function clearAuthStorage(): void {
  localStorage.removeItem(AUTH_STORAGE_KEY)
  localStorage.removeItem(USER_STORAGE_KEY)
}

export function getAuthStorage(): { isAuthenticated: boolean; user: User | null } {
  const isAuthenticated = localStorage.getItem(AUTH_STORAGE_KEY) === "true"
  const userStr = localStorage.getItem(USER_STORAGE_KEY)
  const user = userStr ? JSON.parse(userStr) : null

  return { isAuthenticated, user }
}
