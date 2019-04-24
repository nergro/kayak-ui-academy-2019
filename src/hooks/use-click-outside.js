import { useState, useEffect } from 'react';

const userClickOutside = ref => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOutside = event => {
    if (ref && !ref.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return [isOpen, setIsOpen];
};

export default userClickOutside;
