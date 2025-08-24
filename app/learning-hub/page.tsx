"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Volume2, GraduationCap } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function LearningHubPage() {
  const { t } = useTranslation();
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(false);

  const handleVoiceToggle = () => {
    setIsVoiceEnabled(!isVoiceEnabled);
    if (!isVoiceEnabled) {
      console.log("Voice enabled for Learning Hub");
    }
  };

  // You would typically fetch learning content here
  const learningContent = [
    {
      id: 1,
      title: t("learningHub.content1.title"),
      description: t("learningHub.content1.description"),
      category: t("learningHub.category.videos"),
      duration: "15 min",
      image: "/agricultural-images/pest-control-video.jpg", // Relevant image for pest control video
    },
    {
      id: 2,
      title: t("learningHub.content2.title"),
      description: t("learningHub.content2.description"),
      category: t("learningHub.category.guides"),
      duration: "30 min read", // Relevant image for soil health guide
      image: "/agricultural-images/soil-health-guide.jpg",
    },
    // Add more learning content
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
      {/* Enhanced Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-emerald-100 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/dashboard">
                <Button variant="ghost" className="text-emerald-600 hover:bg-emerald-50">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  {t("back")}
                </Button>
              </Link>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">
                    {t("learningHub.title")}
                  </h1>
                  <p className="text-sm text-gray-600">
                    {t("learningHub.subtitle")}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {isVoiceEnabled && (
                <Button variant="outline" onClick={handleVoiceToggle} className="border-emerald-200 bg-transparent">
                  <Volume2 className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 lg:px-8 py-8">
        <p className="text-gray-600 mb-8">
          {t("learningHub.description")}
        </p>

        {/* Learning Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningContent.map((content) => (
            <Card key={content.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-blue-100 cursor-pointer group">
              <img
                src={content.image}
                alt={content.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <Badge className="bg-blue-100 text-blue-700 border-blue-200 text-xs mb-2">
                  {content.category}
                </Badge>
                <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">
                  {content.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {content.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{content.duration}</span>
                  <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
                    {t("learningHub.startLearning")}
                  </Button>
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
            {t("loadMore")}
          </Button>
        </div>
      </div>
    </div>
  );
}