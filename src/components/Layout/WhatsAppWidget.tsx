import React, { useState } from 'react';
import { MessageSquare, X, MessageSquareText } from 'lucide-react';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Replace with actual image URL
  const profileImg = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&h=150&auto=format&fit=crop";

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* The Popup Window */}
      {isOpen && (
        <div className="mb-4 w-[360px] bg-white rounded-[24px] shadow-2xl border border-gray-100 overflow-hidden relative">
          
          {/* Header Section */}
          <div className="bg-[#f8f9fa] p-6 pt-8 flex items-center gap-4 relative">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={20} />
            </button>
            
            <div className="relative">
              <img 
                src={profileImg} 
                alt="Rohina" 
                className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-sm"
              />
            </div>
            
            <div>
              <h3 className="text-[22px] font-bold text-black leading-tight">Rohina</h3>
              <p className="text-[14px] text-gray-500 mt-1">Typically replies within an hour</p>
            </div>
          </div>

          {/* Message Section */}
          <div className="p-6 bg-white">
            <div className="flex items-start gap-3 mb-8">
              <img 
                src={profileImg} 
                alt="Rohina small" 
                className="w-10 h-10 rounded-full object-cover mt-1"
              />
              <div className="bg-[#f0f2f5] p-4 rounded-[18px] rounded-tl-none">
                <p className="text-[15px] leading-relaxed text-[#1a1a1a]">
                  To make an enquiry or booking, feel free to use the chat. I will reply as soon as I can.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <a 
              href="https://wa.me/447438714828" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#4285f4] hover:bg-[#357ae8] text-white py-4 px-6 rounded-[16px] font-bold text-[17px] transition-all"
            >
              Start Chat with WhatsApp:
              <MessageSquareText size={22} fill="white" className="ml-1" />
            </a>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#1E5089] hover:scale-110 transition-transform p-4 rounded-full shadow-xl text-white flex items-center justify-center"
      >
        { <MessageSquare size={28} fill="white" />}
      </button>
    </div>
  );
};

export default WhatsAppWidget;