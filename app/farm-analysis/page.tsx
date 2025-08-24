"use client"

import { useTranslation } from "react-i18next"
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button"
import { ArrowLeft, Volume2 } from "lucide-react"

export default function FarmAnalysisPage() {
  const { t } = useTranslation()
  const router = useRouter();

  const handleBack = () => {
    router.push('/dashboard');
  }

  // Assuming isVoiceEnabled state will be managed at a higher level or via context
  // For now, using a placeholder boolean.
  const isVoiceEnabled = false // Replace with actual state/context

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
      {/* Enhanced Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-emerald-100 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Button variant="ghost" onClick={handleBack} className="text-emerald-600 hover:bg-emerald-50">
              <ArrowLeft className="w-5 h-5 mr-2" />
              {t("farm_analysis.back_button")}
            </Button>
            <h1 className="text-xl font-bold text-gray-900">
              {t("farm_analysis.title")}
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
          {t("farm_analysis.description")}
        </p>
        {/* Farm Analysis specific content goes here */}
        {/* You will add forms, data displays, recommendations etc. */}
      </div>
    </div>
  )
}