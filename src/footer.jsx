import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube, FaWhatsapp, FaSpa, FaAppleAlt, FaBrain, FaDumbbell, FaBed, FaUserTie } from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Dark mode functionality
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedDarkMode);
  }, []);

  useEffect(() => {
    const handleDarkModeChange = (event) => {
      setIsDarkMode(event.detail);
    };

    window.addEventListener('darkModeChanged', handleDarkModeChange);
    return () => window.removeEventListener('darkModeChanged', handleDarkModeChange);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000); // Hide message after 3s
  };

  return (
    <footer className={`${isDarkMode ? 'bg-black border-gray-700 text-gray-300' : 'bg-white border-gray-200 text-gray-700'} border-t pt-10 pb-4 px-4 md:px-0`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 pb-8">
                 {/* Brand & Tagline */}
         <div className="flex flex-col items-start space-y-3">
           <img src="/src/assets/logo.png" alt="Logo" className="h-28 w-28 object-contain" />
           <span className="font-bold text-lg text-[#FF4D00]">BuildRight Construction</span>
           <span className="text-sm text-white">Building your vision, safely and on time.</span>
         </div>
        {/* Quick Navigation */}
        <div>
          <h3 className="font-semibold mb-3 text-[#FF4D00]">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-600">About Us</Link></li>
            <li><Link to="/projects" className="hover:text-blue-600">Projects</Link></li>
            <li><Link to="/contactus" className="hover:text-blue-600">Contact Us</Link></li>
            <li><Link to="/services" className="hover:text-blue-600">Our Services</Link></li>
          </ul>
        </div>
                 {/* Explore Services */}
         <div>
           <h3 className="font-semibold mb-3 text-[#FF4D00]">Our Services</h3>
           <ul className="space-y-2">
             <li><Link to="/residential" className="hover:text-blue-600">Residential Construction</Link></li>
             <li><Link to="/commercial" className="hover:text-blue-600">Commercial Projects</Link></li>
             <li><Link to="/renovation" className="hover:text-blue-600">Renovation & Remodeling</Link></li>
             <li><Link to="/project-management" className="hover:text-blue-600">Project Management</Link></li>
             <li><Link to="/safety" className="hover:text-blue-600">Site Safety & Compliance</Link></li>
             <li><Link to="/consulting" className="hover:text-blue-600">Consulting</Link></li>
           </ul>
         </div>
                 {/* Contact Info */}
         <div>
           <h3 className="font-semibold mb-3 text-[#FF4D00]">Contact Us</h3>
           <ul className="space-y-2 text-sm">
             <li><span className="font-medium">Address:</span> 456 Builder Road, Metro City</li>
             <li><span className="font-medium">Phone:</span> (555) 987-6543</li>
             <li><span className="font-medium">Email:</span> <a href="mailto:stackly.com" className="hover:text-blue-600">stackly.com</a></li>
             <li><span className="font-medium">Hours:</span> Mon–Sat, 8 AM – 7 PM</li>
           </ul>
           {/* Social Media Icons */}
           <div className="mt-4">
             <h4 className="font-medium mb-2 text-sm text-[#FF4D00]">Follow Us</h4>
             <div className="flex space-x-3">
               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#FF4D00] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#e6440a] hover:scale-110 shadow-lg"><FaInstagram size={18} /></a>
               <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#FF4D00] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#e6440a] hover:scale-110 shadow-lg"><FaFacebookF size={18} /></a>
               <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#FF4D00] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#e6440a] hover:scale-110 shadow-lg"><FaLinkedinIn size={18} /></a>
               <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#FF4D00] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#e6440a] hover:scale-110 shadow-lg"><FaYoutube size={18} /></a>
               <a href="https://wa.me/15559876543" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#FF4D00] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#e6440a] hover:scale-110 shadow-lg"><FaWhatsapp size={18} /></a>
             </div>
           </div>
         </div>
        {/* Newsletter Signup */}
        <div>
          <h3 className="font-semibold mb-3 text-[#FF4D00]">Newsletter</h3>
          <p className="text-sm mb-2">Get construction news, safety tips, and project updates in your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-2 w-full" onSubmribe={handleSubscribe}>
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#FF4D00] flex-1 min-w-0"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-[#FF4D00] text-white px-4 py-2 rounded hover:bg-[#e6440a] whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          {subscribed && (
            <div className="mt-2 text-[#FF4D00] text-sm font-semibold">Thanks for subscribing to BuildRight updates!</div>
          )}
        </div>
      </div>
             {/* Legal Links */}
       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center border-t border-gray-100 pt-4 gap-4">
         <div className="flex flex-wrap gap-4 text-sm">
           <a href="#" className="hover:text-blue-600">Privacy Policy</a>
           <a href="#" className="hover:text-blue-600">Terms & Conditions</a>
           <a href="#" className="hover:text-blue-600">Disclaimer</a>
         </div>
       </div>
      {/* Copyright */}
      <div className="max-w-7xl mx-auto text-center text-xs text-gray-400 pt-4">
        © 2025 BuildRight Construction. All rights reserved.
      </div>
    </footer>
  );
} 