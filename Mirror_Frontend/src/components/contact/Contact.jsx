import { useState } from 'react';
import { FaPhoneAlt, FaWhatsapp,} from 'react-icons/fa';

export default function Contact() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-5 right-5 flex flex-col gap-4 z-50">
        <a href="tel:+9777774782" target="_blank" rel="noopener noreferrer"
          className="bg-primary hover:bg-primary text-white p-4 rounded-full shadow-lg transition transform hover:scale-110"
        >
          <FaPhoneAlt size={24} />
        </a>

        <a href="https://wa.me/9777774782" target="_blank" rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition transform hover:scale-110"
        >
          <FaWhatsapp size={24} />
        </a>
      </div>
    </>
  );
}
