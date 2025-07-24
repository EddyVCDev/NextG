export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  DASHBOARD: "/dashboard",
  GESTION_COBRO: "/gestion-cobro",
  FORGOT_PASSWORD: "/forgot-password",
} as const

export const PUBLIC_ROUTES = [ROUTES.HOME, ROUTES.LOGIN, ROUTES.REGISTER, ROUTES.FORGOT_PASSWORD]

export const PROTECTED_ROUTES = [ROUTES.DASHBOARD, ROUTES.GESTION_COBRO]
