"use client"

import { ProtectedRoute } from "@/components/providers/protected-route"
import { AppSidebar } from "@/components/layout/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, DollarSign, Clock } from "lucide-react"
import { ROUTES } from "@/constants/routes"

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href={ROUTES.DASHBOARD}>Sistema de Cobranza</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Página Principal</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </header>

          <div className="flex flex-1 flex-col gap-4 p-4">
            <div className="grid auto-rows-min gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Gestiones Pendientes</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">+2 desde ayer</p>
                </CardContent>
              </Card>

              <Card className="border shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Clientes Activos</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2,350</div>
                  <p className="text-xs text-muted-foreground">+180 este mes</p>
                </CardContent>
              </Card>

              <Card className="border shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Recuperación del Mes</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$45,231</div>
                  <p className="text-xs text-muted-foreground">+20.1% vs mes anterior</p>
                </CardContent>
              </Card>

              <Card className="border shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Tasa de Éxito</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">73%</div>
                  <p className="text-xs text-muted-foreground">+5% vs mes anterior</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4 border shadow-sm">
                <CardHeader>
                  <CardTitle>Resumen de Actividades</CardTitle>
                  <CardDescription>Vista general de las gestiones de cobranza</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">Gestiones Completadas Hoy</p>
                        <p className="text-sm text-muted-foreground">8 de 12 tareas completadas</p>
                      </div>
                      <Badge variant="secondary">67%</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">Pagos Procesados</p>
                        <p className="text-sm text-muted-foreground">15 pagos registrados hoy</p>
                      </div>
                      <Badge variant="default">Activo</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">Citas Programadas</p>
                        <p className="text-sm text-muted-foreground">3 citas para mañana</p>
                      </div>
                      <Badge variant="outline">Programado</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="col-span-3 border shadow-sm">
                <CardHeader>
                  <CardTitle>Accesos Rápidos</CardTitle>
                  <CardDescription>Funciones más utilizadas</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <button className="w-full text-left p-2 rounded-md hover:bg-accent transition-colors">
                      <div className="font-medium">Nuevo Cliente</div>
                      <div className="text-sm text-muted-foreground">Registrar nuevo cliente</div>
                    </button>
                    <button className="w-full text-left p-2 rounded-md hover:bg-accent transition-colors">
                      <div className="font-medium">Registrar Pago</div>
                      <div className="text-sm text-muted-foreground">Procesar pago recibido</div>
                    </button>
                    <button className="w-full text-left p-2 rounded-md hover:bg-accent transition-colors">
                      <div className="font-medium">Generar Reporte</div>
                      <div className="text-sm text-muted-foreground">Crear reporte de gestión</div>
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </ProtectedRoute>
  )
}
