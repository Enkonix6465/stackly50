import React, { useState, useEffect } from 'react';
import Header from '../../Header.jsx';
import AOS from 'aos';
import '../../aos-custom.css';
import sleepHeroVideo from '../../assets/inhero.mp4';
import sleepBenefitsBg from '../../assets/sleepbenefits.jpg';
import sleepSteps from '../../assets/industrial.jpg';
import sleepserve from '../../assets/indus.jpg';
import Footer from '../../footer.jsx';
import { useLanguage } from '../../contexts/LanguageContext';

const Industrial = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { language, isRTL, translate } = useLanguage();

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

  // Reinitialize AOS when language/RTL changes
  useEffect(() => {
    AOS.refresh();
  }, [language, isRTL]);

  const benefits = [
    { title: translate('industrialBenefit1Title'), description: translate('industrialBenefit1Desc') },
    { title: translate('industrialBenefit2Title'), description: translate('industrialBenefit2Desc') },
    { title: translate('industrialBenefit3Title'), description: translate('industrialBenefit3Desc') },
    { title: translate('industrialBenefit4Title'), description: translate('industrialBenefit4Desc') },
    { title: translate('industrialBenefit5Title'), description: translate('industrialBenefit5Desc') },
    { title: translate('industrialBenefit6Title'), description: translate('industrialBenefit6Desc') }
  ];

  const programs = [
    {
      title: translate('industrialService1Title'),
      description: translate('industrialService1Desc')
    },
    {
      title: translate('industrialService2Title'),
      description: translate('industrialService2Desc')
    },
    {
      title: translate('industrialService3Title'),
      description: translate('industrialService3Desc')
    },
    {
      title: translate('industrialService4Title'),
      description: translate('industrialService4Desc')
    },
    {
      title: translate('industrialService5Title'),
      description: translate('industrialService5Desc')
    },
    {
      title: translate('industrialService6Title'),
      description: translate('industrialService6Desc')
    }
  ];

  const howItWorks = [
    { title: translate('industrialStep1Title'), description: translate('industrialStep1Desc') },
    { title: translate('industrialStep2Title'), description: translate('industrialStep2Desc') },
    { title: translate('industrialStep3Title'), description: translate('industrialStep3Desc') },
    { title: translate('industrialStep4Title'), description: translate('industrialStep4Desc') },
    { title: translate('industrialStep5Title'), description: translate('industrialStep5Desc') }
  ];

  const features = [
    { title: translate('industrialFeature1Title'), description: translate('industrialFeature1Desc') },
    { title: translate('industrialFeature2Title'), description: translate('industrialFeature2Desc') },
    { title: translate('industrialFeature3Title'), description: translate('industrialFeature3Desc') },
    { title: translate('industrialFeature4Title'), description: translate('industrialFeature4Desc') }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Header />
      
      {/* Hero Section */}
      <section className={`w-full h-screen flex items-center px-4 sm:px-6 md:px-8 lg:px-16 relative overflow-hidden ${isRTL ? 'justify-end' : 'justify-start'}`}>
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
        
        <div className={`relative z-10 max-w-4xl px-4 w-full ${isRTL ? 'text-right' : 'text-left'}`}>
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight ${isRTL ? 'text-right' : 'text-left'}`} data-aos="fade-up">
            {translate('industrialHeroTitle')} <span className='text-[#FF4D00]'>{translate('industrialHeroTitleHighlight')}</span>
          </h1>
          <p className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white mb-8 sm:mb-10 max-w-4xl leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`} data-aos="fade-up" data-aos-delay="200">
            {translate('industrialHeroDescription')}
          </p>
          <div className={`flex ${isRTL ? 'justify-end' : 'justify-start'}`}>
            <button className="bg-white text-[#FF4D00] font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full shadow-lg hover:bg-gray-100 transition text-base sm:text-lg md:text-xl transform hover:scale-105" data-aos="fade-up" data-aos-delay="400">
              {translate('startYourProject')}
            </button>
          </div>
        </div>
      </section>

      {/* Key Benefits Section - Industrial Construction */}
      <section className={`w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'}`} data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">
        <div className="max-w-7xl mx-auto w-full overflow-hidden">
          <div className={`mb-16 ${isRTL ? 'text-right' : 'text-center'}`} data-aos="fade-up" data-aos-delay="200" data-aos-once="false">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'} ${isRTL ? 'text-right' : 'text-center'}`}>
              {translate('whyIndustrialConstruction')} <span className='text-[#FF4D00]'>{translate('constructionWord')}</span>
            </h2>
            <p className={`text-base sm:text-lg max-w-2xl ${isRTL ? 'mr-0' : 'mx-auto'} ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} ${isRTL ? 'text-right' : 'text-center'}`}>
              {translate('industrialBenefitsDesc')}
            </p>
          </div>

          {/* Simple Grid Layout - No Overlap Issues */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.slice(0, 4).map((benefit, index) => (
              <div 
                key={index}
                className={`p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}
                data-aos-once="false"
              >
                <div className={`flex items-center justify-center w-16 h-16 bg-[#FF4D00] rounded-full mb-4 ${isRTL ? 'mr-0 ml-auto' : 'mx-auto'}`}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className={`text-lg font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-800'} ${isRTL ? 'text-right' : 'text-center'}`}>
                  {benefit.title}
                </h3>
                <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} ${isRTL ? 'text-right' : 'text-center'}`}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Center Industrial Image Section */}
          <div className={`mt-16 flex flex-col items-center ${isRTL ? 'text-right' : 'text-center'}`} data-aos="zoom-in" data-aos-delay="600" data-aos-once="false">
            <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl mb-8">
              <img 
                src={sleepserve}
                alt={translate('industrialConstructionSite')} 
                className="w-full h-64 sm:h-80 md:h-96 object-cover"
              />
            </div>
            <div className="max-w-2xl">
              <h3 className={`text-2xl sm:text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'} ${isRTL ? 'text-right' : 'text-center'}`}> 
                {translate('transformYourFacility')}
              </h3>
              <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} ${isRTL ? 'text-right' : 'text-center'}`}> 
                {translate('industrialBenefitsCenterDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Services Section */}
      <section className={`w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 relative overflow-hidden`}>
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={sleepserve} 
            alt={translate('industrialServicesBackground')} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#FF4D00] bg-opacity-70"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 w-full overflow-hidden">
          <div className={`mb-12 ${isRTL ? 'text-right' : 'text-left'}`} data-aos="fade-up">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white ${isRTL ? 'text-right' : 'text-left'}`}>
              {translate('industrialServicesWeProvide')} <span className="text-white">{translate('serviceWord')}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div 
                key={index}
                className={`rounded-2xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl ${isDarkMode ? 'bg-gray-800 bg-opacity-90 backdrop-blur-sm' : 'bg-white bg-opacity-90 backdrop-blur-sm'}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-once="false"
              >
                <div className={`mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                  <span className="text-2xl font-bold text-[#FF4D00]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'} ${isRTL ? 'text-right' : 'text-left'}`}>
                  {program.title}
                </h3>
                <p className={`text-base leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} ${isRTL ? 'text-right' : 'text-left'}`}>
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
          <div className="space-y-12">
            {/* Section Header */}
            <div className={`${isRTL ? 'text-right' : 'text-center'}`}>
              <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'} ${isRTL ? 'text-right' : 'text-center'}`}>
                {translate('howItWorks')} <span className='text-[#FF4D00]'>{translate('worksWord')}</span>
              </h2>
              <p className={`text-base sm:text-lg max-w-2xl ${isRTL ? 'mr-0' : 'mx-auto'} ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} ${isRTL ? 'text-right' : 'text-center'}`}>
                {translate('industrialHowItWorksDesc')}
              </p>
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {howItWorks.map((step, index) => (
                <div 
                  key={index}
                  className={`p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  data-aos-once="false"
                >
                  <div className={`flex items-center justify-center w-12 h-12 rounded-full bg-[#FF4D00] text-white font-bold text-lg shadow-lg mb-4 ${isRTL ? 'mr-0 ml-auto' : 'mx-auto'}`}>
                    {index + 1}
                  </div>
                  <h3 className={`text-lg font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-800'} ${isRTL ? 'text-right' : 'text-center'}`}>
                    {step.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} ${isRTL ? 'text-right' : 'text-center'}`}>
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className={`pt-8 ${isRTL ? 'text-right' : 'text-center'}`}>
              <button className="bg-[#FF4D00] text-white font-semibold py-4 px-8 rounded-lg hover:bg-[#e6440a] transition-colors duration-300 transform hover:scale-105 shadow-lg">
                {translate('startYourProject')}
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#FF4D00] to-[#e6440a]">
        <div className="max-w-7xl mx-auto">
          <div className={`mb-12 ${isRTL ? 'text-right' : 'text-center'}`}>
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white ${isRTL ? 'text-right' : 'text-center'}`}>
              {translate('whatSetsUsApart')}
            </h2>
            <p className={`text-lg sm:text-xl max-w-2xl text-white ${isRTL ? 'mr-0' : 'mx-auto'} ${isRTL ? 'text-right' : 'text-center'}`}>
              {translate('industrialWhatSetsUsApartDesc')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl ${isDarkMode ? 'bg-gray-800 bg-opacity-95 backdrop-blur-sm' : 'bg-white bg-opacity-95 backdrop-blur-sm'}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-once="false"
              >
                <div className={`mb-4 ${isRTL ? 'text-right' : 'text-center'}`}>
                  <div className={`w-12 h-12 bg-[#FF4D00] rounded-full flex items-center justify-center mb-3 shadow-lg ${isRTL ? 'mr-0 ml-auto' : 'mx-auto'}`}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'} ${isRTL ? 'text-right' : 'text-center'}`}>
                    {feature.title}
                  </h3>
                </div>
                <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} ${isRTL ? 'text-right' : 'text-center'}`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className={`w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto w-full overflow-hidden">
          <div className={`rounded-3xl p-8 sm:p-12 ${isDarkMode ? 'bg-black' : 'bg-white'} ${isRTL ? 'text-right' : 'text-center'}`} data-aos="fade-up">
            <h2 
              className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'} ${isRTL ? 'text-right' : 'text-center'}`}
              data-aos="fade-down"
              data-aos-delay="50"
              data-aos-once="false"
            >
              {translate('industrialCtaTitle')}
            </h2>
            <p 
              className={`text-lg sm:text-xl mb-8 max-w-2xl ${isRTL ? 'mr-0' : 'mx-auto'} ${isDarkMode ? 'text-white' : 'text-black'} ${isRTL ? 'text-right' : 'text-center'}`}
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="false"
            >
              {translate('industrialCtaDesc')}
            </p>
            
            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 items-center ${isRTL ? 'sm:flex-row-reverse justify-center' : 'justify-center'}`}>
              <button 
                className="bg-[#FF4D00] text-white font-semibold py-4 px-8 rounded-lg hover:bg-[#e6440a] transition-colors duration-300 transform hover:scale-105 shadow-lg"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-once="false"
              >
                {translate('startYourProject')}
              </button>
              <button 
                className={`${isDarkMode ? 'bg-white text-black hover:bg-gray-100' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'} font-semibold py-4 px-8 rounded-lg transition-colors duration-300 transform hover:scale-105 shadow-lg`}
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-once="false"
              >
                {translate('viewPortfolio')}
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Industrial;