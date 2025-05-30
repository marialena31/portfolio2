import React from 'react';
import Navigation from './navigation';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
