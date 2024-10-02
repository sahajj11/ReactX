import React, { Component, useState } from "react";
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import "./Input.css";
import componentMapping from "./ComponentMapping";

const Input = ({ onUserInput }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [jsxCode, setJsxCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [LiveComponent,setLiveComponent]=useState(null)
  
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages((prevMessages) => [...prevMessages, input]);

      const componentKey = input.toLowerCase();
      if (componentMapping[componentKey]) {
        const { jsxCode, cssCode,liveComponent} = componentMapping[componentKey];
        setJsxCode(jsxCode);
        setCssCode(cssCode);
        setLiveComponent(()=>liveComponent)
      } else {
        alert('Component not found');
        setJsxCode('');
        setCssCode('');
        setLiveComponent(null);
      }

      onUserInput(); // Hide the Hero section but keep input visible
      setInput('');  // Clear input field
    }
  };

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code).then(() => {
      alert('Code copied to clipboard!');
    }, (err) => {
      alert('Failed to copy code: ', err);
    });
  };

  return (
    <div className="d-flex flex-column align-items-center">
      {/* Scrollable response container */}
      <div className="response-container">
        {messages.map((msg, index) => (
          <div key={index} className="message-wrapper">
            <div className="bubble user-bubble">
              {msg}
            </div>
          </div>
        ))}

        {/* Render Live Component if available */}
        {LiveComponent && (
          <div className="live-demo mt-4">
            <h5>Live Demo</h5>
            <LiveComponent />  {/* Dynamically render the live component */}
          </div>
        )}

        {/* JSX Code Output */}
        {jsxCode && (
          <div className="code-output mt-4">
            <h5>Card.jsx</h5>
            <SyntaxHighlighter language="javascript" style={atomOneDark}>
              {jsxCode}
            </SyntaxHighlighter>
            <button onClick={() => copyToClipboard(jsxCode)} className="btn btn-dark mt-2">
              Copy JSX Code
            </button>
          </div>
        )}

        {/* CSS Code Output */}
        {cssCode && (
          <div className="code-output mt-4">
            <h5>Card.css</h5>
            <SyntaxHighlighter language="css" style={atomOneDark}>
              {cssCode}
            </SyntaxHighlighter>
            <button onClick={() => copyToClipboard(cssCode)} className="btn btn-dark mt-2">
              Copy CSS Code
            </button>
          </div>
        )}
      </div>

      {/* Input form always at the bottom */}
      <div className="input-container">
        <form onSubmit={handleSubmit} className="input-group flex-nowrap w-100">
          <input
            type="text"
            className="form-control"
            placeholder="Enter component"
            aria-label="Component Input"
            value={input}
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-dark mx-2">
            Generate
          </button>
        </form>
      </div>
    </div>
  );
};

export default Input;
