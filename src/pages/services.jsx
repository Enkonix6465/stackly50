// Construction CTA Section
function ConstructionCTA() {
  const { translate, isRTL } = useLanguage();
  const navigate = useNavigate();
  const handleContact = () => {
    navigate('/contact');
  };
  return (
    <section className="w-full py-20 px-4 bg-[#FF4D00]" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className={`max-w-5xl mx-auto ${isRTL ? 'text-center' : 'text-center'}`}>
        <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-white ${isRTL ? 'text-center' : 'text-center'}`}>{translate('readyToBuildVision')}</h2>
        <p className={`text-xl text-white/90 mb-8 ${isRTL ? 'text-center' : 'text-center'}`}>{translate('ctaDescription')}</p>
        <button
          onClick={handleContact}
          className={`bg-white text-[#FF4D00] font-semibold px-10 py-4 rounded-xl shadow-lg hover:bg-gray-100 transition-all duration-300 text-lg ${isRTL ? 'text-center' : 'text-center'}`}
        >
          {translate('getAQuote')}
        </button>
      </div>
    </section>
  );
}
function FeaturedProjects() {
  const { translate, isRTL } = useLanguage();
  
  // Example images (replace with your own if desired)
  const images = [
    fitnessImg,
    lifeImg,
    renovationImg,
    sleepImg
  ];
  const projects = [
    {
      title: translate('renovation').toUpperCase(),
      desc: translate('officeInteriorModernStyle'),
    },
    {
      title: translate('finishingWorks'),
      desc: translate('decorativeWorksInLiving'),
    },
    {
      title: translate('redevelopment'),
      desc: translate('repairOfApartments'),
    },
    {
      title: translate('finishingWorks'),
      desc: translate('modernBathroom'),
    }
  ];
  return (
    <section className="w-full py-16 px-4 bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900 ${isRTL ? 'text-right' : 'text-left'}`}>{translate('featuredProjects')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {projects.map((project, idx) => (
            <div key={project.title + idx} className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col items-center">
              <img src={images[idx % images.length]} alt={project.title} className="w-full h-72 object-cover" />
              <div className={`flex flex-col items-center px-6 pt-4 pb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                <h3 className={`text-lg font-bold text-[#FF4D00] mb-2 uppercase text-center`}>{project.title}</h3>
                <p className={`text-gray-700 text-base text-center`}>{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { useState } from "react";

function CostEstimator() {
  const { translate, isRTL } = useLanguage();
  const [projectType, setProjectType] = useState("Renovation");
  const [area, setArea] = useState("");
  const [material, setMaterial] = useState("Standard");
  const [location, setLocation] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  // Simple cost formula for demonstration
  const getBaseRate = () => {
    switch (projectType) {
      case "Residential": return material === "Luxury" ? 1800 : material === "Premium" ? 1400 : 1000;
      case "Commercial": return material === "Luxury" ? 2200 : material === "Premium" ? 1700 : 1300;
      case "Industrial": return material === "Luxury" ? 2500 : material === "Premium" ? 2000 : 1500;
      case "Renovation":
      default: return material === "Luxury" ? 2000 : material === "Premium" ? 1500 : 1100;
    }
  };
  const cost = area && !isNaN(area) ? (parseFloat(area) * getBaseRate()).toLocaleString() : "-";

  return (
    <section className="w-full py-16 px-4 bg-orange-50" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-4xl mx-auto md:px-12">
  <h2 className={`text-3xl md:text-4xl font-bold mb-2 mt-2 ${isRTL ? 'text-right' : 'text-left'}`}>{translate('estimateProjectCost')}</h2>
        <p className={`text-gray-700 mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>{translate('costEstimatorDescription')}</p>
        <form className="space-y-4">
          <select value={projectType} onChange={e => setProjectType(e.target.value)} className={`w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-200 ${isRTL ? 'text-right' : 'text-left'}`}>
            <option value="Renovation">{translate('renovation')}</option>
            <option value="Residential">{translate('residential')}</option>
            <option value="Commercial">{translate('commercial')}</option>
            <option value="Industrial">{translate('industrial')}</option>
          </select>
          <input type="number" min="0" placeholder={translate('areaSizePlaceholder')} value={area} onChange={e => setArea(e.target.value)} className={`w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-200 ${isRTL ? 'text-right' : 'text-left'}`} />
          <select value={material} onChange={e => setMaterial(e.target.value)} className={`w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-200 ${isRTL ? 'text-right' : 'text-left'}`}>
            <option value="Standard">{translate('standard')}</option>
            <option value="Premium">{translate('premium')}</option>
            <option value="Luxury">{translate('luxury')}</option>
          </select>
          <input type="text" placeholder={translate('locationOptional')} value={location} onChange={e => setLocation(e.target.value)} className={`w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-200 ${isRTL ? 'text-right' : 'text-left'}`} />
          <div className={`flex flex-col md:flex-row gap-4 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            <input type="text" placeholder={translate('yourName')} value={name} onChange={e => setName(e.target.value)} className={`flex-1 rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-200 ${isRTL ? 'text-right' : 'text-left'}`} />
            <input type="text" placeholder={translate('phoneNumber')} value={phone} onChange={e => setPhone(e.target.value)} className={`flex-1 rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-200 ${isRTL ? 'text-right' : 'text-left'}`} />
          </div>
          <div className={`flex flex-col md:flex-row items-center gap-4 mt-2 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            <div className={`flex-1 text-lg font-semibold ${isRTL ? 'text-right' : 'text-left'}`} style={{ color: '#FF4D00', background: '#E6FFF2', borderRadius: '0.375rem', padding: '0.75rem 1rem' }}>
              {translate('instantApproximateCost')}: <span className="font-bold">{cost !== "-" ? `₹${cost}` : "-"}</span>
            </div>
            <button type="button" className="bg-black text-white font-semibold px-8 py-4 rounded-md mt-2 md:mt-0 hover:bg-gray-900 transition-all shadow-md">{translate('getDetailedQuote')}</button>
          </div>
        </form>
      </div>
    </section>
  );
}
// Quality Services Section for Construction
function QualityServices() {
  const { translate, isRTL } = useLanguage();
  
  // Example images (replace with your own if desired)
  const images = [
    fitnessImg, // Residential Construction
    renovationImg, // Commercial Construction
    sleepImg, // Renovation & Remodeling
    lifeImg, // Interior Design & Finishing
    nutritionImg, // Industrial Construction
    yogaImg, // Road/Infrastructure Construction
  ];
  const icons = [
    <svg className="w-8 h-8 text-[#FF4D00]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 21v-2a4 4 0 014-4h10a4 4 0 014 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
    <svg className="w-8 h-8 text-[#FF4D00]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M16 3v4M8 3v4"/></svg>,
    <svg className="w-8 h-8 text-[#FF4D00]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 21v-7a4 4 0 014-4h8a4 4 0 014 4v7"/><rect x="9" y="3" width="6" height="4" rx="2"/></svg>,
    <svg className="w-8 h-8 text-[#FF4D00]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 9h6v6H9z"/></svg>,
    <svg className="w-8 h-8 text-[#FF4D00]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="13" rx="2"/><path d="M16 3v4M8 3v4"/></svg>,
    <svg className="w-8 h-8 text-[#FF4D00]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M2 17h20M2 12h20M2 7h20"/></svg>,
  ];
  const services = [
    {
      title: translate('residentialConstruction'),
      desc: translate('residentialConstructionDesc'),
    },
    {
      title: translate('commercialConstruction'),
      desc: translate('commercialConstructionDesc'),
    },
    {
      title: translate('renovationRemodeling'),
      desc: translate('renovationRemodelingDesc'),
    },
    {
      title: translate('interiorDesignFinishing'),
      desc: translate('interiorDesignFinishingDesc'),
    },
    {
      title: translate('industrialConstruction'),
      desc: translate('industrialConstructionDesc'),
    },
    {
      title: translate('roadInfrastructureConstruction'),
      desc: translate('roadInfrastructureConstructionDesc'),
    },
  ];
  return (
    <section className="w-full py-16 px-4 bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-3xl md:text-4xl font-bold mb-10 text-[#FF4D00] ${isRTL ? 'text-right' : 'text-left'}`}>{translate('qualityServices')}</h2>
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ${isRTL ? 'rtl' : 'ltr'}`}>
          {services.map((service, idx) => (
            <div key={service.title} className={`bg-white rounded-2xl shadow-md overflow-hidden flex flex-col ${isRTL ? 'rtl' : 'ltr'}`}>
              <img src={images[idx]} alt={service.title} className="w-full h-64 object-cover" />
              <div className={`flex items-center gap-3 px-6 pt-6 pb-2 ${isRTL ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}>
                {icons[idx]}
                <h3 className={`text-lg font-bold text-[#FF4D00] flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>{service.title}</h3>
              </div>
              <p className={`px-6 pb-6 text-gray-600 text-sm leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Footer from "../footer";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useLanguage } from "../contexts/LanguageContext";
import servicesVideo from "../assets/services.mp4";
import renovationImg from "../assets/renovation.jpg";
import sleepImg from "../assets/renovation.jpg";
import roadImg from "../assets/road.jpg";
import lifeImg from "../assets/interior.jpg";
import fitnessImg from "../assets/residentialtower.jpg";
import nutritionImg from "../assets/industrial.jpg";
import yogaImg from "../assets/road.jpg";
import wellnessTipsImg from "../assets/cta.jpg";

import safetyImg from "../assets/cta.jpg";
// Safety Standards Followed Section
function SafetyStandardsFollowed() {
  const { translate, isRTL } = useLanguage();
  const standards = [
    {
      title: translate('certifiedProfessionals'),
      desc: translate('certifiedProfessionalsDesc')
    },
    {
      title: translate('regularAudits'),
      desc: translate('regularAuditsDesc')
    },
    {
      title: translate('qualityMaterials'),
      desc: translate('qualityMaterialsDesc')
    },
    {
      title: translate('emergencyPreparedness'),
      desc: translate('emergencyPreparednessDesc')
    }
  ];
  return (
    <section className="w-full py-16 px-4 bg-orange-50" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${isRTL ? 'md:grid-flow-col-dense' : ''}`}>
        {/* Cards Section */}
        <div className={`grid grid-cols-1 gap-6 ${isRTL ? 'md:order-2' : 'md:order-1'}`}>
          <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-[#FF4D00] ${isRTL ? 'text-right' : 'text-left'}`}>{translate('safetyStandardsFollowed')}</h2>
          {standards.map((item, idx) => (
            <div key={idx} className={`bg-white rounded-xl shadow-md p-6 flex flex-col gap-2 ${isRTL ? 'border-r-4 border-[#FF4D00]' : 'border-l-4 border-[#FF4D00]'}`}>
              <h3 className={`text-xl font-semibold text-[#FF4D00] ${isRTL ? 'text-right' : 'text-left'}`}>{item.title}</h3>
              <p className={`text-gray-700 text-base ${isRTL ? 'text-right' : 'text-left'}`}>{item.desc}</p>
            </div>
          ))}
        </div>
        {/* Image Section */}
        <div className={`flex justify-center items-center ${isRTL ? 'md:order-1' : 'md:order-2'}`}>
          <img src={safetyImg} alt="Safety Standards" className="w-full max-w-md rounded-2xl shadow-2xl object-cover" />
        </div>
      </div>
    </section>
  );
}

function ServicesHero() {
  const { elementRef, isVisible } = useScrollAnimation(0.1, 0);
  const { translate, isRTL } = useLanguage();
  const navigate = useNavigate();

  const scrollToServices = () => {
    const servicesSection = document.getElementById('our-services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToContact = () => {
    navigate('/contact');
  };

  return (
    <section ref={elementRef} className={`w-full h-screen flex items-center px-4 relative overflow-hidden ${isRTL ? 'justify-end' : 'justify-start'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Background Video */}
      <video 
        autoPlay 
        muted 
        loop 
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={servicesVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className={`max-w-7xl w-full relative z-10 ${isRTL ? 'mr-0 text-right' : 'ml-0 text-left'}`}>
        <h2 className={`text-5xl md:text-7xl font-bold mb-6 leading-tight text-white transition-all duration-1000 ease-out ${isRTL ? 'text-right' : 'text-left'} ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
         {translate('startBuildingDreams')}
        </h2>
        <p className={`text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed mb-8 transition-all duration-1000 ease-out delay-300 ${isRTL ? 'text-right' : 'text-left'} ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          {translate('servicesHeroDescription')}
        </p>
        <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ease-out delay-500 ${isRTL ? 'justify-end sm:flex-row-reverse' : 'justify-start'} ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`} dir={isRTL ? 'rtl' : 'ltr'}>
          <button 
            onClick={scrollToServices}
            className={`bg-white text-[#FF4D00] font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${isRTL ? 'text-right' : 'text-left'}`}>
            {translate('exploreServices')}
          </button>
          <button 
            onClick={navigateToContact}
            className={`bg-transparent text-white font-semibold px-8 py-4 rounded-xl border-2 border-white hover:bg-white hover:text-[#FF4D00] transition-all duration-300 ${isRTL ? 'text-right' : 'text-left'}`}>
            {translate('getAQuote')}
          </button>
        </div>
      </div>
    </section> 
  );
}

 

function SymptomGoalChecker({ isDarkMode }) {
  const navigate = useNavigate();
  const [selectedSymptoms, setSelectedSymptoms] = React.useState([]);
  const [showResults, setShowResults] = React.useState(false);
  const { elementRef, isVisible } = useScrollAnimation(0.3, 200);

  const clientSymptoms = [
    {
      id: "insomnia",
      title: "Insomnia",
      description: "Difficulty falling or staying asleep"
    },
    {
      id: "stress",
      title: "Chronic Stress",
      description: "Constant worry and anxiety"
    },
    {
      id: "fatigue",
      title: "Low Energy",
      description: "Feeling tired and unmotivated"
    },
    {
      id: "weight_gain",
      title: "Weight Issues",
      description: "Struggling with weight management"
    },
    {
      id: "back_pain",
      title: "Back Pain",
      description: "Chronic back and neck pain"
    },
    {
      id: "digestive",
      title: "Digestive Issues",
      description: "Bloating, indigestion, gut problems"
    },
    {
      id: "mood_swings",
      title: "Mood Swings",
      description: "Irregular mood and emotional instability"
    },
    {
      id: "headaches",
      title: "Frequent Headaches",
      description: "Regular tension or migraine headaches"
    }
  ];

  const serviceRecommendations = {
    insomnia: [
      {
        title: "Industrial Construction",
        description: "Advanced industrial construction services for factories, warehouses, and manufacturing facilities",
        image: sleepImg,
        servicePage: "industrial"
      },
      {
        title: "Yoga & Meditation",
        description: "Mind-body wellness through yoga classes and meditation sessions for stress relief and inner peace",
        image: yogaImg,
        servicePage: "yoga-meditation"
      }
    ],
    stress: [
      {
        title: "Renovation & Remodeling",
        description: "Transform your space with expert renovation and remodeling solutions for homes and businesses",
        image: renovationImg,
        servicePage: "renovation"
      },
      {
        title: "Yoga & Meditation",
        description: "Transform your mind and body through comprehensive yoga and meditation programs",
        image: yogaImg,
        servicePage: "yoga-meditation"
      }
    ],
    fatigue: [
      {
        title: "Interior Design & Finishing",
        description: "Transform your space with expert interior design and premium finishing solutions",
        image: fitnessImg,
        servicePage: "interior-design"
      },
      {
        title: "Nutrition Guidance",
        description: "Expert nutrition advice and meal planning to fuel your body and mind",
        image: nutritionImg,
        servicePage: "nutrition-guidance"
      }
    ],
    weight_gain: [
      {
        title: "Personal Training",
        description: "One-on-one fitness coaching tailored to your weight loss goals and fitness level",
        image: fitnessImg,
        servicePage: "personal-training"
      },
      {
        title: "Nutrition Guidance",
        description: "Master the art of healthy eating with comprehensive nutrition programs",
        image: nutritionImg,
        servicePage: "nutrition-guidance"
      }
    ],
    back_pain: [
      {
        title: "Yoga & Meditation",
        description: "Improve flexibility and reduce pain through yoga classes and meditation sessions",
        image: yogaImg,
        servicePage: "yoga-meditation"
      },
      {
        title: "Personal Training",
        description: "Expert trainers provide techniques to strengthen core and improve posture",
        image: fitnessImg,
        servicePage: "personal-training"
      }
    ],
    digestive: [
      {
        title: "Nutrition Guidance",
        description: "Expert nutrition advice and meal planning to support digestive health",
        image: nutritionImg,
        servicePage: "nutrition-guidance"
      },
      {
        title: "Road & Infrastructure Construction",
        description: "Professional road and infrastructure construction services for durable and safe transportation networks",
        image: roadImg,
        servicePage: "road"
      }
    ],
    mood_swings: [
      {
        title: "Renovation & Remodeling",
        description: "Complete renovation solutions to transform and modernize your living or working space",
        image: renovationImg,
        servicePage: "renovation"
      },
      {
        title: "Road & Infrastructure Construction",
        description: "Complete infrastructure solutions including highways, bridges, and urban development projects",
        image: roadImg,
        servicePage: "road"
      }
    ],
    headaches: [
      {
        title: "Yoga & Meditation",
        description: "Mind-body wellness through yoga classes and meditation sessions for stress relief",
        image: yogaImg,
        servicePage: "yoga-meditation"
      },
      {
        title: "Industrial Construction",
        description: "Robust industrial construction solutions for heavy industry and manufacturing operations",
        image: sleepImg,
        servicePage: "industrial"
      }
    ]
  };

  const handleSymptomToggle = (symptomId) => {
    setSelectedSymptoms(prev => 
      prev.includes(symptomId) 
        ? prev.filter(id => id !== symptomId)
        : [...prev, symptomId]
    );
  };

  const handleFindServices = () => {
    if (selectedSymptoms.length > 0) {
      // Scroll to top when showing results
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      setShowResults(true);
    }
  };

  const getRecommendedServices = () => {
    const allServices = [];
    const seenServices = new Set();
    
    selectedSymptoms.forEach(symptomId => {
      if (serviceRecommendations[symptomId]) {
        serviceRecommendations[symptomId].forEach(service => {
          // Use service title as unique identifier to avoid duplicates
          if (!seenServices.has(service.title)) {
            seenServices.add(service.title);
            allServices.push(service);
          }
        });
      }
    });
    return allServices;
  };

  const handleServiceClick = (servicePage) => {
    try {
      // Scroll to top before navigation
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      
      // Navigate to the specific service page based on servicePage value
      switch (servicePage) {
        case 'residential':
          navigate('/residential');
          break;
        case 'commercial':
          navigate('/commercial');
          break;
        case 'rennovation':
          navigate('/rennovation');
          break;
        case 'interior-design':
          navigate('/interior-design');
          break;
        case 'industrial':
          navigate('/industrial');
          break;
        case 'road':
          navigate('/road');
          break;
        default:
          console.warn(`Unknown service page: ${servicePage}`);
          break;
      }
    } catch (error) {
      console.error('Error navigating to service page:', error);
    }
  };

  return (
    <section ref={elementRef} className="w-full py-20 px-4 bg-[#FF4D00]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-1000 ease-out delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            What are your current symptoms?
          </h2>
          <p className={`text-xl text-white/90 max-w-3xl mx-auto transition-all duration-1000 ease-out delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            Tell us about your symptoms and we'll guide you to the most suitable wellness services.
          </p>
        </div>

        {!showResults ? (
          <>
                         <div className="max-w-6xl mx-auto mb-12">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                 {/* Left Column - First 4 symptoms */}
                 <div className="space-y-4">
                   {clientSymptoms.slice(0, 4).map((symptom) => (
                     <label
                       key={symptom.id}
                       className={`flex items-center p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                         selectedSymptoms.includes(symptom.id)
                           ? `border-[#FF4D00] shadow-lg ${isDarkMode ? 'bg-black' : 'bg-white'}`
                           : `${isDarkMode ? 'border-gray-600 bg-black hover:border-[#FF4D00]' : 'border-gray-200 bg-white hover:border-[#FF4D00]'} hover:shadow-md`
                       }`}
                     >
                       <input
                         type="checkbox"
                         checked={selectedSymptoms.includes(symptom.id)}
                         onChange={() => handleSymptomToggle(symptom.id)}
                         className="w-5 h-5 text-[#FF4D00] border-gray-300 rounded focus:ring-[#FF4D00] focus:ring-2 mr-4"
                       />
                       <div className="flex-1">
                         <div className={`font-semibold text-lg ${
                           selectedSymptoms.includes(symptom.id) ? 'text-[#FF4D00]' : (isDarkMode ? 'text-white' : 'text-gray-900')
                         }`}>
                           {symptom.title}
                         </div>
                         <div className={`text-sm mt-1 ${
                           selectedSymptoms.includes(symptom.id) ? 'text-[#FF4D00]/80' : (isDarkMode ? 'text-gray-300' : 'text-gray-600')
                         }`}>
                           {symptom.description}
                         </div>
                       </div>
                     </label>
                   ))}
                 </div>
                 
                 {/* Right Column - Last 4 symptoms */}
                 <div className="space-y-4">
                   {clientSymptoms.slice(4, 8).map((symptom) => (
                     <label
                       key={symptom.id}
                       className={`flex items-center p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                         selectedSymptoms.includes(symptom.id)
                           ? `border-[#FF4D00] shadow-lg ${isDarkMode ? 'bg-black' : 'bg-white'}`
                           : `${isDarkMode ? 'border-gray-600 bg-black hover:border-[#FF4D00]' : 'border-gray-200 bg-white hover:border-[#FF4D00]'} hover:shadow-md`
                       }`}
                     >
                       <input
                         type="checkbox"
                         checked={selectedSymptoms.includes(symptom.id)}
                         onChange={() => handleSymptomToggle(symptom.id)}
                         className="w-5 h-5 text-[#FF4D00] border-gray-300 rounded focus:ring-[#FF4D00] focus:ring-2 mr-4"
                       />
                       <div className="flex-1">
                         <div className={`font-semibold text-lg ${
                           selectedSymptoms.includes(symptom.id) ? 'text-[#FF4D00]' : (isDarkMode ? 'text-white' : 'text-gray-900')
                         }`}>
                           {symptom.title}
                         </div>
                         <div className={`text-sm mt-1 ${
                           selectedSymptoms.includes(symptom.id) ? 'text-[#FF4D00]/80' : (isDarkMode ? 'text-gray-300' : 'text-gray-600')
                         }`}>
                           {symptom.description}
                         </div>
                       </div>
                     </label>
                   ))}
                 </div>
               </div>
             </div>

                         <div className="text-center">
                                <button
                   onClick={handleFindServices}
                   disabled={selectedSymptoms.length === 0}
                   className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                     selectedSymptoms.length > 0
                       ? 'bg-[#FF4D00] text-white hover:bg-[#e6440a] shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                       : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                   }`}
                 >
                   Find Services for My Symptoms
                 </button>
             </div>
          </>
        ) : (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className={`text-2xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Recommended Services for Your Symptoms
              </h3>
              <p className={`mb-6 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Based on your symptoms, these services are specifically designed to help you find relief and improve your health.
              </p>
              <button
                onClick={() => {
                  // Scroll to top
                  window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                  });
                  setShowResults(false);
                  setSelectedSymptoms([]);
                }}
                className="bg-white text-[#FF4D00] px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                ← Back to Symptoms
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getRecommendedServices().map((service, index) => (
                <div key={`${service.title}-${index}`} className={`p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border ${
                  isDarkMode ? 'bg-black border-gray-700' : 'bg-white border-gray-100'
                }`}>
                  <div className="w-16 h-16 rounded-lg overflow-hidden mb-4">
                    <img 
                      src={service.image} 
                      alt={service.title || 'Service'}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        console.warn(`Failed to load image for service: ${service.title}`);
                      }}
                    />
                  </div>
                  <h4 className={`text-lg font-bold mb-3 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {service.title || 'Service'}
                  </h4>
                  <p className={`text-sm leading-relaxed mb-4 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {service.description || 'No description available'}
                  </p>
                  <button 
                    onClick={() => handleServiceClick(service.servicePage)}
                    className="bg-[#FF4D00] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#e6440a] transition-colors duration-300"
                  >
                    View Service Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function WhatYouCanAchieve({ isDarkMode }) {
  const goals = [
    {
      title: "Improved Flexibility",
      description: "Enhance your range of motion and joint mobility through our specialized yoga and stretching programs designed for all fitness levels.",
      color: "bg-[#FF4D00]",
      number: "01"
    },
    {
      title: "Reduced Anxiety",
      description: "Lower stress levels and improve mental clarity with our mindfulness practices, meditation sessions, and stress management techniques.",
      color: "bg-[#FF4D00]",
      number: "02"
    },
    {
      title: "Better Posture",
      description: "Strengthen your core and achieve proper spine alignment through our posture correction programs and specialized training sessions.",
      color: "bg-[#FF4D00]",
      number: "03"
    },
    {
      title: "Inner Calm",
      description: "Achieve deep sense of peace and emotional balance through our holistic wellness practices and expert-guided meditation programs.",
      color: "bg-[#FF4D00]",
      number: "04"
    }
  ];

  return (
    <section className={`w-full py-20 px-4 transition-colors duration-300 ${
      isDarkMode ? 'bg-black' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            What You Can Achieve
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Discover realistic, inspiring outcomes from using our wellness services. 
            Transform your life with proven results and sustainable improvements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 text-justify md:grid-cols-2 lg:grid-cols-4 gap-6">
          {goals.map((goal, index) => (
            <div 
              key={index} 
              className={`rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden ${
                isDarkMode ? 'bg-black' : 'bg-white'
              }`}
            >
              {/* Colored Tab */}
              <div className={`${goal.color} text-white p-4 rounded-tl-xl`}>
                <div className="text-3xl font-bold">{goal.number}</div>
              </div>
              
              {/* Card Content */}
              <div className="p-6">
                {/* Title and Description */}
                <div>
                  <h3 className={`text-lg font-bold mb-3 ${goal.color.replace('bg-', 'text-')}`}>
                    {goal.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {goal.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        

      </div>
    </section>
  );
}

function HealthWellnessTips({ isDarkMode }) {
  const tips = [
    {
      title: "Stay Hydrated",
      description: "Drink at least 8 glasses of water daily to maintain optimal body function and energy levels."
    },
    {
      title: "Get Quality Sleep",
      description: "Aim for 7-9 hours of sleep per night to support recovery and mental clarity."
    },
    {
      title: "Move Daily",
      description: "Incorporate at least 30 minutes of physical activity into your daily routine."
    },
    {
      title: "Practice Mindfulness",
      description: "Take 10-15 minutes daily for meditation or deep breathing exercises."
    },
    {
      title: "Eat Balanced Meals",
      description: "Focus on whole foods, lean proteins, and plenty of fruits and vegetables."
    }
  ];

  return (
    <section className="w-full py-20 px-4 bg-[#FF4D00]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1 flex items-center">
            <img 
              src={wellnessTipsImg} 
              alt="Health and Wellness" 
              className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
            />
          </div>
          
          {/* Right Side - Tips */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDarkMode ? 'text-black' : 'text-white'
            }`}>
              Health & Wellness Tips
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Simple, effective strategies to enhance your daily wellness routine and improve your overall health.
            </p>
            
            <div className="space-y-6">
              {tips.map((tip, index) => (
                <div key={index} className="border-l-4 border-white pl-6 py-2">
                  <h3 className={`text-lg font-semibold mb-2 ${
                    isDarkMode ? 'text-black' : 'text-white'
                  }`}>
                    {tip.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection({ isDarkMode }) {
  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate('/contact');
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('our-services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={`w-full py-20 px-4 transition-colors duration-300 ${
      isDarkMode ? 'bg-black' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
          isDarkMode ? 'text-white' : 'text-[#FF4D00]'
        }`}>
          Ready to Transform Your Life?
        </h2>
        <p className={`text-xl max-w-3xl mx-auto mb-8 ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          Join thousands of people who have already improved their health and wellness with our expert guidance and proven programs.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={navigateToContact}
            className="bg-[#FF4D00] text-white font-semibold px-8 py-4 rounded-xl hover:bg-[#e6440a] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Get Started Today
          </button>
          <button 
            onClick={scrollToServices}
            className="bg-transparent text-[#FF4D00] font-semibold px-8 py-4 rounded-xl border-2 border-[#FF4D00] hover:bg-[#FF4D00] hover:text-white transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const { isRTL } = useLanguage();

  // Scroll to top when component mounts
  useScrollToTop();

  // Dark mode functionality
  React.useEffect(() => {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(darkMode);
  }, []);

  React.useEffect(() => {
    const handleDarkModeChange = (event) => {
      setIsDarkMode(event.detail);
    };
    
    window.addEventListener('darkModeChanged', handleDarkModeChange);
    
    return () => {
      window.removeEventListener('darkModeChanged', handleDarkModeChange);
    };
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Header />
      <ServicesHero />
      <QualityServices />
      <CostEstimator />
      <FeaturedProjects />
      <SafetyStandardsFollowed />
  <ConstructionCTA />
  <Footer />
    </div>
  );
} 