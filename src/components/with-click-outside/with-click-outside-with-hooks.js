import React, { useState, useEffect } from 'react';

const componentRef = React.createRef();

const WithClickOutside = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOutside = event => {
    if (componentRef && !componentRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return children({ isOpen, setIsOpen, componentRef });
};

export default WithClickOutside;
