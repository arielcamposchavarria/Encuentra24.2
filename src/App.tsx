import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CountryCards from './components/CountryCards';
import Features from './components/Features';
import MobileApp from './components/MobileApp';
import Footer from './components/Footer';
import ClassifiedsPage from './components/ClassifiedsPage';
import DetailPage from './components/DetailPage';
import { mockListings } from './data/mockListings';

function App() {
  const [selectedProvince, setSelectedProvince] = useState<string>('');
  const [selectedCanton, setSelectedCanton] = useState<string>('');
  const [currentView, setCurrentView] = useState<'home' | 'classifieds' | 'detail'>('home');
  const [selectedListingId, setSelectedListingId] = useState<string>('');

  const handleLocationSelect = (province: string, canton?: string) => {
    setSelectedProvince(province);
    setSelectedCanton(canton || '');
    if (province) {
      setCurrentView('classifieds');
    }
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedProvince('');
    setSelectedCanton('');
    setSelectedListingId('');
  };

  const handleListingClick = (id: string) => {
    setSelectedListingId(id);
    setCurrentView('detail');
  };

  const handleBackToClassifieds = () => {
    setCurrentView('classifieds');
    setSelectedListingId('');
  };

  const getLocationLabel = () => {
    if (selectedCanton && selectedProvince) {
      return `${selectedCanton}, ${selectedProvince}`;
    }
    if (selectedProvince) {
      return selectedProvince;
    }
    return '';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        onLocationSelect={handleLocationSelect}
        onLogoClick={handleBackToHome}
        selectedProvince={selectedProvince}
        selectedCanton={selectedCanton}
        showSearch={currentView === 'classifieds' || currentView === 'detail'}
      />

      {currentView === 'home' && (
        <>
          <Hero />
          <CountryCards onCountrySelect={handleLocationSelect} />
          <Features />
          <MobileApp />
        </>
      )}

      {currentView === 'classifieds' && (
        <ClassifiedsPage
          location={getLocationLabel()}
          onListingClick={handleListingClick}
        />
      )}

      {currentView === 'detail' && (
        <DetailPage
          listingId={selectedListingId}
          onBack={handleBackToClassifieds}
          onListingClick={handleListingClick}
          allListings={mockListings}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;
