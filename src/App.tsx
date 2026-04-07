/**
 * =====================================================
 * ARCHIVO: App.tsx
 * =====================================================
 * Este es el COMPONENTE PRINCIPAL de la aplicación.
 * Actúa como el "esqueleto" que organiza toda la estructura.
 *
 * ¿Qué hace?
 * 1. Configura el sistema de RUTAS (páginas): qué se muestra según la URL.
 *    - "/" → Página principal (Index)
 *    - Cualquier otra URL → Página "No encontrada" (NotFound / 404)
 *
 * 2. Envuelve todo con PROVEEDORES (providers) que dan funcionalidades globales:
 *    - QueryClientProvider: Manejo de datos y peticiones al servidor.
 *    - TooltipProvider: Muestra globitos de información al pasar el mouse.
 *    - Toaster / Sonner: Muestra notificaciones emergentes (ej: "¡Solicitud enviada!").
 *
 * Analogía: Si la web fuera un edificio, App.tsx es el plano general que dice
 * dónde va cada habitación y qué servicios tiene el edificio (luz, agua, etc.).
 * =====================================================
 */

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // Manejo de datos del servidor
import { BrowserRouter, Route, Routes } from "react-router-dom";          // Sistema de navegación/rutas
import { Toaster as Sonner } from "@/components/ui/sonner";               // Notificaciones estilo moderno
import { Toaster } from "@/components/ui/toaster";                         // Notificaciones estilo clásico
import { TooltipProvider } from "@/components/ui/tooltip";                 // Globitos informativos
import Index from "./pages/Index.tsx";                                     // Página principal
import NotFound from "./pages/NotFound.tsx";                               // Página de error 404

// Creamos el cliente de consultas (gestiona peticiones de datos)
const queryClient = new QueryClient();

const App = () => (
  /* QueryClientProvider: Permite que cualquier componente hijo pueda hacer peticiones de datos */
  <QueryClientProvider client={queryClient}>
    {/* TooltipProvider: Habilita los tooltips (globitos) en toda la app */}
    <TooltipProvider>
      {/* Toaster y Sonner: Sistemas de notificaciones emergentes */}
      <Toaster />
      <Sonner />

      {/* BrowserRouter: Habilita la navegación por URL en la aplicación */}
      <BrowserRouter>
        {/* Routes: Define qué componente se muestra según la URL del navegador */}
        <Routes>
          {/* Ruta principal "/" → Muestra la página de inicio con todas las secciones */}
          <Route path="/" element={<Index />} />

          {/* Ruta comodín "*" → Cualquier URL que no exista muestra la página 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
