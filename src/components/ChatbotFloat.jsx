import React from 'react';
import chatIcon from '../assets/chat.png';

const ChatbotFloat = () => {
  return (
    <button
      onClick={() => alert('Chatbot coming soon!')}
      style={{
        position: 'fixed',
        bottom: '94px', // 24px (whatsapp) + 60px (button height) + 10px (gap)
        right: '24px',
        zIndex: 1001,
        background: '#fff',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
      }}
      aria-label="Open Chatbot"
    >
      <img src={chatIcon} alt="Chatbot" style={{ width: 32, height: 32 }} />
    </button>
  );
};

export default ChatbotFloat; 