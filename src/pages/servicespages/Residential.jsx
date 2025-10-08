import React, { useState, useEffect } from 'react';
import Header from '../../Header.jsx';
import AOS from 'aos';
import '../../aos-custom.css';
import heroImg from '../../assets/formSection.jpg';
import benefitsImg from '../../assets/villa.jpg';
import stepsImg from '../../assets/villa2.jpg';
import vedio from '../../assets/rhero.mp4';
import residentialBg from '../../assets/villa2.jpg';
import { useLanguage } from '../../contexts/LanguageContext.jsx';
import Footer from '../../footer.jsx';

const Residential = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { translate, isRTL, currentLanguage } = useLanguage();

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedDarkMode);
  }, []);

  const scrollToBenefits = () => {
    const benefitsSection = document.getElementById('key-benefits');
    if (benefitsSection) {
      benefitsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing-section');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
    translate('customHomeDesignPlanning'),
    translate('highQualityMaterials'), 
    translate('onTimeProjectDelivery'),
    translate('transparentPricing'),
    translate('energyEfficientSolutions'),
    translate('comprehensiveProjectManagement')
  ];

  const services = [
    {
      title: translate('customHomeDesign'),
      description: translate('customHomeDesignDesc')
    },
    {
      title: translate('newHomeConstruction'), 
      description: translate('newHomeConstructionDesc')
    },
    {
      title: translate('homeRenovationRemodeling'),
      description: translate('homeRenovationRemodelingDesc')
    },
    {
      title: translate('interiorDesignFinishing'),
      description: translate('interiorDesignFinishingDesc')
    },
    {
      title: translate('sustainableBuildingSolutions'),
      description: translate('sustainableBuildingSolutionsDesc')
    },
    {
      title: translate('projectManagement'),
      description: translate('projectManagementDesc')
    }
  ];

  const howItWorks = [
    translate('requirementGathering'),
    translate('siteVisitFeasibility'), 
    translate('designPlanningApproval'),
    translate('transparentQuotationAgreement'),
    translate('constructionRegularUpdates'),
    translate('finalHandoverSupport')
  ];

  const features = [
    translate('residentialContractors'),
    translate('detailedProjectTimeline'), 
    translate('qualityMaterials'),
    translate('comprehensiveWarranty')
  ];

  return (
    <div className={`min-h-screen w-full overflow-x-hidden transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Header />
      
      {/* Hero Section */}
      <section className="w-full h-screen flex items-center px-4 sm:px-6 md:px-8 lg:px-16 relative overflow-hidden max-w-full">
        {/* Video Background */}
        <video 
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={vedio} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 max-w-4xl px-4 w-full pt-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight" data-aos="fade-up">
            {translate('residentialConstructionServices')}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white mb-8 sm:mb-10 max-w-4xl leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            {translate('residentialHeroDescription')}
          </p>
          <div className="flex">
            <button 
              onClick={scrollToBenefits}
              className="bg-white text-[#FF4D00] font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full shadow-lg hover:bg-gray-100 transition text-base sm:text-lg md:text-xl transform hover:scale-105" data-aos="fade-up" data-aos-delay="400">
              {translate('exploreMore')}
            </button>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section id="key-benefits" className={`w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'}`} data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">
        <div className="max-w-7xl mx-auto w-full overflow-hidden">
          <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="200" data-aos-once="false">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              {translate('whyChooseResidential')}
            </h2>
            <p className={`text-base sm:text-lg max-w-2xl mx-auto text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {translate('whyChooseResidentialDesc')}
            </p>
          </div>
          <div className={`grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-center ${isRTL ? 'lg:grid-flow-col-dense' : ''}`}>
            {/* Left Cards (Right in RTL) */}
            <div className={`space-y-4 sm:space-y-6 ${isRTL ? 'lg:col-start-3' : ''}`} data-aos={isRTL ? "fade-left" : "fade-right"} data-aos-delay="300" data-aos-once="false">
              {benefits.slice(0,3).map((benefit, idx) => (
                <div key={idx} className={`p-6 sm:p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 h-auto min-h-[150px] sm:min-h-[180px] ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                  data-aos={isRTL ? "fade-left" : "fade-right"}
                  data-aos-delay={400+idx*100}
                  data-aos-once="false"
                >
                  <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{benefit}</h3>
                </div>
              ))}
            </div>
            {/* Center Image */}
            <div className={`flex flex-col items-center text-center ${isRTL ? 'lg:col-start-2' : ''}`} data-aos="zoom-in" data-aos-delay="600" data-aos-once="false">
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl mb-4 sm:mb-6">
                <img 
                  src={benefitsImg} 
                  alt="Residential Construction Benefits" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className={`text-2xl sm:text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                {translate('buildingDreamHomes')}
              </h3>
              <p className={`text-lg max-w-md ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {translate('buildingDreamHomesDesc')}
              </p>
            </div>
            {/* Right Cards (Left in RTL) */}
            <div className={`space-y-4 sm:space-y-6 ${isRTL ? 'lg:col-start-1' : ''}`} data-aos={isRTL ? "fade-right" : "fade-left"} data-aos-delay="300" data-aos-once="false">
              {benefits.slice(3).map((benefit, idx) => (
                <div key={idx} className={`p-6 sm:p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 h-auto min-h-[150px] sm:min-h-[180px] ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                  data-aos={isRTL ? "fade-right" : "fade-left"}
                  data-aos-delay={400+idx*100}
                  data-aos-once="false"
                >
                  <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

            {/* Services Section */}
            <section className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 relative overflow-hidden" style={{ 
              backgroundImage: `url(${residentialBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}>
              {/* Background Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-70"></div>
              <div className="max-w-7xl mx-auto relative z-10 w-full overflow-hidden">
                <div className="mb-12 text-center" data-aos="fade-up">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
                    {translate('ourResidentialServices')}
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
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch ${isRTL ? 'lg:grid-flow-col-dense' : ''}`}>
            {/* Content Side */}
            <div className={`flex flex-col space-y-8 ${isRTL ? 'lg:col-start-2' : ''}`} data-aos={isRTL ? "fade-left" : "fade-right"} data-aos-once="false">
              <div>
                <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                  {translate('howOurProcessWorks')}
                </h2>
                <p className={`text-base sm:text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {translate('processDescription')}
                </p>
              </div>
              {/* Steps */}
              <div className="space-y-6">
                {howItWorks.map((step, index) => (
                  <div 
                    key={index}
                    className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}
                    data-aos={isRTL ? "fade-left" : "fade-right"}
                    data-aos-delay={index * 100}
                    data-aos-once="false"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg bg-[#FF4D00]">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                        {currentLanguage === 'Arabic' ? `المرحلة ${index + 1}` : currentLanguage === 'Hebrew' ? `שלב ${index + 1}` : `Step ${index + 1}`}
                      </h3>
                      <p className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{step}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* CTA Button */}
              <div className="pt-4">
                <button 
                  onClick={scrollToPricing}
                  className="bg-[#FF4D00] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#e6440a] transition-colors duration-300 transform hover:scale-105">
                  {translate('startProjectToday')}
                </button>
              </div>
            </div>
            {/* Image Side */}
            <div className={`flex justify-center items-center ${isRTL ? 'lg:col-start-1' : ''}`} data-aos={isRTL ? "fade-right" : "fade-left"} data-aos-once="false">
              <div className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl">
                <div className="relative">
                  <img 
                    src={stepsImg} 
                    alt="Construction Steps" 
                    className="w-full object-cover rounded-2xl shadow-2xl"
                    style={{ height: '500px', maxHeight: 'none' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 bg-gradient-to-br from-[#FF4D00] to-[#e6440a]">
        <div className="max-w-7xl mx-auto w-full overflow-hidden">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch ${isRTL ? 'lg:grid-flow-col-dense' : ''}`}>
            {/* Content Side */}
            <div className={`flex flex-col space-y-8 ${isRTL ? 'lg:col-start-2' : ''}`} data-aos={isRTL ? "fade-left" : "fade-right"} data-aos-once="false">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
                  {translate('whatMakesUsDifferent')}
                </h2>
                <p className="text-lg sm:text-xl mb-8 text-white">
                  {translate('whatMakesUsDifferentDesc')}
                </p>
              </div>
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-white">
                  {translate('residentialExpertiseDesc1')}
                </p>
                <p className="text-base leading-relaxed text-white">
                  {translate('residentialExpertiseDesc2')}
                </p>
                <p className="text-base leading-relaxed text-white">
                  {translate('residentialExpertiseDesc3')}
                </p>
                <p className="text-base leading-relaxed text-white">
                  {translate('residentialExpertiseDesc4')}
                </p>
              </div>
            </div>
            {/* Cards Side */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 ${isRTL ? 'lg:col-start-1' : ''}`} data-aos={isRTL ? "fade-right" : "fade-left"} data-aos-once="false">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`p-8 shadow-lg transform transition-all duration-300 hover:scale-105 min-h-[200px] rounded-3xl ${isDarkMode ? 'bg-gray-800 bg-opacity-95 backdrop-blur-sm' : 'bg-white bg-opacity-95 backdrop-blur-sm'}`}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  data-aos-once="false"
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-[#FF4D00] rounded-full flex items-center justify-center mb-4 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{feature}</h3>
                  </div>
                  <p className={`text-base leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {index === 0 && translate('residentialContractorsDesc')}
                    {index === 1 && translate('detailedProjectTimelineDesc')}
                    {index === 2 && translate('qualityMaterialsDesc')}
                    {index === 3 && translate('comprehensiveWarrantySupportDesc')}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="pricing-section" className={`w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto w-full overflow-hidden">
          <div className={`rounded-3xl p-8 sm:p-12 flex flex-col items-center justify-center text-center ${isDarkMode ? 'bg-black' : 'bg-white'}`} data-aos="fade-up">
            <h2 
              className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-black'}`}
              data-aos="fade-down"
              data-aos-delay="50"
              data-aos-once="false"
            >
              {translate('readyToBuildDreamHome')}
            </h2>
            <p 
              className={`text-lg sm:text-xl mb-12 max-w-2xl ${isDarkMode ? 'text-white' : 'text-black'}`}
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="false"
            >
              {translate('dreamHomeDescription')}
            </p>
            <div className="flex">
              <button 
                className="bg-[#FF4D00] text-white font-semibold py-4 px-10 rounded-lg hover:bg-[#e6440a] transition-colors duration-300 transform hover:scale-105 text-lg"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-once="false"
                onClick={() => window.location.href='/contact'}
              >
                {translate('getStarted')}
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Residential;