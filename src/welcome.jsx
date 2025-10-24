import React, { useState, useEffect } from "react";
import background from './assets/background.jpg'; 
import logo from './assets/logo.png';
import { useNavigate } from "react-router-dom";
import { registerUser } from './utils/userRegistration.js';

// Hardcoded admin credentials
const ADMIN = {
  email: "admin@enkonix.in",
  password: "admin123",
  firstName: "Admin",
  lastName: "User"
};

export default function Welcome() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSignup, setShowSignup] = useState(false);
  const [showForgot, setShowForgot] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotStep, setForgotStep] = useState(1); // 1: ask email, 2: ask new pass
  const [forgotError, setForgotError] = useState("");
  const [forgotSuccess, setForgotSuccess] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [showThanks, setShowThanks] = useState(false);
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  
  // Language dropdown state
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  
  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "ar", name: "العربية", flag: "🇸🇦" },
    { code: "he", name: "עברית", flag: "🇮🇱" }
  ];

  // Translation object
  const translations = {
    en: {
      welcomeBack: "Welcome back",
      pleaseEnterDetails: "Please enter your details.",
      signUp: "Sign Up",
      createAccount: "Create your account.",
      firstName: "First Name",
      lastName: "Last Name",
      email: "E-mail",
      phoneNumber: "Phone Number",
      password: "Password",
      logIn: "Log in",
      forgotPassword: "Forgot Password?",
      alreadyHaveAccount: "Already have an account?",
      dontHaveAccount: "Don't have an account?",
      registerHere: "Register here",
      enterFirstName: "Enter your first name",
      enterLastName: "Enter your last name",
      enterEmail: "Enter your e-mail",
      enterPhoneNumber: "Enter your phone number",
      enterPassword: "Enter your password",
      forgotPasswordTitle: "Forgot Password",
      forgotPasswordDesc: "Enter your registered email to reset your password.",
      newPassword: "New Password",
      confirmPassword: "Confirm Password",
      enterNewPassword: "Enter new password",
      confirmNewPassword: "Confirm new password",
      updatePassword: "Update Password",
      backToLogin: "Back to Login",
      next: "Next",
      thanksForRegistering: "Thanks for registering!",
      close: "Close",
      invalidCredentials: "Invalid credentials",
      emailNotFound: "Email not found.",
      passwordsDoNotMatch: "Passwords do not match.",
      passwordUpdated: "Password updated! You can now log in."
    },
    ar: {
      welcomeBack: "أهلاً بعودتك",
      pleaseEnterDetails: "يرجى إدخال بياناتك.",
      signUp: "إنشاء حساب",
      createAccount: "أنشئ حسابك الجديد.",
      firstName: "الاسم الأول",
      lastName: "الاسم الأخير",
      email: "البريد الإلكتروني",
      phoneNumber: "رقم الهاتف",
      password: "كلمة المرور",
      logIn: "تسجيل الدخول",
      registerHere: "سجل هنا",
      enterFirstName: "أدخل اسمك الأول",
      enterLastName: "أدخل اسمك الأخير",
      enterEmail: "أدخل بريدك الإلكتروني",
      enterPhoneNumber: "أدخل رقم هاتفك",
      enterPassword: "أدخل كلمة المرور",
      forgotPasswordTitle: "نسيان كلمة المرور",
      forgotPasswordDesc: "أدخل بريدك الإلكتروني المسجل لإعادة تعيين كلمة المرور.",
      newPassword: "كلمة المرور الجديدة",
      confirmPassword: "تأكيد كلمة المرور",
      enterNewPassword: "أدخل كلمة المرور الجديدة",
      confirmNewPassword: "أكد كلمة المرور الجديدة",
      updatePassword: "تحديث كلمة المرور",
      backToLogin: "العودة لتسجيل الدخول",
      next: "التالي",
      thanksForRegistering: "شكراً لك على التسجيل!",
      close: "إغلاق",
      invalidCredentials: "بيانات دخول غير صحيحة",
      emailNotFound: "البريد الإلكتروني غير موجود.",
      passwordsDoNotMatch: "كلمات المرور غير متطابقة.",
      passwordUpdated: "تم تحديث كلمة المرور! يمكنك الآن تسجيل الدخول."
    },
    he: {
      welcomeBack: "ברוך הבא",
      pleaseEnterDetails: "אנא הכנס את הפרטים שלך.",
      signUp: "הרשמה",
      createAccount: "צור את החשבון שלך.",
      firstName: "שם פרטי",
      lastName: "שם משפחה",
      email: "אימייל",
      phoneNumber: "מספר טלפון",
      password: "סיסמה",
      logIn: "התחברות",
      forgotPassword: "שכחת סיסמה?",
      alreadyHaveAccount: "יש לך כבר חשבון?",
      dontHaveAccount: "אין לך חשבון?",
      registerHere: "הירשם כאן",
      enterFirstName: "הכנס את השם הפרטי שלך",
      enterLastName: "הכנס את שם המשפחה שלך",
      enterEmail: "הכנס את האימייל שלך",
      enterPhoneNumber: "הכנס את מספר הטלפון שלך",
      enterPassword: "הכנס את הסיסמה שלך",
      forgotPasswordTitle: "שכחת סיסמה",
      forgotPasswordDesc: "הכנס את האימייל הרשום שלך כדי לאפס את הסיסמה.",
      newPassword: "סיסמה חדשה",
      confirmPassword: "אשר סיסמה",
      enterNewPassword: "הכנס סיסמה חדשה",
      confirmNewPassword: "אשר סיסמה חדשה",
      updatePassword: "עדכן סיסמה",
      backToLogin: "חזור להתחברות",
      next: "הבא",
      thanksForRegistering: "תודה על ההרשמה!",
      close: "סגור",
      invalidCredentials: "פרטי התחברות לא נכונים",
      emailNotFound: "האימייל לא נמצא.",
      passwordsDoNotMatch: "הסיסמאות לא תואמות.",
      passwordUpdated: "הסיסמה עודכנה! כעת תוכל להתחבר."
    }
  };

  // Get current language code
  const getCurrentLanguageCode = () => {
    const savedLanguage = localStorage.getItem("selectedLanguage") || "en";
    return savedLanguage;
  };

  // Get current translations
  const t = translations[getCurrentLanguageCode()] || translations.en;

  // Check if current language is RTL
  const isRTL = getCurrentLanguageCode() === 'ar' || getCurrentLanguageCode() === 'he';
  
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language.name);
    setShowLanguageDropdown(false);
    localStorage.setItem("selectedLanguage", language.code);
    // Force re-render by updating a state
    window.location.reload(); // Simple approach to apply RTL changes
  };

  // Set a default user for testing if not already set
  useEffect(() => {
    if (!localStorage.getItem("currentUser")) {
      localStorage.setItem("currentUser", JSON.stringify({ firstName: "John", lastName: "Doe" }));
    }
  }, []);

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showLanguageDropdown && !event.target.closest('.language-dropdown')) {
        setShowLanguageDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showLanguageDropdown]);

  // Load saved language preference
  useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage");
    if (savedLanguage) {
      const language = languages.find(lang => lang.code === savedLanguage);
      if (language) {
        setSelectedLanguage(language.name);
      }
    }
  }, [languages]);

  // Store signup details in localStorage and register user for admin dashboard
  function handleSignup(e) {
    e.preventDefault();
    
    // Store in existing users array for login functionality
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    users.push({ firstName, lastName, email, password, loginDate: new Date().toISOString() });
    localStorage.setItem("users", JSON.stringify(users));
    
    // Register user for admin dashboard
    const registrationResult = registerUser({
      name: `${firstName} ${lastName}`,
      email: email,
      phone: phone || '', // Include phone number if provided
      source: 'Welcome Page Registration',
      additionalInfo: {
        firstName: firstName,
        lastName: lastName,
        hasPassword: true
      }
    });
    
    if (registrationResult.success) {
      // Dispatch event to notify admin dashboard
      window.dispatchEvent(new CustomEvent('userRegistrationUpdated'));
      setShowSignup(false);
      setShowThanks(true);
    } else {
      // Handle registration error
      alert(registrationResult.message || 'Registration failed. Please try again.');
    }
  }

  // Handle login
  function handleLogin(e) {
    e.preventDefault();
    // Check admin
    if (email === ADMIN.email && password === ADMIN.password) {
      localStorage.setItem("currentUser", JSON.stringify({
        ...ADMIN,
        role: 'admin'
      }));
      navigate("/admin-dashboard");
      return;
    }
    // Check users
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate("/home1");
      return;
    }
    setLoginError(t.invalidCredentials);
  }

  // Forgot password handlers
  function handleForgotEmail(e) {
    e.preventDefault();
    setForgotError("");
    setForgotSuccess("");
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(u => u.email === forgotEmail);
    if (!user) {
      setForgotError(t.emailNotFound);
      return;
    }
    setForgotStep(2);
  }

  function handleForgotReset(e) {
    e.preventDefault();
    setForgotError("");
    setForgotSuccess("");
    if (newPass !== confirmPass) {
      setForgotError(t.passwordsDoNotMatch);
      return;
    }
    let users = JSON.parse(localStorage.getItem("users") || "[]");
    const idx = users.findIndex(u => u.email === forgotEmail);
    if (idx === -1) {
      setForgotError(t.emailNotFound);
      return;
    }
    users[idx].password = newPass;
    localStorage.setItem("users", JSON.stringify(users));
    setForgotSuccess(t.passwordUpdated);
    setForgotStep(1);
    setShowForgot(false);
    setForgotEmail("");
    setNewPass("");
    setConfirmPass("");
  }

  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-cover bg-center pt-4 ${isRTL ? 'rtl' : 'ltr'}`}
      style={{ backgroundImage: `url(${background})`, direction: isRTL ? 'rtl' : 'ltr' }}
    >
      <div
        className={`w-full max-w-md rounded-xl px-2 shadow-2xl relative`}
        style={{ marginLeft: 0, background: theme === 'dark' ? 'rgba(30,30,30,0.92)' : 'rgba(255,255,255,0.92)' }}
      >
        <div className="flex justify-center mb-8">
          <img src={logo} alt="Stackly Logo" className="h-16 w-auto" />
        </div>
        {/* Language Dropdown */}
        <div className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'} relative language-dropdown`}>
          <button
            onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
            className={`w-12 h-12 rounded-full border-2 transition-all duration-300 flex items-center justify-center
              ${theme === "dark" 
                ? "bg-gray-800 text-cyan-400 shadow-lg hover:shadow-cyan-400/50" 
                : "border-gray-300 bg-white text-gray-600 hover:border-gray-400"}`}
            style={theme === "dark" ? { borderColor: '#FF4D00' } : {}}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
          </button>
          
          {/* Language dropdown menu */}
          {showLanguageDropdown && (
            <div className={`absolute top-14 ${isRTL ? 'right-0' : 'left-0'} min-w-[160px] rounded-lg shadow-lg border z-50 
              ${theme === "dark" 
                ? "bg-gray-800 border-gray-600" 
                : "bg-white border-gray-200"}`}>
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageChange(language)}
                  className={`w-full px-4 py-3 text-left hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg flex items-center space-x-3 transition-colors
                    ${theme === "dark" ? "hover:bg-gray-700 text-white" : "hover:bg-gray-100 text-gray-900"}
                    ${selectedLanguage === language.name ? 'bg-[#FF4D00]/10' : ''}`}
                >
                  <span className="text-lg">{language.flag}</span>
                  <span className="text-sm font-medium">{language.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Toggle Button */}
        <button
          onClick={toggleTheme}
          className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} w-12 h-12 rounded-full border-2 transition-all duration-300 flex items-center justify-center
            ${theme === "dark" 
              ? "bg-gray-800 text-cyan-400 shadow-lg hover:shadow-cyan-400/50" 
              : "border-gray-300 bg-white text-gray-600 hover:border-gray-400"}`}
          style={theme === "dark" ? { borderColor: '#FF4D00' } : {}}
        >
          {theme === "light" ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          )}
        </button>
        {showSignup ? (
          <>
            <h2 className={`text-3xl font-bold mb-2 text-center ${theme === "dark" ? "text-white" : "text-black"}`}>{t.signUp}</h2>
            <p className={`mb-8 text-center ${theme === "dark" ? "text-gray-300" : "text-black"}`}>{t.createAccount}</p>
            <form className="space-y-5" onSubmit={handleSignup}>
              {/* First Name */}
              <div>
                <label className={`block mb-1 font-medium ${theme === "dark" ? "text-white" : "text-black"} ${isRTL ? 'text-right' : 'text-left'}`}>{t.firstName}</label>
                <input
                  type="text"
                  className={`w-full border rounded-lg px-4 py-3 ${theme === "dark" ? "placeholder-white/60 bg-gray-800 text-white border-gray-600" : "placeholder-black bg-white/20 text-black border-black"} ${isRTL ? 'text-right' : 'text-left'}`}
                  placeholder={t.enterFirstName}
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                  required
                />
              </div>
              {/* Last Name */}
              <div>
                <label className={`block mb-1 font-medium ${theme === "dark" ? "text-white" : "text-black"} ${isRTL ? 'text-right' : 'text-left'}`}>{t.lastName}</label>
                <input
                  type="text"
                  className={`w-full border rounded-lg px-4 py-3 ${theme === "dark" ? "placeholder-white/60 bg-gray-800 text-white border-gray-600" : "placeholder-black bg-white/20 text-black border-black"} ${isRTL ? 'text-right' : 'text-left'}`}
                  placeholder={t.enterLastName}
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                  required
                />
              </div>
              {/* Email */}
              <div>
                <label className={`block mb-1 font-medium ${theme === "dark" ? "text-white" : "text-black"} ${isRTL ? 'text-right' : 'text-left'}`}>{t.email}</label>
                <input
                  type="email"
                  className={`w-full border rounded-lg px-4 py-3 ${theme === "dark" ? "placeholder-white/60 bg-gray-800 text-white border-gray-600" : "placeholder-black bg-white/20 text-black border-black"} ${isRTL ? 'text-right' : 'text-left'}`}
                  placeholder={t.enterEmail}
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>
              {/* Phone Number */}
              <div>
                <label className={`block mb-1 font-medium ${theme === "dark" ? "text-white" : "text-black"} ${isRTL ? 'text-right' : 'text-left'}`}>{t.phoneNumber}</label>
                <input
                  type="tel"
                  className={`w-full border rounded-lg px-4 py-3 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#FF4D00] ${theme === "dark" ? "bg-gray-800 text-white border-gray-600" : "bg-white/20 text-black border-black"} ${isRTL ? 'text-right' : 'text-left'}`}
                  placeholder={t.enterPhoneNumber}
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                />
              </div>
              {/* Password */}
              <div>
                <label className={`block mb-1 font-medium ${theme === "dark" ? "text-white" : "text-black"} ${isRTL ? 'text-right' : 'text-left'}`}>{t.password}</label>
                <input
                  type="password"
                  className={`w-full border rounded-lg px-4 py-3 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#FF4D00] ${theme === "dark" ? "bg-gray-800 text-white border-gray-600" : "bg-white/20 text-black border-black"} ${isRTL ? 'text-right' : 'text-left'}`}
                  placeholder={t.enterPassword}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                />
              </div>
              {/* Signup button */}
              <button
                type="submit"
                className={`w-full py-3 rounded-lg font-semibold text-lg transition ${theme === "dark" ? "text-white" : "bg-black text-white hover:bg-gray-900"}`}
                style={theme === "dark" ? { backgroundColor: '#FF4D00' } : {}}
              >
                {t.signUp}
              </button>
            </form>
            <p className={`text-center text-sm mt-8 ${theme === "dark" ? "text-gray-300" : "text-black"}`}>
              {t.alreadyHaveAccount}{" "}
              <a href="#" className="font-medium hover:underline" style={{color: '#FF4D00'}} onClick={e => { e.preventDefault(); setShowSignup(false); }}>
                {t.logIn}
              </a>
            </p>
          </>
        ) : showForgot ? (
          <>
            <h2 className={`text-3xl font-bold mb-2 text-center ${theme === "dark" ? "text-white" : "text-black"}`}>{t.forgotPasswordTitle}</h2>
            <p className={`mb-8 text-center ${theme === "dark" ? "text-gray-300" : "text-black"}`}>{t.forgotPasswordDesc}</p>
            {forgotStep === 1 && (
              <form className="space-y-5" onSubmit={handleForgotEmail}>
                <div>
                  <label className={`block mb-1 font-medium ${theme === "dark" ? "text-white" : "text-black"} ${isRTL ? 'text-right' : 'text-left'}`}>{t.email}</label>
                  <input
                    type="email"
                    className={`w-full border rounded-lg px-4 py-3 ${theme === "dark" ? "placeholder-white/60 bg-gray-800 text-white border-gray-600" : "placeholder-black bg-white/20 text-black border-black"} ${isRTL ? 'text-right' : 'text-left'}`}
                    placeholder={t.enterEmail}
                    value={forgotEmail}
                    onChange={e => setForgotEmail(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className={`w-full py-3 rounded-lg font-semibold text-lg transition ${theme === "dark" ? "text-white" : "bg-black text-white hover:bg-gray-900"}`} style={theme === "dark" ? { backgroundColor: '#FF4D00' } : {}}>{t.next}</button>
                {forgotError && <p className="text-red-400 text-center mt-2">{forgotError}</p>}
              </form>
            )}
            {forgotStep === 2 && (
              <form className="space-y-5" onSubmit={handleForgotReset}>
                <div>
                  <label className={`block mb-1 font-medium ${theme === "dark" ? "text-white" : "text-white"} ${isRTL ? 'text-right' : 'text-left'}`}>{t.newPassword}</label>
                  <input
                    type="password"
                    className={`w-full border rounded-lg px-4 py-3 ${theme === "dark" ? "placeholder-white/60 bg-gray-800 text-white border-gray-600" : "placeholder-black bg-white/20 text-black border-black"} ${isRTL ? 'text-right' : 'text-left'}`}
                    placeholder={t.enterNewPassword}
                    value={newPass}
                    onChange={e => setNewPass(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className={`block mb-1 font-medium ${theme === "dark" ? "text-white" : "text-white"} ${isRTL ? 'text-right' : 'text-left'}`}>{t.confirmPassword}</label>
                  <input
                    type="password"
                    className={`w-full border rounded-lg px-4 py-3 ${theme === "dark" ? "placeholder-white/60 bg-gray-800 text-white border-gray-600" : "placeholder-black bg-white/20 text-black border-black"} ${isRTL ? 'text-right' : 'text-left'}`}
                    placeholder={t.confirmNewPassword}
                    value={confirmPass}
                    onChange={e => setConfirmPass(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className={`w-full py-3 rounded-lg font-semibold text-lg transition ${theme === "dark" ? "text-white" : "bg-black text-white hover:bg-gray-900"}`} style={theme === "dark" ? { backgroundColor: '#FF4D00' } : {}}>{t.updatePassword}</button>
                {forgotError && <p className="text-red-400 text-center mt-2">{forgotError}</p>}
                {forgotSuccess && <p className="text-green-500 text-center mt-2">{forgotSuccess}</p>}
              </form>
            )}
            <p className={`text-center text-sm mt-8 ${theme === "dark" ? "text-gray-300" : "text-black"}`}>
              <a href="#" className="font-medium hover:underline" style={{color: '#FF4D00'}} onClick={e => { e.preventDefault(); setShowForgot(false); setForgotStep(1); setForgotEmail(""); setForgotError(""); }}>
                {t.backToLogin}
              </a>
            </p>
          </>
        ) : (
          <>
            <h2 className={`text-3xl font-bold mb-2 text-center ${theme === "dark" ? "text-white" : "text-black"}`}>{t.welcomeBack}</h2>
            <p className={`mb-8 text-center ${theme === "dark" ? "text-gray-300" : "text-black"}`}>{t.pleaseEnterDetails}</p>
            <form className="space-y-5" onSubmit={handleLogin}>
              {/* Email */}
              <div>
                <label className={`block mb-1 font-medium ${theme === "dark" ? "text-white" : "text-black"} ${isRTL ? 'text-right' : 'text-left'}`}>{t.email}</label>
                <input
                  type="email"
                  className={`w-full border rounded-lg px-4 py-3 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#FF4D00] ${theme === "dark" ? "bg-gray-800 text-white border-gray-600" : "bg-white/20 text-black border-black"} ${isRTL ? 'text-right' : 'text-left'}`}
                  placeholder={t.enterEmail}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              {/* Password */}
              <div>
                <label className={`block mb-1 font-medium ${theme === "dark" ? "text-white" : "text-black"} ${isRTL ? 'text-right' : 'text-left'}`}>{t.password}</label>
                <input
                  type="password"
                    className={`w-full border rounded-lg px-4 py-3 ${theme === "dark" ? "placeholder-white/60 bg-gray-800 text-white border-gray-600" : "placeholder-black bg-white/20 text-black border-black"} ${isRTL ? 'text-right' : 'text-left'}`}
                  placeholder={t.enterPassword}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {/* Login button */}
              <button
                type="submit"
                className={`w-full py-3 rounded-lg font-semibold text-lg transition ${theme === "dark" ? "text-white" : "bg-black text-white hover:bg-gray-900"}`}
                style={theme === "dark" ? { backgroundColor: '#FF4D00' } : {}}
              >
                {t.logIn}
              </button>
            </form>
            <div className="flex flex-col items-center mt-2">
              <a href="#" className="text-sm font-medium hover:underline" style={{color: '#FF4D00'}} onClick={e => { e.preventDefault(); setShowForgot(true); setForgotStep(1); setForgotEmail(""); setForgotError(""); }}>
                {t.forgotPassword}
              </a>
            </div>
            {loginError && <p className="text-red-400 text-center mt-2">{loginError}</p>}
            <p className={`text-center text-sm mt-8 ${theme === "dark" ? "text-gray-300" : "text-black"}`}>
              {t.dontHaveAccount}{" "}
              <a href="#" className="font-medium hover:underline" style={{color: '#FF4D00'}} onClick={e => { e.preventDefault(); setShowSignup(true); }}>
                {t.registerHere}
              </a>
            </p>
          </>
        )}
        {showThanks && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className={`bg-white rounded-lg shadow-lg p-8 text-center ${isRTL ? 'rtl' : 'ltr'}`} style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
              <h3 className="text-2xl font-bold mb-4" style={{color: '#FF4D00'}}>{t.thanksForRegistering}</h3>
              <button
                className="mt-4 px-6 py-2 text-white rounded transition"
                style={{backgroundColor: '#FF4D00'}} 
                onClick={() => setShowThanks(false)}
              >
                {t.close}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

