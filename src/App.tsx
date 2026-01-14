import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CountryCards from './components/CountryCards';
import Features from './components/Features';
import MobileApp from './components/MobileApp';
import Footer from './components/Footer';
import ClassifiedsPage from './components/ClassifiedsPage';
import DetailPage from './components/DetailPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import PublishStepOne from './components/PublishStepOne';
import PublishStepTwo from './components/PublishStepTwo';
import PublishStepThree, { type PropertyDetails } from './components/PublishStepThree';
import { mockListings } from './data/mockListings';

type View = 'home' | 'classifieds' | 'detail' | 'login' | 'register' | 'publish-step-1' | 'publish-step-2' | 'publish-step-3' | 'publish-success';

function App() {
  const [selectedProvince, setSelectedProvince] = useState<string>('');
  const [selectedCanton, setSelectedCanton] = useState<string>('');
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedListingId, setSelectedListingId] = useState<string>('');

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<{ email: string; name: string } | null>(null);

  const [publishData, setPublishData] = useState<{
    propertyType: string;
    location: {
      province: string;
      canton: string;
      district: string;
      address: string;
    };
    details?: PropertyDetails;
  }>({
    propertyType: '',
    location: { province: '', canton: '', district: '', address: '' },
  });

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

  const handleLogin = (email: string) => {
    setIsAuthenticated(true);
    setCurrentUser({ email, name: email.split('@')[0] });
    setCurrentView('home');
  };

  const handleRegister = (email: string, name: string) => {
    setIsAuthenticated(true);
    setCurrentUser({ email, name });
    setCurrentView('home');
  };

  const handlePublishStart = () => {
    if (!isAuthenticated) {
      setCurrentView('login');
    } else {
      setPublishData({
        propertyType: '',
        location: { province: '', canton: '', district: '', address: '' },
      });
      setCurrentView('publish-step-1');
    }
  };

  const handlePublishStepOne = (propertyType: string) => {
    setPublishData((prev) => ({ ...prev, propertyType }));
    setCurrentView('publish-step-2');
  };

  const handlePublishStepTwo = (province: string, canton: string, district: string, address: string) => {
    setPublishData((prev) => ({
      ...prev,
      location: { province, canton, district, address },
    }));
    setCurrentView('publish-step-3');
  };

  const handlePublishSubmit = (details: PropertyDetails) => {
    setPublishData((prev) => ({ ...prev, details }));
    setCurrentView('publish-success');
    setTimeout(() => {
      setCurrentView('home');
    }, 3000);
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
      {!['login', 'register', 'publish-step-1', 'publish-step-2', 'publish-step-3', 'publish-success'].includes(currentView) && (
        <Header
          onLocationSelect={handleLocationSelect}
          onLogoClick={handleBackToHome}
          selectedProvince={selectedProvince}
          selectedCanton={selectedCanton}
          showSearch={currentView === 'classifieds' || currentView === 'detail'}
          isAuthenticated={isAuthenticated}
          onLoginClick={() => setCurrentView('login')}
          onPublishClick={handlePublishStart}
          userName={currentUser?.name}
        />
      )}

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

      {currentView === 'login' && (
        <LoginPage
          onLogin={handleLogin}
          onNavigateToRegister={() => setCurrentView('register')}
          onBack={handleBackToHome}
        />
      )}

      {currentView === 'register' && (
        <RegisterPage
          onRegister={handleRegister}
          onNavigateToLogin={() => setCurrentView('login')}
          onBack={handleBackToHome}
        />
      )}

      {currentView === 'publish-step-1' && (
        <PublishStepOne
          onNext={handlePublishStepOne}
          onBack={handleBackToHome}
        />
      )}

      {currentView === 'publish-step-2' && (
        <PublishStepTwo
          propertyType={publishData.propertyType}
          onNext={handlePublishStepTwo}
          onBack={() => setCurrentView('publish-step-1')}
        />
      )}

      {currentView === 'publish-step-3' && (
        <PublishStepThree
          propertyType={publishData.propertyType}
          location={publishData.location}
          onSubmit={handlePublishSubmit}
          onBack={() => setCurrentView('publish-step-2')}
        />
      )}

      {currentView === 'publish-success' && (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl shadow-xl p-12 max-w-md text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¡Publicación Exitosa!</h2>
            <p className="text-gray-600 mb-6">
              Tu propiedad ha sido publicada correctamente. En breve será revisada por nuestro equipo.
            </p>
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#202d59] mx-auto"></div>
            <p className="text-sm text-gray-500 mt-4">Redirigiendo...</p>
          </div>
        </div>
      )}

      {!['login', 'register', 'publish-step-1', 'publish-step-2', 'publish-step-3', 'publish-success'].includes(currentView) && (
        <Footer />
      )}
    </div>
  );
}

export default App;
