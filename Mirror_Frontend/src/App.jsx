import React, { useState, useEffect } from 'react';
import Navbar from './components/header/Navbar';
import Hero from './components/hero/Hero';
import OverviewCounter from './components/overviewCounter/OverviewCounter';
import Brand from './components/Brands/Brand';
import BannerDetails from './components/Banner/BannerDetails';
import About from './components/About Us/About';
import SimpleBanner from './components/videoBanner/SimpleBanner';
import Service from './components/service/Service';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import LoginModal from './components/loginPopUp/LoginModel';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

useEffect(() => {
  fetch('http://localhost:8080/auth/check-login', {
    credentials: 'include', 
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.loggedIn) {
        setIsAuthenticated(true);
      } else {
        // Show login popup after delay if not logged in
        const timer = setTimeout(() => {
          setShowLogin(true);
        }, 3000);
        return () => clearTimeout(timer);
      }
    })
    .catch((err) => {
      console.error("Session check failed:", err);
    });
}, []);

  

  const handleLogin = () => {
    setIsAuthenticated(true);
    setShowLogin(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <>
      <Navbar
        onLoginClick={() => setShowLogin(true)}
        isAuthenticated={isAuthenticated}
        onLogout={handleLogout}
      />

      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          onLogin={handleLogin}
        />
      )}
{/* 
      <div className="p-6">
        {isAuthenticated ? (
          <h1 className="text-green-600 font-bold">Welcome to your protected content!</h1>
        ) : (
          <h1 className="text-gray-500">You must log in to view content.</h1>
        )}
      </div> */}

      <Hero />
      <OverviewCounter />
      <BannerDetails />
      <Service />
      <Brand />
      <SimpleBanner />
      <About />
      <Footer />
      <Contact />
    </>
  );
}

export default App;
