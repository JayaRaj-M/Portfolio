import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center text-gray-400 border-t border-white/10">
      <p>© {new Date().getFullYear()} Jayaraj M. All rights reserved.</p>
    </footer>
  );
};

export default Footer;