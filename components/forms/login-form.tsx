"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useToast } from "@/hooks/use-toast"
import { useLoading } from "@/hooks/use-loading"
import { validateCredentials, setAuthStorage } from "@/lib/auth"
import { delay } from "@/lib/utils"
import { ROUTES } from "@/constants/routes"
import { CreditCard, Mail, Lock, Eye, EyeOff, AlertCircle, Loader2, CheckCircle } from "lucide-react"

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const { isLoading, startLoading, stopLoading } = useLoading()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    startLoading()

    // Simulate loading delay
    await delay(2000)

    // Validate credentials
    if (validateCredentials({ email, password })) {
      // Show success toast
      toast({
        variant: "success",
        title: "¡Inicio de sesión exitoso!",
        description: "Bienvenido al Sistema de Cobranza",
      })

      // Set authentication
      setAuthStorage({ name: "Administrador", email: "admin@sistema.com" })

      // Wait a bit for the toast to show, then redirect
      setTimeout(() => {
        window.location.href = ROUTES.DASHBOARD
      }, 1500)
    } else {
      setError("Credenciales incorrectas. Use: admin / admin")
      stopLoading()

      // Show error toast
      toast({
        variant: "destructive",
        title: "Error de autenticación",
        description: "Las credenciales ingresadas no son válidas",
      })
    }
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Geometric Pattern */}
      <div className="hidden lg:flex lg:w-1/2 bg-background relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Geometric Pattern */}
          <div className="relative w-96 h-96">
            {/* Multiple triangular/diamond shapes */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute border-2 border-muted-foreground/20 transform rotate-45"
                style={{
                  width: `${80 + i * 40}px`,
                  height: `${80 + i * 40}px`,
                  top: `${50 - (40 + i * 20)}px`,
                  left: `${50 - (40 + i * 20)}px`,
                  borderRadius: "8px",
                }}
              />
            ))}

            {/* Additional decorative elements */}
            {[...Array(6)].map((_, i) => (
              <div
                key={`inner-${i}`}
                className="absolute border border-muted-foreground/10 transform -rotate-45"
                style={{
                  width: `${60 + i * 30}px`,
                  height: `${60 + i * 30}px`,
                  top: `${70 - (30 + i * 15)}px`,
                  left: `${70 - (30 + i * 15)}px`,
                  borderRadius: "4px",
                }}
              />
            ))}
          </div>
        </div>

        {/* Logo */}
        <div className="absolute top-8 left-8 flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
            <CreditCard className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold">Sistema de Cobranza</span>
        </div>

        {/* Bottom indicators */}
        <div className="absolute bottom-8 left-8 flex gap-2">
          <div className="w-8 h-1 bg-primary rounded-full" />
          <div className="w-8 h-1 bg-muted rounded-full" />
          <div className="w-8 h-1 bg-muted rounded-full" />
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md space-y-8">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Acceso al Sistema de Cobranza</h1>
            <p className="text-muted-foreground">Ingresa tus credenciales para continuar</p>
          </div>

          {/* Demo Credentials Alert */}
          <Alert className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950">
            <AlertCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              <strong>Credenciales de prueba:</strong>
              <br />
              Usuario: <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">admin</code>
              <br />
              Contraseña: <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">admin</code>
            </AlertDescription>
          </Alert>

          {/* Error Alert */}
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {/* Login Form */}
          <Card className="border shadow-sm">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="sr-only">
                    Usuario
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="text"
                      placeholder="Usuario"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 h-12 border-0 border-b border-border rounded-none bg-transparent focus:border-primary transition-colors"
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="sr-only">
                    Contraseña
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Contraseña"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 pr-10 h-12 border-0 border-b border-border rounded-none bg-transparent focus:border-primary transition-colors"
                      required
                      disabled={isLoading}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors"
                      disabled={isLoading}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <Button type="submit" className="w-full h-12 text-base font-medium" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Iniciando sesión...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Iniciar Sesión
                    </>
                  )}
                </Button>

                <div className="text-center">
                  <button
                    type="button"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    disabled={isLoading}
                  >
                    ¿Olvidaste tu contraseña?
                  </button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Social Login */}
          <div className="space-y-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">O continúa con</span>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <Button
                variant="outline"
                size="icon"
                className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 border-blue-600 text-white"
                disabled={isLoading}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 border-blue-500 text-white"
                disabled={isLoading}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="w-12 h-12 rounded-full bg-white hover:bg-gray-50 border-gray-300 text-gray-700"
                disabled={isLoading}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
              </Button>
            </div>
          </div>

          {/* Theme Toggle */}
          <div className="flex justify-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  )
}
