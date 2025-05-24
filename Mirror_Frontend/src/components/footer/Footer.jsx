import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Location & Map */}
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-2xl font-bold mb-2">Brick<span className='text-red-700'>n</span>bar</h2>
          <p className="text-sm mb-1">LIG 891,Kalinga Vihar LIG ,Kalinganagar ,Bhubaneswar,Odisha 752054</p>
          <p className="text-sm mb-1">Email:Bricknbar@gmail.com</p>
          <p className="text-sm mb-4">Phone: (123) 456-7890</p>
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.120696764426!2d85.75609487469424!3d20.253828513944175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a9a35a5fc57d%3A0xd0a350deded855de!2sNirmalya%20metropolis%20private%20limited!5e0!3m2!1sen!2sin!4v1744350503103!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-xl"
          ></iframe>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-red-700">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/home" className="hover:underline">Home</a></li>
            <li><a href="/service" className="hover:underline">Services</a></li>
            <li><a href="/" className="hover:underline">Portfolio</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
          <h3 className="text-lg font-semibold mb-3">Message</h3>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Your email address"
              className="p-2 rounded-md text-gray-900 dark:text-gray-100 dark:bg-gray-800"
            />
            <textarea
              placeholder="Your message"
              className="p-2 rounded-md text-gray-900 dark:text-gray-100 dark:bg-gray-800"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 px-4 rounded-md"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Newsletter + Social Icons */}
        <div>
        <h3 className="text-lg font-semibold mb-3 text-red-700">Customer Service</h3>
          <ul className="space-y-2 text-sm mb-6">
            <li><a href="#" className="hover:underline">Return & Refunds</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
            <li><a href="#" className="hover:underline">Help & Support</a></li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-2">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="https://www.facebook.com/Bricknbar/" className="hover:text-blue-500" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://www.instagram.com/Bricknbar/" className="hover:text-pink-500" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://www.x.com/Bricknbar/" className="hover:text-blue-400" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-600" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="mt-10 text-center text-sm text-gray-400 dark:text-gray-600">
        &copy; {new Date().getFullYear()} Mirror Space. All rights reserved.
      </div>
    </footer>
  );
};


export default footer