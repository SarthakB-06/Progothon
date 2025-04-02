import React from 'react';

// Define the Card component
const Card = ({ children }) => {
  return (
    <div className="border rounded-lg shadow-sm overflow-hidden bg-white">
      {children}
    </div>
  );
};

// Define the CardHeader component
const CardHeader = ({ children }) => {
  return <div className="p-4 border-b">{children}</div>;
};

// Define the CardContent component
const CardContent = ({ children }) => {
  return <div className="p-4">{children}</div>;
};

// Define the CardDescription component
const CardDescription = ({ children }) => {
  return <p className="text-sm text-gray-500">{children}</p>;
};

// Define the CardFooter component
const CardFooter = ({ children }) => {
  return <div className="p-4 border-t">{children}</div>;
};

// Define the CardTitle component
const CardTitle = ({ children }) => {
  return <h3 className="text-lg font-semibold">{children}</h3>;
};

// Export the components
export { Card, CardHeader, CardContent, CardDescription, CardFooter, CardTitle };
