/**
 * =====================================================
 * COMPONENTE: ContactSection.tsx
 * =====================================================
 * Sección "CONTACTO" con toda la información para comunicarse.
 *
 * Muestra 4 tarjetas + 1 botón de WhatsApp:
 * 1. Email: Enlace clickeable que abre el cliente de correo.
 * 2. Teléfono: Número de contacto.
 * 3. Direcciones: Las dos sedes de Mente Activa.
 * 4. Redes sociales: Instagram y TikTok.
 * 5. Botón WhatsApp: Abre un chat directo con mensaje predefinido.
 *
 * PARA PERSONALIZAR:
 * - Cambia el email, teléfono y direcciones directamente en el JSX.
 * - Agrega enlaces reales a Instagram y TikTok.
 * - El número de WhatsApp se configura en WhatsAppButton.tsx.
 * =====================================================
 */

import { Mail, Phone, MapPin, Instagram, MessageCircle } from "lucide-react"; // Iconos de contacto
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "./WhatsAppButton";          // Datos de WhatsApp compartidos

const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">

        {/* TÍTULO DE LA SECCIÓN */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contacto
          </h2>
        </div>

        {/**
         * GRID DE TARJETAS DE CONTACTO
         * - 1 columna en móvil, 2 en tablet, 4 en escritorio.
         * - La última tarjeta (WhatsApp) ocupa todo el ancho.
         */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">

          {/* TARJETA: Email */}
          <div className="bg-card rounded-2xl p-6 shadow-card text-center">
            <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mx-auto mb-4">
              <Mail className="text-primary" size={22} />
            </div>
            <p className="text-sm font-medium text-foreground">Email</p>
            <a href="mailto:menteactiva@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              menteactiva@gmail.com
            </a>
          </div>

          {/* TARJETA: Teléfono */}
          <div className="bg-card rounded-2xl p-6 shadow-card text-center">
            <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mx-auto mb-4">
              <Phone className="text-primary" size={22} />
            </div>
            <p className="text-sm font-medium text-foreground">Teléfono</p>
            <p className="text-sm text-muted-foreground">+56 9 XXXX XXXX</p>
          </div>

          {/* TARJETA: Direcciones (las 2 sedes) */}
          <div className="bg-card rounded-2xl p-6 shadow-card text-center">
            <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-primary" size={22} />
            </div>
            <p className="text-sm font-medium text-foreground">Direcciones</p>
            <p className="text-xs text-muted-foreground">Adamson 3250, Barrio Estación</p>
            <p className="text-xs text-muted-foreground">Avelino Contardo 1399, Parque Brasil</p>
          </div>

          {/* TARJETA: Redes Sociales */}
          <div className="bg-card rounded-2xl p-6 shadow-card text-center">
            <div className="w-12 h-12 bg-accent-light rounded-xl flex items-center justify-center mx-auto mb-4">
              <Instagram className="text-accent" size={22} />
            </div>
            <p className="text-sm font-medium text-foreground">Redes sociales</p>
            <p className="text-sm text-muted-foreground">Instagram · TikTok</p>
          </div>

          {/**
           * BOTÓN DE WHATSAPP
           * Ocupa todo el ancho del grid (col-span-4).
           * Al hacer clic, abre WhatsApp con un mensaje predefinido.
           * La URL usa el formato wa.me/{número}?text={mensaje}.
           */}
          <div className="bg-card rounded-2xl p-6 shadow-card text-center md:col-span-2 lg:col-span-4">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
              target="_blank"           // Abre en nueva pestaña
              rel="noopener noreferrer" // Seguridad: evita acceso al contexto de la página original
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              <MessageCircle size={20} />
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
