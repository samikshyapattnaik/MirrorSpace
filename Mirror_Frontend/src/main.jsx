import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Hero from './components/hero/Hero'
import About from './components/About Us/About'
import Service from './components/service/Service'
import OurBlogs from './components/blogs/OurBlogs';
import Footer from './components/footer/Footer'
import SignUpModel from './components/loginPopUp/SignUpModel'
import KitchenInterior from './components/kitchen/KitchenInterior';
import HallInterior from './components/Hall/HallInterior';
import BathroomInteriors from './components/Bathroom/BathroomInteriors';
import CommercialInterior from './components/commercial/CommercialInterior';
import HomeInterior from './components/home/HomeInterior';
import ResidentialInterior from './components/residencial/ResidentialInterior';
import LoggingInPage from './components/loginPopUp/LoggingInpage';
import { GoogleOAuthProvider } from '@react-oauth/google';
import NotFoundPage from './components/NotFound/NotFoundPage';
import { ThemeProvider } from './components/Context/ThemeProvider';
createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider >
  <BrowserRouter >
  <ThemeProvider>
   <Routes>
    <Route path="/hero" element={<Hero />} />
    <Route path="/about" element={<About/>} />
    <Route path="/service" element={<Service/>} />
    <Route path="/blogs" element={<OurBlogs />} />
    <Route path="/contact" element={<Footer />} />
    <Route path="/signup" element={<SignUpModel />} />
    <Route path="/logging-in" element={<LoggingInPage />} />
    <Route path="/" element={<App />} />
    <Route path="/kitchen" element={<KitchenInterior />} />
    <Route path="/hall" element={<HallInterior />} />
    <Route path="/bathroom"element={<BathroomInteriors/>} />
    <Route path="*" element={<NotFoundPage/>} />
    <Route path="/commercial" element={<CommercialInterior />} />
    <Route path='/home' element={<HomeInterior/>} />
    <Route path='/residential' element={<ResidentialInterior/>} />
   </Routes>
   </ThemeProvider>
  </BrowserRouter>
  </GoogleOAuthProvider>
   
);