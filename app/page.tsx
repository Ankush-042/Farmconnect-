"use client"

import { Slider } from "@/components/ui/slider"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ChevronRight,
  Globe,
  Mic,
  Volume2,
  Wheat,
  Search,
  BarChart3,
  GraduationCap,
  Wrench,
  Camera,
  MessageCircle,
  ShoppingCart,
  Shield,
  MapPin,
  TrendingUp,
  ArrowLeft,
  CheckCircle,
  Share,
  HelpCircle,
  Phone,
  Star,
  Menu,
  X,
  Heart,
  Filter,
  Grid,
  List,
  Clock,
  Award,
  Bookmark,
  Send,
  FileText,
  Zap,
  DollarSign,
  MessageSquareText,
  ThumbsUp,
  Reply,
  MoreHorizontal,
  ImageIcon,
} from "lucide-react"

const languages = [
  { code: "hi", name: "हिंदी", flag: "🇮🇳" },
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "te", name: "తెలుగు", flag: "🇮🇳" },
  { code: "ta", name: "தமிழ்", flag: "🇮🇳" },
  { code: "bn", name: "বাংলা", flag: "🇮🇳" },
  { code: "mr", name: "मराठी", flag: "🇮🇳" },
]

export default function FarmConnectWebsite() {
  const [selectedLanguage, setSelectedLanguage] = useState("hi")
  const [showLanguageSelector, setShowLanguageSelector] = useState(false)
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(false)
  const [currentStep, setCurrentStep] = useState("welcome") // welcome, auth, profile, dashboard, farm-analysis, equipment-rental, disease-detection, learning-hub, community, marketplace, insurance
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleGetStarted = () => {
    setCurrentStep("auth")
  }

  const handleVoiceToggle = () => {
    setIsVoiceEnabled(!isVoiceEnabled)
    if (!isVoiceEnabled) {
      console.log("Voice enabled: Namaste! FarmConnect mein aapka swagat hai")
    }
  }

  const handleModuleNavigation = (moduleId: string) => {
    if (moduleId === "analysis") {
      setCurrentStep("farm-analysis")
    } else if (moduleId === "equipment") {
      setCurrentStep("equipment-rental")
    } else if (moduleId === "disease") {
      setCurrentStep("disease-detection")
    } else if (moduleId === "learning") {
      setCurrentStep("learning-hub")
    } else if (moduleId === "community") {
      setCurrentStep("community")
    } else if (moduleId === "marketplace") {
      setCurrentStep("marketplace")
    } else if (moduleId === "insurance") {
      setCurrentStep("insurance")
    }
  }

  if (currentStep === "welcome") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
        {/* Enhanced Website Header */}
        <header className="bg-white/95 backdrop-blur-md border-b border-emerald-100 sticky top-0 z-50 shadow-sm">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-between h-20">
              {/* Enhanced Logo */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Wheat className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent">
                    FarmConnect
                  </h1>
                  <p className="text-sm text-emerald-600 font-medium">
                    {selectedLanguage === "hi" ? "किसानों के लिए एक संपूर्ण समाधान" : "Complete Solution for Farmers"}
                  </p>
                </div>
              </div>

              {/* Enhanced Navigation */}
              <nav className="hidden lg:flex items-center gap-8">
                <a href="#features" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                  {selectedLanguage === "hi" ? "सुविधाएं" : "Features"}
                </a>
                <a href="#about" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                  {selectedLanguage === "hi" ? "हमारे बारे में" : "About"}
                </a>
                <a href="#contact" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                  {selectedLanguage === "hi" ? "संपर्क" : "Contact"}
                </a>

                {/* Language Selector */}
                <div className="relative">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowLanguageSelector(!showLanguageSelector)}
                    className="border-emerald-200 hover:border-emerald-300"
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    {languages.find((lang) => lang.code === selectedLanguage)?.name}
                  </Button>

                  {showLanguageSelector && (
                    <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl border border-emerald-100 py-2 min-w-[200px] z-50">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setSelectedLanguage(lang.code)
                            setShowLanguageSelector(false)
                          }}
                          className="w-full px-4 py-2 text-left hover:bg-emerald-50 flex items-center gap-3"
                        >
                          <span className="text-lg">{lang.flag}</span>
                          <span className="font-medium">{lang.name}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <Button
                  onClick={handleGetStarted}
                  className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-6 py-2 rounded-lg font-medium shadow-lg"
                >
                  {selectedLanguage === "hi" ? "शुरू करें" : "Get Started"}
                </Button>
              </nav>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </header>

        {/* Enhanced Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-green-50"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Enhanced Hero Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 px-4 py-2 text-sm font-medium">
                    🌾 {selectedLanguage === "hi" ? "भारत का #1 कृषि प्लेटफॉर्म" : "India's #1 Agricultural Platform"}
                  </Badge>

                  <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    {selectedLanguage === "hi" ? (
                      <>
                        <span className="bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent">
                          स्मार्ट खेती
                        </span>
                        <br />
                        का भविष्य
                      </>
                    ) : (
                      <>
                        The Future of
                        <br />
                        <span className="bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent">
                          Smart Farming
                        </span>
                      </>
                    )}
                  </h1>

                  <p className="text-xl text-gray-600 leading-relaxed">
                    {selectedLanguage === "hi"
                      ? "AI-powered कृषि समाधान, उपकरण किराया, रोग पहचान, और किसान समुदाय - सब एक ही जगह। आपकी फसल की उत्पादकता बढ़ाएं और आय दोगुनी करें।"
                      : "AI-powered agricultural solutions, equipment rental, disease detection, and farmer community - all in one place. Boost your crop productivity and double your income."}
                  </p>
                </div>

                {/* Enhanced Stats */}
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-emerald-100">
                    <div className="text-2xl lg:text-3xl font-bold text-emerald-600">50K+</div>
                    <div className="text-sm text-gray-600 font-medium">
                      {selectedLanguage === "hi" ? "खुश किसान" : "Happy Farmers"}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-emerald-100">
                    <div className="text-2xl lg:text-3xl font-bold text-green-600">95%</div>
                    <div className="text-sm text-gray-600 font-medium">
                      {selectedLanguage === "hi" ? "सटीकता दर" : "Accuracy Rate"}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-emerald-100">
                    <div className="text-2xl lg:text-3xl font-bold text-blue-600">24/7</div>
                    <div className="text-sm text-gray-600 font-medium">
                      {selectedLanguage === "hi" ? "AI सहायता" : "AI Support"}
                    </div>
                  </div>
                </div>

                {/* Enhanced CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={handleGetStarted}
                    className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    {selectedLanguage === "hi" ? "मुफ्त में शुरू करें" : "Start Free Today"}
                  </Button>

                  <Button
                    variant="outline"
                    onClick={handleVoiceToggle}
                    className="border-2 border-emerald-200 hover:border-emerald-300 text-emerald-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-emerald-50 transition-all duration-200 bg-transparent"
                  >
                    <Mic className="w-5 h-5 mr-2" />
                    {selectedLanguage === "hi" ? "आवाज़ सहायता" : "Voice Assistant"}
                  </Button>
                </div>
              </div>

              {/* Enhanced Hero Image */}
              <div className="relative">
                <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 border border-emerald-100">
                  <img
                    src="/modern-farmer-tablet.png"
                    alt="Modern Farmer with Technology"
                    className="w-full h-auto rounded-xl"
                  />

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 bg-emerald-500 text-white p-3 rounded-full shadow-lg animate-bounce">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-green-500 text-white p-3 rounded-full shadow-lg animate-bounce delay-500">
                    <Wheat className="w-6 h-6" />
                  </div>
                </div>

                {/* Background Decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-200 to-green-200 rounded-2xl transform rotate-6 scale-105 -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 px-4 py-2 text-sm font-medium mb-4">
                🚀 {selectedLanguage === "hi" ? "शक्तिशाली सुविधाएं" : "Powerful Features"}
              </Badge>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                {selectedLanguage === "hi" ? "आपकी खेती को बनाएं स्मार्ट" : "Make Your Farming Smart"}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {selectedLanguage === "hi"
                  ? "आधुनिक तकनीक और AI की शक्ति से अपनी फसल की उत्पादकता बढ़ाएं। हमारे सभी टूल्स एक ही प्लेटफॉर्म पर उपलब्ध हैं।"
                  : "Boost your crop productivity with modern technology and AI power. All our tools are available on a single platform."}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Enhanced Feature Cards */}
              <Card className="p-8 hover:shadow-xl transition-all duration-300 border-emerald-100 hover:border-emerald-200 group">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {selectedLanguage === "hi" ? "AI फसल विश्लेषण" : "AI Crop Analysis"}
                </h3>
                <p className="text-gray-600 mb-6">
                  {selectedLanguage === "hi"
                    ? "आपकी मिट्टी, मौसम और फसल का AI-powered विश्लेषण। सबसे अच्छी फसल के लिए व्यक्तिगत सुझाव पाएं।"
                    : "AI-powered analysis of your soil, weather, and crops. Get personalized recommendations for the best harvest."}
                </p>
                <div className="flex items-center text-emerald-600 font-medium">
                  <span>{selectedLanguage === "hi" ? "अभी आज़माएं" : "Try Now"}</span>
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </Card>

              <Card className="p-8 hover:shadow-xl transition-all duration-300 border-orange-100 hover:border-orange-200 group">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Wrench className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {selectedLanguage === "hi" ? "उपकरण किराया" : "Equipment Rental"}
                </h3>
                <p className="text-gray-600 mb-6">
                  {selectedLanguage === "hi"
                    ? "ट्रैक्टर, हार्वेस्टर और अन्य कृषि उपकरण आसानी से किराए पर लें। बेहतर कीमत और तुरंत उपलब्धता।"
                    : "Easily rent tractors, harvesters, and other agricultural equipment. Better prices and instant availability."}
                </p>
                <div className="flex items-center text-orange-600 font-medium">
                  <span>{selectedLanguage === "hi" ? "उपकरण देखें" : "View Equipment"}</span>
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </Card>

              <Card className="p-8 hover:shadow-xl transition-all duration-300 border-red-100 hover:border-red-200 group">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {selectedLanguage === "hi" ? "रोग पहचान" : "Disease Detection"}
                </h3>
                <p className="text-gray-600 mb-6">
                  {selectedLanguage === "hi"
                    ? "फसल की तस्वीर खींचें और तुरंत रोग की पहचान करें। उपचार के तरीके और दवाइयों की जानकारी पाएं।"
                    : "Take a photo of your crop and instantly identify diseases. Get treatment methods and medicine information."}
                </p>
                <div className="flex items-center text-red-600 font-medium">
                  <span>{selectedLanguage === "hi" ? "स्कैन करें" : "Scan Now"}</span>
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </Card>

              <Card className="p-8 hover:shadow-xl transition-all duration-300 border-blue-100 hover:border-blue-200 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {selectedLanguage === "hi" ? "सीखने का केंद्र" : "Learning Hub"}
                </h3>
                <p className="text-gray-600 mb-6">
                  {selectedLanguage === "hi"
                    ? "आधुनिक खेती की तकनीकें सीखें। वीडियो ट्यूटोरियल, AI ट्यूटर और व्यावहारिक गाइड उपलब्ध हैं।"
                    : "Learn modern farming techniques. Video tutorials, AI tutor, and practical guides available."}
                </p>
                <div className="flex items-center text-blue-600 font-medium">
                  <span>{selectedLanguage === "hi" ? "सीखना शुरू करें" : "Start Learning"}</span>
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </Card>

              <Card className="p-8 hover:shadow-xl transition-all duration-300 border-purple-100 hover:border-purple-200 group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {selectedLanguage === "hi" ? "किसान समुदाय" : "Farmer Community"}
                </h3>
                <p className="text-gray-600 mb-6">
                  {selectedLanguage === "hi"
                    ? "अन्य किसानों से जुड़ें, अनुभव साझा करें और समस्याओं का समाधान पाएं। सक्रिय फोरम और चर्चा।"
                    : "Connect with other farmers, share experiences, and find solutions. Active forum and discussions."}
                </p>
                <div className="flex items-center text-purple-600 font-medium">
                  <span>{selectedLanguage === "hi" ? "समुदाय में शामिल हों" : "Join Community"}</span>
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </Card>

              <Card className="p-8 hover:shadow-xl transition-all duration-300 border-green-100 hover:border-green-200 group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <ShoppingCart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {selectedLanguage === "hi" ? "डिजिटल मार्केटप्लेस" : "Digital Marketplace"}
                </h3>
                <p className="text-gray-600 mb-6">
                  {selectedLanguage === "hi"
                    ? "अपनी फसल को सीधे खरीदारों को बेचें। बेहतर कीमत, तुरंत भुगतान और पारदर्शी लेन-देन।"
                    : "Sell your crops directly to buyers. Better prices, instant payments, and transparent transactions."}
                </p>
                <div className="flex items-center text-green-600 font-medium">
                  <span>{selectedLanguage === "hi" ? "बेचना शुरू करें" : "Start Selling"}</span>
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Enhanced How It Works Section */}
        <section className="py-20 bg-gradient-to-br from-emerald-50 to-green-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 px-4 py-2 text-sm font-medium mb-4">
                📋 {selectedLanguage === "hi" ? "आसान प्रक्रिया" : "Simple Process"}
              </Badge>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                {selectedLanguage === "hi" ? "कैसे काम करता है?" : "How It Works?"}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {selectedLanguage === "hi"
                  ? "सिर्फ तीन आसान चरणों में अपनी खेती को स्मार्ट बनाएं और अपनी आय बढ़ाएं।"
                  : "Make your farming smart and increase your income in just three simple steps."}
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Zap className="w-4 h-4 text-yellow-800" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {selectedLanguage === "hi" ? "साइन अप करें" : "Sign Up"}
                </h3>
                <p className="text-gray-600 text-lg">
                  {selectedLanguage === "hi"
                    ? "मुफ्त में अकाउंट बनाएं और अपनी फार्म की जानकारी दें। सिर्फ 2 मिनट में तैयार।"
                    : "Create a free account and provide your farm information. Ready in just 2 minutes."}
                </p>
              </div>

              <div className="text-center group">
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                    <BarChart3 className="w-4 h-4 text-green-800" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {selectedLanguage === "hi" ? "AI विश्लेषण पाएं" : "Get AI Analysis"}
                </h3>
                <p className="text-gray-600 text-lg">
                  {selectedLanguage === "hi"
                    ? "हमारा AI आपकी मिट्टी, मौसम और फसल का विश्लेषण करके बेहतरीन सुझाव देता है।"
                    : "Our AI analyzes your soil, weather, and crops to provide excellent recommendations."}
                </p>
              </div>

              <div className="text-center group">
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-400 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-emerald-800" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {selectedLanguage === "hi" ? "आय बढ़ाएं" : "Increase Income"}
                </h3>
                <p className="text-gray-600 text-lg">
                  {selectedLanguage === "hi"
                    ? "स्मार्ट खेती, बेहतर फसल और डायरेक्ट सेलिंग से अपनी आय दोगुनी करें।"
                    : "Double your income with smart farming, better crops, and direct selling."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Footer */}
        <footer className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center">
                    <Wheat className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">FarmConnect</h3>
                    <p className="text-sm text-gray-400">
                      {selectedLanguage === "hi" ? "स्मार्ट खेती का भविष्य" : "Future of Smart Farming"}
                    </p>
                  </div>
                </div>
                <p className="text-gray-400 mb-6">
                  {selectedLanguage === "hi"
                    ? "भारतीय किसानों के लिए बनाया गया सबसे बेहतरीन डिजिटल प्लेटफॉर्म। आधुनिक तकनीक से अपनी खेती को स्मार्ट बनाएं।"
                    : "The best digital platform built for Indian farmers. Make your farming smart with modern technology."}
                </p>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                    <Globe className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-6">{selectedLanguage === "hi" ? "सुविधाएं" : "Features"}</h4>
                <ul className="space-y-3 text-gray-400">
                  <li className="hover:text-emerald-400 cursor-pointer transition-colors">
                    {selectedLanguage === "hi" ? "AI फसल विश्लेषण" : "AI Crop Analysis"}
                  </li>
                  <li className="hover:text-emerald-400 cursor-pointer transition-colors">
                    {selectedLanguage === "hi" ? "उपकरण किराया" : "Equipment Rental"}
                  </li>
                  <li className="hover:text-emerald-400 cursor-pointer transition-colors">
                    {selectedLanguage === "hi" ? "रोग पहचान" : "Disease Detection"}
                  </li>
                  <li className="hover:text-emerald-400 cursor-pointer transition-colors">
                    {selectedLanguage === "hi" ? "मार्केटप्लेस" : "Marketplace"}
                  </li>
                  <li className="hover:text-emerald-400 cursor-pointer transition-colors">
                    {selectedLanguage === "hi" ? "किसान समुदाय" : "Farmer Community"}
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-6">{selectedLanguage === "hi" ? "सहायता" : "Support"}</h4>
                <ul className="space-y-3 text-gray-400">
                  <li className="hover:text-emerald-400 cursor-pointer transition-colors">
                    {selectedLanguage === "hi" ? "हेल्प सेंटर" : "Help Center"}
                  </li>
                  <li className="hover:text-emerald-400 cursor-pointer transition-colors">
                    {selectedLanguage === "hi" ? "ट्यूटोरियल" : "Tutorials"}
                  </li>
                  <li className="hover:text-emerald-400 cursor-pointer transition-colors">
                    {selectedLanguage === "hi" ? "संपर्क करें" : "Contact Us"}
                  </li>
                  <li className="hover:text-emerald-400 cursor-pointer transition-colors">
                    {selectedLanguage === "hi" ? "FAQ" : "FAQ"}
                  </li>
                  <li className="hover:text-emerald-400 cursor-pointer transition-colors">
                    {selectedLanguage === "hi" ? "फीडबैक" : "Feedback"}
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-6">
                  {selectedLanguage === "hi" ? "संपर्क जानकारी" : "Contact Info"}
                </h4>
                <div className="space-y-4 text-gray-400">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-emerald-400" />
                    <span>+91 1800-123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-emerald-400" />
                    <span>support@farmconnect.in</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-emerald-400" />
                    <span>{selectedLanguage === "hi" ? "नई दिल्ली, भारत" : "New Delhi, India"}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
              <p>
                © 2024 FarmConnect. {selectedLanguage === "hi" ? "सभी अधिकार सुरक्षित।" : "All rights reserved."}
                {selectedLanguage === "hi"
                  ? " भारतीय किसानों के लिए प्यार से बनाया गया।"
                  : " Made with ❤️ for Indian farmers."}
              </p>
            </div>
          </div>
        </footer>
      </div>
    )
  }

  if (currentStep === "auth") {
    return (
      <AuthenticationFlow
        selectedLanguage={selectedLanguage}
        isVoiceEnabled={isVoiceEnabled}
        onComplete={() => setCurrentStep("profile")}
        onBack={() => setCurrentStep("welcome")}
      />
    )
  }

  if (currentStep === "profile") {
    return (
      <ProfileCreation
        selectedLanguage={selectedLanguage}
        isVoiceEnabled={isVoiceEnabled}
        onComplete={() => setCurrentStep("dashboard")}
        onBack={() => setCurrentStep("auth")}
      />
    )
  }

  if (currentStep === "dashboard") {
    return (
      <Dashboard
        selectedLanguage={selectedLanguage}
        isVoiceEnabled={isVoiceEnabled}
        onVoiceToggle={handleVoiceToggle}
        onModuleClick={handleModuleNavigation}
      />
    )
  }

  if (currentStep === "farm-analysis") {
    return (
      <FarmAnalysis
        selectedLanguage={selectedLanguage}
        isVoiceEnabled={isVoiceEnabled}
        onBack={() => setCurrentStep("dashboard")}
      />
    )
  }

  if (currentStep === "equipment-rental") {
    return (
      <EquipmentRental
        selectedLanguage={selectedLanguage}
        isVoiceEnabled={isVoiceEnabled}
        onVoiceToggle={handleVoiceToggle}
        onBack={() => setCurrentStep("dashboard")}
      />
    )
  }

  if (currentStep === "disease-detection") {
    return (
      <DiseaseDetection
        selectedLanguage={selectedLanguage}
        isVoiceEnabled={isVoiceEnabled}
        onVoiceToggle={handleVoiceToggle}
        onBack={() => setCurrentStep("dashboard")}
      />
    )
  }

  if (currentStep === "learning-hub") {
    return (
      <LearningHub
        selectedLanguage={selectedLanguage}
        isVoiceEnabled={isVoiceEnabled}
        onVoiceToggle={handleVoiceToggle}
        onBack={() => setCurrentStep("dashboard")}
      />
    )
  }

  if (currentStep === "community") {
    return (
      <CommunityForum
        selectedLanguage={selectedLanguage}
        isVoiceEnabled={isVoiceEnabled}
        onVoiceToggle={handleVoiceToggle}
        onBack={() => setCurrentStep("dashboard")}
      />
    )
  }

  if (currentStep === "marketplace") {
    return (
      <Marketplace
        selectedLanguage={selectedLanguage}
        isVoiceEnabled={isVoiceEnabled}
        onVoiceToggle={handleVoiceToggle}
        onBack={() => setCurrentStep("dashboard")}
      />
    )
  }

  if (currentStep === "insurance") {
    return (
      <InsuranceHelp
        selectedLanguage={selectedLanguage}
        isVoiceEnabled={isVoiceEnabled}
        onVoiceToggle={handleVoiceToggle}
        onBack={() => setCurrentStep("dashboard")}
      />
    )
  }

  return null
}

