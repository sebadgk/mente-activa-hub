import { Mail, Phone, MapPin, Instagram, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "./WhatsAppButton";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contacto
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="bg-card rounded-2xl p-6 shadow-card text-center">
            <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mx-auto mb-4">
              <Mail className="text-primary" size={22} />
            </div>
            <p className="text-sm font-medium text-foreground">Email</p>
            <a href="mailto:menteactiva@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              menteactiva@gmail.com
            </a>
          </div>

          <div className="bg-card rounded-2xl p-6 shadow-card text-center">
            <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mx-auto mb-4">
              <Phone className="text-primary" size={22} />
            </div>
            <p className="text-sm font-medium text-foreground">Teléfono</p>
            <p className="text-sm text-muted-foreground">+56 9 XXXX XXXX</p>
          </div>

          <div className="bg-card rounded-2xl p-6 shadow-card text-center">
            <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-primary" size={22} />
            </div>
            <p className="text-sm font-medium text-foreground">Direcciones</p>
            <p className="text-xs text-muted-foreground">Adamson 3250, Barrio Estación</p>
            <p className="text-xs text-muted-foreground">Avelino Contardo 1399, Parque Brasil</p>
          </div>

          <div className="bg-card rounded-2xl p-6 shadow-card text-center">
            <div className="w-12 h-12 bg-accent/15 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Instagram className="text-accent" size={22} />
            </div>
            <p className="text-sm font-medium text-foreground">Redes sociales</p>
            <p className="text-sm text-muted-foreground">Instagram · TikTok</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
