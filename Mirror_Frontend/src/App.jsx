import React, { useState , useEffect} from 'react'
import Navbar from './components/header/Navbar'
import Hero from './components/hero/Hero'
import OverviewCounter from './components/overviewCounter/OverviewCounter'
import BannerDetails from './components/Banner/BannerDetails'
import About from './components/About Us/About'
import SimpleBanner from './components/videoBanner/SimpleBanner'
import Service from './components/service/Service'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'
import LoginModal from './components/loginPopUp/LoginModel'


function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

   // Automatically show login modal after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogin(true);
    }, 3000); // 3000 ms = 3 seconds

    return () => clearTimeout(timer); // cleanup if component unmounts
  }, []);
  return (
    <>
    <Navbar onLoginClick={()=>setShowLogin(true)}/>
     {showLogin && (
      <LoginModal
        onClose={() => setShowLogin(false)}
        onLogin={() => {
          setIsAuthenticated(true);
          setShowLogin(false);
        }}
      />
     )}
     <div className="p-6">
        {isAuthenticated ? (
          <h1>Welcome to your protected content!</h1>
        ) : (
          <h1 className="text-gray-500">You must log in to view content.</h1>
        )}
      </div>
    <Hero />
    <OverviewCounter />
    <BannerDetails />
    <Service />
    <SimpleBanner />
    <About/>
    <Footer/>
    <Contact />
    </>
  )
}

export default App
