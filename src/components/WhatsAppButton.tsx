/**
 * =====================================================
 * COMPONENTE: WhatsAppButton.tsx
 * =====================================================
 * BOTÓN FLOTANTE DE WHATSAPP que aparece siempre en la esquina
 * inferior derecha de la pantalla.
 *
 * ¿Qué hace?
 * - Muestra un botón verde con el icono de WhatsApp.
 * - Al hacer clic, abre WhatsApp (web o app) con un mensaje predefinido.
 * - El botón tiene animación de escala al pasar el cursor.
 * - En pantallas grandes muestra el texto "WhatsApp" junto al icono.
 *
 * PARA PERSONALIZAR:
 * - WHATSAPP_NUMBER: Cambia "56912345678" por el número real de Mente Activa.
 *   El formato es: código de país + número (sin +, sin espacios).
 *   Ejemplo Chile: 56912345678 (56 = Chile, 9 = prefijo, 12345678 = número).
 * - WHATSAPP_MESSAGE: Cambia el texto del mensaje predefinido que se envía.
 *
 * NOTA: Estas constantes también se usan en ContactSection.tsx
 * para el botón de WhatsApp en la sección de contacto.
 * =====================================================
 */

import { MessageCircle } from "lucide-react"; // Icono de burbuja de mensaje 💬

/**
 * NÚMERO DE WHATSAPP
 * Formato internacional sin "+" ni espacios.
 * Ejemplo: "56912345678" → +56 9 1234 5678 (Chile)
 * ¡IMPORTANTE! Cambia este valor por el número real del negocio.
 */
const WHATSAPP_NUMBER = "56912345678";

/**
 * MENSAJE PREDEFINIDO
 * Este texto aparece automáticamente en el chat cuando el usuario
 * hace clic en el botón. El usuario puede modificarlo antes de enviar.
 */
const WHATSAPP_MESSAGE = "Hola, me gustaría obtener más información sobre los servicios de Mente Activa.";

const WhatsAppButton = () => {
  /**
   * URL DE WHATSAPP
   * Formato: https://wa.me/{número}?text={mensaje codificado}
   * encodeURIComponent() convierte los espacios y caracteres especiales
   * a un formato seguro para URLs (ej: espacio → %20).
   */
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    /**
     * BOTÓN FLOTANTE
     * - fixed bottom-6 right-6: Fijo en la esquina inferior derecha.
     * - z-50: Se muestra por encima de todo el contenido.
     * - bg-[#25D366]: Color oficial de WhatsApp.
     * - hover:scale-105: Se agranda ligeramente al pasar el cursor.
     * - target="_blank": Abre en nueva pestaña/ventana.
     * - aria-label: Texto para lectores de pantalla (accesibilidad).
     */
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white px-5 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
    >
      {/* Icono de WhatsApp (burbuja de mensaje rellena de blanco) */}
      <MessageCircle size={22} className="fill-white" />

      {/* Texto "WhatsApp": solo visible en pantallas medianas o grandes */}
      <span className="text-sm font-semibold hidden sm:inline">WhatsApp</span>
    </a>
  );
};

/* Exportamos las constantes para reutilizarlas en ContactSection.tsx */
export { WHATSAPP_NUMBER, WHATSAPP_MESSAGE };
export default WhatsAppButton;
