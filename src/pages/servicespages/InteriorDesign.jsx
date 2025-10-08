import React, { useState, useEffect } from 'react';
import Header from '../../Header.jsx';
import AOS from 'aos';
import '../../aos-custom.css';
import impactVideo from '../../assets/interior.mp4';
import missionImg from '../../assets/i1.jpg';
import formSectionImg from '../../assets/i2.jpg';

const InteriorDesignFinishing = () => {
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
    "Enhances aesthetic appeal and comfort",
    "Maximizes space functionality and flow",
    "Increases property value and marketability",
    "Reflects your unique style and personality",
    "Improves lighting, color, and ambiance",
    "Delivers professional finishing and detailing"
  ];

  const services = [
    {
      title: "Space Planning & Layouts",
      description: "Optimize your interiors for maximum functionality and flow."
    },
    {
      title: "Custom Furniture & Cabinetry",
      description: "Bespoke solutions tailored to your space and taste."
    },
    {
      title: "Wall & Ceiling Finishes",
      description: "Expert painting, wallpaper, and decorative treatments."
    },
    {
      title: "Lighting Design & Installation",
      description: "Create the perfect mood and highlight architectural features."
    },
    {
      title: "Flooring Solutions",
      description: "Premium hardwood, tile, carpet, and more for every room."
    },
    {
      title: "Window Treatments",
      description: "Elegant drapes, blinds, and shades for privacy and style."
    }
  ];

  const howItWorks = [
    "Book a free interior design consultation",
    "Share your vision, needs, and budget with our designers",
    "Receive a custom design plan and material samples",
    "Our team transforms your space with expert finishing",
    "Final walkthrough and satisfaction guarantee"
  ];

  const features = [
    "Award-winning designers",
    "3D visualization & planning",
    "Premium materials & finishes",
    "On-time project completion"
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
            Interior Design & <span className='text-[#FF4D00]'>Finishing Services</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white mb-8 sm:mb-10 max-w-4xl leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            Elevate your space with bespoke interior design and flawless finishing. Our experts bring your vision to life with creativity, precision, and style.
          </p>
          <div className="flex justify-start">
            <button className="bg-white text-[#FF4D00] font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full shadow-lg hover:bg-gray-100 transition text-base sm:text-lg md:text-xl transform hover:scale-105" data-aos="fade-up" data-aos-delay="400">
              Book a Free Design Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className={`w-full text-justify py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'}`} data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">
        <div className="max-w-7xl mx-auto w-full overflow-hidden">
          <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="200" data-aos-once="false">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}> 
              Why <span className='text-[#FF4D00]'>Interior Design?</span>
            </h2>
            <p className={`text-base sm:text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Transform your home or business with the art and science of interior design and finishing.
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
                  alt="Interior Design Benefits"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className={`text-2xl sm:text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Transform Your Space</h3>
              <p className={`text-lg max-w-md ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Experience the difference a professional interior design can make—beauty, comfort, and value.</p>
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
            alt="Interior Design Services Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#FF4D00] bg-opacity-70"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10 w-full overflow-hidden">
          <div className="mb-12" data-aos="fade-up">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white`}>
              Interior Design & Finishing <span className="text-white">Services</span>
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
                    src={missionImg}
                    alt="Interior Design Steps"
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
                <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>How <span className='text-[#FF4D00]'>It Works</span></h2>
                <p className={`text-base sm:text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Our process ensures a seamless interior design and finishing experience from concept to completion.</p>
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
                  Book Your Design Consultation
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
                  Our interior design & finishing services are crafted for elegance, comfort, and your complete satisfaction.
                </p>
              </div>
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-white">
                  We blend creativity, technical expertise, and premium materials to deliver stunning interiors. From concept to completion, our team collaborates with you to ensure your vision is realized on time and within budget.
                </p>
                <p className="text-base leading-relaxed text-white">
                  Whether you're refreshing a single room or transforming your entire property, we use only the best finishes and design solutions.
                </p>
                <p className="text-base leading-relaxed text-white">
                  Our commitment to communication and service means you're always informed and in control throughout the design process.
                </p>
                <p className="text-base leading-relaxed text-white">
                  Discover why clients trust us for their most important interior design and finishing projects.
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
              Ready to Transform Your Space?
            </h2>
            <p
              className={`text-lg sm:text-xl mb-12 max-w-2xl mx-auto ${isDarkMode ? 'text-white' : 'text-black'}`}
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="false"
            >
              Contact us today for a free interior design consultation and let our experts create the perfect space for you. Style, comfort, and quality—delivered.
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

export default InteriorDesignFinishing;