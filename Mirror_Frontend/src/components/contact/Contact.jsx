import { useState, useEffect } from 'react';
import { FaPhoneAlt, FaWhatsapp,} from 'react-icons/fa';
import { SlEarphonesAlt } from "react-icons/sl";

export default function Contact() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [text, setText] = useState('');

  return (
    <>
      <div className="fixed bottom-5 right-5 flex flex-col gap-4 z-50">
        <a href="tel:+1234567890" target="_blank" rel="noopener noreferrer"
          className="bg-primary hover:bg-primary text-white p-4 rounded-full shadow-lg transition transform hover:scale-110"
        >
          <FaPhoneAlt size={24} />
        </a>

        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition transform hover:scale-110"
        >
          <FaWhatsapp size={24} />
        </a>

        <button
          onClick={() => setIsChatOpen(prev => !prev)}
          className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition transform hover:scale-110"
        >
          <SlEarphonesAlt size={24} />
        </button>
      </div>

      {/* Mini Chatbox */}
      {isChatOpen && (
        <div className="fixed bottom-24 right-5 w-80 bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden z-50 animate-fadeIn">
          <div className="bg-blue-500 text-white text-lg font-bold p-4 flex justify-between items-center">
            Live Chat
            <button onClick={() => setIsChatOpen(false)} className="text-white text-xl">×</button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto space-y-2">
            {messages.map((msg, idx) => (
              <div key={idx} className="bg-gray-100 p-2 rounded">
                <b>{msg.sender}:</b> {msg.text}
                <div className="text-xs text-gray-400">
                  {new Date(msg.time).toLocaleTimeString()}
                </div>
              </div>
            ))}
            {typingMessage && (
              <div className="text-sm text-gray-400 italic">{typingMessage}</div>
            )}
          </div>
          <div className="p-4 border-t flex items-center gap-2">
            <input 
              value={text}
              onChange={(e) => {
                setText(e.target.value);
                socket.emit('typing', 'User');
              }}
              type="text" 
              placeholder="Type your message..." 
              className="flex-1 border rounded-full px-4 py-2 text-sm focus:outline-none"
            />
            <button onClick={sendMessage} className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
