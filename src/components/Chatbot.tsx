import React, { useState } from 'react';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Expanded Chat Window */}
      {isOpen && (
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-horizop-gold/30 w-80 h-96 flex flex-col overflow-hidden transition-all duration-300 ease-in-out">
          <div className="bg-horizop-navy p-4 flex justify-between items-center rounded-t-2xl">
            <h3 className="text-white font-semibold text-lg">Horizop Assistant</h3>
            <button onClick={toggleChatbot} className="text-white/80 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {/* Chat messages will go here */}
            {/* Example Bot Message */}
            <div className="flex justify-start">
              <div className="bg-gray-100 text-gray-800 p-3 rounded-xl rounded-bl-none max-w-[75%] shadow-sm">
                Hello! How can I assist you today?
              </div>
            </div>
            {/* Example User Message (for design purposes) */}
            <div className="flex justify-end">
              <div className="bg-horizop-gold/30 text-horizop-navy p-3 rounded-xl rounded-br-none max-w-[75%] shadow-sm">
                I'd like to know more about SmartPlug.
              </div>
            </div>
          </div>
          <div className="p-4 border-t border-horizop-gold/20 flex items-center bg-horizop-ivory/50">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-horizop-gold/40 bg-horizop-ivory"
            />
            <button className="ml-3 bg-horizop-gold text-horizop-navy p-3 rounded-full shadow hover:bg-horizop-gold/90 transition">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Collapsed Floating Button */}
      {!isOpen && (
        <button
          onClick={toggleChatbot}
          className="bg-horizop-navy text-white p-4 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-horizop-gold focus:ring-opacity-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Chatbot; 