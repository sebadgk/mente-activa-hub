import { useState } from "react";
import { Calendar, Clock, User, Mail } from "lucide-react";
import { toast } from "sonner";

const BookingSection = () => {
  const [form, setForm] = useState({ name: "", email: "", date: "", time: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("¡Solicitud enviada! Te contactaremos pronto para confirmar tu hora.");
    setForm({ name: "", email: "", date: "", time: "" });
  };

  return (
    <section id="booking" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Agendar hora
            </h2>
            <p className="text-lg text-muted-foreground">
              Reserva una sesión individual directamente
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-background rounded-2xl p-8 shadow-card space-y-5">
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

            <button
              type="submit"
              className="w-full bg-gradient-hero text-primary-foreground py-4 rounded-xl font-semibold text-base hover:opacity-90 transition-opacity shadow-soft"
            >
              Agendar
            </button>
          </form>

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
