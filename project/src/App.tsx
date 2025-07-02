import React, { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Hero from './components/Home/Hero';
import AnnouncementCarousel from './components/Home/AnnouncementCarousel';
import ClubsSection from './components/Clubs/ClubsSection';
import LoginModal from './components/Auth/LoginModal';
import AdminDashboard from './components/Dashboard/AdminDashboard';

const AppContent: React.FC = () => {
  const { user } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState('home');

  // Handle hash navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#login') {
        setIsLoginModalOpen(true);
      } else if (hash === '#dashboard' && user && user.role !== 'student') {
        setCurrentView('dashboard');
      } else {
        setCurrentView('home');
        setIsLoginModalOpen(false);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Handle initial load

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [user]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  if (currentView === 'dashboard' && user && user.role !== 'student') {
    return <AdminDashboard />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header 
        onMenuToggle={toggleMobileMenu} 
        isMobileMenuOpen={isMobileMenuOpen}
      />
      
      <main>
        <Hero />
        <AnnouncementCarousel />
        <ClubsSection />
      </main>

      <Footer />

      <LoginModal 
        isOpen={isLoginModalOpen}
        onClose={() => {
          setIsLoginModalOpen(false);
          window.location.hash = '';
        }}
      />
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;