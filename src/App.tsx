import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CountryCards from './components/CountryCards';
import Features from './components/Features';
import MobileApp from './components/MobileApp';
import Footer from './components/Footer';
import ClassifiedsPage from './components/ClassifiedsPage';

function App() {
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [currentView, setCurrentView] = useState<'home' | 'classifieds'>('home');

  const handleCountrySelect = (country: string) => {
    setSelectedCountry(country);
    setCurrentView('classifieds');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedCountry('');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        onCountrySelect={handleCountrySelect}
        onLogoClick={handleBackToHome}
        selectedCountry={selectedCountry}
      />

      {currentView === 'home' ? (
        <>
          <Hero />
          <CountryCards onCountrySelect={handleCountrySelect} />
          <Features />
          <MobileApp />
        </>
      ) : (
        <ClassifiedsPage country={selectedCountry} />
      )}

      <Footer />
    </div>
  );
}

export default App;
