"use client"

import type * as React from "react"
import {
  CreditCard,
  ListTodo,
  Wallet,
  Building2,
  ClipboardList,
  CheckSquare,
  Calendar,
  HelpCircle,
  Settings,
  Bell,
  Phone,
  Mail,
  User,
  LogOut,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { clearAuthStorage } from "@/lib/auth"
import { ROUTES } from "@/constants/routes"

// Datos de los módulos principales
const mainModules = [
  {
    title: "Gestión de Cobro",
    url: ROUTES.GESTION_COBRO,
    icon: CreditCard,
    isActive: false,
    description: "Gestionar procesos de cobranza",
  },
  {
    title: "Mi Cola de Trabajo",
    url: "#",
    icon: ListTodo,
    badge: "12",
    description: "Tareas pendientes por realizar",
  },
  {
    title: "Carteras de Recuperación",
    url: "#",
    icon: Wallet,
    description: "Administrar carteras de clientes",
  },
  {
    title: "Centro de Pagos",
    url: "#",
    icon: Building2,
    description: "Procesar y consultar pagos",
  },
]

const managementModules = [
  {
    title: "Mis Gestiones y Resultados",
    url: "#",
    icon: ClipboardList,
    badge: "3",
    description: "Historial de gestiones realizadas",
  },
  {
    title: "Mis Tareas y Solicitudes",
    url: "#",
    icon: CheckSquare,
    badge: "7",
    description: "Tareas asignadas y solicitudes",
  },
  {
    title: "Agenda de Gestión",
    url: "#",
    icon: Calendar,
    description: "Calendario de actividades",
  },
]

const supportModules = [
  {
    title: "Información de Referencia",
    url: "#",
    icon: HelpCircle,
    description: "Documentación y ayuda",
  },
]

const notifications = [
  { icon: Bell, count: 4, label: "Alertas" },
  { icon: Phone, count: 4, label: "Llamadas" },
  { icon: Mail, count: 3, label: "Mensajes" },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const handleLogout = () => {
    // Clear authentication
    clearAuthStorage()

    // Redirect to login page
    window.location.href = ROUTES.HOME
  }

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href={ROUTES.DASHBOARD}>
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-sidebar-primary-foreground">
                  <CreditCard className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Sistema de Cobranza</span>
                  <span className="truncate text-xs">Página Principal</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Módulos Principales</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainModules.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={item.isActive} tooltip={item.description}>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                  {item.badge && (
                    <SidebarMenuBadge className="bg-destructive text-destructive-foreground">
                      {item.badge}
                    </SidebarMenuBadge>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Gestión y Seguimiento</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {managementModules.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.description}>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                  {item.badge && (
                    <SidebarMenuBadge className="bg-primary text-primary-foreground">{item.badge}</SidebarMenuBadge>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Soporte</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {supportModules.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.description}>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Notificaciones</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {notifications.map((notification, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton asChild tooltip={notification.label}>
                    <a href="#">
                      <notification.icon />
                      <span>{notification.label}</span>
                    </a>
                  </SidebarMenuButton>
                  <SidebarMenuBadge className="bg-destructive text-destructive-foreground">
                    {notification.count}
                  </SidebarMenuBadge>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton size="lg">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                    <User className="size-4" />
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">Administrador</span>
                    <span className="truncate text-xs">admin@sistema.com</span>
                  </div>
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                side="bottom"
                align="end"
                sideOffset={4}
              >
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Perfil</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Configuración</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout} className="text-destructive">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Cerrar Sesión</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>

        <SidebarSeparator />

        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex items-center justify-between px-2 py-1">
              <span className="text-xs text-muted-foreground group-data-[collapsible=icon]:hidden">Tema</span>
              <ThemeToggle />
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
