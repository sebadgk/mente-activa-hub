/**
 * =====================================================
 * COMPONENTE: BookingSection.tsx
 * =====================================================
 * Sección "AGENDAR HORA" con formulario de reserva de sesiones.
 *
 * ¿Qué hace?
 * - Muestra un formulario con 4 campos: nombre, email, fecha y hora.
 * - Al enviarlo, muestra una notificación de éxito (toast).
 * - Limpia el formulario después de enviar.
 *
 * IMPORTANTE: Actualmente el formulario NO envía datos a ningún servidor.
 * Solo muestra una notificación visual. Para hacerlo funcional necesitarías
 * conectar una base de datos (Lovable Cloud) o un servicio de email.
 *
 * PARA PERSONALIZAR:
 * - Cambiar textos: Edita directamente los textos del formulario.
 * - Agregar campos: Agrega más propiedades al estado "form" y más inputs.
 * - Conectar a backend: Modifica la función handleSubmit para enviar datos.
 * =====================================================
 */

import { useState } from "react";                            // Hook para manejar el estado del formulario
import { Calendar, Clock, User, Mail } from "lucide-react";  // Iconos para los campos
import { toast } from "sonner";                               // Librería de notificaciones emergentes

const BookingSection = () => {
  /**
   * ESTADO DEL FORMULARIO
   * useState guarda los valores que el usuario escribe en cada campo.
   * Cada vez que escribe algo, setForm actualiza el valor correspondiente.
   */
  const [form, setForm] = useState({ name: "", email: "", date: "", time: "" });

  /**
   * FUNCIÓN DE ENVÍO DEL FORMULARIO
   * Se ejecuta cuando el usuario hace clic en "Agendar".
   * - e.preventDefault(): Evita que la página se recargue (comportamiento por defecto de los formularios).
   * - toast.success(): Muestra una notificación verde de éxito.
   * - setForm({...}): Limpia todos los campos del formulario.
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("¡Solicitud enviada! Te contactaremos pronto para confirmar tu hora.");
    setForm({ name: "", email: "", date: "", time: "" });
  };

  return (
    <section id="booking" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">

          {/* TÍTULO DE LA SECCIÓN */}
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Agendar hora
            </h2>
            <p className="text-lg text-muted-foreground">
              Reserva una sesión individual directamente
            </p>
          </div>

          {/**
           * FORMULARIO DE RESERVA
           * onSubmit={handleSubmit}: Al enviar, ejecuta la función de arriba.
           * Cada input tiene:
           * - Un icono a la izquierda (posicionado con absolute).
           * - pl-12: Padding izquierdo extra para no tapar el icono.
           * - value + onChange: Conectados al estado "form" para controlar el valor.
           * - required: El navegador no permite enviar si el campo está vacío.
           */}
          <form onSubmit={handleSubmit} className="bg-background rounded-2xl p-8 shadow-card space-y-5">

            {/* CAMPO: Nombre */}
            <div className="relative">
              <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Tu nombre"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
              />
            </div>

            {/* CAMPO: Email */}
            <div className="relative">
              <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="email"
                placeholder="Tu email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
              />
            </div>

            {/* CAMPOS: Fecha y Hora (en 2 columnas) */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <Calendar size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="date"
                  required
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                />
              </div>
              <div className="relative">
                <Clock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="time"
                  required
                  value={form.time}
                  onChange={(e) => setForm({ ...form, time: e.target.value })}
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                />
              </div>
            </div>

            {/* BOTÓN DE ENVÍO: Fondo degradado verde */}
            <button
              type="submit"
              className="w-full bg-gradient-hero text-primary-foreground py-4 rounded-xl font-semibold text-base hover:opacity-90 transition-opacity shadow-soft"
            >
              Agendar
            </button>
          </form>

          {/* NOTA INFERIOR: Enlace al correo para talleres grupales */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            Para talleres grupales, escríbenos al correo{" "}
            <a href="mailto:menteactiva@gmail.com" className="text-primary hover:underline">
              menteactiva@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
