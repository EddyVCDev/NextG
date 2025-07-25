"use client"

import { useState } from "react"

export function useLoading(initialState = false) {
  const [isLoading, setIsLoading] = useState(initialState)

  const startLoading = () => setIsLoading(true)
  const stopLoading = () => setIsLoading(false)
  const toggleLoading = () => setIsLoading(!isLoading)

  return {
    isLoading,
    startLoading,
    stopLoading,
    toggleLoading,
    setIsLoading,
  }
}
