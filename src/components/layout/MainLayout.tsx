import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ThemeSwitcher from '../features/ThemeSwitcher';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background transition-colors duration-300">
      <Header />
      <main className="flex-grow page-transition">{children}</main>
      <Footer />
      <ThemeSwitcher />
    </div>
  );
};

export default MainLayout; 