"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ChevronRight,
  Mic,
  Volume2,
  Wheat,
  BarChart3,
  GraduationCap,
  Wrench,
  Camera,
  MessageCircle,
  ShoppingCart,
  Shield,
} from "lucide-react"
import { useTranslation } from "react-i18next"
import { useRouter } from "next/navigation"

export default function Dashboard() {
  const { t, i18n } = useTranslation()
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(false)

  const handleVoiceToggle = () => {
    setIsVoiceEnabled(!isVoiceEnabled)
    if (!isVoiceEnabled) {
      // console.log("Voice enabled: Namaste! FarmConnect mein aapka swagat hai") // This will need to be localized
    }
  }

  const handleModuleClick = (moduleId: string) => {
    const router = useRouter()
    router.push(`/dashboard/${moduleId}`)
  }

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
                  {t("site_title")}
                </h1>
                <p className="text-sm text-emerald-600 font-medium">
                  {t("site_tagline")}
                </p>
              </div>
            </div>

            {/* Enhanced User Info */}
            <div className="flex items-center gap-6">
              <div className="text-right">
                <h3 className="text-lg font-semibold text-gray-900">
                  {t("dashboard.greeting")}
                </h3>
                <p className="text-sm text-gray-600">{t("dashboard.welcome_back")}</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-xl">
                👨‍🌾 {/* This could also be dynamic based on user profile */}
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
            onClick={() => handleModuleClick("analysis")}
            className="p-8 hover:shadow-xl transition-all duration-300 border-emerald-100 hover:border-emerald-200 group cursor-pointer"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {t("features.analysis.title")}
            </h3>
            <p className="text-gray-600 mb-6">
              {t("features.analysis.description")}
            </p>
            <div className="flex items-center text-emerald-600 font-medium">
              <span>{t("common.try_now")}</span>
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </Card>

          <Card
            onClick={() => handleModuleClick("equipment")}
            className="p-8 hover:shadow-xl transition-all duration-300 border-orange-100 hover:border-orange-200 group cursor-pointer"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Wrench className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {t("features.equipment.title")}
            </h3>
            <p className="text-gray-600 mb-6">
              {t("features.equipment.description")}
            </p>
            <div className="flex items-center text-orange-600 font-medium">
              <span>{t("features.equipment.view_equipment")}</span>
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </Card>

          <Card
            onClick={() => handleModuleClick("disease")}
            className="p-8 hover:shadow-xl transition-all duration-300 border-red-100 hover:border-red-200 group cursor-pointer"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Camera className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {t("features.disease.title")}
            </h3>
            <p className="text-gray-600 mb-6">
              {t("features.disease.description")}
            </p>
            <div className="flex items-center text-red-600 font-medium">
              <span>{t("features.disease.scan_now")}</span>
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </Card>

          <Card
            onClick={() => handleModuleClick("learning")}
            className="p-8 hover:shadow-xl transition-all duration-300 border-blue-100 hover:border-blue-200 group cursor-pointer"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {t("features.learning.title")}
            </h3>
            <p className="text-gray-600 mb-6">
              {t("features.learning.description")}
            </p>
            <div className="flex items-center text-blue-600 font-medium">
              <span>{t("features.learning.start_learning")}</span>
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </Card>

          <Card
            onClick={() => handleModuleClick("community")}
            className="p-8 hover:shadow-xl transition-all duration-300 border-purple-100 hover:border-purple-200 group cursor-pointer"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {t("features.community.title")}
            </h3>
            <p className="text-gray-600 mb-6">
              {t("features.community.description")}
            </p>
            <div className="flex items-center text-purple-600 font-medium">
              <span>{t("features.community.join_community")}</span>
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </Card>

          <Card
            onClick={() => handleModuleClick("marketplace")}
            className="p-8 hover:shadow-xl transition-all duration-300 border-green-100 hover:border-green-200 group cursor-pointer"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <ShoppingCart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {t("features.marketplace.title")}
            </h3>
            <p className="text-gray-600 mb-6">
              {t("features.marketplace.description")}
            </p>
            <div className="flex items-center text-green-600 font-medium">
              <span>{t("features.marketplace.start_selling")}</span>
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </Card>

          <Card
            onClick={() => handleModuleClick("insurance")}
            className="p-8 hover:shadow-xl transition-all duration-300 border-indigo-100 hover:border-indigo-200 group cursor-pointer"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {t("features.insurance.title")}
            </h3>
            <p className="text-gray-600 mb-6">
              {t("features.insurance.description")}
            </p>
            <div className="flex items-center text-indigo-600 font-medium">
              <span>{t("features.insurance.view_insurance")}</span>
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </Card>

          {/* Voice Assistant Toggle */}
          <Card className="p-8 border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {t("voice_assistant.title")}
                </h3>
                <p className="text-gray-600">
                  {t("voice_assistant.description")}
                </p>
              </div>
              <Button variant="outline" onClick={handleVoiceToggle} className="border-emerald-200 bg-transparent">
                <Mic className="w-5 h-5 mr-2" />
                {isVoiceEnabled ? t("voice_assistant.disable") : t("voice_assistant.enable")}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}