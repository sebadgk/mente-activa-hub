/**
 * =====================================================
 * ARCHIVO: main.tsx
 * =====================================================
 * Este es el PUNTO DE ENTRADA de toda la aplicación.
 * Es lo primero que se ejecuta cuando alguien abre la página web.
 *
 * ¿Qué hace?
 * 1. Busca en el archivo index.html un elemento con id="root"
 *    (es el contenedor vacío donde se "inyecta" toda la aplicación).
 * 2. Crea la raíz de React y renderiza (dibuja) el componente principal <App />.
 * 3. Importa los estilos globales desde index.css (colores, tipografías, etc.).
 *
 * Analogía: Si la web fuera una casa, este archivo es la puerta de entrada
 * que conecta la estructura (HTML) con todo el interior (React).
 * =====================================================
 */

import { createRoot } from "react-dom/client"; // Herramienta de React para montar la app en el navegador
import App from "./App.tsx";                    // Componente principal que contiene toda la aplicación
import "./index.css";                            // Estilos globales (colores, fuentes, animaciones)

// Busca el elemento <div id="root"> en index.html y renderiza la app dentro de él
createRoot(document.getElementById("root")!).render(<App />);
