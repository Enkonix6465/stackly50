
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import Footer from '../footer';
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { useLanguage } from '../contexts/LanguageContext';
import morningWellness from '../assets/road1.jpg';
import mindfulMeditation from '../assets/homecta.jpg';
import nutrition from '../assets/road.jpg';
import blogVideo from '../assets/blogVideo.mp4';
import quizImage from '../assets/quiz.jpg';

function Blog() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();
  const { translate, isRTL } = useLanguage();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [currentMythFact, setCurrentMythFact] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('safety');
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);

  // Scroll to top when component mounts
  useScrollToTop();

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

  const categoryContent = {
    safety: {
      title: "Construction Site Safety",
      description: "Explore essential safety practices and protocols to ensure a secure construction environment for all workers and visitors.",
      benefits: [
        "Reduced risk of accidents",
        "Improved compliance with regulations",
        "Safer work environment",
        "Increased worker confidence"
      ],
      tips: "Always wear personal protective equipment (PPE) and follow site safety guidelines strictly.",
      articles: "20+ articles on construction site safety and best practices"
    },
    materials: {
      title: "Building Materials",
      description: "Stay updated on the latest trends, innovations, and best uses of construction materials for durable and efficient projects.",
      benefits: [
        "Enhanced project durability",
        "Cost-effective solutions",
        "Sustainable building options",
        "Improved project timelines"
      ],
      tips: "Choose materials based on project requirements, climate, and sustainability goals.",
      articles: "15+ articles on building materials and innovations"
    },
    projectManagement: {
      title: "Project Management",
      description: "Master the art of managing construction projects from planning to completion with proven strategies and tools.",
      benefits: [
        "Efficient resource allocation",
        "On-time project delivery",
        "Better communication",
        "Reduced project risks"
      ],
      tips: "Use project management software to track progress and communicate with your team.",
      articles: "18+ articles on construction project management"
    },
    equipment: {
      title: "Construction Equipment",
      description: "Learn about the latest construction equipment, maintenance tips, and how to choose the right machinery for your site.",
      benefits: [
        "Increased productivity",
        "Reduced downtime",
        "Improved safety",
        "Cost savings on repairs"
      ],
      tips: "Regularly inspect and maintain equipment to prevent breakdowns and accidents.",
      articles: "12+ articles on construction equipment and maintenance"
    },
    greenBuilding: {
      title: "Green Building",
      description: "Discover sustainable construction practices and eco-friendly building techniques for a greener future.",
      benefits: [
        "Lower environmental impact",
        "Energy efficiency",
        "Healthier buildings",
        "Potential cost savings"
      ],
      tips: "Incorporate renewable materials and energy-efficient systems in your projects.",
      articles: "10+ articles on green building and sustainability"
    },
    careers: {
      title: "Construction Careers",
      description: "Explore career opportunities, required skills, and growth paths in the construction industry.",
      benefits: [
        "Diverse job roles",
        "Opportunities for advancement",
        "Skill development",
        "Job security"
      ],
      tips: "Pursue certifications and hands-on experience to advance your construction career.",
      articles: "8+ articles on construction careers and education"
    },
    technology: {
      title: "Construction Technology",
      description: "Stay ahead with the latest technology trends transforming the construction industry, from BIM to drones.",
      benefits: [
        "Improved project accuracy",
        "Faster project delivery",
        "Enhanced collaboration",
        "Reduced costs"
      ],
      tips: "Adopt new technologies to streamline workflows and improve project outcomes.",
      articles: "14+ articles on construction technology and innovation"
    },
    regulations: {
      title: "Regulations & Compliance",
      description: "Understand the legal requirements and compliance standards for construction projects in your region.",
      benefits: [
        "Avoid legal issues",
        "Smooth project approvals",
        "Better reputation",
        "Safer worksites"
      ],
      tips: "Stay updated with local and national construction regulations and codes.",
      articles: "9+ articles on construction regulations and compliance"
    },
    trends: {
      title: "Industry Trends",
      description: "Keep up with the latest trends, news, and innovations shaping the future of construction.",
      benefits: [
        "Competitive advantage",
        "Informed decision-making",
        "Early adoption of best practices",
        "Networking opportunities"
      ],
      tips: "Attend industry events and follow construction news to stay informed.",
      articles: "11+ articles on construction industry trends"
    },
    clientRelations: {
      title: "Client Relations",
      description: "Learn how to build strong relationships with clients, manage expectations, and deliver successful projects.",
      benefits: [
        "Repeat business",
        "Positive referrals",
        "Clear communication",
        "Higher client satisfaction"
      ],
      tips: "Communicate regularly and transparently with clients throughout the project.",
      articles: "7+ articles on client relations in construction"
    }
  };
  // Construction Quiz Questions
  const quizQuestions = [
    {
      question: translate('quizQuestion1'),
      options: [translate('quizQ1Option1'), translate('quizQ1Option2'), translate('quizQ1Option3'), translate('quizQ1Option4')],
      correct: 3
    },
    {
      question: translate('quizQuestion2'),
      options: [translate('quizQ2Option1'), translate('quizQ2Option2'), translate('quizQ2Option3'), translate('quizQ2Option4')],
      correct: 1
    },
    {
      question: translate('quizQuestion3'),
      options: [translate('quizQ3Option1'), translate('quizQ3Option2'), translate('quizQ3Option3'), translate('quizQ3Option4')],
      correct: 0
    },
    {
      question: translate('quizQuestion4'),
      options: [translate('quizQ4Option1'), translate('quizQ4Option2'), translate('quizQ4Option3'), translate('quizQ4Option4')],
      correct: 1
    },
    {
      question: translate('quizQuestion5'),
      options: [translate('quizQ5Option1'), translate('quizQ5Option2'), translate('quizQ5Option3'), translate('quizQ5Option4')],
      correct: 1
    },
    {
      question: translate('quizQuestion6'),
      options: [translate('quizQ6Option1'), translate('quizQ6Option2'), translate('quizQ6Option3'), translate('quizQ6Option4')],
      correct: 0
    },
    {
      question: translate('quizQuestion7'),
      options: [translate('quizQ7Option1'), translate('quizQ7Option2'), translate('quizQ7Option3'), translate('quizQ7Option4')],
      correct: 3
    },
    {
      question: translate('quizQuestion8'),
      options: [translate('quizQ8Option1'), translate('quizQ8Option2'), translate('quizQ8Option3'), translate('quizQ8Option4')],
      correct: 1
    },
    {
      question: translate('quizQuestion9'),
      options: [translate('quizQ9Option1'), translate('quizQ9Option2'), translate('quizQ9Option3'), translate('quizQ9Option4')],
      correct: 0
    },
    {
      question: translate('quizQuestion10'),
      options: [translate('quizQ10Option1'), translate('quizQ10Option2'), translate('quizQ10Option3'), translate('quizQ10Option4')],
      correct: 2
    }
  ];

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: answerIndex
    });
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const getAnswerColor = (questionIndex, optionIndex) => {
    if (selectedAnswers[questionIndex] === undefined) return '';
    
    if (optionIndex === quizQuestions[questionIndex].correct) {
      return 'bg-[#FF4D00] text-white';
    } else if (selectedAnswers[questionIndex] === optionIndex) {
      return 'bg-red-500 text-white';
    }
    return '';
  };

  const calculateScore = () => {
    let correct = 0;
    Object.keys(selectedAnswers).forEach(questionIndex => {
      if (selectedAnswers[questionIndex] === quizQuestions[questionIndex].correct) {
        correct++;
      }
    });
    return correct;
  };

  // Construction Site Myths and Facts
  const mythsAndFacts = [
    {
      myth: [
        translate('myth1_1'),
        translate('myth1_2'),
        translate('myth1_3'),
        translate('myth1_4')
      ],
      fact: [
        translate('fact1_1'),
        translate('fact1_2'),
        translate('fact1_3'),
        translate('fact1_4')
      ]
    },
    {
      myth: [
        translate('myth2_1'),
        translate('myth2_2'),
        translate('myth2_3'),
        translate('myth2_4')
      ],
      fact: [
        translate('fact2_1'),
        translate('fact2_2'),
        translate('fact2_3'),
        translate('fact2_4')
      ]
    },
    {
      myth: [
        translate('myth3_1'),
        translate('myth3_2'),
        translate('myth3_3'),
        translate('myth3_4')
      ],
      fact: [
        translate('fact3_1'),
        translate('fact3_2'),
        translate('fact3_3'),
        translate('fact3_4')
      ]
    }
  ];

  const handleMythFactNext = () => {
    if (currentMythFact < mythsAndFacts.length - 1) {
      setCurrentMythFact(currentMythFact + 1);
    }
  };

  const handleGoToFirst = () => {
    setCurrentMythFact(0);
  };

  const handleMythFactPrevious = () => {
    if (currentMythFact > 0) {
      setCurrentMythFact(currentMythFact - 1);
    }
  };

  return (
  <div className={`min-h-screen ${isDarkMode ? 'bg-black' : 'bg-white'} ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Header />
      {/* Section 1 - Hero Section (Construction) */}
      <section className={`w-full h-screen relative overflow-hidden ${isDarkMode ? 'bg-gray-900' : 'bg-orange-50'}`}>
        {/* Background Video */}
        <video 
          autoPlay 
          muted 
          loop 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={blogVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Content Overlay */}
        <div className={`relative z-10 h-full flex flex-col ${isRTL ? 'items-end text-right' : 'items-start text-left'} justify-center px-4 sm:px-6 md:px-8 lg:px-16`}>
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 ease-out animate-fade-in-up ${isDarkMode ? 'text-white' : 'text-[#FF4D00]'}`}> 
            {translate('constructionInsightsBlog')}
          </h1>
          <p className={`text-xl md:text-2xl max-w-3xl transition-all duration-1000 ease-out delay-300 animate-fade-in-up-delay-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}> 
            {translate('blogHeroDesc')}
          </p>
        </div>
      </section>

      {/* Section 2 - Featured Articles (Construction) */}
      <section className={`w-full py-16 px-4 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-12 transition-all duration-1000 ease-out animate-fade-in-up ${isDarkMode ? 'text-white' : 'text-[#FF4D00]'}`}> 
            {translate('featuredConstructionArticles')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Article Card 1 */}
            <div className={`rounded-xl shadow-lg overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'} hover:shadow-xl transition-shadow duration-300`}>
              <div className="h-48 overflow-hidden">
                <img 
                  src={morningWellness} 
                  alt="Site Safety" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}> 
                  {translate('essentialSafetyPractices')}
                </h3>
                <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}> 
                  {translate('safetyPracticesDesc')}
                </p>
                <div className={`flex items-center mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center ${isRTL ? 'ml-3' : 'mr-3'}`}>
                    <span className="text-[#FF4D00] text-sm font-bold">S</span>
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{translate('safetyTeam')}</p>
                    <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>2{translate('daysAgo')} • 5 {translate('minutesRead')}</p>
                  </div>
                </div>
                <button 
                  onClick={() => navigate('/article/safety-practices')}
                  className="text-[#FF4D00] font-semibold hover:text-[#e6440a] transition-colors"
                >
                  {translate('readMore')} {isRTL ? '←' : '→'}
                </button>
              </div>
            </div>

            {/* Featured Article Card 2 */}
            <div className={`rounded-xl shadow-lg overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'} hover:shadow-xl transition-shadow duration-300`}>
              <div className="h-48 overflow-hidden">
                <img 
                  src={mindfulMeditation} 
                  alt="Modern Materials" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}> 
                  {translate('modernMaterials')}
                </h3>
                <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}> 
                  {translate('modernMaterialsDesc')}
                </p>
                <div className={`flex items-center mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center ${isRTL ? 'ml-3' : 'mr-3'}`}>
                    <span className="text-purple-600 text-sm font-bold">M</span>
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{translate('materialsTeam')}</p>
                    <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>1{translate('daysAgo')} • 8 {translate('minutesRead')}</p>
                  </div>
                </div>
                <button 
                  onClick={() => navigate('/article/modern-materials')}
                  className="text-[#FF4D00] font-semibold hover:text-[#e6440a] transition-colors"
                >
                  {translate('readMore')} {isRTL ? '←' : '→'}
                </button>
              </div>
            </div>

            {/* Featured Article Card 3 */}
            <div className={`rounded-xl shadow-lg overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'} hover:shadow-xl transition-shadow duration-300`}>
              <div className="h-48 overflow-hidden">
                <img 
                  src={nutrition} 
                  alt="Project Management" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}> 
                  {translate('projectManagementTools')}
                </h3>
                <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}> 
                  {translate('projectManagementToolsDesc')}
                </p>
                <div className={`flex items-center mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center ${isRTL ? 'ml-3' : 'mr-3'}`}>
                    <span className="text-orange-600 text-sm font-bold">P</span>
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{translate('projectTeam')}</p>
                    <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>3{translate('daysAgo')} • 6 {translate('minutesRead')}</p>
                  </div>
                </div>
                <button 
                  onClick={() => navigate('/article/project-management')}
                  className="text-[#FF4D00] font-semibold hover:text-[#e6440a] transition-colors"
                >
                  {translate('readMore')} {isRTL ? '←' : '→'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Equipment Comparison (Construction) */}
      <section className={`w-full py-16 px-4 ${isDarkMode ? 'bg-[#FF4D00]' : 'bg-[#FF4D00]'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-teal-700'}`}> 
            {translate('findRightConstructionEquipment')}
          </h2>
          <p className={`text-lg text-center mb-12 max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-white'}`}> 
            {translate('equipmentComparisonDesc')}
          </p>
          <div className="overflow-x-auto">
            <div className={`rounded-xl shadow-lg overflow-hidden ${isDarkMode ? 'bg-black' : 'bg-white'}`}> 
              <div className="min-w-full">
                {/* Table Header */}
                <div className={`grid grid-cols-5 gap-4 p-6 border-b-2 ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-orange-50 border-orange-200'}`}>
                  <div className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-[#FF4D00]'}`}>{translate('equipmentType')}</div>
                  <div className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-[#FF4D00]'}`}>{translate('purpose')}</div>
                  <div className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-[#FF4D00]'}`}>{translate('bestFor')}</div>
                  <div className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-[#FF4D00]'}`}>{translate('keyFeatures')}</div>
                  <div className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-[#FF4D00]'}`}>{translate('operatorSkill')}</div>
                </div> {/* close Table Header */}
                {/* Table Rows */}
                <div className="divide-y divide-gray-200">
                  {/* Excavator Row */}
                  <div className={`grid grid-cols-5 gap-4 p-6 hover:bg-orange-50 transition-colors ${isDarkMode ? 'hover:bg-gray-700' : ''}`}>
                    <div className="flex items-center">
                      <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{translate('excavator')}</span>
                    </div>
                    <div className="flex items-center">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>{translate('diggingDemolition')}</span>
                    </div>
                    <div className={`${isDarkMode ? 'text-gray-300' : 'text-black'}`}>{translate('largeScaleEarthworks')}</div>
                    <div className={`${isDarkMode ? 'text-gray-300' : 'text-black'}`}>{translate('rotationPowerfulArm')}</div>
                    <div className={`${isDarkMode ? 'text-gray-300' : 'text-black'}`}>{translate('advanced')}</div>
                  </div>
                  {/* Crane Row */}
                  <div className={`grid grid-cols-5 gap-4 p-6 hover:bg-orange-50 transition-colors ${isDarkMode ? 'hover:bg-gray-700' : ''}`}>
                    <div className="flex items-center">
                      <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{translate('crane')}</span>
                    </div>
                    <div className="flex items-center">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>{translate('liftingHoisting')}</span>
                    </div>
                    <div className={`${isDarkMode ? 'text-gray-300' : 'text-black'}`}>{translate('highRiseConstruction')}</div>
                    <div className={`${isDarkMode ? 'text-gray-300' : 'text-black'}`}>{translate('tallReachHeavyLoads')}</div>
                    <div className={`${isDarkMode ? 'text-gray-300' : 'text-black'}`}>{translate('expert')}</div>
                  </div>
                  {/* Bulldozer Row */}
                  <div className={`grid grid-cols-5 gap-4 p-6 hover:bg-orange-50 transition-colors ${isDarkMode ? 'hover:bg-gray-700' : ''}`}>
                    <div className="flex items-center">
                      <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{translate('bulldozer')}</span>
                    </div>
                    <div className="flex items-center">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>{translate('pushingGrading')}</span>
                    </div>
                    <div className={`${isDarkMode ? 'text-gray-300' : 'text-black'}`}>{translate('sitePreparation')}</div>
                    <div className={`${isDarkMode ? 'text-gray-300' : 'text-black'}`}>{translate('heavyBladeStrongTraction')}</div>
                    <div className={`${isDarkMode ? 'text-gray-300' : 'text-black'}`}>{translate('intermediate')}</div>
                  </div>
                  {/* Loader Row */}
                  <div className={`grid grid-cols-5 gap-4 p-6 hover:bg-orange-50 transition-colors ${isDarkMode ? 'hover:bg-gray-700' : ''}`}>
                    <div className="flex items-center">
                      <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{translate('loader')}</span>
                    </div>
                    <div className="flex items-center">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>{translate('loadingTransporting')}</span>
                    </div>
                    <div className={`${isDarkMode ? 'text-gray-300' : 'text-black'}`}>{translate('movingMaterials')}</div>
                    <div className={`${isDarkMode ? 'text-gray-300' : 'text-black'}`}>{translate('largeBucketFastMovement')}</div>
                    <div className={`${isDarkMode ? 'text-gray-300' : 'text-black'}`}>{translate('intermediate')}</div>
                  </div>
                  {/* Concrete Mixer Row */}
                  <div className={`grid grid-cols-5 gap-4 p-6 hover:bg-orange-50 transition-colors ${isDarkMode ? 'hover:bg-gray-700' : ''}`}>
                    <div className="flex items-center">
                      <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{translate('concreteMixer')}</span>
                    </div>
                    <div className="flex items-center">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>{translate('mixingConcrete')}</span>
                    </div>
                    <div className={`${isDarkMode ? 'text-gray-300' : 'text-black'}`}>{translate('foundationWork')}</div>
                    <div className={`${isDarkMode ? 'text-gray-300' : 'text-black'}`}>{translate('rotatingDrumConsistentMix')}</div>
                    <div className={`${isDarkMode ? 'text-gray-300' : 'text-black'}`}>{translate('basic')}</div>
                  </div>
                </div> {/* close Table Rows */}
              </div> {/* close min-w-full */}
            </div> {/* close rounded-xl shadow-lg */}
          </div> {/* close overflow-x-auto */}
        </div> {/* close max-w-7xl */}
      </section>
        
  {/* Section 5 - Myths vs Facts - Two Column Layout */}
  <section className={`w-full text-justify py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}> 
          {/* Section Header */}
          <div className="text-center mb-16 px-4 max-w-7xl mx-auto">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-[#FF4D00]'}`}>
              {translate('constructionSiteMythsVsFacts')}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {translate('mythsFactsDesc')}
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[600px]">
              {/* Left Column: Myths */}
              <div className="bg-gradient-to-b from-[#FF4D00] to-[#e6440a] p-12 flex flex-col justify-center">
                <h3 className="text-4xl font-bold text-white mb-6">{translate('myths')}</h3>
                <p className="text-white text-lg mb-8 leading-relaxed">
                  {translate('mythsDescription')}
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-white text-base">{mythsAndFacts[currentMythFact].myth[currentSentenceIndex]}</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-white text-base">{mythsAndFacts[currentMythFact].myth[(currentSentenceIndex + 1) % mythsAndFacts[currentMythFact].myth.length]}</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-white text-base">{mythsAndFacts[currentMythFact].myth[(currentSentenceIndex + 2) % mythsAndFacts[currentMythFact].myth.length]}</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-white text-base">{mythsAndFacts[currentMythFact].myth[(currentSentenceIndex + 3) % mythsAndFacts[currentMythFact].myth.length]}</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Facts */}
              <div className="bg-white p-12 flex flex-col justify-center">
                <h3 className="text-4xl font-bold text-[#FF4D00] mb-6">{translate('facts')}</h3>
                <p className="text-[#FF4D00] text-lg mb-8 leading-relaxed">
                  {translate('factsDescription')}
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-[#FF4D00] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-[#FF4D00] text-base">{mythsAndFacts[currentMythFact].fact[currentSentenceIndex]}</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-[#FF4D00] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-[#FF4D00] text-base">{mythsAndFacts[currentMythFact].fact[(currentSentenceIndex + 1) % mythsAndFacts[currentMythFact].fact.length]}</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-[#FF4D00] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-[#FF4D00] text-base">{mythsAndFacts[currentMythFact].fact[(currentSentenceIndex + 2) % mythsAndFacts[currentMythFact].fact.length]}</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-[#FF4D00] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-[#FF4D00] text-base">{mythsAndFacts[currentMythFact].fact[(currentSentenceIndex + 3) % mythsAndFacts[currentMythFact].fact.length]}</p>
                  </div>
                </div>
              </div>
            </div>
        </section>


  {/* Section 6 - 2 Minute Quiz */}
  <section className={`w-full py-16 px-4 ${isDarkMode ? 'bg-black' : 'bg-white'}`}> 
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-[#FF4D00]'}`}>
            {translate('twoMinuteQuiz')}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Left Side - Quiz Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full max-w-xl h-full">
                <img 
                  src={quizImage} 
                  alt="Wellness Quiz" 
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Right Side - Quiz Content */}
            <div className="flex flex-col justify-center">
              {!showResults ? (
                <div className={`rounded-xl shadow-lg p-8 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  {/* Progress Bar */}
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-2">
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {translate('question')} {currentQuestion + 1} {translate('of')} {quizQuestions.length}
                      </span>
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {Math.round(((currentQuestion + 1) / quizQuestions.length) * 100)}%
                      </span>
                    </div>
                    <div className={`w-full h-2 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                      <div 
                        className="h-2 bg-[#FF4D00] rounded-full transition-all duration-300"
                        style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Question */}
                  <h3 className={`text-xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    {quizQuestions[currentQuestion].question}
                  </h3>

                  {/* Options */}
                  <div className="space-y-4 mb-8">
                    {quizQuestions[currentQuestion].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswerSelect(index)}
                        className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                          selectedAnswers[currentQuestion] === index
                            ? 'border-[#FF4D00] bg-orange-50'
                            : `${isDarkMode ? 'border-gray-600 hover:border-gray-500' : 'border-gray-200 hover:border-gray-300'}`
                        } ${getAnswerColor(currentQuestion, index)}`}
                        disabled={selectedAnswers[currentQuestion] !== undefined}
                      >
                        <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                          {String.fromCharCode(65 + index)}. {option}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between items-center">
                    <button
                      onClick={handlePrevious}
                      disabled={currentQuestion === 0}
                      className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                        currentQuestion === 0
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          : 'bg-[#FF4D00] text-white hover:bg-[#e6440a]'
                      }`}
                    >
                      {translate('previous')}
                    </button>
                    
                    <button
                      onClick={handleNext}
                      className="px-6 py-3 bg-[#FF4D00] text-white rounded-lg font-semibold hover:bg-[#e6440a] transition-colors"
                    >
                      {currentQuestion === quizQuestions.length - 1 ? translate('seeResults') : translate('next')}
                    </button>
                  </div>
                </div>
              ) : (
                /* Results Section */
                <div className={`rounded-xl shadow-lg p-8 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h3 className={`text-2xl font-bold text-center mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    {translate('quizResults')}
                  </h3>
                  
                  <div className="text-center mb-8">
                    <div className={`text-6xl font-bold mb-4 ${isDarkMode ? 'text-[#FF4D00]' : 'text-[#FF4D00]'}`}>
                      {calculateScore()}/{quizQuestions.length}
                    </div>
                    <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {calculateScore() >= 8 ? translate('excellentKnowledge') :
                       calculateScore() >= 6 ? translate('goodKnowledge') :
                       calculateScore() >= 4 ? translate('notBadKeepLearning') :
                       translate('keepLearningJourney')}
                    </p>
                  </div>

                  <div className="text-center">
                    <button
                      onClick={() => {
                        setCurrentQuestion(0);
                        setSelectedAnswers({});
                        setShowResults(false);
                      }}
                      className="px-6 py-3 bg-[#FF4D00] text-white rounded-lg font-semibold hover:bg-[#e6440a] transition-colors"
                    >
                      {translate('takeQuizAgain')}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="w-full py-16 px-4 bg-gradient-to-r from-[#FF4D00] to-[#e6440a] flex justify-center items-center">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">{translate('readyToStartNextProject')}</h2>
          <p className="text-lg mb-8">{translate('ctaProjectDesc')}</p>
          <a href="/contact" className="inline-block px-8 py-4 bg-white text-[#FF4D00] font-bold rounded-lg shadow-lg hover:bg-orange-50 transition-colors text-lg">{translate('contactUs')}</a>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Blog;