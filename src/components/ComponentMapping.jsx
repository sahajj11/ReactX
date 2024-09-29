const componentMapping = {
    card: {
      jsxCode: `
      // Card.jsx
      import React from 'react';
      import './Card.css';
  
      const Card = () => {
        return (
          <div className="card">
            <h5 className="card-title">Card Title</h5>
            <p className="card-text">This is a simple card component.</p>
          </div>
        );
      };
  
      export default Card;
      `,
      cssCode: `
      /* Card.css */
      .card {
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 5px;
        background-color: #f9f9f9;
      }
  
      .card-title {
        font-size: 1.5em;
        margin-bottom: 10px;
      }
  
      .card-text {
        font-size: 1em;
      }
      `
    }
  };

  export default componentMapping;