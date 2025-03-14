import React, { useState, useRef, useEffect } from 'react';
import './App.css';

const App = () => {
  const [message, setMessage] = useState('');
  const [responses, setResponses] = useState<string[]>([]);
  const responsesDivRef = useRef<HTMLDivElement>(null);

  // Effect to scroll to bottom whenever responses change
  useEffect(() => {
    if (responsesDivRef.current) {
      responsesDivRef.current.scrollTop = responsesDivRef.current.scrollHeight;
    }
  }, [responses]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newResponse = `You said: ${message}`;
    setResponses([...responses, newResponse]);
    setMessage('');
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="title">Welcome to QuirkBot ⚡</h1>
        <p className="sub-title">Your quirky AI chatbot is ready for some fun!</p>
      </header>
      <div className="chat-box">
        <div className="responses" ref={responsesDivRef}>
          {responses.map((response, index) => (
            <p key={index} className="response">{response}</p>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="chat-form">
          <input
            type="text"
            placeholder="Ask me something!"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="chat-input"
          />
          <button type="submit" className="send-button">
            ⚡ Send
          </button>
        </form>
      </div>
      <footer className="footer">
        <p className="footer-text">Powered by QuirkBot ⚡</p>
      </footer>
    </div>
  );
};

export default App;
