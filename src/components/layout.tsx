import React from 'react';
// Imports non utilisés, supprimés

import Navigation from './navigation';
import Footer from './footer';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  isHomePage?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  className = '',
  fullWidth = false,
  isHomePage = false,
}) => {
  return (
    <div
      className={`min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 ${className} ${isHomePage ? 'homePage' : 'otherPages'}`}
    >
      <Navigation />
      <main className="flex-1 w-full py-8 px-4">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
