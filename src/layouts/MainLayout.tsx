import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-texte-principal">
      <Navbar />
      <main className="flex-grow pt-16"> {/* Add padding top to avoid content being hidden by fixed navbar */}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
