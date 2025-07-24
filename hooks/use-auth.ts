"use client"

import { useState, useEffect } from "react"

interface User {
  name: string
  email: string
}

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    // Check authentication status
    const authStatus = localStorage.getItem("isAuthenticated")
    const userData = localStorage.getItem("user")

    setIsAuthenticated(authStatus === "true")
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  const login = (userData: User) => {
    localStorage.setItem("isAuthenticated", "true")
    localStorage.setItem("user", JSON.stringify(userData))
    setIsAuthenticated(true)
    setUser(userData)
  }

  const logout = () => {
    localStorage.removeItem("isAuthenticated")
    localStorage.removeItem("user")
    setIsAuthenticated(false)
    setUser(null)
  }

  return {
    isAuthenticated,
    user,
    login,
    logout,
  }
}
