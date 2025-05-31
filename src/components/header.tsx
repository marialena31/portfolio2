import React from 'react';
import Navigation from './navigation';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white">
      <div className="max-w-7xl mx-auto px-4">
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
