import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "56912345678"; // Cambia este número al de Mente Activa
const WHATSAPP_MESSAGE = "Hola, me gustaría obtener más información sobre los servicios de Mente Activa.";

const WhatsAppButton = () => {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white px-5 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
    >
      <MessageCircle size={22} className="fill-white" />
      <span className="text-sm font-semibold hidden sm:inline">WhatsApp</span>
    </a>
  );
};

export { WHATSAPP_NUMBER, WHATSAPP_MESSAGE };
export default WhatsAppButton;
