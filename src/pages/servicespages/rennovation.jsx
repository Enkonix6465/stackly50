import React, { useState, useEffect } from 'react';
import Header from '../../Header.jsx';
import AOS from 'aos';
import '../../aos-custom.css';
import impactVideo from '../../assets/rehero.mp4';
import formSectionImg from '../../assets/renovation.jpg';
import missionImg from '../../assets/reno.jpg';
import mentalServe from '../../assets/reno.jpg'; // fallback for a construction image

const RenovationRemodeling = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedDarkMode);
  }, []);

  // Listen for dark mode changes from Header
  useEffect(() => {
    const handleDarkModeChange = (event) => {
      setIsDarkMode(event.detail);
    };

    window.addEventListener('darkModeChanged', handleDarkModeChange);
    return () => {
      window.removeEventListener('darkModeChanged', handleDarkModeChange);
    };
  }, []);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const benefits = [
    "Modernize and upgrade your living or working space",
    "Increase property value and curb appeal",
    "Enhance energy efficiency and sustainability",
    "Customize interiors to fit your lifestyle",
    "Fix structural issues and improve safety",
    "Transform outdated rooms into functional spaces"
  ];

  const services = [
    {
      title: "Kitchen Remodeling",
      description: "Upgrade your kitchen with modern designs, new cabinetry, countertops, and smart appliances."
    },
    {
      title: "Bathroom Renovation",
      description: "Transform your bathroom with luxury fixtures, efficient layouts, and stylish finishes."
    },
    {
      title: "Basement Finishing",
      description: "Convert your basement into a livable space—family room, gym, or home office."
    },
    {
      title: "Room Additions",
      description: "Expand your home with additional bedrooms, sunrooms, or living areas."
    },
    {
      title: "Exterior Upgrades",
      description: "Boost curb appeal with new siding, roofing, windows, and landscaping."
    },
    {
      title: "Whole-Home Renovation",
      description: "Comprehensive remodeling for a complete transformation of your property."
    }
  ];

  const howItWorks = [
    "Schedule a free renovation consultation",
    "Discuss your vision, needs, and budget with our experts",
    "Receive a detailed project plan and timeline",
    "Our skilled team executes the renovation/remodeling",
    "Final walkthrough and satisfaction guarantee"
  ];

  const features = [
    "Licensed & insured professionals",
    "Custom design solutions",
    "Quality materials & craftsmanship",
    "On-time project delivery"
  ];

  return (
    <div className={`min-h-screen w-full overflow-x-hidden transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <Header />
      
      {/* Hero Section */}
      <section className="w-full h-screen flex items-center justify-start px-4 sm:px-6 md:px-8 lg:px-16 relative overflow-hidden max-w-full">
        {/* Video Background */}
        <video 
          autoPlay 
          muted 
          loop 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={impactVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-left max-w-4xl px-4 w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight text-left" data-aos="fade-up">
            Renovation & <span className='text-[#FF4D00]'>Remodeling Services</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white mb-8 sm:mb-10 max-w-4xl leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            Transform your property with expert renovation and remodeling solutions—modernize, expand, and reimagine your space with our trusted team.
          </p>
          <div className="flex justify-start">
            <button className="bg-white text-[#FF4D00] font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full shadow-lg hover:bg-gray-100 transition text-base sm:text-lg md:text-xl transform hover:scale-105" data-aos="fade-up" data-aos-delay="400">
              Get a Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className={`w-full text-justify py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'}`} data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">
        <div className="max-w-7xl mx-auto w-full overflow-hidden">
          <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="200" data-aos-once="false">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              Why <span className='text-[#FF4D00]'>Renovate & Remodel?</span>
            </h2>
            <p className={`text-base sm:text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Unlock the full potential of your property with our expert renovation and remodeling services.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-center">
            {/* Left Cards */}
            <div className="space-y-4 sm:space-y-6" data-aos="fade-right" data-aos-delay="300" data-aos-once="false">
              {benefits.slice(0, 2).map((benefit, idx) => (
                <div
                  key={idx}
                  className={`p-4 sm:p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 h-auto min-h-[200px] sm:min-h-[256px] ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                  data-aos="fade-right"
                  data-aos-delay={400 + idx * 100}
                  data-aos-once="false"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-[#FF4D00] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{benefit.split(' ')[0]}</h3>
                  </div>
                  <p className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{benefit}</p>
                </div>
              ))}
            </div>
            {/* Center Image */}
            <div className="flex flex-col items-center text-center" data-aos="zoom-in" data-aos-delay="600" data-aos-once="false">
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl mb-4 sm:mb-6">
                <img
                  src={formSectionImg}
                  alt="Renovation Benefits"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className={`text-2xl sm:text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Transform Your Space</h3>
              <p className={`text-lg max-w-md ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Experience the difference a professional renovation can make—functionality, beauty, and value.</p>
            </div>
            {/* Right Cards */}
            <div className="space-y-4 sm:space-y-6" data-aos="fade-left" data-aos-delay="300" data-aos-once="false">
              {benefits.slice(2, 4).map((benefit, idx) => (
                <div
                  key={idx}
                  className={`p-4 sm:p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 h-auto min-h-[200px] sm:min-h-[256px] ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                  data-aos="fade-left"
                  data-aos-delay={400 + idx * 100}
                  data-aos-once="false"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-[#FF4D00] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{benefit.split(' ')[0]}</h3>
                  </div>
                  <p className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={`w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 relative overflow-hidden`}>
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={missionImg}
            alt="Renovation Services Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#FF4D00] bg-opacity-70"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10 w-full overflow-hidden">
          <div className="mb-12" data-aos="fade-up">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white`}>
              Renovation & Remodeling <span className="text-white">Services</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`transform transition-all duration-300 hover:scale-105 rounded-2xl p-6 shadow-lg ${isDarkMode ? 'bg-gray-800 bg-opacity-90 backdrop-blur-sm' : 'bg-white bg-opacity-90 backdrop-blur-sm'}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-once="false"
              >
                <div className="mb-4">
                  <span className="text-2xl font-bold text-[#FF4D00]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{service.title}</h3>
                <p className={`text-base leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={`w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto w-full overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Left Side - Image */}
            <div className="flex justify-center lg:justify-start items-start" data-aos="fade-right" data-aos-once="false">
              <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
                <div className="relative">
                  <img
                    src={mentalServe}
                    alt="Renovation Steps"
                    className="w-full object-cover rounded-2xl shadow-2xl"
                    style={{ height: '600px', maxHeight: 'none' }}
                  />
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full opacity-80"></div>
                  <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-pink-400 rounded-full opacity-80"></div>
                  <div className="absolute top-1/2 -right-6 w-4 h-4 bg-blue-400 rounded-full opacity-80"></div>
                </div>
              </div>
            </div>
            {/* Right Side - Content */}
            <div className="flex flex-col space-y-8" data-aos="fade-left" data-aos-once="false">
              <div>
                <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                  How <span className='text-[#FF4D00]'>It Works</span>
                </h2>
                <p className={`text-base sm:text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Our streamlined process ensures a hassle-free renovation or remodeling experience from start to finish.
                </p>
              </div>
              {/* Steps */}
              <div className="space-y-6">
                {howItWorks.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4"
                    data-aos="fade-left"
                    data-aos-delay={index * 100}
                    data-aos-once="false"
                  >
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg bg-[#FF4D00]`}>
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Step {index + 1}</h3>
                      <p className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{step}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* CTA Button */}
              <div className="pt-4">
                <button className="bg-[#FF4D00] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#e6440a] transition-colors duration-300 transform hover:scale-105">
                  Book Your Renovation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full text-justify py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 bg-gradient-to-br from-[#FF4D00] to-[#e6440a]">
        <div className="max-w-7xl mx-auto w-full overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Left Side - Content */}
            <div className="flex flex-col space-y-8" data-aos="fade-right" data-aos-once="false">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
                  <span className='text-white'>What Sets Us Apart</span>
                </h2>
                <p className="text-lg sm:text-xl mb-8 text-white">
                  Our renovation & remodeling services are designed for quality, reliability, and your complete satisfaction.
                </p>
              </div>
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-white">
                  We combine innovative design, skilled craftsmanship, and transparent project management to deliver exceptional results. From concept to completion, our team works closely with you to ensure your vision is realized on time and within budget.
                </p>
                <p className="text-base leading-relaxed text-white">
                  Whether you're updating a single room or transforming your entire property, we use only the highest quality materials and proven construction techniques.
                </p>
                <p className="text-base leading-relaxed text-white">
                  Our commitment to communication and customer service means you're always informed and in control throughout the renovation process.
                </p>
                <p className="text-base leading-relaxed text-white">
                  Discover why homeowners and businesses trust us for their most important renovation and remodeling projects.
                </p>
              </div>
            </div>
            {/* Right Side - Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6" data-aos="fade-left" data-aos-once="false">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-tl-[3rem] rounded-br-[3rem] shadow-lg transform transition-all duration-300 hover:scale-105 ${isDarkMode ? 'bg-gray-800 bg-opacity-95 backdrop-blur-sm' : 'bg-white bg-opacity-95 backdrop-blur-sm'}`}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  data-aos-once="false"
                >
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-[#FF4D00] rounded-full flex items-center justify-center mb-3 shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{feature}</h3>
                  </div>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>We provide {feature.toLowerCase()} for every project.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className={`w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto text-center w-full overflow-hidden">
          <div className={`rounded-3xl p-8 sm:p-12 ${isDarkMode ? 'bg-black' : 'bg-white'}`} data-aos="fade-up">
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}
              data-aos="fade-down"
              data-aos-delay="50"
              data-aos-once="false"
            >
              Ready to Renovate or Remodel?
            </h2>
            <p
              className={`text-lg sm:text-xl mb-12 max-w-2xl mx-auto ${isDarkMode ? 'text-white' : 'text-black'}`}
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="false"
            >
              Contact us today for a free consultation and let our experts turn your renovation dreams into reality. Your perfect space is just a project away!
            </p>
            <button className="bg-[#FF4D00] text-white font-semibold py-4 px-10 rounded-full shadow-lg hover:bg-[#e6440a] transition-colors duration-300 transform hover:scale-105 text-lg">
              Book Your Free Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RenovationRemodeling;