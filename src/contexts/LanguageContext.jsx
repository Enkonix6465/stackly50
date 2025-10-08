import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

// Translation data
const translations = {
  English: {
    // Header translations
    home: 'Home',
    aboutUs: 'About Us',
    services: 'Services',
    blog: 'Blog',
    contactUs: 'Contact Us',
    viewAllServices: 'View All Services',
    yogaMeditation: 'Yoga & Meditation',
    commercial: 'Commercial Construction',
    renovation: 'Renovation & Remodeling',
    interiorDesign: 'Interior Design & Finishing',
    industrial: 'Industrial Construction',
    road: 'Road & Infrastructure Construction',
    userProfile: 'User Profile',
    signedIn: 'Signed in',
    logout: 'Logout',
    
    // Hero section
    buildingYourFuture: 'Building Your Future',
    heroDescription: 'Quality construction services for residential, commercial, and industrial projects. From concept to completion, we deliver excellence, safety, and reliability every step of the way.',
    exploreOurServices: 'Explore Our Services',
    
    // Who We Are section
    yearsExperience: 'Years experience building',
    aboutUsTitle: 'About Us',
    expertConstruction: 'Expert construction for every vision',
    aboutUsDescription: 'With 25 years of experience, our team delivers quality construction services for residential, commercial, and industrial projects. We focus on safety, innovation, and client satisfaction—turning your ideas into reality with reliable project management and skilled craftsmanship.',
    contactUs: 'Contact Us',
    
    // Services section
    ourTopServices: 'Our Top Services',
    residentialConstruction: 'Residential Construction',
    residentialTagline: 'Custom homes, apartments, and villas.',
    residentialDetails: 'We build high-quality residential spaces tailored to your needs, ensuring comfort, safety, and modern design.',
    commercialConstruction: 'Commercial Construction',
    commercialTagline: 'Offices, retail, and business spaces.',
    commercialDetails: 'From office complexes to retail stores, we deliver functional and attractive commercial buildings for your business success.',
    renovationRemodeling: 'Renovation & Remodeling',
    renovationTagline: 'Transform and upgrade existing spaces.',
    renovationDetails: 'Give your property a new look and improved functionality with our expert renovation and remodeling services.',
    industrialConstruction: 'Industrial/Infrastructure Construction',
    industrialTagline: 'Factories, warehouses, and infrastructure.',
    industrialDetails: 'We handle large-scale industrial and infrastructure projects with a focus on durability, efficiency, and safety.',
    
    // Services Page Translations
    startBuildingDreams: 'Start Building Dreams',
    servicesHeroDescription: 'From residential towers to commercial complexes, we deliver quality construction, innovative solutions, and on-time project completion by milestone.',
    exploreServices: 'Explore Services',
    getAQuote: 'Get a Quote',
    qualityServices: 'Quality Services',
    featuredProjects: 'Featured Projects',
    
    // Cost Estimator Section
    estimateProjectCost: 'Estimate Your Project Cost',
    costEstimatorDescription: 'A quick tool that lets visitors get a rough cost idea for their project before contacting you',
    renovation: 'Renovation',
    residential: 'Residential',
    commercial: 'Commercial',
    industrial: 'Industrial',
    areaSizePlaceholder: 'Area Size (sq. ft. or m²)',
    standard: 'Standard',
    premium: 'Premium',
    luxury: 'Luxury',
    locationOptional: 'Location (optional)',
    yourName: 'Your name',
    phoneNumber: 'Phone number',
    getDetailedQuote: 'Get a Detailed Quote',
    instantApproximateCost: '- Instant Approximate Cost',
    
    // Safety Standards Section
    safetyStandardsFollowed: 'Safety Standards Followed',
    certifiedProfessionals: 'Certified Professionals',
    certifiedProfessionalsDesc: 'All our staff are certified and trained to follow the highest safety protocols in the industry.',
    regularAudits: 'Regular Audits',
    regularAuditsDesc: 'We conduct regular safety audits and inspections to ensure compliance with all regulations.',
    qualityMaterials: 'Quality Materials',
    qualityMaterialsDesc: 'Only approved, high-quality materials are used to guarantee safety and durability.',
    emergencyPreparedness: 'Emergency Preparedness',
    emergencyPreparednessDesc: 'Comprehensive emergency plans and first-aid readiness at every site.',
    
    // Featured Projects Section
    finishingWorks: 'FINISHING WORKS',
    redevelopment: 'REDEVELOPMENT',
    modernBathroom: 'Modern bathroom',
    repairOfApartments: 'Repair of apartments',
    decorativeWorksInLiving: 'Decorative works in living',
    officeInteriorModernStyle: 'Office interior in modern style',
    
    // Service Cards
    residentialConstructionDesc: 'Building dream homes with modern architecture, quality materials, and sustainable design. From single-family homes to luxury estates, we create living spaces that reflect your lifestyle.',
    commercialConstructionDesc: 'Constructing office buildings, retail spaces, and commercial complexes with cutting-edge technology and efficient designs that maximize functionality and productivity.',
    renovationRemodelingDesc: 'Transform existing spaces with expert renovation services. We modernize kitchens, bathrooms, and entire buildings while maintaining structural integrity and enhancing value.',
    interiorDesignFinishing: 'Interior Design & Finishing',
    interiorDesignFinishingDesc: 'Complete interior solutions from concept to completion. We provide custom designs, premium finishes, and detailed craftsmanship for elegant and functional living spaces.',
    industrialConstructionDesc: 'Specialized construction for factories, warehouses, and manufacturing facilities. We deliver robust structures with advanced safety systems and operational efficiency.',
    roadInfrastructureConstruction: 'Road/Infrastructure Construction',
    roadInfrastructureConstructionDesc: 'Building essential infrastructure including roads, bridges, and public works projects. We use durable materials and proven techniques for long-lasting community assets.',
    
    // Commercial Construction Specific Translations
    commercialConstructionServices: 'Commercial Construction Services',
    commercialHeroDescription: 'Build, expand, or renovate your business space with our expert team—delivering quality, safety, and efficiency for every project.',
    whyChooseCommercial: 'Why Choose Our Commercial Services?',
    whyChooseCommercialDesc: 'Experience hassle-free, high-quality commercial construction tailored to your business needs.',
    buildingBusinessesBuildingSuccess: 'Building Businesses, Building Success',
    buildingBusinessesDesc: 'We deliver on our promise of quality, safety, and customer satisfaction—every single time.',
    
    // Commercial Benefits
    turnkeyProjectDelivery: 'Turnkey Project Delivery',
    modernSustainableDesigns: 'Modern & Sustainable Designs',
    strictQualitySafetyStandards: 'Strict Quality & Safety Standards',
    onTimeOnBudgetCompletion: 'On-Time & On-Budget Completion',
    expertProjectManagement: 'Expert Project Management',
    comprehensiveAftercareSupport: 'Comprehensive Aftercare & Support',
    
    // Commercial Services
    officeWorkspaceConstruction: 'Office & Workspace Construction',
    officeWorkspaceConstructionDesc: 'Design and build modern, efficient office spaces tailored to your business needs.',
    retailShowroomFitOuts: 'Retail & Showroom Fit-Outs',
    retailShowroomFitOutsDesc: 'Create inviting retail environments and showrooms that attract customers.',
    industrialWarehouseFacilities: 'Industrial & Warehouse Facilities',
    industrialWarehouseFacilitiesDesc: 'Robust construction for factories, warehouses, and logistics centers.',
    hospitalityRestaurantProjects: 'Hospitality & Restaurant Projects',
    hospitalityRestaurantProjectsDesc: 'Build hotels, restaurants, and cafes with a focus on guest experience.',
    healthcareInstitutionalBuildings: 'Healthcare & Institutional Buildings',
    healthcareInstitutionalBuildingsDesc: 'Specialized construction for clinics, hospitals, and educational institutions.',
    renovationExpansion: 'Renovation & Expansion',
    renovationExpansionDesc: 'Upgrade, expand, or modernize your commercial property with minimal disruption.',
    
    // Commercial Process
    requirementAnalysis: 'Requirement Analysis',
    siteSurveyFeasibilityStudy: 'Site Survey & Feasibility Study',
    designPlanningApprovals: 'Design, Planning & Approvals',
    transparentQuotationAgreement: 'Transparent Quotation & Agreement',
    constructionProgressUpdates: 'Construction & Regular Progress Updates',
    finalHandoverOngoingSupport: 'Final Handover & Ongoing Support',
    
    // Commercial Features
    dedicatedProjectManager: 'Dedicated Project Manager',
    dedicatedProjectManagerDesc: 'Expert project manager assigned to oversee every aspect of your commercial construction project and ensure optimal results.',
    detailedProjectTimeline: 'Detailed Project Timeline',
    detailedProjectTimelineDesc: 'Comprehensive project schedule with clear milestones to track your construction progress effectively.',
    qualitySafetyAudits: 'Quality & Safety Audits',
    qualitySafetyAuditsDesc: 'Regular quality inspections and safety monitoring to ensure all construction standards and regulations are met.',
    postCompletionMaintenance: 'Post-Completion Maintenance',
    postCompletionMaintenanceDesc: 'Ongoing support and maintenance services to ensure your commercial property remains in excellent condition.',
    
    // Additional Commercial Translations
    ourCommercialServices: 'Our Commercial Construction Services',
    commercialProcessDescription: 'We make your commercial construction journey smooth and transparent from start to finish.',
    whatMakesUsDifferent: 'What Sets Us Apart',
    whatMakesUsDifferentDesc: 'Our commitment to quality, transparency, and client satisfaction makes us the trusted choice for commercial construction.',
    commercialExpertiseDesc1: 'We handle every aspect of your project, from design to handover, with a focus on safety and excellence.',
    commercialExpertiseDesc2: 'Our team is licensed, insured, and dedicated to delivering your business space on time and within budget.',
    commercialExpertiseDesc3: 'We use only the best materials and maintain open communication throughout the process.',
    commercialExpertiseDesc4: 'Enjoy peace of mind with our post-completion support and quality assurance.',
    readyToBuildBusinessSpace: 'Ready to Build Your Business Space?',
    businessSpaceDescription: 'Contact us today for a free consultation and let our experts turn your vision into reality with quality, safety, and on-time delivery.',
    
    // Impact Metrics section
    buildingSuccess: 'Building Success, One Project at a Time',
    impactDescription: 'We are proud to have delivered exceptional construction solutions for clients across multiple industries. Our commitment to quality, safety, and innovation has helped us complete a wide range of projects, from residential buildings to large-scale commercial and industrial developments. Partner with us to bring your vision to life with expertise you can trust.',
    scheduleCall: 'Schedule a call',
    happyClients: 'Happy Clients',
    completedProjects: 'Completed Projects',
    industriesServed: 'Industries Served',
    expertTeamMembers: 'Expert Team Members',
    
    // Testimonials section
    whatOurClientsSay: 'What Our Clients Say',
    excellentJob: 'EXCELLENT JOB!',
    testimonialDescription: 'A seamless process from start to finish. Attention to detail and client needs is just fantastic.',
    
    // Testimonial cards
    victoriaLinton: 'Victoria Linton',
    projectManager: 'Project Manager',
    victoriaReview: 'The team exceeded our expectations. Our office building was delivered on time and with outstanding quality!',
    
    fannyOwen: 'Fanny Owen',
    fannyReview: 'A seamless process from start to finish. Attention to detail and client needs is just fantastic.',
    
    clientReview: 'Client Review',
    clientReviewText: 'Rhoncu neque viverra justo ultricies duis lorem dolor sed comset adipiscing.',
    
    alexMorgan: 'Alex Morgan',
    siteSupervisor: 'Site Supervisor',
    alexReview: 'Very satisfied with the timely delivery and quality of work!',
    
    dmitriWoodhouse: 'Dmitri Woodhouse',
    dmitriReview: 'Mauris in aliquam se fringilla morbi tincidunt augue amet dui massa!',
    
    nellyVane: 'NELLY VANE',
    interiorDesigner: 'Interior Designer',
    nellyReview: 'The renovation was handled with great professionalism. Highly recommend!',
    
    priyaSharma: 'Priya Sharma',
    projectEngineer: 'Project Engineer',
    priyaReview: 'Excellent communication and project management throughout.',
    
    topNotch: 'Top-notch!',
    topNotchReview: 'Our home renovation was smooth and stress-free.',
    
    recommended: 'Recommended!',
    recommendedReview: 'Commercial space completed ahead of schedule.',
    
    greatSupport: 'Great Support',
    greatSupportReview: 'The team was always available for our questions.',
    
    impressiveResults: 'Impressive Results',
    impressiveResultsReview: 'Our office looks amazing, thank you!',
    
    professionalTeam: 'Professional Team',
    professionalTeamReview: 'Very professional and courteous staff.',
    
    // CTA section
    readyToBuild: 'Ready to Build Your Next Project?',
    ctaDescription: 'Partner with us for your construction needs—residential, commercial, or industrial. Our experienced team delivers quality, safety, and innovation on every project. Let\'s turn your vision into reality with reliable project management and expert craftsmanship.',
    getFreeConsultation: 'Get a Free Consultation',
    viewOurServices: 'View Our Services',
    
    // Mission & Vision section
    ourMission: 'Our Mission',
    missionStatement: 'To provide accessible, comprehensive construction solutions that transform communities and create lasting positive infrastructure development with quality, safety, and innovation.',
    ourVision: 'Our Vision',
    visionStatement: 'To be the leading construction company where clients discover their path to exceptional building projects and sustainable infrastructure transformation.',

    // About Us page translations
    aboutUsTitle: 'About Us',
    company: 'Company',
    aboutHeroDescription: 'With 25 years of experience, our team delivers quality construction services for residential, commercial, and industrial projects with unwavering commitment to excellence.',
    
    // Our Growth section
    ourGrowthTitle: 'Our Growth Through the Years',
    ourGrowthDescription: 'From humble beginnings to industry leadership, discover the milestones that shaped our construction excellence and commitment to quality.',
    
    // Timeline labels
    timelineFoundation: 'Foundation',
    timelineGrowth: 'Growth',
    timelineInnovation: 'Innovation',
    timelineLeadership: 'Leadership',
    timelineFuture: 'Future',
    
    // Milestones
    milestone1Title: 'Foundation Laid',
    milestone1Description: 'Started our journey with residential construction projects',
    milestone2Title: 'Commercial Growth', 
    milestone2Description: 'Expanded into commercial and industrial construction',
    milestone3Title: 'Technological Innovation',
    milestone3Description: 'Integrated advanced construction technologies and sustainable practices',
    milestone4Title: 'Industry Leadership',
    milestone4Description: 'Became a recognized leader in construction excellence',
    milestone5Title: 'Future Vision',
    milestone5Description: 'Continuing to build tomorrow with innovative solutions',

    // What Makes Us Unique
    whatMakesUsUnique: 'What Makes Us Unique',
    uniqueDescription: 'We combine decades of experience with cutting-edge technology to deliver construction projects that stand the test of time.',
    qualityCraftsmanship: 'Quality Craftsmanship',
    qualityCraftsmanshipDesc: 'We deliver superior construction by using the best materials, skilled professionals, and rigorous quality control at every stage of the project.',
    innovativeSolutions: 'Innovative Solutions',
    innovativeSolutionsDesc: 'We embrace the latest construction technologies and methods to deliver efficient, sustainable, and cost-effective results for our clients.',
    transparentCommunication: 'Transparent Communication',
    transparentCommunicationDesc: 'We keep our clients informed at every step, ensuring clarity, trust, and a smooth construction experience from start to finish.',

    // Our Values
    ourValues: 'Our Values',
    onTimeDelivery: 'On-Time Delivery',
    onTimeDeliveryDesc: 'We are committed to completing projects within deadlines, maintaining efficiency and reliability at every stage.',
    clientCentricApproach: 'Client-Centric Approach',
    clientCentricApproachDesc: 'We prioritize our clients\' needs, offering transparent communication and tailored solutions for every project.',
    safetyFirst: 'Safety First',
    safetyFirstDesc: 'We uphold the highest safety standards to protect our team, clients, and communities on every site.',
    sustainablePractices: 'Sustainable Practices',
    sustainablePracticesDesc: 'We integrate eco-friendly methods and materials to build responsibly for the future.',
    innovationTechnology: 'Innovation & Technology',
    innovationTechnologyDesc: 'We leverage the latest construction technologies to deliver modern, efficient, and cost-effective solutions.',

    // CTA Section
    readyToBuildVision: 'Ready to Build Your Vision?',
    ctaDescription: 'Partner with us for quality construction, on-time delivery, and innovative solutions. Let\'s turn your ideas into reality with a team you can trust.',
    startJourney: 'Start your journey',
    
    // Home2 specific translations
    buildingWithIntegrity: 'Building with Integrity',
    trustedConstruction: 'Trusted construction for every vision.',
    excellenceInEveryBuild: 'Excellence in every build.',
    startYourProject: 'Start Your Project',
    meet: 'Meet',
    ourTeam: 'Our Team',
    teamDescription: 'Our experienced construction team brings your vision to life with precision, safety, and quality. From project planning to on-site management, we ensure every build is completed on time and to the highest standards. Trust us to deliver excellence for your residential, commercial, or industrial projects.',
    
    // Team members
    michaelStone: 'Michael Stone',
    siteManager: 'SITE MANAGER',
    michaelStoneDescription: 'Oversees all on-site operations, ensuring safety, quality, and timely project delivery for every construction build.',
    emilyCarter: 'Emily Carter',
    projectCoordinator: 'PROJECT COORDINATOR',
    emilyCarterDescription: 'Coordinates between teams, suppliers, and clients to keep construction projects on track and within budget.',
    davidMason: 'David Mason',
    leadEngineer: 'LEAD ENGINEER',
    davidMasonDescription: 'Responsible for structural planning, technical supervision, and ensuring engineering excellence on every site.',
    sophiaTurner: 'Sophia Turner',
    safetyOfficer: 'SAFETY OFFICER',
    sophiaTurnerDescription: 'Ensures all safety protocols are followed, providing a secure environment for workers and visitors on site.',
    
    // CEO section
    ourCEO: 'Our CEO',
    ceoMissionStatement: 'Leading our mission to build a better tomorrow through quality construction and innovation.',
    ceoExperience: 'With over 20 years of experience in the construction industry, our CEO has overseen the successful completion of numerous residential, commercial, and industrial projects. Their commitment to safety, efficiency, and client satisfaction drives our company forward.',
    ceoQuote: 'We believe that every project is an opportunity to create lasting value for our clients and communities. Our team is dedicated to delivering excellence, from the ground up.',
    ceoName: 'Lisa, CEO',
    
    // Why Choose Us section
    whyBuildersTrustUs: 'Why Builders Trust Us',
    whyBuildersTrustUsDescription: 'We deliver quality construction solutions with a focus on safety, innovation, and client satisfaction. Our experienced team, modern equipment, and commitment to deadlines set us apart in the construction industry.',
    constructionAdvantages: 'Our Construction Advantages',
    experiencedTeam: 'Experienced Team',
    experiencedTeamDescription: 'Decades of hands-on expertise in residential, commercial, and industrial construction.',
    qualityMaterials: 'Quality Materials',
    qualityMaterialsDescription: 'We use only industry-approved materials for lasting results and safety.',
    safetyFirst: 'Safety First',
    safetyFirstDescription: 'Strict protocols and regular training keep our sites secure for everyone.',
    onTimeDelivery: 'On-Time Delivery',
    onTimeDeliveryDescription: 'We meet deadlines and keep your project on track, every time.',
    modernEquipment: 'Modern Equipment',
    modernEquipmentDescription: 'Advanced machinery and technology for efficient, high-quality builds.',
    transparentCommunication: 'Transparent Communication',
    transparentCommunicationDescription: 'We keep you informed at every stage of your project.',
    
    // Projects and CTA
    featuredProjects: 'Featured Projects',
    readyToBuildDream: 'Ready to Build Your Dream Project?',
    readyToBuildDreamDescription: 'Partner with our expert construction team for quality, safety, and on-time delivery. From residential to commercial, we turn your vision into reality—every step of the way.',
    
    // Residential Page Translations
    residentialConstructionServices: 'Residential Construction Services',
    residentialHeroDescription: 'We make your construction journey smooth and transparent from start to finish.',
    exploreMore: 'Explore More',
    whyChooseResidential: 'Why Choose Our Residential Services?',
    whyChooseResidentialDesc: 'Experience hassle-free, high-quality residential construction with personalized attention to every detail.',
    buildingDreamHomes: 'Building Dream Homes',
    buildingDreamHomesDesc: 'Creating beautiful, functional residential spaces that reflect your lifestyle and exceed expectations.',
    customHomeDesignPlanning: 'Custom Home Design & Planning',
    highQualityMaterials: 'High-Quality Materials & Workmanship',
    onTimeProjectDelivery: 'On-Time Project Delivery',
    transparentPricing: 'Transparent Pricing & Contracts',
    energyEfficientSolutions: 'Energy-Efficient & Sustainable Solutions',
    comprehensiveProjectManagement: 'Comprehensive Project Management',
    ourResidentialServices: 'Our Residential Construction Services',
    customHomeDesign: 'Custom Home Design',
    customHomeDesignDesc: 'Personalized architectural designs tailored to your lifestyle and preferences with modern functionality.',
    newHomeConstruction: 'New Home Construction',
    newHomeConstructionDesc: 'Complete home building services from foundation to final finishing with quality materials and craftsmanship.',
    homeRenovationRemodeling: 'Home Renovation & Remodeling',
    homeRenovationRemodelingDesc: 'Transform your existing home with kitchen, bathroom, and whole-home renovation services.',
    interiorDesignFinishing: 'Interior Design & Finishing',
    interiorDesignFinishingDesc: 'Premium interior solutions including flooring, painting, lighting, and custom millwork.',
    sustainableBuildingSolutions: 'Sustainable Building Solutions',
    sustainableBuildingSolutionsDesc: 'Eco-friendly construction with energy-efficient systems and sustainable building materials.',
    projectManagement: 'Project Management',
    projectManagementDesc: 'Comprehensive project oversight ensuring timely completion within budget and quality standards.',
    howOurProcessWorks: 'How Our Process Works',
    processDescription: 'We make your construction journey smooth and transparent from start to finish.',
    requirementGathering: 'Requirement Gathering',
    siteVisitFeasibility: 'Site Visit & Feasibility Study',
    designPlanningApproval: 'Design & Planning Approval',
    transparentQuotationAgreement: 'Transparent Quotation & Agreement',
    constructionRegularUpdates: 'Construction & Regular Updates',
    finalHandoverSupport: 'Final Handover & Support',
    startProjectToday: 'Start your project today',
    whatMakesUsDifferent: 'What Makes Us Different',
    whatMakesUsDifferentDesc: 'Our residential construction expertise, attention to detail, and commitment to homeowner satisfaction sets us apart from the competition.',
    residentialContractors: 'Residential Contractors',
    detailedProjectTimeline: 'Detailed Project Timeline & Milestones',
    comprehensiveWarranty: 'Comprehensive Warranty & Support',
    residentialExpertiseDesc1: 'From custom home design to complete construction, we handle every detail of your residential project with precision and care.',
    residentialExpertiseDesc2: 'Our licensed and experienced residential construction team delivers quality homes on schedule and within your budget.',
    residentialExpertiseDesc3: 'We use premium building materials and maintain transparent communication throughout your home building journey.',
    residentialExpertiseDesc4: 'Enjoy complete peace of mind with our comprehensive warranties and ongoing homeowner support services.',
    residentialContractorsDesc: 'Fully licensed contractors with years of experience in home construction and renovation projects.',
    detailedProjectTimelineDesc: 'Comprehensive timeline with clear milestones, keeping you informed at each construction stage.',
    qualityMaterialsDesc: 'Premium building materials and skilled craftsmen ensure your home meets the highest quality standards.',
    comprehensiveWarrantySupportDesc: 'Extensive warranty coverage and ongoing support services for your residential construction project.',
    readyToBuildDreamHome: 'Ready to Build Your Dream Home?',
    dreamHomeDescription: 'Get started let our residential construction experts bring your dream home to life with exceptional quality and craftsmanship.',
    getStarted: 'Get started'
  },
  
  Arabic: {
    // Header translations
    home: 'الرئيسية',
    aboutUs: 'من نحن',
    services: 'الخدمات',
    blog: 'المدونة',
    contactUs: 'اتصل بنا',
    viewAllServices: 'عرض جميع الخدمات',
    yogaMeditation: 'اليوجا والتأمل',
    commercial: 'البناء التجاري',
    renovation: 'التجديد والإعادة تشكيل',
    interiorDesign: 'التصميم الداخلي والتشطيبات',
    industrial: 'البناء الصناعي',
    road: 'بناء الطرق والبنية التحتية',
    userProfile: 'الملف الشخصي',
    signedIn: 'تم تسجيل الدخول',
    logout: 'تسجيل الخروج',
    
    // Hero section
    buildingYourFuture: 'بناء مستقبلك',
    heroDescription: 'خدمات البناء عالية الجودة للمشاريع السكنية والتجارية والصناعية. من المفهوم إلى الإنجاز، نقدم التميز والأمان والموثوقية في كل خطوة.',
    exploreOurServices: 'استكشف خدماتنا',
    
    // Who We Are section
    yearsExperience: 'سنوات خبرة في البناء',
    aboutUsTitle: 'من نحن',
    expertConstruction: 'خبرة في البناء لكل رؤية',
    aboutUsDescription: 'مع 25 عامًا من الخبرة، يقدم فريقنا خدمات البناء عالية الجودة للمشاريع السكنية والتجارية والصناعية. نركز على السلامة والابتكار ورضا العملاء - تحويل أفكارك إلى واقع بإدارة مشاريع موثوقة ومهارة حرفية متخصصة.',
    contactUs: 'اتصل بنا',
    
    // Services section
    ourTopServices: 'خدماتنا الأساسية',
    residentialConstruction: 'البناء السكني',
    residentialTagline: 'منازل مخصصة وشقق وفيلات.',
    residentialDetails: 'نبني مساحات سكنية عالية الجودة مصممة خصيصًا لاحتياجاتك، مما يضمن الراحة والأمان والتصميم الحديث.',
    commercialConstruction: 'البناء التجاري',
    commercialTagline: 'مكاتب ومتاجر ومساحات تجارية.',
    commercialDetails: 'من مجمعات المكاتب إلى متاجر التجزئة، نقدم مباني تجارية وظيفية وجذابة لنجاح عملك.',
    renovationRemodeling: 'التجديد وإعادة التأهيل',
    renovationTagline: 'تحويل وترقية المساحات الموجودة.',
    renovationDetails: 'امنح عقارك مظهرًا جديدًا ووظائف محسنة مع خدمات التجديد وإعادة التأهيل المتخصصة لدينا.',
    industrialConstruction: 'البناء الصناعي/البنية التحتية',
    industrialTagline: 'مصانع ومستودعات وبنية تحتية.',
    industrialDetails: 'نتعامل مع مشاريع البنية التحتية الصناعية واسعة النطاق مع التركيز على المتانة والكفاءة والأمان.',
    
    // Services Page Translations
    startBuildingDreams: 'ابدأ ببناء الأحلام',
    servicesHeroDescription: 'من الأبراج السكنية إلى المجمعات التجارية، نقدم بناء عالي الجودة وحلول مبتكرة وإنجاز المشاريع في الوقت المحدد حسب المعالم.',
    exploreServices: 'استكشف الخدمات',
    getAQuote: 'احصل على عرض أسعار',
    qualityServices: 'خدمات عالية الجودة',
    featuredProjects: 'المشاريع المميزة',
    
    // Cost Estimator Section
    estimateProjectCost: 'قدّر تكلفة مشروعك',
    costEstimatorDescription: 'أداة سريعة تتيح للزوار الحصول على فكرة تقريبية عن التكلفة لمشروعهم قبل التواصل معك',
    renovation: 'التجديد',
    residential: 'سكني',
    commercial: 'تجاري',
    industrial: 'صناعي',
    areaSizePlaceholder: 'مساحة المنطقة (قدم مربع أو متر مربع)',
    standard: 'معياري',
    premium: 'متميز',
    luxury: 'فاخر',
    locationOptional: 'الموقع (اختياري)',
    yourName: 'اسمك',
    phoneNumber: 'رقم الهاتف',
    getDetailedQuote: 'احصل على عرض أسعار مفصل',
    instantApproximateCost: '- التكلفة التقريبية الفورية',
    
    // Safety Standards Section
    safetyStandardsFollowed: 'معايير السلامة المتبعة',
    certifiedProfessionals: 'متخصصون معتمدون',
    certifiedProfessionalsDesc: 'جميع موظفينا معتمدون ومدربون على اتباع أعلى بروتوكولات السلامة في الصناعة.',
    regularAudits: 'عمليات تدقيق منتظمة',
    regularAuditsDesc: 'نقوم بعمليات تدقيق وتفتيش منتظمة للسلامة لضمان الامتثال لجميع اللوائح.',
    qualityMaterials: 'مواد عالية الجودة',
    qualityMaterialsDesc: 'يتم استخدام المواد المعتمدة عالية الجودة فقط لضمان السلامة والمتانة.',
    emergencyPreparedness: 'الاستعداد للطوارئ',
    emergencyPreparednessDesc: 'خطط طوارئ شاملة واستعداد للإسعافات الأولية في كل موقع.',
    
    // Featured Projects Section
    finishingWorks: 'أعمال التشطيب',
    redevelopment: 'إعادة التطوير',
    modernBathroom: 'حمام عصري',
    repairOfApartments: 'إصلاح الشقق',
    decorativeWorksInLiving: 'أعمال ديكورية في المعيشة',
    officeInteriorModernStyle: 'التصميم الداخلي للمكتب بأسلوب عصري',
    
    // Service Cards
    residentialConstructionDesc: 'بناء منازل الأحلام بهندسة معمارية حديثة ومواد عالية الجودة وتصميم مستدام. من المنازل المفردة إلى العقارات الفاخرة، نخلق مساحات معيشية تعكس أسلوب حياتك.',
    commercialConstructionDesc: 'بناء المباني المكتبية ومساحات التجزئة والمجمعات التجارية بتكنولوجيا متطورة وتصاميم فعالة تزيد من الوظائف والإنتاجية.',
    renovationRemodelingDesc: 'تحويل المساحات الموجودة بخدمات التجديد المتخصصة. نحدث المطابخ والحمامات والمباني الكاملة مع الحفاظ على السلامة الهيكلية وتعزيز القيمة.',
    interiorDesignFinishing: 'التصميم الداخلي والتشطيب',
    interiorDesignFinishingDesc: 'حلول داخلية كاملة من المفهوم إلى الإنجاز. نقدم تصاميم مخصصة وتشطيبات متميزة ومهارة حرفية مفصلة لمساحات معيشية أنيقة ووظيفية.',
    industrialConstructionDesc: 'بناء متخصص للمصانع والمستودعات ومرافق التصنيع. نقدم هياكل قوية مع أنظمة أمان متقدمة وكفاءة تشغيلية.',
    roadInfrastructureConstruction: 'بناء الطرق/البنية التحتية',
    roadInfrastructureConstructionDesc: 'بناء البنية التحتية الأساسية بما في ذلك الطرق والجسور ومشاريع الأشغال العامة. نستخدم مواد متينة وتقنيات مثبتة لأصول مجتمعية طويلة الأمد.',
    
    // ترجمات البناء التجاري المحددة
    commercialConstructionServices: 'خدمات البناء التجاري',
    commercialHeroDescription: 'ابني أو وسع أو جدد مساحة عملك مع فريقنا الخبير—نقدم الجودة والأمان والكفاءة في كل مشروع.',
    whyChooseCommercial: 'لماذا تختار خدماتنا التجارية؟',
    whyChooseCommercialDesc: 'اختبر البناء التجاري عالي الجودة والخالي من المتاعب والمصمم خصيصًا لاحتياجات عملك.',
    buildingBusinessesBuildingSuccess: 'بناء الأعمال، بناء النجاح',
    buildingBusinessesDesc: 'نحن نفي بوعدنا للجودة والأمان ورضا العملاء—في كل مرة.',
    
    // فوائد البناء التجاري
    turnkeyProjectDelivery: 'تسليم المشروع الجاهز',
    modernSustainableDesigns: 'تصاميم حديثة ومستدامة',
    strictQualitySafetyStandards: 'معايير صارمة للجودة والأمان',
    onTimeOnBudgetCompletion: 'إنجاز في الوقت المحدد وضمن الميزانية',
    expertProjectManagement: 'إدارة مشاريع متخصصة',
    comprehensiveAftercareSupport: 'دعم شامل للرعاية اللاحقة',
    
    // الخدمات التجارية
    officeWorkspaceConstruction: 'بناء المكاتب ومساحات العمل',
    officeWorkspaceConstructionDesc: 'تصميم وبناء مساحات مكتبية حديثة وفعالة مصممة خصيصًا لاحتياجات عملك.',
    retailShowroomFitOuts: 'تجهيز المتاجر وصالات العرض',
    retailShowroomFitOutsDesc: 'إنشاء بيئات تجارية جذابة وصالات عرض تجذب العملاء.',
    industrialWarehouseFacilities: 'المرافق الصناعية والمستودعات',
    industrialWarehouseFacilitiesDesc: 'بناء قوي للمصانع والمستودعات ومراكز اللوجستيات.',
    hospitalityRestaurantProjects: 'مشاريع الضيافة والمطاعم',
    hospitalityRestaurantProjectsDesc: 'بناء الفنادق والمطاعم والمقاهي مع التركيز على تجربة الضيوف.',
    healthcareInstitutionalBuildings: 'مباني الرعاية الصحية والمؤسسية',
    healthcareInstitutionalBuildingsDesc: 'بناء متخصص للعيادات والمستشفيات والمؤسسات التعليمية.',
    renovationExpansion: 'التجديد والتوسيع',
    renovationExpansionDesc: 'ترقية أو توسيع أو تحديث ممتلكاتك التجارية مع الحد الأدنى من التعطيل.',
    
    // عملية البناء التجاري
    requirementAnalysis: 'تحليل المتطلبات',
    siteSurveyFeasibilityStudy: 'مسح الموقع ودراسة الجدوى',
    designPlanningApprovals: 'التصميم والتخطيط والموافقات',
    transparentQuotationAgreement: 'عرض أسعار شفاف واتفاقية',
    constructionProgressUpdates: 'البناء وتحديثات التقدم المنتظمة',
    finalHandoverOngoingSupport: 'التسليم النهائي والدعم المستمر',
    
    // ميزات البناء التجاري
    dedicatedProjectManager: 'مدير مشروع مخصص',
    dedicatedProjectManagerDesc: 'مدير مشروع خبير مكلف بالإشراف على كل جانب من جوانب مشروع البناء التجاري الخاص بك وضمان النتائج المثلى.',
    detailedProjectTimeline: 'جدول زمني مفصل للمشروع',
    detailedProjectTimelineDesc: 'جدول مشروع شامل مع معالم واضحة لتتبع تقدم البناء الخاص بك بفعالية.',
    qualitySafetyAudits: 'عمليات تدقيق الجودة والأمان',
    qualitySafetyAuditsDesc: 'عمليات تفتيش منتظمة للجودة ومراقبة الأمان لضمان استيفاء جميع معايير ولوائح البناء.',
    postCompletionMaintenance: 'صيانة ما بعد الإنجاز',
    postCompletionMaintenanceDesc: 'خدمات الدعم والصيانة المستمرة لضمان بقاء ممتلكاتك التجارية في حالة ممتازة.',
    
    // ترجمات تجارية إضافية
    ourCommercialServices: 'خدماتنا للبناء التجاري',
    commercialProcessDescription: 'نحن نجعل رحلة البناء التجاري الخاصة بك سلسة وشفافة من البداية إلى النهاية.',
    whatMakesUsDifferent: 'ما الذي يميزنا',
    whatMakesUsDifferentDesc: 'التزامنا بالجودة والشفافية ورضا العملاء يجعلنا الخيار الموثوق للبناء التجاري.',
    commercialExpertiseDesc1: 'نتولى كل جانب من جوانب مشروعك، من التصميم إلى التسليم، مع التركيز على السلامة والتميز.',
    commercialExpertiseDesc2: 'فريقنا مرخص ومؤمن ومكرس لتسليم مساحة عملك في الوقت المحدد وضمن الميزانية.',
    commercialExpertiseDesc3: 'نستخدم أفضل المواد فقط ونحافظ على التواصل المفتوح طوال العملية.',
    commercialExpertiseDesc4: 'استمتع براحة البال مع دعمنا بعد الإنجاز وضمان الجودة.',
    readyToBuildBusinessSpace: 'مستعد لبناء مساحة عملك؟',
    businessSpaceDescription: 'اتصل بنا اليوم للحصول على استشارة مجانية ودع خبراءنا يحولون رؤيتك إلى واقع بجودة وأمان وتسليم في الوقت المحدد.',
    
    // Impact Metrics section
    buildingSuccess: 'بناء النجاح، مشروع واحد في كل مرة',
    impactDescription: 'نحن فخورون بتقديم حلول البناء الاستثنائية للعملاء عبر صناعات متعددة. التزامنا بالجودة والسلامة والابتكار ساعدنا في إكمال مجموعة واسعة من المشاريع، من المباني السكنية إلى التطويرات التجارية والصناعية واسعة النطاق. شاركنا لتحقيق رؤيتك بخبرة يمكنك الوثوق بها.',
    scheduleCall: 'جدولة مكالمة',
    happyClients: 'عملاء سعداء',
    completedProjects: 'مشاريع مكتملة',
    industriesServed: 'صناعات تم خدمتها',
    expertTeamMembers: 'أعضاء الفريق الخبراء',
    
    // Testimonials section
    whatOurClientsSay: 'ماذا يقول عملاؤنا',
    excellentJob: 'عمل ممتاز!',
    testimonialDescription: 'عملية سلسة من البداية إلى النهاية. الاهتمام بالتفاصيل واحتياجات العملاء رائع حقًا.',
    
    // Testimonial cards
    victoriaLinton: 'فيكتوريا لينتون',
    projectManager: 'مدير مشروع',
    victoriaReview: 'تجاوز الفريق توقعاتنا. تم تسليم مبنى مكتبنا في الوقت المحدد وبجودة متميزة!',
    
    fannyOwen: 'فاني أوين',
    fannyReview: 'عملية سلسة من البداية إلى النهاية. الاهتمام بالتفاصيل واحتياجات العملاء رائع حقًا.',
    
    clientReview: 'مراجعة العميل',
    clientReviewText: 'تجربة ممتازة مع فريق محترف ومتفهم لاحتياجات العملاء.',
    
    alexMorgan: 'أليكس مورغان',
    siteSupervisor: 'مشرف الموقع',
    alexReview: 'راضٍ جداً عن التسليم في الوقت المحدد وجودة العمل!',
    
    dmitriWoodhouse: 'دميتري وودهاوس',
    dmitriReview: 'خدمة ممتازة وعمل احترافي في كل التفاصيل!',
    
    nellyVane: 'نيلي فان',
    interiorDesigner: 'مصممة داخلية',
    nellyReview: 'تم التعامل مع التجديد بمهنية عالية. أنصح بشدة!',
    
    priyaSharma: 'بريا شارما',
    projectEngineer: 'مهندسة مشاريع',
    priyaReview: 'تواصل ممتاز وإدارة مشاريع رائعة طوال الوقت.',
    
    topNotch: 'من الدرجة الأولى!',
    topNotchReview: 'تجديد منزلنا كان سلس وبدون ضغط.',
    
    recommended: 'موصى به!',
    recommendedReview: 'تم إنجاز المساحة التجارية قبل الموعد المحدد.',
    
    greatSupport: 'دعم رائع',
    greatSupportReview: 'الفريق كان متاحاً دائماً لأسئلتنا.',
    
    impressiveResults: 'نتائج مبهرة',
    impressiveResultsReview: 'مكتبنا يبدو رائعاً، شكراً لكم!',
    
    professionalTeam: 'فريق محترف',
    professionalTeamReview: 'فريق مهني ومهذب جداً.',
    
    // CTA section
    readyToBuild: 'هل أنت مستعد لبناء مشروعك التالي؟',
    ctaDescription: 'شاركنا في احتياجات البناء الخاصة بك - سكنية أو تجارية أو صناعية. فريقنا ذو الخبرة يقدم الجودة والأمان والابتكار في كل مشروع. دعنا نحول رؤيتك إلى واقع بإدارة مشاريع موثوقة ومهارة حرفية متخصصة.',
    getFreeConsultation: 'احصل على استشارة مجانية',
    viewOurServices: 'عرض خدماتنا',
    
    // Mission & Vision section
    ourMission: 'مهمتنا',
    missionStatement: 'توفير حلول بناء شاملة ومتاحة تحول المجتمعات وتخلق تنمية بنية تحتية إيجابية دائمة بالجودة والأمان والابتكار.',
    ourVision: 'رؤيتنا',
    visionStatement: 'أن نكون الشركة الرائدة في البناء حيث يكتشف العملاء طريقهم إلى مشاريع بناء استثنائية وتحول بنية تحتية مستدامة.',

    // About Us page translations
    aboutUsTitle: 'من نحن',
    company: 'الشركة',
    aboutHeroDescription: 'مع 25 عامًا من الخبرة، يقدم فريقنا خدمات البناء عالية الجودة للمشاريع السكنية والتجارية والصناعية مع التزام راسخ بالتميز.',
    
    // Our Growth section
    ourGrowthTitle: 'نموّنا عبر السنين',
    ourGrowthDescription: 'من البدايات المتواضعة إلى الريادة في الصناعة، اكتشف المحطات المهمة التي شكّلت تميزنا في البناء والتزامنا بالجودة.',
    
    // Timeline labels
    timelineFoundation: 'التأسيس',
    timelineGrowth: 'النمو',
    timelineInnovation: 'الابتكار',
    timelineLeadership: 'الريادة',
    timelineFuture: 'المستقبل',
    
    // Milestones
    milestone1Title: 'وضع الأساس',
    milestone1Description: 'بدأنا رحلتنا مع مشاريع البناء السكني',
    milestone2Title: 'النمو التجاري', 
    milestone2Description: 'توسعنا في البناء التجاري والصناعي',
    milestone3Title: 'الابتكار التكنولوجي',
    milestone3Description: 'دمجنا تقنيات البناء المتقدمة والممارسات المستدامة',
    milestone4Title: 'الريادة في الصناعة',
    milestone4Description: 'أصبحنا رائدين معترف بهم في تميز البناء',
    milestone5Title: 'رؤية المستقبل',
    milestone5Description: 'مستمرون في بناء الغد بحلول مبتكرة',

    // What Makes Us Unique
    whatMakesUsUnique: 'ما يميزنا',
    uniqueDescription: 'نجمع بين عقود من الخبرة والتكنولوجيا المتطورة لتقديم مشاريع بناء تصمد أمام اختبار الزمن.',
    qualityCraftsmanship: 'الحرفية عالية الجودة',
    qualityCraftsmanshipDesc: 'نقدم بناءً متفوقًا باستخدام أفضل المواد والمهنيين المهرة ومراقبة الجودة الصارمة في كل مرحلة من المشروع.',
    innovativeSolutions: 'الحلول المبتكرة',
    innovativeSolutionsDesc: 'نتبنى أحدث تقنيات وطرق البناء لتقديم نتائج فعالة ومستدامة وفعالة من حيث التكلفة لعملائنا.',
    transparentCommunication: 'التواصل الشفاف',
    transparentCommunicationDesc: 'نبقي عملاءنا على اطلاع في كل خطوة، مضمونين الوضوح والثقة وتجربة بناء سلسة من البداية إلى النهاية.',

    // Our Values
    ourValues: 'قيمنا',
    onTimeDelivery: 'التسليم في الوقت المحدد',
    onTimeDeliveryDesc: 'نلتزم بإكمال المشاريع ضمن المواعيد النهائية، مع الحفاظ على الكفاءة والموثوقية في كل مرحلة.',
    clientCentricApproach: 'النهج المتمحور حول العميل',
    clientCentricApproachDesc: 'نعطي الأولوية لاحتياجات عملائنا، ونقدم تواصلاً شفافًا وحلولاً مخصصة لكل مشروع.',
    safetyFirst: 'السلامة أولاً',
    safetyFirstDesc: 'نلتزم بأعلى معايير السلامة لحماية فريقنا وعملائنا والمجتمعات في كل موقع.',
    sustainablePractices: 'الممارسات المستدامة',
    sustainablePracticesDesc: 'ندمج الطرق والمواد الصديقة للبيئة للبناء بمسؤولية من أجل المستقبل.',
    innovationTechnology: 'الابتكار والتكنولوجيا',
    innovationTechnologyDesc: 'نستفيد من أحدث تقنيات البناء لتقديم حلول حديثة وفعالة وفعالة من حيث التكلفة.',

    // CTA Section
    readyToBuildVision: 'مستعد لبناء رؤيتك؟',
    ctaDescription: 'شاركنا للحصول على بناء عالي الجودة وتسليم في الوقت المحدد وحلول مبتكرة. دعنا نحول أفكارك إلى واقع مع فريق يمكنك الثقة به.',
    startJourney: 'ابدأ رحلتك',
    
    // Home2 specific translations
    buildingWithIntegrity: 'البناء بالنزاهة',
    trustedConstruction: 'بناء موثوق لكل رؤية.',
    excellenceInEveryBuild: 'التميز في كل بناء.',
    startYourProject: 'ابدأ مشروعك',
    meet: 'تعرف على',
    ourTeam: 'فريقنا',
    teamDescription: 'يحقق فريق البناء ذو الخبرة لدينا رؤيتك بدقة وأمان وجودة. من تخطيط المشاريع إلى إدارة الموقع، نضمن إنجاز كل بناء في الوقت المحدد وبأعلى المعايير. ثق بنا لتقديم التميز لمشاريعك السكنية أو التجارية أو الصناعية.',
    
    // Team members
    michaelStone: 'مايكل ستون',
    siteManager: 'مدير الموقع',
    michaelStoneDescription: 'يشرف على جميع العمليات في الموقع، مما يضمن السلامة والجودة والتسليم في الوقت المناسب لكل مشروع بناء.',
    emilyCarter: 'إيميلي كارتر',
    projectCoordinator: 'منسق المشروع',
    emilyCarterDescription: 'ينسق بين الفرق والموردين والعملاء للحفاظ على مشاريع البناء على المسار الصحيح وضمن الميزانية.',
    davidMason: 'ديفيد ماسون',
    leadEngineer: 'كبير المهندسين',
    davidMasonDescription: 'مسؤول عن التخطيط الهيكلي والإشراف التقني وضمان التميز الهندسي في كل موقع.',
    sophiaTurner: 'صوفيا تيرنر',
    safetyOfficer: 'مسؤول السلامة',
    sophiaTurnerDescription: 'يضمن اتباع جميع بروتوكولات السلامة، مما يوفر بيئة آمنة للعمال والزوار في الموقع.',
    
    // CEO section
    ourCEO: 'مديرنا التنفيذي',
    ceoMissionStatement: 'قيادة مهمتنا لبناء غد أفضل من خلال البناء عالي الجودة والابتكار.',
    ceoExperience: 'مع أكثر من 20 عامًا من الخبرة في صناعة البناء، أشرف مديرنا التنفيذي على الإنجاز الناجح للعديد من المشاريع السكنية والتجارية والصناعية. التزامهم بالسلامة والكفاءة ورضا العملاء يدفع شركتنا إلى الأمام.',
    ceoQuote: 'نؤمن أن كل مشروع هو فرصة لخلق قيمة دائمة لعملائنا ومجتمعاتنا. فريقنا مكرس لتقديم التميز، من الأساس إلى القمة.',
    ceoName: 'ليزا، المدير التنفيذي',
    
    // Why Choose Us section
    whyBuildersTrustUs: 'لماذا يثق بنا البناؤون',
    whyBuildersTrustUsDescription: 'نقدم حلول بناء عالية الجودة مع التركيز على السلامة والابتكار ورضا العملاء. فريقنا ذو الخبرة والمعدات الحديثة والالتزام بالمواعيد النهائية يميزنا في صناعة البناء.',
    constructionAdvantages: 'مزايا البناء لدينا',
    experiencedTeam: 'فريق ذو خبرة',
    experiencedTeamDescription: 'عقود من الخبرة العملية في البناء السكني والتجاري والصناعي.',
    qualityMaterials: 'مواد عالية الجودة',
    qualityMaterialsDescription: 'نستخدم فقط المواد المعتمدة من الصناعة للحصول على نتائج دائمة وآمنة.',
    safetyFirst: 'السلامة أولاً',
    safetyFirstDescription: 'بروتوكولات صارمة وتدريب منتظم يحافظ على أمان مواقعنا للجميع.',
    onTimeDelivery: 'التسليم في الوقت المحدد',
    onTimeDeliveryDescription: 'نلتزم بالمواعيد النهائية ونحافظ على مشروعك على المسار الصحيح، في كل مرة.',
    modernEquipment: 'معدات حديثة',
    modernEquipmentDescription: 'آلات وتكنولوجيا متقدمة لبناء فعال وعالي الجودة.',
    transparentCommunication: 'تواصل شفاف',
    transparentCommunicationDescription: 'نبقيك على اطلاع في كل مرحلة من مراحل مشروعك.',
    
    // Projects and CTA
    featuredProjects: 'المشاريع المميزة',
    readyToBuildDream: 'هل أنت مستعد لبناء مشروع أحلامك؟',
    readyToBuildDreamDescription: 'شارك مع فريق البناء الخبير لدينا للحصول على الجودة والسلامة والتسليم في الوقت المحدد. من السكني إلى التجاري، نحول رؤيتك إلى واقع - في كل خطوة على الطريق.',
    
    // Residential Page Translations
    residentialConstructionServices: 'خدمات البناء السكني',
    residentialHeroDescription: 'نجعل رحلة البناء الخاصة بك سلسة وشفافة من البداية إلى النهاية.',
    exploreMore: 'استكشف المزيد',
    whyChooseResidential: 'لماذا تختار خدماتنا السكنية؟',
    whyChooseResidentialDesc: 'اختبر البناء السكني عالي الجودة وخالي من المتاعب مع اهتمام شخصي بكل التفاصيل.',
    buildingDreamHomes: 'بناء منازل الأحلام',
    buildingDreamHomesDesc: 'إنشاء مساحات سكنية جميلة ووظيفية تعكس أسلوب حياتك وتتجاوز التوقعات.',
    customHomeDesignPlanning: 'تصميم وتخطيط المنازل المخصصة',
    highQualityMaterials: 'مواد عالية الجودة ومهارة حرفية',
    onTimeProjectDelivery: 'تسليم المشروع في الوقت المحدد',
    transparentPricing: 'تسعير شفاف وعقود واضحة',
    energyEfficientSolutions: 'حلول موفرة للطاقة ومستدامة',
    comprehensiveProjectManagement: 'إدارة مشاريع شاملة',
    ourResidentialServices: 'خدمات البناء السكني لدينا',
    customHomeDesign: 'تصميم المنازل المخصصة',
    customHomeDesignDesc: 'تصاميم معمارية شخصية مصممة خصيصاً لأسلوب حياتك وتفضيلاتك مع وظائف عصرية.',
    newHomeConstruction: 'بناء المنازل الجديدة',
    newHomeConstructionDesc: 'خدمات بناء منازل كاملة من الأساس إلى التشطيب النهائي بمواد عالية الجودة ومهارة حرفية.',
    homeRenovationRemodeling: 'تجديد وإعادة تأهيل المنازل',
    homeRenovationRemodelingDesc: 'حول منزلك الحالي مع خدمات تجديد المطبخ والحمام والمنزل بالكامل.',
    interiorDesignFinishing: 'التصميم الداخلي والتشطيب',
    interiorDesignFinishingDesc: 'حلول داخلية متميزة تشمل الأرضيات والطلاء والإضاءة والأعمال الخشبية المخصصة.',
    sustainableBuildingSolutions: 'حلول البناء المستدام',
    sustainableBuildingSolutionsDesc: 'بناء صديق للبيئة مع أنظمة موفرة للطاقة ومواد بناء مستدامة.',
    projectManagement: 'إدارة المشاريع',
    projectManagementDesc: 'إشراف شامل على المشاريع يضمن الإنجاز في الوقت المحدد ضمن الميزانية ومعايير الجودة.',
    howOurProcessWorks: 'كيف تعمل عمليتنا',
    processDescription: 'نجعل رحلة البناء الخاصة بك سلسة وشفافة من البداية إلى النهاية.',
    requirementGathering: 'جمع المتطلبات',
    siteVisitFeasibility: 'زيارة الموقع ودراسة الجدوى',
    designPlanningApproval: 'التصميم وموافقة التخطيط',
    transparentQuotationAgreement: 'عرض أسعار شفاف واتفاقية',
    constructionRegularUpdates: 'البناء والتحديثات المنتظمة',
    finalHandoverSupport: 'التسليم النهائي والدعم',
    startProjectToday: 'ابدأ مشروعك اليوم',
    whatMakesUsDifferent: 'ما الذي يميزنا',
    whatMakesUsDifferentDesc: 'خبرتنا في البناء السكني واهتمامنا بالتفاصيل والتزامنا برضا أصحاب المنازل يميزنا عن المنافسة.',
    residentialContractors: 'مقاولو البناء السكني',
    detailedProjectTimeline: 'جدول زمني مفصل للمشروع ومعالم واضحة',
    comprehensiveWarranty: 'ضمان شامل ودعم',
    residentialExpertiseDesc1: 'من تصميم المنازل المخصصة إلى البناء الكامل، نتعامل مع كل تفصيلة من مشروعك السكني بدقة وعناية.',
    residentialExpertiseDesc2: 'فريق البناء السكني المرخص والخبير لدينا يسلم منازل عالية الجودة في الموعد المحدد وضمن ميزانيتك.',
    residentialExpertiseDesc3: 'نستخدم مواد بناء متميزة ونحافظ على التواصل الشفاف طوال رحلة بناء منزلك.',
    residentialExpertiseDesc4: 'استمتع براحة البال الكاملة مع ضماناتنا الشاملة وخدمات الدعم المستمرة لأصحاب المنازل.',
    residentialContractorsDesc: 'مقاولون سكنيون مرخصون مع سنوات من الخبرة في بناء وتجديد المنازل.',
    detailedProjectTimelineDesc: 'جدول زمني شامل مع معالم واضحة، نبقيك على اطلاع بالتقدم في كل مرحلة بناء.',
    qualityMaterialsDesc: 'مواد بناء متميزة وحرفيون مهرة لضمان أن منزلك يلبي أعلى معايير الجودة.',
    comprehensiveWarrantySupportDesc: 'تغطية ضمان واسعة وخدمات دعم مستمرة لمشروع البناء السكني الخاص بك.',
    readyToBuildDreamHome: 'مستعد لبناء منزل أحلامك؟',
    dreamHomeDescription: 'ابدأ الآن ودع خبراء البناء السكني لدينا يحققون منزل أحلامك بجودة استثنائية ومهارة حرفية.',
    getStarted: 'ابدأ الآن'
  },
  
  Hebrew: {
    // Header translations
    home: 'בית',
    aboutUs: 'אודותינו',
    services: 'שירותים',
    blog: 'בלוג',
    contactUs: 'צור קשר',
    viewAllServices: 'צפה בכל השירותים',
    yogaMeditation: 'יוגה ומדיטציה',
    commercial: 'בנייה מסחרית',
    renovation: 'שיפוץ ועיצוב מחדש',
    interiorDesign: 'עיצוב פנים וגימורים',
    industrial: 'בנייה תעשייתית',
    road: 'בניית דרכים ותשתיות',
    userProfile: 'פרופיל משתמש',
    signedIn: 'מחובר',
    logout: 'התנתק',
    
    // Hero section
    buildingYourFuture: 'בונים את העתיד שלך',
    heroDescription: 'שירותי בנייה איכותיים לפרויקטים מגורים, מסחריים ותעשייתיים. מהקונספט ועד להשלמה, אנו מספקים מצוינות, בטיחות ואמינות בכל שלב.',
    exploreOurServices: 'גלה את השירותים שלנו',
    
    // Who We Are section
    yearsExperience: 'שנות ניסיון בבנייה',
    aboutUsTitle: 'אודותינו',
    expertConstruction: 'בנייה מקצועית לכל חזון',
    aboutUsDescription: 'עם 25 שנות ניסיון, הצוות שלנו מספק שירותי בנייה איכותיים לפרויקטים מגורים, מסחריים ותעשייתיים. אנו מתמקדים בבטיחות, חדשנות ושביעות רצון הלקוחות - הופכים את הרעיונות שלך למציאות עם ניהול פרויקטים אמין ומומחיות מקצועית.',
    contactUs: 'צור קשר',
    
    // Services section
    ourTopServices: 'השירותים המובילים שלנו',
    residentialConstruction: 'בנייה למגורים',
    residentialTagline: 'בתים מותאמים אישית, דירות ווילות.',
    residentialDetails: 'אנו בונים חללי מגורים איכותיים המותאמים לצרכים שלך, המבטיחים נוחות, בטיחות ועיצוב מודרני.',
    commercialConstruction: 'בנייה מסחרית',
    commercialTagline: 'משרדים, חנויות וחללים עסקיים.',
    commercialDetails: 'ממתחמי משרדים ועד חנויות קמעונאיות, אנו מספקים מבנים מסחריים פונקציונליים ואטרקטיביים להצלחת העסק שלך.',
    renovationRemodeling: 'שיפוץ ועיצוב מחדש',
    renovationTagline: 'הפיכה ושדרוג של חללים קיימים.',
    renovationDetails: 'תן לנכס שלך מראה חדש ופונקציונליות משופרת עם שירותי השיפוץ והעיצוב מחדש המקצועיים שלנו.',
    industrialConstruction: 'בנייה תעשייתية/תשתיות',
    industrialTagline: 'מפעלים, מחסנים ותשתיות.',
    industrialDetails: 'אנו מטפלים בפרויקטי תשתיות תעשייתיים בקנה מידה גדול עם התמקדות בעמידות, יעילות ובטיחות.',
    
    // Services Page Translations
    startBuildingDreams: 'התחל לבנות חלומות',
    servicesHeroDescription: 'ממגדלי מגורים ועד למתחמים מסחריים, אנו מספקים בנייה איכותית, פתרונות חדשניים והשלמת פרויקטים בזמן לפי אבני דרך.',
    exploreServices: 'גלה שירותים',
    getAQuote: 'קבל הצעת מחיר',
    qualityServices: 'שירותים איכותיים',
    featuredProjects: 'פרויקטים מובילים',
    
    // Cost Estimator Section
    estimateProjectCost: 'הערך את עלות הפרויקט שלך',
    costEstimatorDescription: 'כלי מהיר המאפשר למבקרים לקבל רעיון כללי על העלות עבור הפרויקט שלהם לפני יצירת קשר',
    renovation: 'שיפוץ',
    residential: 'מגורים',
    commercial: 'מסחרי',
    industrial: 'תעשייתי',
    areaSizePlaceholder: 'גודל שטח (רגל רבוע או מ״ר)',
    standard: 'סטנדרטי',
    premium: 'פרימיום',
    luxury: 'יוקרה',
    locationOptional: 'מיקום (אופציונלי)',
    yourName: 'השם שלך',
    phoneNumber: 'מספר טלפון',
    getDetailedQuote: 'קבל הצעת מחיר מפורטת',
    instantApproximateCost: '- עלות משוערת מיידית',
    
    // Safety Standards Section
    safetyStandardsFollowed: 'תקני בטיחות הנהוגים',
    certifiedProfessionals: 'אנשי מקצוע מוסמכים',
    certifiedProfessionalsDesc: 'כל הצוות שלנו מוסמך ומאומן לפעול לפי פרוטוקולי הבטיחות הגבוהים ביותר בתעשייה.',
    regularAudits: 'ביקורות קבועות',
    regularAuditsDesc: 'אנו מבצעים ביקורות ובדיקות בטיחות קבועות כדי להבטיח עמידה בכל התקנות.',
    qualityMaterials: 'חומרים איכותיים',
    qualityMaterialsDesc: 'משתמשים רק בחומרים מאושרים ואיכותיים כדי להבטיח בטיחות ועמידות.',
    emergencyPreparedness: 'מוכנות לחירום',
    emergencyPreparednessDesc: 'תוכניות חירום מקיפות ומוכנות עזרה ראשונה בכל אתר.',
    
    // Featured Projects Section
    finishingWorks: 'עבודות גמר',
    redevelopment: 'פיתוח מחדש',
    modernBathroom: 'חדר רחצה מודרני',
    repairOfApartments: 'תיקון דירות',
    decorativeWorksInLiving: 'עבודות דקורטיביות בסלון',
    officeInteriorModernStyle: 'עיצוב פנים למשרד בסגנון מודרני',
    
    // Service Cards
    residentialConstructionDesc: 'בניית בתי חלומות עם אדריכלות מודרנית, חומרים איכותיים ועיצוב בר-קיימא. מבתים חד-משפחתיים ועד אחוזות יוקרה, אנו יוצרים חללי מחיה המשקפים את אורח החיים שלך.',
    commercialConstructionDesc: 'בניית בנייני משרדים, חללי קמעונאות ומתחמים מסחריים עם טכנולוגיה מתקדמת ועיצובים יעילים הממקסמים פונקציונליות ופרודוקטיביות.',
    renovationRemodelingDesc: 'הפיכת חללים קיימים עם שירותי שיפוץ מומחים. אנו מחדשים מטבחים, חדרי רחצה ובניינים שלמים תוך שמירה על שלמות מבנית ושיפור הערך.',
    interiorDesignFinishing: 'עיצוב פנים וגימורים',
    interiorDesignFinishingDesc: 'פתרונות פנים מלאים מקונספט ועד השלמה. אנו מספקים עיצובים מותאמים אישית, גימורים יוקרתיים ואומנות מפורטת לחללי מחיה אלגנטיים ופונקציונליים.',
    industrialConstructionDesc: 'בנייה מתמחה למפעלים, מחסנים ומתקני ייצור. אנו מספקים מבנים חזקים עם מערכות בטיחות מתקדמות ויעילות תפעולית.',
    roadInfrastructureConstruction: 'בניית כבישים/תשתיות',
    roadInfrastructureConstructionDesc: 'בניית תשתיות חיוניות כולל כבישים, גשרים ופרויקטי עבודות ציבוריות. אנו משתמשים בחומרים עמידים וטכניקות מוכחות לנכסים קהילתיים ארוכי טווח.',
    
    // תרגומים ספציפיים לבנייה מסחרית
    commercialConstructionServices: 'שירותי בנייה מסחרית',
    commercialHeroDescription: 'בנה, הרחב או שפץ את המרחב העסקי שלך עם הצוות המומחה שלנו—מספקים איכות, בטיחות ויעילות בכל פרויקט.',
    whyChooseCommercial: 'למה לבחור בשירותים המסחריים שלנו?',
    whyChooseCommercialDesc: 'חווה בנייה מסחרית איכותית וללא טרחה המותאמת לצרכים העסקיים שלך.',
    buildingBusinessesBuildingSuccess: 'בונים עסקים, בונים הצלחה',
    buildingBusinessesDesc: 'אנו עומדים בהבטחה שלנו לאיכות, בטיחות ושביעות רצון הלקוחות—בכל פעם.',
    
    // יתרונות הבנייה המסחרית
    turnkeyProjectDelivery: 'מסירת פרויקט מפתח בידיים',
    modernSustainableDesigns: 'עיצובים מודרניים ובני קיימא',
    strictQualitySafetyStandards: 'תקני איכות ובטיחות קפדניים',
    onTimeOnBudgetCompletion: 'השלמה בזמן ובתקציב',
    expertProjectManagement: 'ניהול פרויקטים מומחה',
    comprehensiveAftercareSupport: 'תמיכה מקיפה לאחר מכן',
    
    // שירותים מסחריים
    officeWorkspaceConstruction: 'בניית משרדים וחללי עבודה',
    officeWorkspaceConstructionDesc: 'תכנון ובנייה של חללי משרדים מודרניים ויעילים המותאמים לצרכי העסק שלך.',
    retailShowroomFitOuts: 'התאמות קמעונאות ואולמי תצוגה',
    retailShowroomFitOutsDesc: 'יצירת סביבות קמעונאות מזמינות ואולמי תצוגה המושכים לקוחות.',
    industrialWarehouseFacilities: 'מתקני תעשייה ומחסנים',
    industrialWarehouseFacilitiesDesc: 'בנייה חזקה למפעלים, מחסנים ומרכזי לוגיסטיקה.',
    hospitalityRestaurantProjects: 'פרויקטי אירוח ומסעדות',
    hospitalityRestaurantProjectsDesc: 'בניית בתי מלון, מסעדות ובתי קפה עם התמקדות בחווית האורחים.',
    healthcareInstitutionalBuildings: 'מבני בריאות ומוסדות',
    healthcareInstitutionalBuildingsDesc: 'בנייה מתמחה למרפאות, בתי חולים ומוסדות חינוך.',
    renovationExpansion: 'שיפוץ והרחבה',
    renovationExpansionDesc: 'שדרוג, הרחבה או מודרניזציה של הנכס המסחרי שלך עם הפרעה מינימלית.',
    
    // תהליך הבנייה המסחרית
    requirementAnalysis: 'ניתוח דרישות',
    siteSurveyFeasibilityStudy: 'סקר אתר ומחקר כדאיות',
    designPlanningApprovals: 'עיצוב, תכנון ואישורים',
    transparentQuotationAgreement: 'הצעת מחיר שקופה והסכם',
    constructionProgressUpdates: 'בנייה ועדכוני התקדמות קבועים',
    finalHandoverOngoingSupport: 'מסירה סופית ותמיכה שוטפת',
    
    // תכונות הבנייה המסחרית
    dedicatedProjectManager: 'מנהל פרויקט ייעודי',
    dedicatedProjectManagerDesc: 'מנהל פרויקט מומחה המוקצה לפקח על כל היבט של פרויקט הבנייה המסחרית שלך ולהבטיח תוצאות מיטביות.',
    detailedProjectTimeline: 'לוח זמנים מפורט לפרויקט',
    detailedProjectTimelineDesc: 'לוח זמנים מקיף לפרויקט עם אבני דרך ברורות למעקב יעיל אחר התקדמות הבנייה שלך.',
    qualitySafetyAudits: 'ביקורות איכות ובטיחות',
    qualitySafetyAuditsDesc: 'בדיקות איכות קבועות וניטור בטיחות כדי להבטיח עמידה בכל תקני ותקנות הבנייה.',
    postCompletionMaintenance: 'תחזוקה לאחר השלמה',
    postCompletionMaintenanceDesc: 'שירותי תמיכה ותחזוקה מתמשכים כדי להבטיח שהנכס המסחרי שלך יישאר במצב מצוין.',
    
    // תרגומים מסחריים נוספים
    ourCommercialServices: 'השירותים המסחריים שלנו',
    commercialProcessDescription: 'אנו הופכים את מסע הבנייה המסחרית שלך לחלק ושקוף מתחילה ועד סוף.',
    whatMakesUsDifferent: 'מה מבדיל אותנו',
    whatMakesUsDifferentDesc: 'המחויבות שלנו לאיכות, שקיפות ושביעות רצון הלקוחות הופכת אותנו לבחירה המהימנה לבנייה מסחרית.',
    commercialExpertiseDesc1: 'אנו מטפלים בכל היבט של הפרויקט שלך, מעיצוב ועד מסירה, עם התמקדות בבטיחות ומצוינות.',
    commercialExpertiseDesc2: 'הצוות שלנו מורשה, מבוטח ומחויב למסור את המרחב העסקי שלך בזמן ובתקציב.',
    commercialExpertiseDesc3: 'אנו משתמשים רק בחומרים הטובים ביותר ושומרים על תקשורת פתוחה לאורך כל התהליך.',
    commercialExpertiseDesc4: 'תיהנה משקט נפשי עם התמיכה שלנו לאחר השלמה והבטחת איכות.',
    readyToBuildBusinessSpace: 'מוכן לבנות את המרחב העסקי שלך?',
    businessSpaceDescription: 'צור איתנו קשר היום לייעוץ חינם ותן למומחים שלנו להפוך את החזון שלך למציאות באיכות, בטיחות ומסירה בזמן.',
    
    // Impact Metrics section
    buildingSuccess: 'בונים הצלחה, פרויקט אחד בכל פעם',
    impactDescription: 'אנו גאים בכך שסיפקנו פתרונות בנייה יוצאי דופן ללקוחות בתעשיות מרובות. המחויבות שלנו לאיכות, בטיחות וחדשנות עזרה לנו להשלים מגוון רחב של פרויקטים, ממבני מגורים ועד פיתוחים מסחריים ותעשייתיים בקנה מידה גדול. השתתף איתנו כדי להגשים את החזון שלך עם מומחיות שאתה יכול לסמוך עליה.',
    scheduleCall: 'קבע שיחה',
    happyClients: 'לקוחות מרוצים',
    completedProjects: 'פרויקטים שהושלמו',
    industriesServed: 'תעשיות שקיבלו שירות',
    expertTeamMembers: 'חברי צוות מומחים',
    
    // Testimonials section
    whatOurClientsSay: 'מה הלקוחות שלנו אומרים',
    excellentJob: 'עבודה מצוינת!',
    testimonialDescription: 'תהליך חלק מתחילה ועד סוף. תשומת הלב לפרטים ולצרכי הלקוחות פשוט פנטסטית.',
    
    // Testimonial cards
    victoriaLinton: 'ויקטוריה לינטון',
    projectManager: 'מנהלת פרויקט',
    victoriaReview: 'הצוות עלה על הציפיות שלנו. בניין המשרדים שלנו נמסר בזמן ובאיכות יוצאת דופן!',
    
    fannyOwen: 'פאני אוון',
    fannyReview: 'תהליך חלק מתחילה ועד סוף. תשומת הלב לפרטים ולצרכי הלקוחות פשוט פנטסטית.',
    
    clientReview: 'ביקורת לקוח',
    clientReviewText: 'חוויה מצוינת עם צוות מקצועי ומבין את צרכי הלקוחות.',
    
    alexMorgan: 'אלכס מורגן',
    siteSupervisor: 'מפקח אתר',
    alexReview: 'מרוצה מאוד מהמסירה בזמן ומאיכות העבודה!',
    
    dmitriWoodhouse: 'דמיטרי וודהאוס',
    dmitriReview: 'שירות מצוין ועבודה מקצועית בכל הפרטים!',
    
    nellyVane: 'נלי ויין',
    interiorDesigner: 'מעצבת פנים',
    nellyReview: 'השיפוץ טופל במקצועיות רבה. ממליצה בחום!',
    
    priyaSharma: 'פריה שארמה',
    projectEngineer: 'מהנדסת פרויקטים',
    priyaReview: 'תקשורת מצוינת וניהול פרויקטים נהדר לכל אורך הדרך.',
    
    topNotch: 'ברמה הגבוהה ביותר!',
    topNotchReview: 'שיפוץ הבית שלנו היה חלק וללא לחץ.',
    
    recommended: 'מומלץ!',
    recommendedReview: 'החלל המסחרי הושלם לפני המועד הקבוע.',
    
    greatSupport: 'תמיכה נהדרת',
    greatSupportReview: 'הצוות תמיד היה זמין לשאלות שלנו.',
    
    impressiveResults: 'תוצאות מרשימות',
    impressiveResultsReview: 'המשרד שלנו נראה מדהים, תודה לכם!',
    
    professionalTeam: 'צוות מקצועי',
    professionalTeamReview: 'צוות מקצועי ואדיב מאוד.',
    
    // CTA section
    readyToBuild: 'מוכן לבנות את הפרויקט הבא שלך?',
    ctaDescription: 'השתתף איתנו לצרכי הבנייה שלך - מגורים, מסחרי או תעשייתי. הצוות המנוסה שלנו מספק איכות, בטיחות וחדשנות בכל פרויקט. בואו נהפוך את החזון שלך למציאות עם ניהול פרויקטים אמין ומומחיות מקצועית.',
    getFreeConsultation: 'קבל ייעוץ חינם',
    viewOurServices: 'צפה בשירותים שלנו',
    
    // Mission & Vision section
    ourMission: 'המשימה שלנו',
    missionStatement: 'לספק פתרונות בנייה נגישים ומקיפים הממירים קהילות ויוצרים פיתוח תשתית חיובי מתמשך עם איכות, בטיחות וחדשנות.',
    ourVision: 'החזון שלנו',
    visionStatement: 'להיות חברת הבנייה המובילה שבה לקוחות מגלים את דרכם לפרויקטי בנייה יוצאי דופן ושינוי תשתית בר קיימא.',

    // About Us page translations
    aboutUsTitle: 'אודותינו',
    company: 'חברה',
    aboutHeroDescription: 'עם 25 שנות ניסיון, הצוות שלנו מספק שירותי בנייה איכותיים לפרויקטים מגורים, מסחריים ותעשייתיים עם מחויבות בלתי מעורערת למצוינות.',
    
    // Our Growth section
    ourGrowthTitle: 'הצמיחה שלנו לאורך השנים',
    ourGrowthDescription: 'מהתחלות צנועות למנהיגות בתעשייה, גלה את אבני הדרך שעיצבו את המצוינות שלנו בבנייה והמחויבות שלנו לאיכות.',
    
    // Timeline labels
    timelineFoundation: 'יסוד',
    timelineGrowth: 'צמיחה',
    timelineInnovation: 'חדשנות',
    timelineLeadership: 'מנהיגות',
    timelineFuture: 'עתיד',
    
    // Milestones
    milestone1Title: 'הנחת יסודות',
    milestone1Description: 'התחלנו את המסע שלנו עם פרויקטי בנייה למגורים',
    milestone2Title: 'צמיחה מסחרית', 
    milestone2Description: 'התרחבנו לבנייה מסחרית ותעשייתית',
    milestone3Title: 'חדשנות טכנולוגית',
    milestone3Description: 'שילבנו טכנולוגיות בנייה מתקדמות ושיטות בר קיימא',
    milestone4Title: 'מנהיגות בתעשייה',
    milestone4Description: 'הפכנו למנהיגים מוכרים במצוינות בנייה',
    milestone5Title: 'חזון עתידי',
    milestone5Description: 'ממשיכים לבנות את המחר עם פתרונות חדשניים',

    // What Makes Us Unique
    whatMakesUsUnique: 'מה עושה אותנו ייחודיים',
    uniqueDescription: 'אנו משלבים עשרות שנות ניסיון עם טכנולוגיה מתקדמת כדי לספק פרויקטי בנייה שעומדים במבחן הזמן.',
    qualityCraftsmanship: 'אומנות איכותית',
    qualityCraftsmanshipDesc: 'אנו מספקים בנייה מעולה באמצעות שימוש בחומרים הטובים ביותר, אנשי מקצוע מיומנים ובקרת איכות קפדנית בכל שלב של הפרויקט.',
    innovativeSolutions: 'פתרונות חדשניים',
    innovativeSolutionsDesc: 'אנו מאמצים את הטכנולוגיות והשיטות החדישות ביותר בבנייה כדי לספק תוצאות יעילות, בר קיימא וחסכוניות ללקוחותינו.',
    transparentCommunication: 'תקשורת שקופה',
    transparentCommunicationDesc: 'אנו מעדכנים את לקוחותינו בכל שלב, מבטיחים בהירות, אמון וחוויית בנייה חלקה מההתחלה ועד הסוף.',

    // Our Values
    ourValues: 'הערכים שלנו',
    onTimeDelivery: 'משלוח בזמן',
    onTimeDeliveryDesc: 'אנו מחויבים להשלמת פרויקטים בתוך לוחות הזמנים, תוך שמירה על יעילות ואמינות בכל שלב.',
    clientCentricApproach: 'גישה ממוקדת לקוח',
    clientCentricApproachDesc: 'אנו נותנים עדיפות לצרכי הלקוחות שלנו, מציעים תקשורת שקופה ופתרונות מותאמים לכל פרויקט.',
    safetyFirst: 'בטיחות ראשונה',
    safetyFirstDesc: 'אנו שומרים על סטנדרטי הבטיחות הגבוהים ביותר כדי להגן על הצוות, הלקוחות והקהילות שלנו בכל אתר.',
    sustainablePractices: 'שיטות בר קיימא',
    sustainablePracticesDesc: 'אנו משלבים שיטות וחומרים ידידותיים לסביבה כדי לבנות באחריות למען העתיד.',
    innovationTechnology: 'חדשנות וטכנולוגיה',
    innovationTechnologyDesc: 'אנו מנצלים את הטכנולוגיות החדישות ביותר בבנייה כדי לספק פתרונות מודרניים, יעילים וחסכוניים.',

    // CTA Section
    readyToBuildVision: 'מוכן לבנות את החזון שלך?',
    ctaDescription: 'שותף איתנו לבנייה איכותית, משלוח בזמן ופתרונות חדשניים. בואו נהפוך את הרעיונות שלכם למציאות עם צוות שאתם יכולים לסמוך עליו.',
    startJourney: 'התחל את המסע שלך',
    
    // Home2 specific translations
    buildingWithIntegrity: 'בנייה עם יושרה',
    trustedConstruction: 'בנייה מהימנה לכל חזון.',
    excellenceInEveryBuild: 'מצוינות בכל בנייה.',
    startYourProject: 'התחל את הפרויקט שלך',
    meet: 'הכירו את',
    ourTeam: 'הצוות שלנו',
    teamDescription: 'צוות הבנייה המנוסה שלנו מביא את החזון שלך לחיים בדיוק, בטיחות ואיכות. מתכנון פרויקטים ועד ניהול אתר, אנו מבטיחים שכל בנייה תושלם בזמן ובסטנדרטים הגבוהים ביותר. בטח בנו להביא מצוינות לפרויקטי מגורים, מסחריים או תעשייתיים שלך.',
    
    // Team members
    michaelStone: 'מייקל סטון',
    siteManager: 'מנהל אתר',
    michaelStoneDescription: 'מפקח על כל הפעולות באתר, מבטיח בטיחות, איכות ומסירת פרויקט במועד לכל בנייה.',
    emilyCarter: 'אמילי קרטר',
    projectCoordinator: 'רכזת פרויקט',
    emilyCarterDescription: 'מתאמת בין צוותים, ספקים ולקוחות כדי לשמור על פרויקטי בנייה במסלול ובתוך התקציב.',
    davidMason: 'דיוויד מייסון',
    leadEngineer: 'מהנדס ראשי',
    davidMasonDescription: 'אחראי על תכנון מבני, פיקוח טכני והבטחת מצוינות הנדסית בכל אתר.',
    sophiaTurner: 'סופיה טרנר',
    safetyOfficer: 'קצינת בטיחות',
    sophiaTurnerDescription: 'מבטיחה שכל פרוטוקולי הבטיחות נעקבים, מספקת סביבה בטוחה לעובדים ומבקרים באתר.',
    
    // CEO section
    ourCEO: 'המנכ"ל שלנו',
    ceoMissionStatement: 'מוביל את המשימה שלנו לבנות מחר טוב יותר באמצעות בנייה איכותית וחדשנות.',
    ceoExperience: 'עם למעלה מ-20 שנות ניסיון בתעשיית הבנייה, המנכ"ל שלנו פיקח על השלמה מוצלחת של פרויקטים מגורים, מסחריים ותעשייתיים רבים. המחויבות שלהם לבטיחות, יעילות ושביעות רצון הלקוחות מניעה את החברה שלנו קדימה.',
    ceoQuote: 'אנו מאמינים שכל פרויקט הוא הזדמנות ליצור ערך מתמשך ללקוחות ולקהילות שלנו. הצוות שלנו מוקדש להביא מצוינות, מהיסוד ועד למעלה.',
    ceoName: 'ליזה, מנכ"לית',
    
    // Why Choose Us section
    whyBuildersTrustUs: 'למה בנאים בוטחים בנו',
    whyBuildersTrustUsDescription: 'אנו מספקים פתרונות בנייה איכותיים עם התמקדות בבטיחות, חדשנות ושביעות רצון הלקוחות. הצוות המנוסה שלנו, הציוד המודרני והמחויבות לעמידה בלוחות זמנים מבדילים אותנו בתעשיית הבנייה.',
    constructionAdvantages: 'יתרונות הבנייה שלנו',
    experiencedTeam: 'צוות מנוסה',
    experiencedTeamDescription: 'עשרות שנים של מומחיות מעשית בבנייה למגורים, מסחרית ותעשייתית.',
    qualityMaterials: 'חומרים איכותיים',
    qualityMaterialsDescription: 'אנו משתמשים רק בחומרים מאושרים בתעשייה לתוצאות עמידות ובטוחות.',
    safetyFirst: 'בטיחות קודם כל',
    safetyFirstDescription: 'פרוטוקולים קפדניים והכשרה סדירה שומרים על האתרים שלנו בטוחים לכולם.',
    onTimeDelivery: 'מסירה בזמן',
    onTimeDeliveryDescription: 'אנו עומדים בלוחות זמנים ושומרים על הפרויקט שלך במסלול, בכל פעם.',
    modernEquipment: 'ציוד מודרני',
    modernEquipmentDescription: 'מכונות וטכנולוגיה מתקדמת לבנייה יעילה ואיכותית.',
    transparentCommunication: 'תקשורת שקופה',
    transparentCommunicationDescription: 'אנו מעדכנים אותך בכל שלב של הפרויקט שלך.',
    
    // Projects and CTA
    featuredProjects: 'פרויקטים מובילים',
    readyToBuildDream: 'מוכן לבנות את פרויקט החלומות שלך?',
    readyToBuildDreamDescription: 'שתתף עם צוות הבנייה המומחה שלנו לאיכות, בטיחות ומסירה בזמן. ממגורים למסחר, אנו הופכים את החזון שלך למציאות - בכל שלב בדרך.',
    
    // Residential Page Translations
    residentialConstructionServices: 'שירותי בנייה למגורים',
    residentialHeroDescription: 'אנו הופכים את מסע הבנייה שלך לחלק ושקוף מההתחלה ועד הסוף.',
    exploreMore: 'גלה עוד',
    whyChooseResidential: 'למה לבחור בשירותי המגורים שלנו?',
    whyChooseResidentialDesc: 'חווה בנייה למגורים איכותית וללא דאגות עם תשומת לב אישית לכל פרט.',
    buildingDreamHomes: 'בונים בתי חלומות',
    buildingDreamHomesDesc: 'יוצרים חללי מגורים יפים ופונקציונליים המשקפים את אורח החיים שלך ועולים על הציפיות.',
    customHomeDesignPlanning: 'תכנון ועיצוב בתים מותאם אישית',
    highQualityMaterials: 'חומרים איכותיים ואומנות מקצועית',
    onTimeProjectDelivery: 'מסירת פרויקט במועד',
    transparentPricing: 'תמחור שקוף וחוזים ברורים',
    energyEfficientSolutions: 'פתרונות חוסכי אנרגיה ובר קיימא',
    comprehensiveProjectManagement: 'ניהול פרויקטים מקיף',
    ourResidentialServices: 'שירותי הבנייה למגורים שלנו',
    customHomeDesign: 'עיצוב בתים מותאם אישית',
    customHomeDesignDesc: 'עיצובים אדריכליים אישיים המותאמים לאורח החיים והעדפות שלך עם פונקציונליות מודרנית.',
    newHomeConstruction: 'בניית בתים חדשים',
    newHomeConstructionDesc: 'שירותי בניית בתים מלאים מיסוד ועד גימור סופי עם חומרים איכותיים ואומנות מקצועית.',
    homeRenovationRemodeling: 'שיפוץ ועיצוב מחדש של בתים',
    homeRenovationRemodelingDesc: 'הפוך את הבית הנוכחי שלך עם שירותי שיפוץ מטבח, חדר רחצה ובית שלם.',
    interiorDesignFinishing: 'עיצוב פנים וגימורים',
    interiorDesignFinishingDesc: 'פתרונות פנים מעולים כולל ריצוף, צביעה, תאורה ועבודות עץ מותאמות אישית.',
    sustainableBuildingSolutions: 'פתרונות בנייה בר קיימא',
    sustainableBuildingSolutionsDesc: 'בנייה ידידותית לסביבה עם מערכות חוסכות אנרגיה וחומרי בנייה בר קיימא.',
    projectManagement: 'ניהול פרויקטים',
    projectManagementDesc: 'פיקוח מקיף על פרויקטים המבטיח השלמה במועד בתוך התקציב ותקני איכות.',
    howOurProcessWorks: 'איך התהליך שלנו עובד',
    processDescription: 'אנו הופכים את מסע הבנייה שלך לחלק ושקוף מההתחלה ועד הסוף.',
    requirementGathering: 'איסוף דרישות',
    siteVisitFeasibility: 'ביקור באתר ומחקר היתכנות',
    designPlanningApproval: 'עיצוב ואישור תכנון',
    transparentQuotationAgreement: 'הצעת מחיר שקופה והסכם',
    constructionRegularUpdates: 'בנייה ועדכונים קבועים',
    finalHandoverSupport: 'מסירה סופית ותמיכה',
    startProjectToday: 'התחל את הפרויקט שלך היום',
    whatMakesUsDifferent: 'מה עושה אותנו שונים',
    whatMakesUsDifferentDesc: 'המומחיות שלנו בבנייה למגורים, תשומת הלב לפרטים והמחויבות שלנו לשביעות רצון בעלי הבתים מבדילה אותנו מהתחרות.',
    residentialContractors: 'קבלני בנייה למגורים',
    detailedProjectTimeline: 'לוח זמנים מפורט לפרויקט ואבני דרך',
    comprehensiveWarranty: 'אחריות מקיפה ותמיכה',
    residentialExpertiseDesc1: 'מעיצוב בתים מותאם אישית ועד בנייה מלאה, אנו מטפלים בכל פרט של הפרויקט המגורים שלך בדיוק ובזהירות.',
    residentialExpertiseDesc2: 'צוות הבנייה למגורים המורשה והמנוסה שלנו מספק בתים איכותיים בזמן ובתוך התקציב שלך.',
    residentialExpertiseDesc3: 'אנו משתמשים בחומרי בנייה מעולים ושומרים על תקשורת שקופה לכל אורך מסע בניית הבית שלך.',
    residentialExpertiseDesc4: 'תיהנה משקט נפשי מלא עם האחריות המקיפה שלנו ושירותי התמיכה המתמשכים לבעלי בתים.',
    residentialContractorsDesc: 'קבלני מגורים מורשים עם שנים של ניסיון בבניית בתים ושיפוץ.',
    detailedProjectTimelineDesc: 'לוח זמנים מקיף עם אבני דרך ברורות, נשמור אותך מעודכן בכל שלב בנייה.',
    qualityMaterialsDesc: 'חומרי בנייה מעולים ובעלי מלאכה מיומנים להבטחת תקני איכות גבוהים.',
    comprehensiveWarrantySupportDesc: 'כיסוי אחריות נרחב ושירותי תמיכה מתמשכים לפרויקט הבנייה למגורים שלך.',
    readyToBuildDreamHome: 'מוכן לבנות את בית החלומות שלך?',
    dreamHomeDescription: 'התחל עכשיו ותן למומחי הבנייה למגורים שלנו להביא את בית החלומות שלך לחיים עם איכות יוצאת דופן ואומנות מקצועית.',
    getStarted: 'התחל עכשיו'
  }
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('English');
  const [isRTL, setIsRTL] = useState(false);

  // Update RTL direction when language changes
  useEffect(() => {
    const rtlLanguages = ['Arabic', 'Hebrew'];
    const shouldBeRTL = rtlLanguages.includes(currentLanguage);
    setIsRTL(shouldBeRTL);
    
    // Update document direction
    document.dir = shouldBeRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLanguage === 'Arabic' ? 'ar' : 
                                   currentLanguage === 'Hebrew' ? 'he' : 'en';
  }, [currentLanguage]);

  const translate = (key) => {
    return translations[currentLanguage]?.[key] || key;
  };

  const changeLanguage = (language) => {
    setCurrentLanguage(language);
    // Store language preference
    localStorage.setItem('selectedLanguage', language);
  };

  // Load saved language on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && translations[savedLanguage]) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const value = {
    currentLanguage,
    isRTL,
    translate,
    changeLanguage
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};