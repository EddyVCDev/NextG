"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { LoginForm } from "@/components/forms/login-form"
import { getAuthStorage } from "@/lib/auth"

interface ProtectedRouteProps {
  children: React.ReactNode
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)

  useEffect(() => {
    // Check authentication status
    const { isAuthenticated: authStatus } = getAuthStorage()
    setIsAuthenticated(authStatus)
  }, [])

  // Show loading or nothing while checking auth
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  // Show login if not authenticated
  if (!isAuthenticated) {
    return <LoginForm />
  }

  // Show protected content if authenticated
  return <>{children}</>
}
