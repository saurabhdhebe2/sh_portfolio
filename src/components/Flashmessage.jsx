import React from 'react';

const FlashMessage = ({ message, type }) => {
  // Determine background color based on type
  let bgColor = '';
  switch (type) {
    case 'success':
      bgColor = 'bg-green-500';
      break;
    case 'error':
      bgColor = 'bg-red-500';
      break;
    default:
      bgColor = 'bg-blue-500';
  }

  return (
    <div
      className={`fixed top-16 right-4 text-white px-4 py-2 rounded-md shadow-md z-50 ${bgColor}`}
    >
      {message}
    </div>
  );
};

export default FlashMessage;
