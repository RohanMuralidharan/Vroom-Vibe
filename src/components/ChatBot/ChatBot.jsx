import React, { useEffect } from 'react';

const ChatBot = () => {
  useEffect(() => {
    // Configure chatbot
    window.chtlConfig = { chatbotId: "8423667119" };

    // Create and append script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://chatling.ai/js/embed.js';
    script.dataset.id = '8423667119';
    script.id = 'chatling-embed-script';

    document.body.appendChild(script);

    // Cleanup function
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array means this runs once on mount

  return null; // This component doesn't render anything visible
};

export default ChatBot; 