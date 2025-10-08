import React, { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../footer";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { useLanguage } from "../contexts/LanguageContext";
import missionImg from "../assets/mission.jpeg";
import whoweareImg from "../assets/whoweare.jpg";
import whatwethinkImg from "../assets/whatwethink.jpg";
import aboutusVideo from "../assets/aboutus.mp4";
import ourvaluesImg from "../assets/cta.jpg";
import user1 from "../assets/user1.jpeg";
import user2 from "../assets/user2.jpeg";
import user3 from "../assets/user3.jpeg";
import g1 from "../assets/g1.jpg";
import g2 from "../assets/g2.jpg";
import g3 from "../assets/g3.jpg";
import g4 from "../assets/g4.jpg";
import g5 from "../assets/g5.jpg";

// Add custom CSS animations
const customStyles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  .animate-fade-in-up {
    animation: fadeInUp 1s ease-out forwards;
  }

  .animate-fade-in-up-delay {
    animation: fadeInUp 1s ease-out 0.3s forwards;
    opacity: 0;
  }

  .animate-fade-in-up-delay-1 {
    animation: fadeInUp 1s ease-out 0.2s forwards;
    opacity: 0;
  }

  .animate-fade-in-up-delay-2 {
    animation: fadeInUp 1s ease-out 0.4s forwards;
    opacity: 0;
  }

  .animate-fade-in-up-delay-3 {
    animation: fadeInUp 1s ease-out 0.6s forwards;
    opacity: 0;
  }

  .animate-fade-in-left {
    animation: fadeInLeft 1s ease-out forwards;
  }

  .animate-fade-in-left-delay {
    animation: fadeInLeft 1s ease-out 0.3s forwards;
    opacity: 0;
  }

  .animate-fade-in-left-delay-2 {
    animation: fadeInLeft 1s ease-out 0.4s forwards;
    opacity: 0;
  }

  .animate-fade-in-left-delay-3 {
    animation: fadeInLeft 1s ease-out 0.6s forwards;
    opacity: 0;
  }

  .animate-fade-in-left-delay-4 {
    animation: fadeInLeft 1s ease-out 0.8s forwards;
    opacity: 0;
  }

  .animate-fade-in-right {
    animation: fadeInRight 1s ease-out 0.5s forwards;
    opacity: 0;
  }

  .animate-slide-in-left {
    animation: slideInLeft 1.2s ease-out forwards;
  }

  .animate-slide-in-right {
    animation: slideInRight 1.2s ease-out 0.3s forwards;
    opacity: 0;
  }

  .animate-scale-in {
    animation: scaleIn 0.8s ease-out forwards;
  }

  .scroll-animate {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease-out;
  }

  .scroll-animate.animate {
    opacity: 1;
    transform: translateY(0);
  }

  .scroll-animate-left {
    opacity: 0;
    transform: translateX(-30px);
    transition: all 0.8s ease-out;
  }

  .scroll-animate-left.animate {
    opacity: 1;
    transform: translateX(0);
  }

  .scroll-animate-right {
    opacity: 0;
    transform: translateX(30px);
    transition: all 0.8s ease-out;
  }

  .scroll-animate-right.animate {
    opacity: 1;
    transform: translateX(0);
  }

  .scroll-animate-scale {
    opacity: 0;
    transform: scale(0.8);
    transition: all 0.8s ease-out;
  }

  .scroll-animate-scale.animate {
    opacity: 1;
    transform: scale(1);
  }

  .hover\\:scale-105:hover {
    transform: scale(1.05);
  }

  .hover\\:scale-110:hover {
    transform: scale(1.1);
  }

  .hover\\:-translate-y-2:hover {
    transform: translateY(-8px);
  }
`;

// Inject styles into document head
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = customStyles;
  document.head.appendChild(styleSheet);
}

function AboutHero() {
  const { elementRef, isVisible } = useScrollAnimation(0.1, 0);
  const { translate, isRTL } = useLanguage();

  return (
    <section ref={elementRef} className={`w-full h-screen flex items-center px-4 relative overflow-hidden ${isRTL ? 'justify-end' : 'justify-start'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Background Video */}
      <video 
        autoPlay 
        muted 
        loop 
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={aboutusVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className={`max-w-7xl w-full relative z-10 ${isRTL ? 'mr-0 text-right' : 'ml-0 text-left'}`}>
        <h1 className={`text-5xl md:text-7xl font-bold mb-6 leading-tight transition-all duration-1000 ease-out ${isRTL ? 'text-right' : 'text-left'} ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <span className={`text-white transition-all duration-1000 ease-out delay-200 ${
            isVisible ? 'translate-x-0 opacity-100' : (isRTL ? 'translate-x-20 opacity-0' : '-translate-x-20 opacity-0')
          }`}>{translate('aboutUsTitle')} </span>
           
        </h1>
        <p className={`text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed transition-all duration-1000 ease-out delay-600 ${isRTL ? 'text-right' : 'text-left'} ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          {translate('aboutHeroDescription')}
        </p>
      </div>
    </section>
  );
}

function OurGrowthThroughYears({ isDarkMode }) {
  const { elementRef, isVisible } = useScrollAnimation(0.3, 200);
  const { translate, isRTL } = useLanguage();
  
  const milestones = [
         {
       step: "01",
       title: translate("milestone1Title"),
       description: translate("milestone1Description"),
       color: "bg-[#FF4D00]"
     },
         {
       step: "02", 
       title: translate("milestone2Title"),
       description: translate("milestone2Description"),
       color: "bg-gray-600"
     },
     {
       step: "03",
       title: translate("milestone3Title"), 
       description: translate("milestone3Description"),
       color: "bg-[#FF4D00]"
     },
     {
       step: "04",
       title: translate("milestone4Title"),
       description: translate("milestone4Description"),
       color: "bg-gray-600"
     },
    {
      step: "05",
      title: translate("milestone5Title"),
      description: translate("milestone5Description"),
      color: "bg-[#FF4D00]"
    }
  ];

  return (
    <section ref={elementRef} className={`w-full py-20 px-4 transition-colors duration-300 ${
      isDarkMode ? 'bg-black' : 'bg-gray-100'
    }`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 ${isRTL ? 'text-right' : 'text-left'}`}>
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ease-out delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          } ${
            isDarkMode ? 'text-white' : 'text-[#FF4D00]'
          } text-center`}>
            {translate('ourGrowthTitle')}
          </h2>
          <p className={`text-xl max-w-3xl mx-auto transition-all duration-1000 ease-out delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          } ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          } text-center`}>
            {translate('ourGrowthDescription')}
          </p>
        </div>
        
                 <div className="relative">
           <div className="space-y-16">
             {milestones.map((milestone, index) => {
                // Assign specific images for each milestone card based on index
                const getCardImage = (index) => {
                  switch(index) {
                    case 0: return g1; // Foundation Laid
                    case 1: return g2; // Commercial Growth
                    case 2: return g3; // Technological Innovation
                    case 3: return g4; // Industry Leadership
                    case 4: return g5; // Future Vision
                    default: return g1;
                  }
                };
                const cardImg = getCardImage(index);
                // Define years for each milestone
                const years = ['2000', '2010', '2015', '2020', '2025'];
                const year = years[index] || '2000';
                const isBlackCircle = year === '2010' || year === '2020';
                return (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    {/* Image Card */}
                    <div className="flex-1 p-0 h-48 w-full">
                      <div className={`rounded-2xl shadow-lg relative overflow-hidden w-full h-full ${
                        isDarkMode 
                          ? (milestone.color === 'bg-[#FF4D00]' ? 'bg-[#FF4D00] text-white' : 'bg-black text-white')
                          : milestone.color
                      }`}>
                        <img 
                          src={cardImg} 
                          alt={milestone.title}
                          className="w-full h-full object-cover" 
                          style={{borderRadius: 'inherit'}}
                        />
                      </div>
                    </div>
                    {/* Timeline Square with Number and Label */}
                    <div className={`hidden lg:flex flex-col items-center justify-center w-44 h-44 shadow-lg z-10 relative scroll-animate-scale ${
                      isDarkMode 
                        ? (isBlackCircle ? 'bg-black' : 'bg-[#FF4D00]')
                        : (isBlackCircle ? 'bg-gray-600' : 'bg-[#FF4D00]')
                    }`} style={{ borderTopLeftRadius: '3rem', borderBottomRightRadius: '3rem' }}>
                      <div className="text-xl font-bold text-white">{year}</div>
                      <div className="text-xs font-semibold text-white mt-1">
                        {(() => {
                          switch (year) {
                            case '2000': return translate('timelineFoundation');
                            case '2010': return translate('timelineGrowth');
                            case '2015': return translate('timelineInnovation');
                            case '2020': return translate('timelineLeadership');
                            case '2025': return translate('timelineFuture');
                            default: return translate('timelineGrowth');
                          }
                        })()}
                      </div>
                    </div>
                    {/* Spacer for mobile */}
                    <div className="lg:hidden flex-1"></div>
                  </div>
                );
             })}
           </div>
         </div>
      </div>
    </section>
  );
}

function MissionVision({ isDarkMode }) {
  const { translate, isRTL } = useLanguage();
  
  return (
    <section className="w-full py-20 px-4 bg-[#FF4D00]" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          {/* Left: Mission Card */}
          <div className="flex flex-col justify-center items-center scroll-animate-left">
            <div className="bg-slate-600 p-6 rounded-xl border-l-4 border-white flex flex-col justify-center items-center" style={{ width: '300px', height: '300px' }}>
              <h3 className="text-xl font-bold text-white mb-2">{translate('ourMission')}</h3>
              <p className="text-white/90 text-center">
                {translate('missionStatement')}
              </p>
            </div>
          </div>
          {/* Center: Image */}
          <div className="relative flex justify-center items-center scroll-animate-scale">
            <img 
              src={whoweareImg} 
              alt="Our Mission & Vision" 
              className="w-full max-w-xs h-[300px] object-cover rounded-2xl shadow-2xl" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
          {/* Right: Vision Card */}
          <div className="flex flex-col justify-center items-center scroll-animate-right">
            <div className="bg-slate-600 p-6 rounded-xl border-l-4 border-white flex flex-col justify-center items-center" style={{ width: '300px', height: '300px' }}>
              <h3 className="text-xl font-bold text-white mb-2">{translate('ourVision')}</h3>
              <p className="text-white/90 text-center">
                {translate('visionStatement')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OurValues({ isDarkMode }) {
  const { translate, isRTL } = useLanguage();
  
  const values = [
    {
      title: translate('qualityCraftsmanship'),
      description: translate('qualityCraftsmanshipDesc')
    },
    {
      title: translate('onTimeDelivery'),
      description: translate('onTimeDeliveryDesc')
    },
    {
      title: "Client-Centric Approach",
      description: "We prioritize our clients’ needs, offering transparent communication and tailored solutions for every project."
    },
    {
      title: translate('safetyFirst'),
      description: translate('safetyFirstDesc')
    },
    {
      title: translate('sustainablePractices'),
      description: translate('sustainablePracticesDesc')
    },
    {
      title: translate('innovationTechnology'),
      description: translate('innovationTechnologyDesc')
    },
  ];

  return (
    <section className="w-full py-20 px-4 bg-[#f7f7f7]" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#FF4D00]">{translate('ourValues')}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, idx) => {
            const isOrange = (idx + 1) % 2 === 0;
            return (
              <div
                key={idx}
                className={`shadow-md p-8 h-full flex flex-col justify-between transition-all duration-300 ${
                  isOrange ? 'bg-[#FF4D00]' : 'bg-white'
                }`}
                style={{ borderTopLeftRadius: '2.5rem', borderBottomRightRadius: '2.5rem' }}
              >
                <h3 className={`text-xl font-bold mb-4 ${
                  isOrange ? 'text-white' : 'text-[#FF4D00]'
                }`}>
                  {value.title}
                </h3>
                <p className={`leading-relaxed ${
                  isOrange ? 'text-white' : 'text-gray-700'
                }`}>
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhatWeThink({ isDarkMode }) {
  const { translate, isRTL } = useLanguage();
  
  return (
    <section className={`w-full py-12 px-4 transition-colors duration-300 ${
      isDarkMode ? 'bg-black' : 'bg-white'
    }`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl text-justify mx-auto">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch ${isRTL ? 'lg:grid-flow-col-reverse' : ''}`}>
          {/* Left: Content */}
          <div className={`flex flex-col justify-center space-y-4 scroll-animate-left ${isRTL ? 'text-right' : 'text-left'}`}>
            <div>
              <h2 className={`text-3xl md:text-4xl font-bold mb-3 leading-tight ${
                isDarkMode ? 'text-white' : 'text-[#FF4D00]'
              }`}>
                {translate('whatMakesUsUnique')}
              </h2>
              <p className={`text-base leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {translate('uniqueDescription')}
              </p>
            </div>
            <div className="space-y-3">
              <div className={`p-4 rounded-xl border-l-4 border-[#FF4D00] hover:scale-105 transition-all duration-300 ${
                isDarkMode ? 'bg-gray-800' : 'bg-[#FF4D00]/5'
              }`}>
                <h3 className={`text-lg font-bold mb-1 ${
                  isDarkMode ? 'text-white' : 'text-[#FF4D00]'
                }`}>{translate('qualityCraftsmanship')}</h3>
                <p className={`text-sm ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {translate('qualityCraftsmanshipDesc')}
                </p>
              </div>
              <div className={`p-4 rounded-xl border-l-4 border-[#FF4D00] hover:scale-105 transition-all duration-300 ${
                isDarkMode ? 'bg-gray-800' : 'bg-[#FF4D00]/5'
              }`}>
                <h3 className={`text-lg font-bold mb-1 ${
                  isDarkMode ? 'text-white' : 'text-[#FF4D00]'
                }`}>{translate('innovativeSolutions')}</h3>
                <p className={`text-sm ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {translate('innovativeSolutionsDesc')}
                </p>
              </div>
              <div className={`p-4 rounded-xl border-l-4 border-[#FF4D00] hover:scale-105 transition-all duration-300 ${
                isDarkMode ? 'bg-gray-800' : 'bg-[#FF4D00]/5'
              }`}>
                <h3 className={`text-lg font-bold mb-1 ${
                  isDarkMode ? 'text-white' : 'text-[#FF4D00]'
                }`}>{translate('transparentCommunication')}</h3>
                <p className={`text-sm ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {translate('transparentCommunicationDesc')}
                </p>
              </div>
            </div>
          </div>
          {/* Right: Image */}
          <div className="flex justify-center items-center scroll-animate-right">
            <img 
              src={whatwethinkImg} 
              alt="What Makes Us Unique" 
              className="w-full h-96 object-cover rounded-2xl shadow-xl" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}

 

 

 

export default function About() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { translate, isRTL } = useLanguage();

  // Scroll to top when component mounts
  useScrollToTop();

  // Dark mode functionality
  useEffect(() => {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(darkMode);
  }, []);

  useEffect(() => {
    const handleDarkModeChange = (event) => {
      setIsDarkMode(event.detail);
    };
    
    window.addEventListener('darkModeChanged', handleDarkModeChange);
    
    return () => {
      window.removeEventListener('darkModeChanged', handleDarkModeChange);
    };
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observe all elements with scroll animation classes
    const animatedElements = document.querySelectorAll(
      '.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale'
    );
    
    animatedElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      animatedElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Header />
      <AboutHero />
      <OurGrowthThroughYears isDarkMode={isDarkMode} />
      <MissionVision isDarkMode={isDarkMode} />
      <WhatWeThink isDarkMode={isDarkMode} />
      {/* <WhatMakesUsUnique isDarkMode={isDarkMode} /> */}
      <OurValues isDarkMode={isDarkMode} />

      {/* Construction CTA Section */}
      <section className="w-full py-16 px-4 bg-[#FF4D00]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{translate('readyToBuildVision')}</h2>
            <p className="text-lg text-white/90 mb-6">{translate('ctaDescription')}</p>
            <a href="/contact" className="inline-block bg-white text-[#FF4D00] font-bold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300">{translate('startJourney')}</a>
          </div>
          <div className="flex-1 flex justify-center">
            <img src={ourvaluesImg} alt="Construction CTA" className="w-full max-w-xs rounded-2xl shadow-xl border-4 border-white" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 