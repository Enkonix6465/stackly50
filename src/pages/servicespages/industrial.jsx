import React, { useState, useEffect } from 'react';
import Header from '../../Header.jsx';
import AOS from 'aos';
import '../../aos-custom.css';
import sleepHeroVideo from '../../assets/inhero.mp4';
import sleepBenefitsBg from '../../assets/sleepbenefits.jpg';
import sleepSteps from '../../assets/industrial.jpg';
import sleepserve from '../../assets/indus.jpg';


const Industrial = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedDarkMode);
  }, []);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const benefits = [
    "Improves sleep quality and duration",
    "Reduces insomnia and sleep disorders",
    "Enhances daytime energy and focus",
    "Promotes deep, restorative sleep",
    "Supports mental and physical recovery",
    "Boosts overall health and well-being"
  ];

  const programs = [
    {
      title: "Sleep Assessment & Analysis",
      description: "Comprehensive evaluation of your sleep patterns and habits"
    },
    {
      title: "Insomnia Treatment Programs",
      description: "Evidence-based therapies to overcome sleep difficulties"
    },
    {
      title: "Sleep Hygiene Education",
      description: "Learn optimal sleep environment and routine practices"
    },
    {
      title: "Relaxation & Meditation Techniques",
      description: "Mindfulness practices to prepare mind and body for sleep"
    },
    {
      title: "Cognitive Behavioral Therapy for Sleep",
      description: "CBT techniques to address sleep-related thoughts and behaviors"
    },
    {
      title: "Sleep Environment Optimization",
      description: "Create the perfect sleep sanctuary for better rest"
    }
  ];

  const howItWorks = [
    "Complete a comprehensive sleep assessment",
    "Receive personalized sleep therapy recommendations",
    "Access guided relaxation and sleep techniques",
    "Practice sleep hygiene with expert guidance",
    "Track progress and adjust your sleep plan"
  ];

  const features = [
    "Personalized sleep therapy plans",
    "Sleep tracking and monitoring tools",
    "Guided relaxation audio library",
    "Expert sleep consultation support"
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
          <source src={sleepHeroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        <div className="relative z-10 text-left max-w-4xl px-4 w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight text-left" data-aos="fade-up">
            Discover <span className='text-[#FF4D00]'>Industrial Construction</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white mb-8 sm:mb-10 max-w-4xl leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            Building advanced industrial facilities with precision, safety, and innovation to power your business growth and operational excellence.
          </p>
          <div className="flex justify-start">
            <button className="bg-white text-[#FF4D00] font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full shadow-lg hover:bg-gray-100 transition text-base sm:text-lg md:text-xl transform hover:scale-105" data-aos="fade-up" data-aos-delay="400">
              Start Your Project
            </button>
          </div>
        </div>
      </section>

      {/* Key Benefits Section - Industrial Construction */}
      <section className={`w-full text-justify py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'}`} data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">
        <div className="max-w-7xl mx-auto w-full overflow-hidden">
          <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="200" data-aos-once="false">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              Key <span className='text-[#FF4D00]'>Benefits</span>
            </h2>
            <p className={`text-base sm:text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Discover the advantages of modern industrial construction for your business and operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-center">
            {/* Left Cards */}
            <div className="space-y-4 sm:space-y-6" data-aos="fade-right" data-aos-delay="300" data-aos-once="false">
              <div 
                className={`p-4 sm:p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 h-auto min-h-[200px] sm:min-h-[256px] ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                data-aos="fade-right"
                data-aos-delay="400"
                data-aos-once="false"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-[#FF4D00] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}> 
                    Durability & Strength
                  </h3>
                </div>
                <p className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}> 
                  Industrial construction delivers robust structures built to withstand heavy use, harsh environments, and the test of time.
                </p>
              </div>
              
              <div 
                className={`p-4 sm:p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 h-auto min-h-[200px] sm:min-h-[256px] ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-once="false"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-[#FF4D00] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}> 
                    Efficiency & Speed
                  </h3>
                </div>
                <p className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}> 
                  Advanced methods and technologies enable faster project delivery, reducing downtime and accelerating your business operations.
                </p>
              </div>
            </div>

            {/* Center Image */}
            <div className="flex flex-col items-center text-center" data-aos="zoom-in" data-aos-delay="600" data-aos-once="false">
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl mb-4 sm:mb-6">
                <img 
                  src={sleepserve}
                  alt="Industrial Construction Site" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className={`text-2xl sm:text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}> 
                Transform Your Facility
              </h3>
              <p className={`text-lg max-w-md ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}> 
                Experience the benefits of modern industrial construction—strength, efficiency, and innovation for your next project.
              </p>
            </div>

            {/* Right Cards */}
            <div className="space-y-4 sm:space-y-6" data-aos="fade-left" data-aos-delay="300" data-aos-once="false">
              <div 
                className={`p-4 sm:p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 h-auto min-h-[200px] sm:min-h-[256px] ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                data-aos="fade-left"
                data-aos-delay="400"
                data-aos-once="false"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-[#FF4D00] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}> 
                    Safety & Compliance
                  </h3>
                </div>
                <p className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}> 
                  Strict safety standards and regulatory compliance ensure a secure environment for your workforce and assets.
                </p>
              </div>
              
              <div 
                className={`p-4 sm:p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 h-auto min-h-[200px] sm:min-h-[256px] ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                data-aos="fade-left"
                data-aos-delay="500"
                data-aos-once="false"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-[#FF4D00] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}> 
                    Scalability & Innovation
                  </h3>
                </div>
                <p className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}> 
                  Flexible designs and innovative solutions allow your facility to grow and adapt to future needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className={`w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 relative overflow-hidden`}>
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={sleepserve} 
            alt="Sleep Therapy Programs Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#FF4D00] bg-opacity-70"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 w-full overflow-hidden">
          <div className="mb-12" data-aos="fade-up">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white`}>
              Programs we <span className="text-white">serve</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {programs.map((program, index) => (
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
                <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                  {program.title}
                </h3>
                <p className={`text-base leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={`w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto w-full overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Left Side - Content */}
            <div className="flex flex-col space-y-8" data-aos="fade-right" data-aos-once="false">
              <div>
                <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                  How It <span className='text-[#FF4D00]'>Works</span>
                </h2>
                <p className={`text-base sm:text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Get started with your sleep therapy journey in just a few simple steps
                </p>
              </div>

              {/* Steps */}
              <div className="space-y-6">
                {howItWorks.map((step, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-4"
                    data-aos="fade-right"
                    data-aos-delay={index * 100}
                    data-aos-once="false"
                  >
                                         <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg bg-[#FF4D00]`}>
                       {index + 1}
                     </div>
                     <div className="flex-1">
                       <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                         Step {index + 1}
                       </h3>
                       <p className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                         {step}
                       </p>
                     </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <button className="bg-[#FF4D00] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#e6440a] transition-colors duration-300 transform hover:scale-105">
                  Start Your Journey
                </button>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex justify-center lg:justify-end items-start" data-aos="fade-left" data-aos-once="false">
              <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
                <div className="relative">
                  <img 
                    src={sleepSteps} 
                    alt="Sleep Therapy Steps" 
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
          </div>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="w-full text-justify py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 bg-gradient-to-br from-[#FF4D00] to-[#e6440a]">
        <div className="max-w-7xl mx-auto w-full overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Left Side - Content */}
            <div className="flex flex-col space-y-8" data-aos="fade-right" data-aos-once="false">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
                  What Sets Us Apart
                </h2>
                <p className="text-lg sm:text-xl mb-8 text-white">
                  Discover why we are the trusted choice for interior designing and finishing projects.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base leading-relaxed text-white">
                    <span className="font-bold">Creative Excellence:</span> Successfully delivering stunning interior designs that transform spaces and reflect your unique style.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base leading-relaxed text-white">
                    <span className="font-bold">Premium Materials:</span> Using only the finest materials and finishes to create luxurious and lasting interior spaces.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base leading-relaxed text-white">
                    <span className="font-bold">Attention to Detail:</span> Meticulous craftsmanship in every element, from custom millwork to perfect paint finishes.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base leading-relaxed text-white">
                    <span className="font-bold">Personalized Approach:</span> Tailored design solutions that match your lifestyle, preferences, and functional needs.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base leading-relaxed text-white">
                    <span className="font-bold">Expert Designers:</span> Highly skilled interior designers and craftsmen dedicated to creating beautiful and functional spaces.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6" data-aos="fade-left" data-aos-once="false">
              <div 
                className={`p-6 rounded-tl-[3rem] rounded-br-[3rem] shadow-lg transform transition-all duration-300 hover:scale-105 ${isDarkMode ? 'bg-gray-800 bg-opacity-95 backdrop-blur-sm' : 'bg-white bg-opacity-95 backdrop-blur-sm'}`}
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-once="false"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-[#FF4D00] rounded-full flex items-center justify-center mb-3 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L3 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.734.99A.996.996 0 0118 6v2a1 1 0 11-2 0v-.277l-1.254.145a1 1 0 11-.992-1.736L14.984 6l-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.723V12a1 1 0 11-2 0v-1.277l-1.246-.855a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.277l1.246.855a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.277V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    Innovative Solutions
                  </h3>
                </div>
                <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  We embrace innovation to solve design challenges and deliver lasting value.
                </p>
              </div>

              <div 
                className={`p-6 rounded-tl-[3rem] rounded-br-[3rem] shadow-lg transform transition-all duration-300 hover:scale-105 ${isDarkMode ? 'bg-gray-800 bg-opacity-95 backdrop-blur-sm' : 'bg-white bg-opacity-95 backdrop-blur-sm'}`}
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-once="false"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-[#FF4D00] rounded-full flex items-center justify-center mb-3 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    Client-Centric Approach
                  </h3>
                </div>
                <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  We prioritize client needs, ensuring transparent communication and tailored solutions.
                </p>
              </div>

              <div 
                className={`p-6 rounded-tl-[3rem] rounded-br-[3rem] shadow-lg transform transition-all duration-300 hover:scale-105 ${isDarkMode ? 'bg-gray-800 bg-opacity-95 backdrop-blur-sm' : 'bg-white bg-opacity-95 backdrop-blur-sm'}`}
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-once="false"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-[#FF4D00] rounded-full flex items-center justify-center mb-3 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    Quality Assurance
                  </h3>
                </div>
                <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Rigorous quality checks at every stage guarantee superior interior outcomes.
                </p>
              </div>

              <div 
                className={`p-6 rounded-tl-[3rem] rounded-br-[3rem] shadow-lg transform transition-all duration-300 hover:scale-105 ${isDarkMode ? 'bg-gray-800 bg-opacity-95 backdrop-blur-sm' : 'bg-white bg-opacity-95 backdrop-blur-sm'}`}
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-once="false"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-[#FF4D00] rounded-full flex items-center justify-center mb-3 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    Sustainable Impact
                  </h3>
                </div>
                <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  We build with the future in mind, focusing on sustainability and community benefit.
                </p>
              </div>
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
              Transform Your Space with Interior Design Today
            </h2>
            <p 
              className={`text-lg sm:text-xl mb-8 max-w-2xl mx-auto ${isDarkMode ? 'text-white' : 'text-black'}`}
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="false"
            >
              Get access to personalized interior design and finishing services to create beautiful, functional spaces that reflect your unique style.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                className="bg-[#FF4D00] text-white font-semibold py-4 px-8 rounded-lg hover:bg-[#e6440a] transition-colors duration-300 transform hover:scale-105 shadow-lg"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-once="false"
              >
                Start Your Design Project
              </button>
              <button 
                className={`${isDarkMode ? 'bg-white text-black hover:bg-gray-100' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'} font-semibold py-4 px-8 rounded-lg transition-colors duration-300 transform hover:scale-105 shadow-lg`}
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-once="false"
              >
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industrial;