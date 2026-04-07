/**
 * =====================================================
 * ARCHIVO: pages/Index.tsx
 * =====================================================
 * Esta es la PÁGINA PRINCIPAL del sitio web.
 * Aquí se organizan todas las secciones que el usuario ve
 * cuando visita la página de inicio.
 *
 * ¿Qué hace?
 * - Importa cada sección como un componente independiente.
 * - Las coloca en orden de arriba a abajo, como bloques apilados.
 * - "min-h-screen" asegura que la página ocupe al menos toda la pantalla.
 *
 * ORDEN DE LAS SECCIONES:
 * 1. Navbar         → Barra de navegación superior (menú)
 * 2. HeroSection    → Presentación principal con imagen grande
 * 3. AboutSection   → Sobre nosotros, misión, visión y enfoque
 * 4. TeamSection    → Perfiles del equipo (Carolina y Vanessa)
 * 5. ServicesSection → Los 6 servicios que ofrece Mente Activa
 * 6. TestimonialsSection → Opiniones de usuarios
 * 7. BookingSection → Formulario para agendar una sesión
 * 8. ContactSection → Datos de contacto y redes sociales
 * 9. Footer         → Pie de página con copyright
 * 10. WhatsAppButton → Botón flotante de WhatsApp (siempre visible)
 *
 * Para AGREGAR una nueva sección:
 * 1. Crea el componente en src/components/NuevaSección.tsx
 * 2. Impórtalo aquí arriba
 * 3. Colócalo en el orden deseado dentro del <div>
 * =====================================================
 */

import Navbar from "@/components/Navbar";                     // Barra de navegación superior
import HeroSection from "@/components/HeroSection";           // Sección principal/hero
import AboutSection from "@/components/AboutSection";         // Sobre nosotros
import TeamSection from "@/components/TeamSection";           // Equipo de trabajo
import ServicesSection from "@/components/ServicesSection";   // Servicios ofrecidos
import TestimonialsSection from "@/components/TestimonialsSection"; // Testimonios
import BookingSection from "@/components/BookingSection";     // Formulario de agendamiento
import ContactSection from "@/components/ContactSection";     // Información de contacto
import Footer from "@/components/Footer";                     // Pie de página
import WhatsAppButton from "@/components/WhatsAppButton";     // Botón flotante de WhatsApp

const Index = () => {
  return (
    /* Contenedor principal - ocupa como mínimo toda la altura de la pantalla */
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <ServicesSection />
      <TestimonialsSection />
      <BookingSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
