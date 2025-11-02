import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "2348123456789"; // Replace with actual WhatsApp number
  const message = "Hello! I'd like to inquire about your services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:scale-110 transition-smooth group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 group-hover:animate-pulse" />
    </a>
  );
};

export default WhatsAppButton;
