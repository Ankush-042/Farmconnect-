"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Volume2, Camera } from "lucide-react"
import { useTranslation } from "react-i18next"

export default function DiseaseDetectionPage() {
  const { t } = useTranslation()
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(false) // Assuming this state is managed elsewhere or should be removed if not needed here

  // Placeholder function - replace with actual disease detection logic
  const handleDetectDisease = () => {
    console.log("Detecting disease...")
    // Add logic here to handle image input and call AI model
  }

  // Assuming isVoiceEnabled state and handleVoiceToggle function are managed at a higher level
  // or passed as props if needed for a specific part of this page.
  // For now, I'll keep the structure based on the original component but simplify voice toggle.

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
      {/* Enhanced Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-emerald-100 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={() => window.history.back()} className="text-emerald-600 hover:bg-emerald-50">
                <ArrowLeft className="w-5 h-5 mr-2" />
                {t("back")}
              </Button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Camera className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">
                    {t("disease_detection.title")}
                  </h1>
                  <p className="text-sm text-gray-600">
                    {t("disease_detection.subtitle")}
                  </p>
                </div>
              </div>
            </div>

            {/* Voice Toggle - Placeholder for now */}
            {/* {isVoiceEnabled && (
              <Button variant="outline" onClick={onVoiceToggle} className="border-emerald-200 bg-transparent">
                <Volume2 className="w-4 h-4" />
              </Button>
            )} */}
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 lg:px-8 py-8">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {t("disease_detection.analyze_crop")}
          </h2>
          <p className="text-gray-600">
            {t("disease_detection.instructions")}
          </p>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-red-400 transition-colors cursor-pointer">
            <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 font-medium">
              {t("disease_detection.upload_photo")}
            </p>
            <Input type="file" className="sr-only" />
          </div>
          <Button onClick={handleDetectDisease} className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-medium shadow-lg">
            {t("disease_detection.detect_button")}
          </Button>

          {/* Placeholder for analysis results */}
          {/* <Card className="mt-8 p-6 border-red-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {t("disease_detection.results.title")}
            </h3>
            <p className="text-gray-600">{t("disease_detection.results.placeholder")}</p>
          </Card> */}
        </div>
      </div>
    </div>
  )
}