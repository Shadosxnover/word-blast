import React from 'react';

function Button({ children, onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;

