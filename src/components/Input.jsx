import React, { useState } from "react";
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import "./Input.css";
import componentMapping from "./ComponentMapping";


const Input = ({ onUserInput }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [jsxCode, setJsxCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages((prevMessages) => [...prevMessages, input]);

      const componentKey = input.toLowerCase();
      if (componentMapping[componentKey]) {
        const { jsxCode, cssCode } = componentMapping[componentKey];
        setJsxCode(jsxCode);
        setCssCode(cssCode);
      } else {
        alert('Component not found');
        setJsxCode('');
        setCssCode('');
      }

      onUserInput(); // Hide the Hero section
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
      <div className="message-history mt-3 w-50 mb-3">
        {messages.map((msg, index) => (
          <div key={index} className="message-wrapper">
            <div className="bubble user-bubble">
              {msg}
            </div>
          </div>
        ))}
      </div>

      {jsxCode && (
        <div className="code-output mt-4">
          <h5>Card.jsx</h5>
          <SyntaxHighlighter language="javascript" style={atomOneDark}>
            {jsxCode}
          </SyntaxHighlighter>
          <button onClick={() => copyToClipboard(jsxCode)} className="btn btn-light mt-2">
            Copy JSX Code
          </button>
        </div>
      )}

      {cssCode && (
        <div className="code-output mt-4">
          <h5>Card.css</h5>
          
          <SyntaxHighlighter language="css" style={atomOneDark}>
            {cssCode}
          </SyntaxHighlighter>

          <button onClick={() => copyToClipboard(jsxCode)} className="btn btn-light mt-2">
            Copy CSS Code
          </button>
          
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="input-group flex-nowrap w-50">
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
  );
};

export default Input;
