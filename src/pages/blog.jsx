
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import Footer from '../footer';
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useScrollToTop } from "../hooks/useScrollToTop";
import morningWellness from '../assets/road1.jpg';
import mindfulMeditation from '../assets/homecta.jpg';
import nutrition from '../assets/road.jpg';
import blogVideo from '../assets/blogVideo.mp4';
import quizImage from '../assets/quiz.jpg';

function Blog() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();
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
      question: "What is the most important piece of safety equipment on a construction site?",
      options: ["Hard hat", "Gloves", "Safety boots", "All of the above"],
      correct: 3
    },
    {
      question: "Which material is commonly used for building strong foundations?",
      options: ["Wood", "Concrete", "Plastic", "Glass"],
      correct: 1
    },
    {
      question: "What does PPE stand for?",
      options: ["Personal Protective Equipment", "Project Planning Essentials", "Powerful Performance Equipment", "Professional Project Engineering"],
      correct: 0
    },
    {
      question: "Which machine is used to lift heavy materials to great heights?",
      options: ["Bulldozer", "Crane", "Excavator", "Loader"],
      correct: 1
    },
    {
      question: "What is the main purpose of scaffolding?",
      options: ["Decoration", "Support workers and materials", "Lighting", "Sound insulation"],
      correct: 1
    },
    {
      question: "Which of these is a green building practice?",
      options: ["Using recycled materials", "Wasting water", "Ignoring insulation", "Using only concrete"],
      correct: 0
    },
    {
      question: "Who is responsible for site safety?",
      options: ["Site manager", "Workers", "Visitors", "Everyone on site"],
      correct: 3
    },
    {
      question: "What document outlines the steps and safety measures for a specific task?",
      options: ["Blueprint", "Risk Assessment", "Invoice", "Permit"],
      correct: 1
    },
    {
      question: "Which technology is transforming construction project planning?",
      options: ["BIM (Building Information Modeling)", "Typewriters", "Fax machines", "Chalkboards"],
      correct: 0
    },
    {
      question: "What is the first thing to do before starting any construction work?",
      options: ["Start digging", "Check weather", "Conduct a safety briefing", "Order lunch"],
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
        "Wearing a hard hat is only necessary when it's raining.",
        "All construction sites are equally dangerous.",
        "You don't need to read the safety manual if you have experience.",
        "Green building always costs more than traditional methods."
      ],
      fact: [
        "Hard hats are required at all times on active construction sites to protect from falling objects and head injuries.",
        "Risks vary by site, but proper safety protocols can make any site much safer.",
        "Every site and project is different; reading the safety manual is essential for everyone, regardless of experience.",
        "Green building can reduce costs over time through energy savings and incentives."
      ]
    },
    {
      myth: [
        "Scaffolding is safe as long as it looks stable.",
        "Permits are just paperwork and can be skipped if you're in a hurry.",
        "Only supervisors are responsible for safety on site.",
        "You can operate any equipment if you watch someone else do it first."
      ],
      fact: [
        "Scaffolding must be inspected regularly and meet safety standards before use.",
        "Permits are legally required and skipping them can result in fines or shutdowns.",
        "Safety is everyone's responsibility, from workers to supervisors.",
        "Proper training and certification are required to operate construction equipment safely."
      ]
    },
    {
      myth: [
        "Concrete just dries, it doesn't need to cure.",
        "Bigger machines are always better for every job.",
        "Safety meetings are a waste of time.",
        "Personal protective equipment (PPE) is optional if you're careful."
      ],
      fact: [
        "Concrete must cure properly to reach its full strength and durability.",
        "The right machine depends on the specific task and site conditions, not just size.",
        "Safety meetings help prevent accidents and keep everyone informed about site hazards.",
        "PPE is mandatory and protects against many common site injuries, regardless of experience."
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
  <div className={`min-h-screen ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
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
        <div className="relative z-10 h-full flex flex-col items-start justify-center text-left px-4 sm:px-6 md:px-8 lg:px-16">
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 ease-out animate-fade-in-up ${isDarkMode ? 'text-white' : 'text-[#FF4D00]'}`}> 
            Construction Insights Blog
          </h1>
          <p className={`text-xl md:text-2xl max-w-3xl transition-all duration-1000 ease-out delay-300 animate-fade-in-up-delay-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}> 
            Explore the latest trends, safety tips, and innovations in the construction industry
          </p>
        </div>
      </section>

      {/* Section 2 - Featured Articles (Construction) */}
      <section className={`w-full py-16 px-4 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-12 transition-all duration-1000 ease-out animate-fade-in-up ${isDarkMode ? 'text-white' : 'text-[#FF4D00]'}`}> 
            Featured Construction Articles
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
                  Essential Safety Practices for Every Construction Site
                </h3>
                <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}> 
                  Learn the top safety protocols to keep your team and site secure on every project.
                </p>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-[#FF4D00] text-sm font-bold">S</span>
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Safety Team</p>
                    <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>2d ago • 5 min read</p>
                  </div>
                </div>
                <button 
                  onClick={() => navigate('/article/safety-practices')}
                  className="text-[#FF4D00] font-semibold hover:text-[#e6440a] transition-colors"
                >
                  Read More →
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
                  Modern Materials: Building for the Future
                </h3>
                <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}> 
                  Discover the latest innovations in construction materials and how they improve project outcomes.
                </p>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-purple-600 text-sm font-bold">M</span>
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Materials Team</p>
                    <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>1d ago • 8 min read</p>
                  </div>
                </div>
                <button 
                  onClick={() => navigate('/article/modern-materials')}
                  className="text-[#FF4D00] font-semibold hover:text-[#e6440a] transition-colors"
                >
                  Read More →
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
                  Project Management Tools for Construction Success
                </h3>
                <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}> 
                  Explore the best digital tools and strategies for managing construction projects efficiently.
                </p>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-orange-600 text-sm font-bold">P</span>
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Project Team</p>
                    <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>3d ago • 6 min read</p>
                  </div>
                </div>
                <button 
                  onClick={() => navigate('/article/project-management')}
                  className="text-[#FF4D00] font-semibold hover:text-[#e6440a] transition-colors"
                >
                  Read More →
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
            Find the Right Construction Equipment
          </h2>
          <p className={`text-lg text-center mb-12 max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-white'}`}> 
            Compare different types of construction equipment to discover which one matches your project needs and site requirements
          </p>
          <div className="overflow-x-auto">
            <div className={`rounded-xl shadow-lg overflow-hidden ${isDarkMode ? 'bg-black' : 'bg-white'}`}> 
              <div className="min-w-full">
                {/* Table Header */}
                <div className={`grid grid-cols-5 gap-4 p-6 border-b-2 ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-orange-50 border-orange-200'}`}>
                  <div className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-[#FF4D00]'}`}>Equipment Type</div>
                  <div className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-[#FF4D00]'}`}>Purpose</div>
                  <div className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-[#FF4D00]'}`}>Best For</div>
                  <div className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-[#FF4D00]'}`}>Key Features</div>
                  <div className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-[#FF4D00]'}`}>Operator Skill</div>
                </div> {/* close Table Header */}
                {/* Table Rows */}
                <div className="divide-y divide-gray-200">
                  {/* Excavator Row */}
                  <div className={`grid grid-cols-5 gap-4 p-6 hover:bg-orange-50 transition-colors ${isDarkMode ? 'hover:bg-gray-700' : ''}`}>
                    <div className="flex items-center">
                      <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Excavator</span>
                    </div>
                    <div className="flex items-center">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>Digging, Demolition</span>
                    </div>
                    <div className={`${isDarkMode ? 'text-gray-300' : 'text-black'}`}>Large-scale earthworks</div>
                    <div className={`${isDarkMode ? 'text-gray-300' : 'text-black'}`}>360° rotation, powerful arm</div>
                    <div className={`${isDarkMode ? 'text-gray-300' : 'text-black'}`}>Advanced</div>
                  </div>
                  {/* Crane Row */}
                  <div className={`grid grid-cols-5 gap-4 p-6 hover:bg-orange-50 transition-colors ${isDarkMode ? 'hover:bg-gray-700' : ''}`}>
                    <div className="flex items-center">
                      <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Crane</span>
                    </div>
                    <div className="flex items-center">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>Lifting, Hoisting</span>
                    </div>
                    <div className={`${isDarkMode ? 'text-gray-300' : 'text-black'}`}>High-rise construction</div>
                    <div className={`${isDarkMode ? 'text-gray-300' : 'text-black'}`}>Tall reach, heavy loads</div>
                    <div className={`${isDarkMode ? 'text-gray-300' : 'text-black'}`}>Expert</div>
                  </div>
                  {/* Bulldozer Row */}
                  <div className={`grid grid-cols-5 gap-4 p-6 hover:bg-orange-50 transition-colors ${isDarkMode ? 'hover:bg-gray-700' : ''}`}>
                    <div className="flex items-center">
                      <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Bulldozer</span>
                    </div>
                    <div className="flex items-center">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>Pushing, Grading</span>
                    </div>
                    <div className={`${isDarkMode ? 'text-gray-300' : 'text-black'}`}>Site preparation</div>
                    <div className={`${isDarkMode ? 'text-gray-300' : 'text-black'}`}>Heavy blade, strong traction</div>
                    <div className={`${isDarkMode ? 'text-gray-300' : 'text-black'}`}>Intermediate</div>
                  </div>
                  {/* Loader Row */}
                  <div className={`grid grid-cols-5 gap-4 p-6 hover:bg-orange-50 transition-colors ${isDarkMode ? 'hover:bg-gray-700' : ''}`}>
                    <div className="flex items-center">
                      <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Loader</span>
                    </div>
                    <div className="flex items-center">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>Loading, Transporting</span>
                    </div>
                    <div className={`${isDarkMode ? 'text-gray-300' : 'text-black'}`}>Moving materials</div>
                    <div className={`${isDarkMode ? 'text-gray-300' : 'text-black'}`}>Large bucket, fast movement</div>
                    <div className={`${isDarkMode ? 'text-gray-300' : 'text-black'}`}>Intermediate</div>
                  </div>
                  {/* Concrete Mixer Row */}
                  <div className={`grid grid-cols-5 gap-4 p-6 hover:bg-orange-50 transition-colors ${isDarkMode ? 'hover:bg-gray-700' : ''}`}>
                    <div className="flex items-center">
                      <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Concrete Mixer</span>
                    </div>
                    <div className="flex items-center">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>Mixing Concrete</span>
                    </div>
                    <div className={`${isDarkMode ? 'text-gray-300' : 'text-black'}`}>Foundation work</div>
                    <div className={`${isDarkMode ? 'text-gray-300' : 'text-black'}`}>Rotating drum, consistent mix</div>
                    <div className={`${isDarkMode ? 'text-gray-300' : 'text-black'}`}>Basic</div>
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
              Construction Site Myths vs Facts
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Let's debunk common construction site misconceptions with real, safety-focused facts.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[600px]">
              {/* Left Column: Myths */}
              <div className="bg-gradient-to-b from-[#FF4D00] to-[#e6440a] p-12 flex flex-col justify-center">
                <h3 className="text-4xl font-bold text-white mb-6">Myths</h3>
                <p className="text-white text-lg mb-8 leading-relaxed">
                  Common misconceptions about construction sites and safety that many people believe to be true, but are actually myths that can put workers at risk.
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
                <h3 className="text-4xl font-bold text-[#FF4D00] mb-6">Facts</h3>
                <p className="text-[#FF4D00] text-lg mb-8 leading-relaxed">
                  Real, safety-focused facts about construction sites that help keep everyone safe and projects running smoothly.
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
            2 Minute Quiz
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
                        Question {currentQuestion + 1} of {quizQuestions.length}
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
                      ← Previous
                    </button>
                    
                    <button
                      onClick={handleNext}
                      className="px-6 py-3 bg-[#FF4D00] text-white rounded-lg font-semibold hover:bg-[#e6440a] transition-colors"
                    >
                      {currentQuestion === quizQuestions.length - 1 ? 'See Results' : 'Next →'}
                    </button>
                  </div>
                </div>
              ) : (
                /* Results Section */
                <div className={`rounded-xl shadow-lg p-8 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h3 className={`text-2xl font-bold text-center mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    Quiz Results
                  </h3>
                  
                  <div className="text-center mb-8">
                    <div className={`text-6xl font-bold mb-4 ${isDarkMode ? 'text-[#FF4D00]' : 'text-[#FF4D00]'}`}>
                      {calculateScore()}/{quizQuestions.length}
                    </div>
                    <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {calculateScore() >= 8 ? 'Excellent! You have great wellness knowledge!' :
                       calculateScore() >= 6 ? 'Good job! You know your wellness basics!' :
                       calculateScore() >= 4 ? 'Not bad! Keep learning about wellness!' :
                       'Keep learning! Wellness is a journey!'}
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
                      Take Quiz Again
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
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Next Project?</h2>
          <p className="text-lg mb-8">Contact our team today for expert advice, quotes, or to discuss your construction needs. Let us help you build your vision safely and efficiently!</p>
          <a href="/contact" className="inline-block px-8 py-4 bg-white text-[#FF4D00] font-bold rounded-lg shadow-lg hover:bg-orange-50 transition-colors text-lg">Contact Us</a>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Blog;