function FarmAnalysis({
  selectedLanguage,
  isVoiceEnabled,
  onBack,
}: {
  selectedLanguage: string
  isVoiceEnabled: boolean
  onBack: () => void
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
      {/* Enhanced Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-emerald-100 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Button variant="ghost" onClick={onBack} className="text-emerald-600 hover:bg-emerald-50">
              <ArrowLeft className="w-5 h-5 mr-2" />
              {selectedLanguage === "hi" ? "वापस" : "Back"}
            </Button>
            <h1 className="text-xl font-bold text-gray-900">
              {selectedLanguage === "hi" ? "फार्म विश्लेषण" : "Farm Analysis"}
            </h1>
            {isVoiceEnabled && (
              <Button variant="outline">
                <Volume2 className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 lg:px-8 py-8">
        <p className="text-gray-600">
          {selectedLanguage === "hi"
            ? "यह फार्म विश्लेषण पृष्ठ है। यहां आप अपनी फार्म की जानकारी देख सकते हैं।"
            : "This is the Farm Analysis page. Here you can view your farm information."}
        </p>
      </div>
    </div>
  )
}

function Dashboard({
  selectedLanguage,
  isVoiceEnabled,
  onVoiceToggle,
  onModuleClick,
}: {
  selectedLanguage: string
  isVoiceEnabled: boolean
  onVoiceToggle: () => void
  onModuleClick: (moduleId: string) => void
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
      {/* Enhanced Dashboard Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-emerald-100 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Enhanced Logo */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <Wheat className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent">
                  FarmConnect
                </h1>
                <p className="text-sm text-emerald-600 font-medium">
                  {selectedLanguage === "hi" ? "किसानों के लिए एक संपूर्ण समाधान" : "Complete Solution for Farmers"}
                </p>
              </div>
            </div>

            {/* Enhanced User Info */}
            <div className="flex items-center gap-6">
              <div className="text-right">
                <h3 className="text-lg font-semibold text-gray-900">
                  {selectedLanguage === "hi" ? "नमस्ते, किसान!" : "Hello, Farmer!"}
                </h3>
                <p className="text-sm text-gray-600">{selectedLanguage === "hi" ? "आपका स्वागत है!" : "Welcome back!"}</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-xl">
                👨‍🌾
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Enhanced Dashboard Content */}
      <div className="container mx-auto px-4 lg:px-8 py-12">
        {/* Enhanced Module Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Enhanced Module Cards */}
          <Card
            onClick={() => onModuleClick("analysis")}
            className="p-8 hover:shadow-xl transition-all duration-300 border-emerald-100 hover:border-emerald-200 group cursor-pointer"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {selectedLanguage === "hi" ? "AI फसल विश्लेषण" : "AI Crop Analysis"}
            </h3>
            <p className="text-gray-600 mb-6">
              {selectedLanguage === "hi"
                ? "आपकी मिट्टी, मौसम और फसल का AI-powered विश्लेषण। सबसे अच्छी फसल के लिए व्यक्तिगत सुझाव पाएं।"
                : "AI-powered analysis of your soil, weather, and crops. Get personalized recommendations for the best harvest."}
            </p>
            <div className="flex items-center text-emerald-600 font-medium">
              <span>{selectedLanguage === "hi" ? "अभी आज़माएं" : "Try Now"}</span>
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </Card>

          <Card
            onClick={() => onModuleClick("equipment")}
            className="p-8 hover:shadow-xl transition-all duration-300 border-orange-100 hover:border-orange-200 group cursor-pointer"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Wrench className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {selectedLanguage === "hi" ? "उपकरण किराया" : "Equipment Rental"}
            </h3>
            <p className="text-gray-600 mb-6">
              {selectedLanguage === "hi"
                ? "ट्रैक्टर, हार्वेस्टर और अन्य कृषि उपकरण आसानी से किराए पर लें। बेहतर कीमत और तुरंत उपलब्धता।"
                : "Easily rent tractors, harvesters, and other agricultural equipment. Better prices and instant availability."}
            </p>
            <div className="flex items-center text-orange-600 font-medium">
              <span>{selectedLanguage === "hi" ? "उपकरण देखें" : "View Equipment"}</span>
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </Card>

          <Card
            onClick={() => onModuleClick("disease")}
            className="p-8 hover:shadow-xl transition-all duration-300 border-red-100 hover:border-red-200 group cursor-pointer"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Camera className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {selectedLanguage === "hi" ? "रोग पहचान" : "Disease Detection"}
            </h3>
            <p className="text-gray-600 mb-6">
              {selectedLanguage === "hi"
                ? "फसल की तस्वीर खींचें और तुरंत रोग की पहचान करें। उपचार के तरीके और दवाइयों की जानकारी पाएं।"
                : "Take a photo of your crop and instantly identify diseases. Get treatment methods and medicine information."}
            </p>
            <div className="flex items-center text-red-600 font-medium">
              <span>{selectedLanguage === "hi" ? "स्कैन करें" : "Scan Now"}</span>
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </Card>

          <Card
            onClick={() => onModuleClick("learning")}
            className="p-8 hover:shadow-xl transition-all duration-300 border-blue-100 hover:border-blue-200 group cursor-pointer"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {selectedLanguage === "hi" ? "सीखने का केंद्र" : "Learning Hub"}
            </h3>
            <p className="text-gray-600 mb-6">
              {selectedLanguage === "hi"
                ? "आधुनिक खेती की तकनीकें सीखें। वीडियो ट्यूटोरियल, AI ट्यूटर और व्यावहारिक गाइड उपलब्ध हैं।"
                : "Learn modern farming techniques. Video tutorials, AI tutor, and practical guides available."}
            </p>
            <div className="flex items-center text-blue-600 font-medium">
              <span>{selectedLanguage === "hi" ? "सीखना शुरू करें" : "Start Learning"}</span>
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </Card>

          <Card
            onClick={() => onModuleClick("community")}
            className="p-8 hover:shadow-xl transition-all duration-300 border-purple-100 hover:border-purple-200 group cursor-pointer"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {selectedLanguage === "hi" ? "किसान समुदाय" : "Farmer Community"}
            </h3>
            <p className="text-gray-600 mb-6">
              {selectedLanguage === "hi"
                ? "अन्य किसानों से जुड़ें, अनुभव साझा करें और समस्याओं का समाधान पाएं। सक्रिय फोरम और चर्चा।"
                : "Connect with other farmers, share experiences, and find solutions. Active forum and discussions."}
            </p>
            <div className="flex items-center text-purple-600 font-medium">
              <span>{selectedLanguage === "hi" ? "समुदाय में शामिल हों" : "Join Community"}</span>
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </Card>

          <Card
            onClick={() => onModuleClick("marketplace")}
            className="p-8 hover:shadow-xl transition-all duration-300 border-green-100 hover:border-green-200 group cursor-pointer"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <ShoppingCart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {selectedLanguage === "hi" ? "डिजिटल मार्केटप्लेस" : "Digital Marketplace"}
            </h3>
            <p className="text-gray-600 mb-6">
              {selectedLanguage === "hi"
                ? "अपनी फसल को सीधे खरीदारों को बेचें। बेहतर कीमत, तुरंत भुगतान और पारदर्शी लेन-देन।"
                : "Sell your crops directly to buyers. Better prices, instant payments, and transparent transactions."}
            </p>
            <div className="flex items-center text-green-600 font-medium">
              <span>{selectedLanguage === "hi" ? "बेचना शुरू करें" : "Start Selling"}</span>
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </Card>

          <Card
            onClick={() => onModuleClick("insurance")}
            className="p-8 hover:shadow-xl transition-all duration-300 border-indigo-100 hover:border-indigo-200 group cursor-pointer"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {selectedLanguage === "hi" ? "बीमा सहायता" : "Insurance Help"}
            </h3>
            <p className="text-gray-600 mb-6">
              {selectedLanguage === "hi"
                ? "अपनी फसल को बीमा कराएं और नुकसान से सुरक्षित रहें। आसान क्लेम प्रक्रिया और त्वरित भुगतान।"
                : "Insure your crop and stay protected from losses. Easy claim process and quick payments."}
            </p>
            <div className="flex items-center text-indigo-600 font-medium">
              <span>{selectedLanguage === "hi" ? "बीमा देखें" : "View Insurance"}</span>
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </Card>

          {/* Voice Assistant Toggle */}
          <Card className="p-8 border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {selectedLanguage === "hi" ? "आवाज़ सहायता" : "Voice Assistant"}
                </h3>
                <p className="text-gray-600">
                  {selectedLanguage === "hi" ? "आवाज़ से नियंत्रण करें" : "Control with your voice"}
                </p>
              </div>
              <Button variant="outline" onClick={onVoiceToggle} className="border-emerald-200 bg-transparent">
                <Mic className="w-5 h-5 mr-2" />
                {isVoiceEnabled
                  ? selectedLanguage === "hi"
                    ? "बंद करें"
                    : "Disable"
                  : selectedLanguage === "hi"
                    ? "चालू करें"
                    : "Enable"}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

function AuthenticationFlow({
  selectedLanguage,
  isVoiceEnabled,
  onComplete,
  onBack,
}: {
  selectedLanguage: string
  isVoiceEnabled: boolean
  onComplete: () => void
  onBack: () => void
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
      {/* Enhanced Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-emerald-100 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Button variant="ghost" onClick={onBack} className="text-emerald-600 hover:bg-emerald-50">
              <ArrowLeft className="w-5 h-5 mr-2" />
              {selectedLanguage === "hi" ? "वापस" : "Back"}
            </Button>
            <h1 className="text-xl font-bold text-gray-900">
              {selectedLanguage === "hi" ? "साइन इन / साइन अप" : "Sign In / Sign Up"}
            </h1>
            {isVoiceEnabled && (
              <Button variant="outline">
                <Volume2 className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 lg:px-8 py-8">
        <p className="text-gray-600">
          {selectedLanguage === "hi"
            ? "यह प्रमाणीकरण प्रवाह पृष्ठ है। यहां आप साइन इन या साइन अप कर सकते हैं।"
            : "This is the Authentication Flow page. Here you can sign in or sign up."}
        </p>
        <Button onClick={onComplete}>{selectedLanguage === "hi" ? "प्रोफ़ाइल बनाएं" : "Create Profile"}</Button>
      </div>
    </div>
  )
}

function ProfileCreation({
  selectedLanguage,
  isVoiceEnabled,
  onComplete,
  onBack,
}: {
  selectedLanguage: string
  isVoiceEnabled: boolean
  onComplete: () => void
  onBack: () => void
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
      {/* Enhanced Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-emerald-100 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Button variant="ghost" onClick={onBack} className="text-emerald-600 hover:bg-emerald-50">
              <ArrowLeft className="w-5 h-5 mr-2" />
              {selectedLanguage === "hi" ? "वापस" : "Back"}
            </Button>
            <h1 className="text-xl font-bold text-gray-900">
              {selectedLanguage === "hi" ? "प्रोफ़ाइल बनाएं" : "Create Profile"}
            </h1>
            {isVoiceEnabled && (
              <Button variant="outline">
                <Volume2 className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 lg:px-8 py-8">
        <p className="text-gray-600">
          {selectedLanguage === "hi"
            ? "यह प्रोफ़ाइल निर्माण पृष्ठ है। यहां आप अपनी प्रोफ़ाइल बना सकते हैं।"
            : "This is the Profile Creation page. Here you can create your profile."}
        </p>
        <Button onClick={onComplete}>{selectedLanguage === "hi" ? "डैशबोर्ड पर जाएं" : "Go to Dashboard"}</Button>
      </div>
    </div>
  )
}

function EquipmentRental({
  selectedLanguage,
  isVoiceEnabled,
  onVoiceToggle,
  onBack,
}: {
  selectedLanguage: string
  isVoiceEnabled: boolean
  onVoiceToggle: () => void
  onBack: () => void
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
      {/* Enhanced Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-emerald-100 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Button variant="ghost" onClick={onBack} className="text-emerald-600 hover:bg-emerald-50">
              <ArrowLeft className="w-5 h-5 mr-2" />
              {selectedLanguage === "hi" ? "वापस" : "Back"}
            </Button>
            <h1 className="text-xl font-bold text-gray-900">
              {selectedLanguage === "hi" ? "उपकरण किराया" : "Equipment Rental"}
            </h1>
            {isVoiceEnabled && (
              <Button variant="outline" onClick={onVoiceToggle}>
                <Volume2 className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 lg:px-8 py-8">
        <p className="text-gray-600">
          {selectedLanguage === "hi"
            ? "यह उपकरण किराया पृष्ठ है। यहां आप उपकरण किराए पर ले सकते हैं।"
            : "This is the Equipment Rental page. Here you can rent equipment."}
        </p>
      </div>
    </div>
  )
}

function DiseaseDetection({
  selectedLanguage,
  isVoiceEnabled,
  onVoiceToggle,
  onBack,
}: {
  selectedLanguage: string
  isVoiceEnabled: boolean
  onVoiceToggle: () => void
  onBack: () => void
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
      {/* Enhanced Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-emerald-100 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Button variant="ghost" onClick={onBack} className="text-emerald-600 hover:bg-emerald-50">
              <ArrowLeft className="w-5 h-5 mr-2" />
              {selectedLanguage === "hi" ? "वापस" : "Back"}
            </Button>
            <h1 className="text-xl font-bold text-gray-900">
              {selectedLanguage === "hi" ? "रोग पहचान" : "Disease Detection"}
            </h1>
            {isVoiceEnabled && (
              <Button variant="outline" onClick={onVoiceToggle}>
                <Volume2 className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 lg:px-8 py-8">
        <p className="text-gray-600">
          {selectedLanguage === "hi"
            ? "यह रोग पहचान पृष्ठ है। यहां आप अपनी फसल में रोगों की पहचान कर सकते हैं।"
            : "This is the Disease Detection page. Here you can detect diseases in your crop."}
        </p>
      </div>
    </div>
  )
}

function LearningHub({
  selectedLanguage,
  isVoiceEnabled,
  onVoiceToggle,
  onBack,
}: {
  selectedLanguage: string
  isVoiceEnabled: boolean
  onVoiceToggle: () => void
  onBack: () => void
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
      {/* Enhanced Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-emerald-100 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Button variant="ghost" onClick={onBack} className="text-emerald-600 hover:bg-emerald-50">
              <ArrowLeft className="w-5 h-5 mr-2" />
              {selectedLanguage === "hi" ? "वापस" : "Back"}
            </Button>
            <h1 className="text-xl font-bold text-gray-900">
              {selectedLanguage === "hi" ? "सीखने का केंद्र" : "Learning Hub"}
            </h1>
            {isVoiceEnabled && (
              <Button variant="outline" onClick={onVoiceToggle}>
                <Volume2 className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 lg:px-8 py-8">
        <p className="text-gray-600">
          {selectedLanguage === "hi"
            ? "यह सीखने का केंद्र पृष्ठ है। यहां आप खेती के बारे में सीख सकते हैं।"
            : "This is the Learning Hub page. Here you can learn about farming."}
        </p>
      </div>
    </div>
  )
}

function CommunityForum({
  selectedLanguage,
  isVoiceEnabled,
  onVoiceToggle,
  onBack,
}: {
  selectedLanguage: string
  isVoiceEnabled: boolean
  onVoiceToggle: () => void
  onBack: () => void
}) {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [showCreatePost, setShowCreatePost] = useState(false)
  const [newPost, setNewPost] = useState({ title: "", content: "", category: "general", image: null })
  const [searchQuery, setSearchQuery] = useState("")

  const categories = [
    { id: "all", name: selectedLanguage === "hi" ? "सभी" : "All", icon: "🌾", color: "bg-emerald-500" },
    { id: "crops", name: selectedLanguage === "hi" ? "फसल सलाह" : "Crop Advice", icon: "🌱", color: "bg-green-500" },
    {
      id: "weather",
      name: selectedLanguage === "hi" ? "मौसम चर्चा" : "Weather Discussion",
      icon: "🌤️",
      color: "bg-blue-500",
    },
    {
      id: "equipment",
      name: selectedLanguage === "hi" ? "उपकरण सुझाव" : "Equipment Tips",
      icon: "🚜",
      color: "bg-orange-500",
    },
    {
      id: "market",
      name: selectedLanguage === "hi" ? "बाज़ार की खबर" : "Market News",
      icon: "📈",
      color: "bg-purple-500",
    },
    {
      id: "success",
      name: selectedLanguage === "hi" ? "सफलता की कहानी" : "Success Stories",
      icon: "🏆",
      color: "bg-yellow-500",
    },
  ]

  const forumPosts = [
    {
      id: 1,
      title: selectedLanguage === "hi" ? "धान की फसल में पीले पत्ते की समस्या" : "Yellow leaves problem in rice crop",
      content:
        selectedLanguage === "hi"
          ? "मेरी धान की फसल में पत्ते पीले हो रहे हैं। क्या करना चाहिए?"
          : "My rice crop leaves are turning yellow. What should I do?",
      author: selectedLanguage === "hi" ? "राम कुमार" : "Ram Kumar",
      location: selectedLanguage === "hi" ? "पंजाब" : "Punjab",
      category: "crops",
      likes: 24,
      replies: 8,
      timeAgo: selectedLanguage === "hi" ? "2 घंटे पहले" : "2 hours ago",
      image: "/rice-farming-techniques.png",
      avatar: "👨‍🌾",
      isExpert: false,
    },
    {
      id: 2,
      title:
        selectedLanguage === "hi" ? "ऑर्गेनिक खाद से 40% ज्यादा उत्पादन" : "40% more production with organic fertilizer",
      content:
        selectedLanguage === "hi"
          ? "मैंने इस साल ऑर्गेनिक खाद का इस्तेमाल किया और परिणाम बहुत अच्छे मिले।"
          : "I used organic fertilizer this year and got excellent results.",
      author: selectedLanguage === "hi" ? "सुनीता देवी" : "Sunita Devi",
      location: selectedLanguage === "hi" ? "हरियाणा" : "Haryana",
      category: "success",
      likes: 156,
      replies: 23,
      timeAgo: selectedLanguage === "hi" ? "5 घंटे पहले" : "5 hours ago",
      image: "/organic-fertilizer-compost.png",
      avatar: "👩‍🌾",
      isExpert: false,
    },
    {
      id: 3,
      title:
        selectedLanguage === "hi"
          ? "कल से भारी बारिश की संभावना - सावधान रहें"
          : "Heavy rain expected from tomorrow - stay alert",
      content:
        selectedLanguage === "hi"
          ? "मौसम विभाग के अनुसार कल से 3 दिन तक भारी बारिश हो सकती है।"
          : "According to weather department, heavy rain possible for 3 days from tomorrow.",
      author: selectedLanguage === "hi" ? "डॉ. अजय शर्मा" : "Dr. Ajay Sharma",
      location: selectedLanguage === "hi" ? "कृषि विशेषज्ञ" : "Agriculture Expert",
      category: "weather",
      likes: 89,
      replies: 15,
      timeAgo: selectedLanguage === "hi" ? "1 घंटा पहले" : "1 hour ago",
      image: "/weather-forecast-agriculture.png",
      avatar: "👨‍💼",
      isExpert: true,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
      {/* Enhanced Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-emerald-100 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={onBack} className="text-emerald-600 hover:bg-emerald-50">
                <ArrowLeft className="w-5 h-5 mr-2" />
                {selectedLanguage === "hi" ? "वापस" : "Back"}
              </Button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">
                    {selectedLanguage === "hi" ? "किसान समुदाय" : "Farmer Community"}
                  </h1>
                  <p className="text-sm text-gray-600">
                    {selectedLanguage === "hi" ? "50,000+ सक्रिय किसान" : "50,000+ Active Farmers"}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder={selectedLanguage === "hi" ? "पोस्ट खोजें..." : "Search posts..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 w-64"
                />
              </div>

              <Button
                onClick={() => setShowCreatePost(true)}
                className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-6 py-2 rounded-lg font-medium shadow-lg"
              >
                <MessageSquareText className="w-4 h-4 mr-2" />
                {selectedLanguage === "hi" ? "नया पोस्ट" : "New Post"}
              </Button>

              {isVoiceEnabled && (
                <Button variant="outline" onClick={onVoiceToggle} className="border-emerald-200 bg-transparent">
                  <Volume2 className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="p-6 mb-6 border-emerald-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {selectedLanguage === "hi" ? "श्रेणियां" : "Categories"}
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all duration-200 ${
                      selectedCategory === category.id
                        ? `${category.color} text-white shadow-lg`
                        : "hover:bg-gray-50 text-gray-700"
                    }`}
                  >
                    <span className="text-lg">{category.icon}</span>
                    <span className="font-medium">{category.name}</span>
                  </button>
                ))}
              </div>
            </Card>

            {/* Community Stats */}
            <Card className="p-6 border-emerald-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {selectedLanguage === "hi" ? "समुदाय आंकड़े" : "Community Stats"}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">{selectedLanguage === "hi" ? "कुल सदस्य" : "Total Members"}</span>
                  <span className="font-bold text-emerald-600">50,247</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">{selectedLanguage === "hi" ? "आज के पोस्ट" : "Today's Posts"}</span>
                  <span className="font-bold text-blue-600">127</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">{selectedLanguage === "hi" ? "ऑनलाइन अभी" : "Online Now"}</span>
                  <span className="font-bold text-green-600">1,234</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">{selectedLanguage === "hi" ? "विशेषज्ञ" : "Experts"}</span>
                  <span className="font-bold text-purple-600">89</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Forum Posts */}
            <div className="space-y-6">
              {forumPosts.map((post) => (
                <Card key={post.id} className="p-6 hover:shadow-lg transition-all duration-300 border-emerald-100">
                  <div className="flex items-start gap-4">
                    {/* Author Avatar */}
                    <div className="relative">
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-xl">
                        {post.avatar}
                      </div>
                      {post.isExpert && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <Award className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </div>

                    <div className="flex-1">
                      {/* Post Header */}
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-bold text-gray-900">{post.author}</h4>
                        {post.isExpert && (
                          <Badge className="bg-blue-100 text-blue-700 border-blue-200 text-xs">
                            {selectedLanguage === "hi" ? "विशेषज्ञ" : "Expert"}
                          </Badge>
                        )}
                        <span className="text-gray-500 text-sm">•</span>
                        <span className="text-gray-500 text-sm">{post.location}</span>
                        <span className="text-gray-500 text-sm">•</span>
                        <span className="text-gray-500 text-sm">{post.timeAgo}</span>
                      </div>

                      {/* Post Title */}
                      <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-emerald-600 cursor-pointer">
                        {post.title}
                      </h3>

                      {/* Post Content */}
                      <p className="text-gray-600 mb-4 leading-relaxed">{post.content}</p>

                      {/* Post Image */}
                      {post.image && (
                        <div className="mb-4">
                          <img
                            src={post.image || "/placeholder.svg"}
                            alt="Post image"
                            className="w-full max-w-md h-48 object-cover rounded-lg border border-gray-200"
                          />
                        </div>
                      )}

                      {/* Post Actions */}
                      <div className="flex items-center gap-6">
                        <button className="flex items-center gap-2 text-gray-500 hover:text-emerald-600 transition-colors">
                          <ThumbsUp className="w-4 h-4" />
                          <span className="font-medium">{post.likes}</span>
                          <span className="text-sm">{selectedLanguage === "hi" ? "पसंद" : "Likes"}</span>
                        </button>

                        <button className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors">
                          <Reply className="w-4 h-4" />
                          <span className="font-medium">{post.replies}</span>
                          <span className="text-sm">{selectedLanguage === "hi" ? "जवाब" : "Replies"}</span>
                        </button>

                        <button className="flex items-center gap-2 text-gray-500 hover:text-purple-600 transition-colors">
                          <Share className="w-4 h-4" />
                          <span className="text-sm">{selectedLanguage === "hi" ? "साझा करें" : "Share"}</span>
                        </button>

                        <button className="flex items-center gap-2 text-gray-500 hover:text-yellow-600 transition-colors">
                          <Bookmark className="w-4 h-4" />
                          <span className="text-sm">{selectedLanguage === "hi" ? "सेव करें" : "Save"}</span>
                        </button>

                        <button className="ml-auto text-gray-400 hover:text-gray-600">
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-8">
              <Button
                variant="outline"
                className="border-emerald-200 hover:border-emerald-300 text-emerald-700 px-8 py-3 bg-transparent"
              >
                {selectedLanguage === "hi" ? "और पोस्ट लोड करें" : "Load More Posts"}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Create Post Modal */}
      {showCreatePost && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {selectedLanguage === "hi" ? "नया पोस्ट बनाएं" : "Create New Post"}
                </h3>
                <Button variant="ghost" onClick={() => setShowCreatePost(false)}>
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {selectedLanguage === "hi" ? "शीर्षक" : "Title"}
                  </label>
                  <input
                    type="text"
                    value={newPost.title}
                    onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                    placeholder={selectedLanguage === "hi" ? "अपने पोस्ट का शीर्षक लिखें..." : "Write your post title..."}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {selectedLanguage === "hi" ? "श्रेणी" : "Category"}
                  </label>
                  <select
                    value={newPost.category}
                    onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    {categories.slice(1).map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {selectedLanguage === "hi" ? "विवरण" : "Description"}
                  </label>
                  <textarea
                    value={newPost.content}
                    onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                    placeholder={
                      selectedLanguage === "hi"
                        ? "अपना सवाल या अनुभव विस्तार से लिखें..."
                        : "Write your question or experience in detail..."
                    }
                    rows={6}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {selectedLanguage === "hi" ? "तस्वीर जोड़ें" : "Add Image"}
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-emerald-400 transition-colors cursor-pointer">
                    <ImageIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">
                      {selectedLanguage === "hi" ? "तस्वीर अपलोड करने के लिए क्लिक करें" : "Click to upload image"}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    onClick={() => setShowCreatePost(false)}
                    variant="outline"
                    className="flex-1 border-gray-200 hover:border-gray-300"
                  >
                    {selectedLanguage === "hi" ? "रद्द करें" : "Cancel"}
                  </Button>
                  <Button className="flex-1 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white">
                    <Send className="w-4 h-4 mr-2" />
                    {selectedLanguage === "hi" ? "पोस्ट करें" : "Post"}
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}

function Marketplace({
  selectedLanguage,
  isVoiceEnabled,
  onVoiceToggle,
  onBack,
}: {
  selectedLanguage: string
  isVoiceEnabled: boolean
  onVoiceToggle: () => void
  onBack: () => void
}) {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [priceRange, setPriceRange] = useState([0, 10000])
  const [selectedProduct, setSelectedProduct] = useState<any>(null)

  const categories = [
    { id: "all", name: selectedLanguage === "hi" ? "सभी" : "All", icon: "🌾", count: 1247 },
    { id: "grains", name: selectedLanguage === "hi" ? "अनाज" : "Grains", icon: "🌾", count: 456 },
    { id: "vegetables", name: selectedLanguage === "hi" ? "सब्जियां" : "Vegetables", icon: "🥕", count: 234 },
    { id: "fruits", name: selectedLanguage === "hi" ? "फल" : "Fruits", icon: "🍎", count: 189 },
    { id: "dairy", name: selectedLanguage === "hi" ? "डेयरी" : "Dairy", icon: "🥛", count: 123 },
    { id: "organic", name: selectedLanguage === "hi" ? "ऑर्गेनिक" : "Organic", icon: "🌱", count: 245 },
  ]

  const products = [
    {
      id: 1,
      name: selectedLanguage === "hi" ? "बासमती चावल - प्रीमियम क्वालिटी" : "Basmati Rice - Premium Quality",
      price: 85,
      unit: selectedLanguage === "hi" ? "प्रति किलो" : "per kg",
      originalPrice: 95,
      seller: selectedLanguage === "hi" ? "राजेश कुमार" : "Rajesh Kumar",
      location: selectedLanguage === "hi" ? "पंजाब" : "Punjab",
      rating: 4.8,
      reviews: 156,
      image: "/rice-farming-techniques.png",
      category: "grains",
      inStock: true,
      quantity: "500 kg उपलब्ध",
      description:
        selectedLanguage === "hi"
          ? "उच्च गुणवत्ता वाला बासमती चावल, सीधे खेत से।"
          : "High quality basmati rice, directly from farm.",
      verified: true,
      fastDelivery: true,
      organic: false,
    },
    {
      id: 2,
      name: selectedLanguage === "hi" ? "ताजा टमाटर - A ग्रेड" : "Fresh Tomatoes - A Grade",
      price: 25,
      unit: selectedLanguage === "hi" ? "प्रति किलो" : "per kg",
      originalPrice: 30,
      seller: selectedLanguage === "hi" ? "सुनीता देवी" : "Sunita Devi",
      location: selectedLanguage === "hi" ? "हरियाणा" : "Haryana",
      rating: 4.6,
      reviews: 89,
      image: "/organic-fertilizer-compost.png",
      category: "vegetables",
      inStock: true,
      quantity: "200 kg उपलब्ध",
      description:
        selectedLanguage === "hi"
          ? "ताजे और रसीले टमाटर, बिना केमिकल के उगाए गए।"
          : "Fresh and juicy tomatoes, grown without chemicals.",
      verified: true,
      fastDelivery: true,
      organic: true,
    },
    {
      id: 3,
      name: selectedLanguage === "hi" ? "गेहूं - शरबती किस्म" : "Wheat - Sharbati Variety",
      price: 22,
      unit: selectedLanguage === "hi" ? "प्रति किलो" : "per kg",
      originalPrice: 25,
      seller: selectedLanguage === "hi" ? "अमित शर्मा" : "Amit Sharma",
      location: selectedLanguage === "hi" ? "मध्य प्रदेश" : "Madhya Pradesh",
      rating: 4.9,
      reviews: 234,
      image: "/weather-forecast-agriculture.png",
      category: "grains",
      inStock: true,
      quantity: "1000 kg उपलब्ध",
      description:
        selectedLanguage === "hi"
          ? "उत्तम गुणवत्ता का शरबती गेहूं, सरकारी मानकों के अनुसार।"
          : "Excellent quality Sharbati wheat, as per government standards.",
      verified: true,
      fastDelivery: false,
      organic: false,
    },
    {
      id: 4,
      name: selectedLanguage === "hi" ? "ऑर्गेनिक दूध - A2 गाय का" : "Organic Milk - A2 Cow",
      price: 65,
      unit: selectedLanguage === "hi" ? "प्रति लीटर" : "per liter",
      originalPrice: 70,
      seller: selectedLanguage === "hi" ? "गोपाल डेयरी फार्म" : "Gopal Dairy Farm",
      location: selectedLanguage === "hi" ? "राजस्थान" : "Rajasthan",
      rating: 4.7,
      reviews: 67,
      image: "/crop-insurance-documents.png",
      category: "dairy",
      inStock: true,
      quantity: "50 लीटर उपलब्ध",
      description:
        selectedLanguage === "hi" ? "शुद्ध A2 गाय का दूध, बिना मिलावट के।" : "Pure A2 cow milk, without any adulteration.",
      verified: true,
      fastDelivery: true,
      organic: true,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
      {/* Enhanced Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-emerald-100 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={onBack} className="text-emerald-600 hover:bg-emerald-50">
                <ArrowLeft className="w-5 h-5 mr-2" />
                {selectedLanguage === "hi" ? "वापस" : "Back"}
              </Button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <ShoppingCart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">
                    {selectedLanguage === "hi" ? "डिजिटल मार्केटप्लेस" : "Digital Marketplace"}
                  </h1>
                  <p className="text-sm text-gray-600">
                    {selectedLanguage === "hi" ? "1,247 उत्पाद उपलब्ध" : "1,247 Products Available"}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder={selectedLanguage === "hi" ? "उत्पाद खोजें..." : "Search products..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 w-64"
                />
              </div>

              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="border-emerald-200 hover:border-emerald-300"
              >
                <Filter className="w-4 h-4 mr-2" />
                {selectedLanguage === "hi" ? "फिल्टर" : "Filters"}
              </Button>

              <div className="flex items-center gap-2 border border-gray-200 rounded-lg p-1">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="p-2"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="p-2"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>

              {isVoiceEnabled && (
                <Button variant="outline" onClick={onVoiceToggle} className="border-emerald-200 bg-transparent">
                  <Volume2 className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Categories */}
            <Card className="p-6 mb-6 border-emerald-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {selectedLanguage === "hi" ? "श्रेणियां" : "Categories"}
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-all duration-200 ${
                      selectedCategory === category.id
                        ? "bg-emerald-500 text-white shadow-lg"
                        : "hover:bg-gray-50 text-gray-700"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{category.icon}</span>
                      <span className="font-medium">{category.name}</span>
                    </div>
                    <span className="text-sm opacity-75">({category.count})</span>
                  </button>
                ))}
              </div>
            </Card>

            {/* Price Filter */}
            <Card className="p-6 mb-6 border-emerald-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {selectedLanguage === "hi" ? "कीमत रेंज" : "Price Range"}
              </h3>
              <div className="space-y-4">
                <Slider value={priceRange} onValueChange={setPriceRange} max={10000} step={100} className="w-full" />
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>₹{priceRange[0]}</span>
                  <span>₹{priceRange[1]}</span>
                </div>
              </div>
            </Card>

            {/* Quick Filters */}
            <Card className="p-6 border-emerald-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {selectedLanguage === "hi" ? "त्वरित फिल्टर" : "Quick Filters"}
              </h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3">
                  <input type="checkbox" className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500" />
                  <span className="text-gray-700">{selectedLanguage === "hi" ? "ऑर्गेनिक" : "Organic"}</span>
                </label>
                <label className="flex items-center gap-3">
                  <input type="checkbox" className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500" />
                  <span className="text-gray-700">{selectedLanguage === "hi" ? "तुरंत डिलीवरी" : "Fast Delivery"}</span>
                </label>
                <label className="flex items-center gap-3">
                  <input type="checkbox" className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500" />
                  <span className="text-gray-700">{selectedLanguage === "hi" ? "वेरिफाइड सेलर" : "Verified Seller"}</span>
                </label>
                <label className="flex items-center gap-3">
                  <input type="checkbox" className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500" />
                  <span className="text-gray-700">{selectedLanguage === "hi" ? "स्टॉक में" : "In Stock"}</span>
                </label>
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{selectedLanguage === "hi" ? "उत्पाद" : "Products"}</h2>
                <p className="text-gray-600">
                  {selectedLanguage === "hi" ? "1,247 उत्पाद मिले" : "1,247 products found"}
                </p>
              </div>

              <select className="border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                <option value="relevance">{selectedLanguage === "hi" ? "प्रासंगिकता" : "Relevance"}</option>
                <option value="price-low">
                  {selectedLanguage === "hi" ? "कीमत: कम से ज्यादा" : "Price: Low to High"}
                </option>
                <option value="price-high">
                  {selectedLanguage === "hi" ? "कीमत: ज्यादा से कम" : "Price: High to Low"}
                </option>
                <option value="rating">{selectedLanguage === "hi" ? "रेटिंग" : "Rating"}</option>
                <option value="newest">{selectedLanguage === "hi" ? "नवीनतम" : "Newest"}</option>
              </select>
            </div>

            {/* Product Grid */}
            <div className={`grid gap-6 ${viewMode === "grid" ? "md:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"}`}>
              {products.map((product) => (
                <Card
                  key={product.id}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 border-emerald-100 cursor-pointer group"
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="relative">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      {product.organic && (
                        <Badge className="bg-green-100 text-green-700 border-green-200 text-xs">
                          🌱 {selectedLanguage === "hi" ? "ऑर्गेनिक" : "Organic"}
                        </Badge>
                      )}
                      {product.fastDelivery && (
                        <Badge className="bg-blue-100 text-blue-700 border-blue-200 text-xs">
                          ⚡ {selectedLanguage === "hi" ? "तुरंत डिलीवरी" : "Fast Delivery"}
                        </Badge>
                      )}
                    </div>

                    {/* Discount */}
                    {product.originalPrice > product.price && (
                      <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-lg text-xs font-bold">
                        {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                      </div>
                    )}

                    {/* Heart Icon */}
                    <button className="absolute bottom-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                      <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
                    </button>
                  </div>

                  <div className="p-4">
                    {/* Product Name */}
                    <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                      {product.name}
                    </h3>

                    {/* Price */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl font-bold text-emerald-600">₹{product.price}</span>
                      <span className="text-sm text-gray-500">{product.unit}</span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-gray-400 line-through">₹{product.originalPrice}</span>
                      )}
                    </div>

                    {/* Seller Info */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-xs">
                        👨‍🌾
                      </div>
                      <span className="text-sm text-gray-600">{product.seller}</span>
                      {product.verified && (
                        <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </div>

                    {/* Location & Rating */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <MapPin className="w-3 h-3" />
                        <span>{product.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{product.rating}</span>
                        <span className="text-sm text-gray-500">({product.reviews})</span>
                      </div>
                    </div>

                    {/* Stock Status */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-600">{product.quantity}</span>
                      <Badge
                        className={`text-xs ${product.inStock ? "bg-green-100 text-green-700 border-green-200" : "bg-red-100 text-red-700 border-red-200"}`}
                      >
                        {product.inStock
                          ? selectedLanguage === "hi"
                            ? "स्टॉक में"
                            : "In Stock"
                          : selectedLanguage === "hi"
                            ? "स्टॉक खत्म"
                            : "Out of Stock"}
                      </Badge>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        {selectedLanguage === "hi" ? "खरीदें" : "Buy Now"}
                      </Button>
                      <Button
                        variant="outline"
                        className="border-emerald-200 hover:border-emerald-300 text-emerald-700 bg-transparent"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button
                variant="outline"
                className="border-emerald-200 hover:border-emerald-300 text-emerald-700 px-8 py-3 bg-transparent"
              >
                {selectedLanguage === "hi" ? "और उत्पाद लोड करें" : "Load More Products"}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">{selectedProduct.name}</h3>
                <Button variant="ghost" onClick={() => setSelectedProduct(null)}>
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Product Image */}
                <div>
                  <img
                    src={selectedProduct.image || "/placeholder.svg"}
                    alt={selectedProduct.name}
                    className="w-full h-80 object-cover rounded-lg border border-gray-200"
                  />
                </div>

                {/* Product Details */}
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-3xl font-bold text-emerald-600">₹{selectedProduct.price}</span>
                      <span className="text-gray-500">{selectedProduct.unit}</span>
                      {selectedProduct.originalPrice > selectedProduct.price && (
                        <span className="text-lg text-gray-400 line-through">₹{selectedProduct.originalPrice}</span>
                      )}
                    </div>
                    <p className="text-gray-600">{selectedProduct.description}</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">👨‍🌾</div>
                      <div>
                        <p className="font-medium">{selectedProduct.seller}</p>
                        <p className="text-sm text-gray-500">{selectedProduct.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="font-medium">{selectedProduct.rating}</span>
                      <span className="text-gray-500">({selectedProduct.reviews} reviews)</span>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button className="flex-1 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white py-3">
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      {selectedLanguage === "hi" ? "अभी खरीदें" : "Buy Now"}
                    </Button>
                    <Button
                      variant="outline"
                      className="border-emerald-200 hover:border-emerald-300 text-emerald-700 py-3 bg-transparent"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      {selectedLanguage === "hi" ? "संपर्क करें" : "Contact"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}

function InsuranceHelp({
  selectedLanguage,
  isVoiceEnabled,
  onVoiceToggle,
  onBack,
}: {
  selectedLanguage: string
  isVoiceEnabled: boolean
  onVoiceToggle: () => void
  onBack: () => void
}) {
  const [selectedTab, setSelectedTab] = useState("overview")
  const [showClaimForm, setShowClaimForm] = useState(false)
  const [claimData, setClaimData] = useState({
    policyNumber: "",
    cropType: "",
    damageType: "",
    damageDate: "",
    estimatedLoss: "",
    description: "",
  })

  const insuranceSchemes = [
    {
      id: 1,
      name: selectedLanguage === "hi" ? "प्रधानमंत्री फसल बीमा योजना" : "PM Fasal Bima Yojana",
      description:
        selectedLanguage === "hi" ? "प्राकृतिक आपदाओं से फसल की सुरक्षा" : "Crop protection from natural disasters",
      premium: selectedLanguage === "hi" ? "2% (खरीफ), 1.5% (रबी)" : "2% (Kharif), 1.5% (Rabi)",
      coverage: selectedLanguage === "hi" ? "₹2 लाख तक" : "Up to ₹2 Lakhs",
      status: "active",
      image: "/crop-insurance-documents.png",
    },
    {
      id: 2,
      name: selectedLanguage === "hi" ? "मौसम आधारित फसल बीमा" : "Weather Based Crop Insurance",
      description: selectedLanguage === "hi" ? "मौसम की मार से सुरक्षा" : "Protection from weather adversities",
      premium: selectedLanguage === "hi" ? "3-5% फसल मूल्य का" : "3-5% of crop value",
      coverage: selectedLanguage === "hi" ? "₹5 लाख तक" : "Up to ₹5 Lakhs",
      status: "available",
      image: "/weather-forecast-agriculture.png",
    },
  ]

  const claimHistory = [
    {
      id: "CLM001",
      date: "2024-01-15",
      crop: selectedLanguage === "hi" ? "धान" : "Rice",
      amount: 45000,
      status: "approved",
      reason: selectedLanguage === "hi" ? "बाढ़ से नुकसान" : "Flood damage",
    },
    {
      id: "CLM002",
      date: "2023-10-22",
      crop: selectedLanguage === "hi" ? "गेहूं" : "Wheat",
      amount: 32000,
      status: "processing",
      reason: selectedLanguage === "hi" ? "ओलावृष्टि" : "Hailstorm",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
      {/* Enhanced Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-emerald-100 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={onBack} className="text-emerald-600 hover:bg-emerald-50">
                <ArrowLeft className="w-5 h-5 mr-2" />
                {selectedLanguage === "hi" ? "वापस" : "Back"}
              </Button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">
                    {selectedLanguage === "hi" ? "बीमा सहायता" : "Insurance Help"}
                  </h1>
                  <p className="text-sm text-gray-600">
                    {selectedLanguage === "hi" ? "फसल बीमा और क्लेम ट्रैकिंग" : "Crop Insurance & Claim Tracking"}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button
                onClick={() => setShowClaimForm(true)}
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium shadow-lg"
              >
                <FileText className="w-4 h-4 mr-2" />
                {selectedLanguage === "hi" ? "नया क्लेम" : "New Claim"}
              </Button>

              {isVoiceEnabled && (
                <Button variant="outline" onClick={onVoiceToggle} className="border-emerald-200 bg-transparent">
                  <Volume2 className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 lg:px-8 py-8">
        {/* Tab Navigation */}
        <div className="flex gap-2 mb-8 bg-white p-2 rounded-lg border border-emerald-100">
          {[
            { id: "overview", name: selectedLanguage === "hi" ? "अवलोकन" : "Overview", icon: Shield },
            { id: "schemes", name: selectedLanguage === "hi" ? "योजनाएं" : "Schemes", icon: FileText },
            { id: "claims", name: selectedLanguage === "hi" ? "क्लेम ट्रैकिंग" : "Claim Tracking", icon: Clock },
            {
              id: "calculator",
              name: selectedLanguage === "hi" ? "प्रीमियम कैलकुलेटर" : "Premium Calculator",
              icon: DollarSign,
            },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedTab === tab.id ? "bg-indigo-500 text-white shadow-lg" : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.name}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {selectedTab === "overview" && (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 border-emerald-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">₹2.5L</p>
                    <p className="text-sm text-gray-600">{selectedLanguage === "hi" ? "कुल कवरेज" : "Total Coverage"}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-blue-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">3</p>
                    <p className="text-sm text-gray-600">
                      {selectedLanguage === "hi" ? "सक्रिय पॉलिसी" : "Active Policies"}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-yellow-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">2</p>
                    <p className="text-sm text-gray-600">{selectedLanguage === "hi" ? "पेंडिंग क्लेम" : "Pending Claims"}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-purple-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">₹77K</p>
                    <p className="text-sm text-gray-600">{selectedLanguage === "hi" ? "कुल क्लेम" : "Total Claims"}</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card className="p-8 border-emerald-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {selectedLanguage === "hi" ? "त्वरित कार्य" : "Quick Actions"}
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <button
                  onClick={() => setShowClaimForm(true)}
                  className="p-6 border-2 border-dashed border-indigo-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-200 text-center group"
                >
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-200 transition-colors">
                    <FileText className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    {selectedLanguage === "hi" ? "नया क्लेम दर्ज करें" : "File New Claim"}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {selectedLanguage === "hi" ? "फसल के नुकसान के लिए क्लेम करें" : "Claim for crop damage"}
                  </p>
                </button>

                <button className="p-6 border-2 border-dashed border-green-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-all duration-200 text-center group">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    {selectedLanguage === "hi" ? "नई पॉलिसी खरीदें" : "Buy New Policy"}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {selectedLanguage === "hi" ? "अपनी फसल को सुरक्षित करें" : "Protect your crops"}
                  </p>
                </button>

                <button className="p-6 border-2 border-dashed border-blue-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 text-center group">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                    <HelpCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    {selectedLanguage === "hi" ? "सहायता केंद्र" : "Help Center"}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {selectedLanguage === "hi" ? "बीमा संबंधी सवाल पूछें" : "Ask insurance questions"}
                  </p>
                </button>
              </div>
            </Card>
          </div>
        )}

        {/* Insurance Schemes Tab */}
        {selectedTab === "schemes" && (
          <div className="space-y-6">
            {insuranceSchemes.map((scheme) => (
              <Card key={scheme.id} className="p-8 border-emerald-100 hover:shadow-lg transition-all duration-300">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{scheme.name}</h3>
                      <Badge
                        className={`${scheme.status === "active" ? "bg-green-100 text-green-700 border-green-200" : "bg-blue-100 text-blue-700 border-blue-200"}`}
                      >
                        {scheme.status === "active"
                          ? selectedLanguage === "hi"
                            ? "सक्रिय"
                            : "Active"
                          : selectedLanguage === "hi"
                            ? "उपलब्ध"
                            : "Available"}
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-6">{scheme.description}</p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">
                          {selectedLanguage === "hi" ? "प्रीमियम दर" : "Premium Rate"}
                        </p>
                        <p className="font-bold text-gray-900">{scheme.premium}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">
                          {selectedLanguage === "hi" ? "अधिकतम कवरेज" : "Maximum Coverage"}
                        </p>
                        <p className="font-bold text-gray-900">{scheme.coverage}</p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <img
                      src={scheme.image || "/placeholder.svg"}
                      alt={scheme.name}
                      className="w-32 h-32 object-cover rounded-lg mx-auto mb-4 border border-gray-200"
                    />
                    <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-6 py-2 rounded-lg">
                      {scheme.status === "active"
                        ? selectedLanguage === "hi"
                          ? "विवरण देखें"
                          : "View Details"
                        : selectedLanguage === "hi"
                          ? "अभी खरीदें"
                          : "Buy Now"}
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Claims Tracking Tab */}
        {selectedTab === "claims" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">
                {selectedLanguage === "hi" ? "क्लेम इतिहास" : "Claim History"}
              </h3>
              <Button
                onClick={() => setShowClaimForm(true)}
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white"
              >
                <FileText className="w-4 h-4 mr-2" />
                {selectedLanguage === "hi" ? "नया क्लेम" : "New Claim"}
              </Button>
            </div>

            {claimHistory.map((claim) => (
              <Card key={claim.id} className="p-6 border-emerald-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">#{claim.id}</h4>
                      <p className="text-gray-600">
                        {claim.crop} - {claim.reason}
                      </p>
                      <p className="text-sm text-gray-500">{claim.date}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-xl font-bold text-gray-900">₹{claim.amount.toLocaleString()}</p>
                    <Badge
                      className={`${
                        claim.status === "approved"
                          ? "bg-green-100 text-green-700 border-green-200"
                          : claim.status === "processing"
                            ? "bg-yellow-100 text-yellow-700 border-yellow-200"
                            : "bg-red-100 text-red-700 border-red-200"
                      }`}
                    >
                      {claim.status === "approved"
                        ? selectedLanguage === "hi"
                          ? "स्वीकृत"
                          : "Approved"
                        : claim.status === "processing"
                          ? selectedLanguage === "hi"
                            ? "प्रक्रिया में"
                            : "Processing"
                          : selectedLanguage === "hi"
                            ? "अस्वीकृत"
                            : "Rejected"}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Claim Form Modal */}
      {showClaimForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {selectedLanguage === "hi" ? "नया क्लेम दर्ज करें" : "File New Claim"}
                </h3>
                <Button variant="ghost" onClick={() => setShowClaimForm(false)}>
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {selectedLanguage === "hi" ? "पॉलिसी नंबर" : "Policy Number"}
                    </label>
                    <input
                      type="text"
                      value={claimData.policyNumber}
                      onChange={(e) => setClaimData({ ...claimData, policyNumber: e.target.value })}
                      placeholder="PMFBY123456"
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {selectedLanguage === "hi" ? "फसल का प्रकार" : "Crop Type"}
                    </label>
                    <select
                      value={claimData.cropType}
                      onChange={(e) => setClaimData({ ...claimData, cropType: e.target.value })}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option value="">{selectedLanguage === "hi" ? "चुनें" : "Select"}</option>
                      <option value="rice">{selectedLanguage === "hi" ? "धान" : "Rice"}</option>
                      <option value="wheat">{selectedLanguage === "hi" ? "गेहूं" : "Wheat"}</option>
                      <option value="cotton">{selectedLanguage === "hi" ? "कपास" : "Cotton"}</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {selectedLanguage === "hi" ? "नुकसान का प्रकार" : "Damage Type"}
                    </label>
                    <select
                      value={claimData.damageType}
                      onChange={(e) => setClaimData({ ...claimData, damageType: e.target.value })}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option value="">{selectedLanguage === "hi" ? "चुनें" : "Select"}</option>
                      <option value="flood">{selectedLanguage === "hi" ? "बाढ़" : "Flood"}</option>
                      <option value="drought">{selectedLanguage === "hi" ? "सूखा" : "Drought"}</option>
                      <option value="hail">{selectedLanguage === "hi" ? "ओलावृष्टि" : "Hailstorm"}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {selectedLanguage === "hi" ? "नुकसान की तारीख" : "Damage Date"}
                    </label>
                    <input
                      type="date"
                      value={claimData.damageDate}
                      onChange={(e) => setClaimData({ ...claimData, damageDate: e.target.value })}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {selectedLanguage === "hi" ? "अनुमानित नुकसान (₹)" : "Estimated Loss (₹)"}
                  </label>
                  <input
                    type="number"
                    value={claimData.estimatedLoss}
                    onChange={(e) => setClaimData({ ...claimData, estimatedLoss: e.target.value })}
                    placeholder="50000"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {selectedLanguage === "hi" ? "नुकसान का विवरण" : "Damage Description"}
                  </label>
                  <textarea
                    value={claimData.description}
                    onChange={(e) => setClaimData({ ...claimData, description: e.target.value })}
                    placeholder={
                      selectedLanguage === "hi"
                        ? "नुकसान का विस्तृत विवरण दें..."
                        : "Provide detailed description of damage..."
                    }
                    rows={4}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {selectedLanguage === "hi" ? "नुकसान की तस्वीरें" : "Damage Photos"}
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-indigo-400 transition-colors cursor-pointer">
                    <Camera className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">
                      {selectedLanguage === "hi" ? "तस्वीरें अपलोड करने के लिए क्लिक करें" : "Click to upload photos"}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    onClick={() => setShowClaimForm(false)}
                    variant="outline"
                    className="flex-1 border-gray-200 hover:border-gray-300"
                  >
                    {selectedLanguage === "hi" ? "रद्द करें" : "Cancel"}
                  </Button>
                  <Button className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white">
                    <Send className="w-4 h-4 mr-2" />
                    {selectedLanguage === "hi" ? "क्लेम सबमिट करें" : "Submit Claim"}
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}
