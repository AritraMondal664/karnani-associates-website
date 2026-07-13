import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 group">

      {/* Tooltip */}
      <div
        className="
          absolute right-20 top-1/2
          -translate-y-1/2
          bg-white
          text-gray-800
          px-4 py-2
          rounded-xl
          shadow-xl
          opacity-0
          group-hover:opacity-100
          transition-all duration-300
          whitespace-nowrap
          font-medium
          border border-gray-200
        "
      >
        💬 Chat with us on WhatsApp
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919804742176"
        target="_blank"
        rel="noreferrer"
        className="
          flex items-center justify-center
          w-16 h-16
          rounded-full
          bg-green-500
          text-white
          shadow-[0_10px_30px_rgba(34,197,94,0.45)]
          hover:scale-110
          hover:bg-green-600
          transition-all duration-300
        "
      >
        <FaWhatsapp size={34} />
      </a>

    </div>
  );
}