import React, { useState, useEffect } from 'react';
import Header from '../../Header.jsx';
import AOS from 'aos';
import '../../aos-custom.css';
import roadHeroVideo from '../../assets/roadhero.mp4';
import roadBenefitsBg from '../../assets/road1.jpg';
import roadSteps from '../../assets/road.jpg';
import roadServe from '../../assets/road.jpg';
import Footer from '../../footer.jsx';

const RoadConstruction = () => {
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
    "Improves connectivity and transportation efficiency",
    "Enhances economic development and trade",
    "Increases safety standards and traffic management",
    "Promotes sustainable infrastructure development",
    "Supports community growth and accessibility",
    "Boosts regional development and investment opportunities"
  ];

  const programs = [
    {
      title: "Site Assessment & Planning",
      description: "Comprehensive evaluation of construction sites and development of detailed project plans"
    },
    {
      title: "Highway Construction",
      description: "Strategic design and construction of major highways and expressways"
    },
    {
      title: "Bridge & Infrastructure Building",
      description: "Expert construction of bridges, overpasses, and critical infrastructure"
    },
    {
      title: "Road Maintenance & Rehabilitation",
      description: "Ongoing maintenance services to extend infrastructure lifespan and safety"
    },
    {
      title: "Urban Development Projects",
      description: "Comprehensive urban infrastructure development and modernization"
    },
    {
      title: "Sustainable Construction Solutions",
      description: "Eco-friendly construction methods and materials for environmental responsibility"
    }
  ];

  const howItWorks = [
    "Complete a comprehensive site assessment and feasibility study",
    "Receive detailed project planning and engineering recommendations",
    "Access expert consultation and construction management services",
    "Execute construction with professional supervision and quality control",
    "Track progress and ensure project completion on time and budget"
  ];


  const features = [
    "Customized road and infrastructure construction plans",
    "Project tracking and quality assurance systems",
    "Advanced construction technology and equipment",
    "Expert engineering and project management support"
  ];

  return (
    <div className={`min-h-screen w-full overflow-x-hidden transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <Header />
      
     {/* Hero Section */}
      {/* Hero Section */}
      <section className="w-full h-screen flex items-center justify-start px-4 sm:px-6 md:px-8 lg:px-16 relative overflow-hidden max-w-full">
        <video 
          autoPlay 
          muted 
          loop 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={roadHeroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-left max-w-4xl px-4 w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight text-left" data-aos="fade-up">
            Road & Infrastructure <span className='text-[#FF4D00]'>Construction Services</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white mb-8 sm:mb-10 max-w-4xl leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            Building the roads and infrastructure that connect communities, drive progress, and ensure a sustainable future.
          </p>
          <div className="flex justify-start">
            <button className="bg-white text-[#FF4D00] font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full shadow-lg hover:bg-gray-100 transition text-base sm:text-lg md:text-xl transform hover:scale-105" data-aos="fade-up" data-aos-delay="400">
              Learn More About Construction
            </button>
          </div>
        </div>
      </section>
     
      {/* Key Benefits Section */}
      <section className={`w-full text-justify py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'}`} data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">
        <div className="max-w-7xl mx-auto w-full overflow-hidden">
          <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="200" data-aos-once="false">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-black' : 'text-gray-800'}`}>Key <span className='text-[#FF4D00]'>Benefits</span></h2>
            <p className={`text-base sm:text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-800' : 'text-gray-600'}`}>Partner with us for reliable, innovative, and sustainable road and infrastructure construction solutions.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-center">
            {/* Left Cards */}
            <div className="space-y-4 sm:space-y-6" data-aos="fade-right" data-aos-delay="300" data-aos-once="false">
              <div className={`p-4 sm:p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 h-auto min-h-[200px] sm:min-h-[256px] ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                data-aos="fade-right" data-aos-delay="400" data-aos-once="false">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-[#FF4D00] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </div>
                  <h3 className={`text-xl font-bold ${isDarkMode ? 'text-black' : 'text-gray-800'}`}>Quality & Durability</h3>
                </div>
                <p className={`text-base ${isDarkMode ? 'text-gray-800' : 'text-gray-600'}`}>We use the best materials and engineering practices to ensure long-lasting, safe, and reliable infrastructure.</p>
              </div>
              <div className={`p-4 sm:p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 h-auto min-h-[200px] sm:min-h-[256px] ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                data-aos="fade-right" data-aos-delay="500" data-aos-once="false">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-[#FF4D00] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </div>
                  <h3 className={`text-xl font-bold ${isDarkMode ? 'text-black' : 'text-gray-800'}`}>Sustainability</h3>
                </div>
                <p className={`text-base ${isDarkMode ? 'text-gray-800' : 'text-gray-600'}`}>We prioritize eco-friendly methods and materials for a greener tomorrow.</p>
              </div>
            </div>
            {/* Center Image */}
            <div className="flex flex-col items-center text-center" data-aos="zoom-in" data-aos-delay="600" data-aos-once="false">
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl mb-4 sm:mb-6">
                <img src={roadBenefitsBg} alt="Road Construction" className="w-full h-full object-cover" />
              </div>
              <h3 className={`text-2xl sm:text-3xl font-bold mb-4 ${isDarkMode ? 'text-black' : 'text-gray-800'}`}>Building the Future</h3>
              <p className={`text-lg max-w-md ${isDarkMode ? 'text-gray-800' : 'text-gray-600'}`}>Our road and infrastructure projects are designed to last, supporting growth, safety, and connectivity for generations to come.</p>
            </div>
            {/* Right Cards */}
            <div className="space-y-4 sm:space-y-6" data-aos="fade-left" data-aos-delay="300" data-aos-once="false">
              <div className={`p-4 sm:p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 h-auto min-h-[200px] sm:min-h-[256px] ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                data-aos="fade-left" data-aos-delay="400" data-aos-once="false">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-[#FF4D00] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </div>
                  <h3 className={`text-xl font-bold ${isDarkMode ? 'text-black' : 'text-gray-800'}`}>Expertise</h3>
                </div>
                <p className={`text-base ${isDarkMode ? 'text-gray-800' : 'text-gray-600'}`}>Our team brings decades of experience in road and infrastructure construction, ensuring every project meets the highest standards.</p>
              </div>
              <div className={`p-4 sm:p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 h-auto min-h-[200px] sm:min-h-[256px] ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                data-aos="fade-left" data-aos-delay="500" data-aos-once="false">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-[#FF4D00] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </div>
                  <h3 className={`text-xl font-bold ${isDarkMode ? 'text-black' : 'text-gray-800'}`}>On-Time Delivery</h3>
                </div>
                <p className={`text-base ${isDarkMode ? 'text-gray-800' : 'text-gray-600'}`}>We deliver projects on schedule, minimizing disruption and maximizing value for communities and clients.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
     
           {/* Services Section */}
      {/* Our Road/Infrastructure Construction Services Section */}
      <section className={`w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 relative overflow-hidden`}>
        <div className="absolute inset-0 z-0">
          <img 
            src={roadServe} 
            alt="Road/Infrastructure Construction Services Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#FF4D00] bg-opacity-70"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10 w-full overflow-hidden">
          <div className="mb-12" data-aos="fade-up">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white`}>
              Our <span className="text-white">Road/Infrastructure Construction Services</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {/* Service 1 */}
            <div className={`transform transition-all duration-300 hover:scale-105 rounded-2xl p-6 shadow-lg ${isDarkMode ? 'bg-gray-800 bg-opacity-90 backdrop-blur-sm' : 'bg-white bg-opacity-90 backdrop-blur-sm'}`}
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-once="false"
            >
              <div className="mb-4">
                <span className="text-2xl font-bold text-[#FF4D00]">01</span>
              </div>
              <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Highway & Road Construction</h3>
              <p className={`text-base leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Design, construction, and maintenance of highways, roads, and expressways for safe and efficient transportation.</p>
            </div>
            {/* Service 2 */}
            <div className={`transform transition-all duration-300 hover:scale-105 rounded-2xl p-6 shadow-lg ${isDarkMode ? 'bg-gray-800 bg-opacity-90 backdrop-blur-sm' : 'bg-white bg-opacity-90 backdrop-blur-sm'}`}
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="false"
            >
              <div className="mb-4">
                <span className="text-2xl font-bold text-[#FF4D00]">02</span>
              </div>
              <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Bridge & Overpass Construction</h3>
              <p className={`text-base leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Expertise in building durable bridges and overpasses to enhance connectivity and support heavy traffic loads.</p>
            </div>
            {/* Service 3 */}
            <div className={`transform transition-all duration-300 hover:scale-105 rounded-2xl p-6 shadow-lg ${isDarkMode ? 'bg-gray-800 bg-opacity-90 backdrop-blur-sm' : 'bg-white bg-opacity-90 backdrop-blur-sm'}`}
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-once="false"
            >
              <div className="mb-4">
                <span className="text-2xl font-bold text-[#FF4D00]">03</span>
              </div>
              <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Urban Infrastructure Development</h3>
              <p className={`text-base leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Comprehensive solutions for city infrastructure, including drainage, sidewalks, lighting, and public spaces.</p>
            </div>
            {/* Service 4 */}
            <div className={`transform transition-all duration-300 hover:scale-105 rounded-2xl p-6 shadow-lg ${isDarkMode ? 'bg-gray-800 bg-opacity-90 backdrop-blur-sm' : 'bg-white bg-opacity-90 backdrop-blur-sm'}`}
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-once="false"
            >
              <div className="mb-4">
                <span className="text-2xl font-bold text-[#FF4D00]">04</span>
              </div>
              <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Maintenance & Rehabilitation</h3>
              <p className={`text-base leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Ongoing maintenance, repair, and upgrades to extend the lifespan and safety of existing infrastructure.</p>
            </div>
            {/* Service 5 */}
            <div className={`transform transition-all duration-300 hover:scale-105 rounded-2xl p-6 shadow-lg ${isDarkMode ? 'bg-gray-800 bg-opacity-90 backdrop-blur-sm' : 'bg-white bg-opacity-90 backdrop-blur-sm'}`}
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-once="false"
            >
              <div className="mb-4">
                <span className="text-2xl font-bold text-[#FF4D00]">05</span>
              </div>
              <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Sustainable Construction Solutions</h3>
              <p className={`text-base leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Utilizing eco-friendly materials and methods to minimize environmental impact and promote sustainability.</p>
            </div>
            {/* Service 6 */}
            <div className={`transform transition-all duration-300 hover:scale-105 rounded-2xl p-6 shadow-lg ${isDarkMode ? 'bg-gray-800 bg-opacity-90 backdrop-blur-sm' : 'bg-white bg-opacity-90 backdrop-blur-sm'}`}
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-once="false"
            >
              <div className="mb-4">
                <span className="text-2xl font-bold text-[#FF4D00]">06</span>
              </div>
              <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Project Management & Consultation</h3>
              <p className={`text-base leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>End-to-end project management, consultation, and support for successful infrastructure delivery.</p>
            </div>
          </div>
        </div>
      </section>
     
           {/* How It Works Section - Road/Infrastructure Construction */}
           <section className={`w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
             <div className="max-w-7xl mx-auto w-full overflow-hidden">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                 <div className="flex flex-col space-y-8" data-aos="fade-right" data-aos-once="false">
                   <div>
                     <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>How It <span className='text-[#FF4D00]'>Works</span></h2>
                     <p className={`text-base sm:text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Our process ensures quality, safety, and efficiency at every stage of your infrastructure project.</p>
                   </div>
                   <div className="space-y-6">
                     {/* Step 1 */}
                     <div className="flex items-start space-x-4" data-aos="fade-right" data-aos-delay="0" data-aos-once="false">
                       <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg bg-[#FF4D00]">1</div>
                       <div className="flex-1">
                         <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Step 1</h3>
                         <p className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Initial consultation and project assessment</p>
                       </div>
                     </div>
                     {/* Step 2 */}
                     <div className="flex items-start space-x-4" data-aos="fade-right" data-aos-delay="100" data-aos-once="false">
                       <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg bg-[#FF4D00]">2</div>
                       <div className="flex-1">
                         <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Step 2</h3>
                         <p className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Site survey, planning, and design development</p>
                       </div>
                     </div>
                     {/* Step 3 */}
                     <div className="flex items-start space-x-4" data-aos="fade-right" data-aos-delay="200" data-aos-once="false">
                       <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg bg-[#FF4D00]">3</div>
                       <div className="flex-1">
                         <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Step 3</h3>
                         <p className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Procurement of materials and mobilization of resources</p>
                       </div>
                     </div>
                     {/* Step 4 */}
                     <div className="flex items-start space-x-4" data-aos="fade-right" data-aos-delay="300" data-aos-once="false">
                       <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg bg-[#FF4D00]">4</div>
                       <div className="flex-1">
                         <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Step 4</h3>
                         <p className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Construction, supervision, and quality control</p>
                       </div>
                     </div>
                     {/* Step 5 */}
                     <div className="flex items-start space-x-4" data-aos="fade-right" data-aos-delay="400" data-aos-once="false">
                       <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg bg-[#FF4D00]">5</div>
                       <div className="flex-1">
                         <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Step 5</h3>
                         <p className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Project delivery, handover, and ongoing maintenance</p>
                       </div>
                     </div>
                   </div>
                   <div className="pt-4">
                     <button className="bg-[#FF4D00] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#d32f2f] transition-colors duration-300 transform hover:scale-105">Request a Consultation</button>
                   </div>
                 </div>
                 <div className="flex justify-center lg:justify-end items-start" data-aos="fade-left" data-aos-once="false">
                   <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
                     <div className="relative">
                       <img src={roadSteps} alt="Construction Steps" className="w-full object-cover rounded-2xl shadow-2xl" style={{ height: '600px', maxHeight: 'none' }} />
                       <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full opacity-80"></div>
                       <div className="absolute -bottom-4 -right-4 w-6 h-6 rounded-full opacity-80" style={{ backgroundColor: '#FF4D00' }}></div>
                       <div className="absolute top-1/2 -right-6 w-4 h-4 bg-blue-400 rounded-full opacity-80"></div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </section>
     
           {/* What Sets Us Apart Section - Road/Infrastructure Construction */}
           <section className="w-full text-justify py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 bg-gradient-to-br from-[#FF4D00] to-[#d32f2f]">
             <div className="max-w-7xl mx-auto w-full overflow-hidden">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                 <div className="flex flex-col space-y-8" data-aos="fade-right" data-aos-once="false">
                   <div>
                     <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">What <span className='text-white'>Sets Us Apart</span></h2>
                     <p className="text-lg sm:text-xl mb-8 text-white">Discover why we are the trusted choice for road and infrastructure construction projects.</p>
                   </div>
                   <div className="space-y-6">
                     <p className="text-base leading-relaxed text-white">• <b>Proven Track Record:</b> Successfully delivering complex infrastructure projects on time and within budget.</p>
                     <p className="text-base leading-relaxed text-white">• <b>Cutting-Edge Technology:</b> Leveraging the latest construction methods and equipment for superior results.</p>
                     <p className="text-base leading-relaxed text-white">• <b>Commitment to Safety:</b> Strict adherence to safety standards to protect our team and the community.</p>
                     <p className="text-base leading-relaxed text-white">• <b>Sustainability Focus:</b> Eco-friendly practices and materials for a greener tomorrow.</p>
                     <p className="text-base leading-relaxed text-white">• <b>Expert Team:</b> Highly skilled engineers, project managers, and workers dedicated to quality and excellence.</p>
                   </div>
                 </div>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6" data-aos="fade-left" data-aos-once="false">
                   <div className="p-6 rounded-tl-[3rem] rounded-br-[3rem] shadow-lg bg-white bg-opacity-95 backdrop-blur-sm flex flex-col items-start">
                     <div className="w-12 h-12 bg-[#FF4D00] rounded-full flex items-center justify-center mb-3 shadow-lg">
                       <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                     </div>
                     <h3 className="text-lg font-bold text-gray-800 mb-2">Innovative Solutions</h3>
                     <p className="text-sm text-gray-600">We embrace innovation to solve infrastructure challenges and deliver lasting value.</p>
                   </div>
                   <div className="p-6 rounded-tl-[3rem] rounded-br-[3rem] shadow-lg bg-white bg-opacity-95 backdrop-blur-sm flex flex-col items-start">
                     <div className="w-12 h-12 bg-[#FF4D00] rounded-full flex items-center justify-center mb-3 shadow-lg">
                       <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                     </div>
                     <h3 className="text-lg font-bold text-gray-800 mb-2">Client-Centric Approach</h3>
                     <p className="text-sm text-gray-600">We prioritize client needs, ensuring transparent communication and tailored solutions.</p>
                   </div>
                   <div className="p-6 rounded-tl-[3rem] rounded-br-[3rem] shadow-lg bg-white bg-opacity-95 backdrop-blur-sm flex flex-col items-start">
                     <div className="w-12 h-12 bg-[#FF4D00] rounded-full flex items-center justify-center mb-3 shadow-lg">
                       <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                     </div>
                     <h3 className="text-lg font-bold text-gray-800 mb-2">Quality Assurance</h3>
                     <p className="text-sm text-gray-600">Rigorous quality checks at every stage guarantee superior infrastructure outcomes.</p>
                   </div>
                   <div className="p-6 rounded-tl-[3rem] rounded-br-[3rem] shadow-lg bg-white bg-opacity-95 backdrop-blur-sm flex flex-col items-start">
                     <div className="w-12 h-12 bg-[#FF4D00] rounded-full flex items-center justify-center mb-3 shadow-lg">
                       <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                     </div>
                     <h3 className="text-lg font-bold text-gray-800 mb-2">Sustainable Impact</h3>
                     <p className="text-sm text-gray-600">We build with the future in mind, focusing on sustainability and community benefit.</p>
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
                   Ready to Build the Future?
                 </h2>
                 <p 
                   className={`text-lg sm:text-xl mb-12 max-w-2xl mx-auto ${isDarkMode ? 'text-white' : 'text-black'}`}
                   data-aos="fade-up"
                   data-aos-delay="100"
                   data-aos-once="false"
                 >
                   Contact us today to discuss your road and infrastructure construction needs. Let's create lasting impact together.
                 </p>
                 <button className="bg-[#FF4D00] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#e6440a] transition-colors duration-300 transform hover:scale-105">
                   Get in Touch
                 </button>
               </div>
             </div>
           </section>
           <Footer />
    </div>
  );
};

export default RoadConstruction;
