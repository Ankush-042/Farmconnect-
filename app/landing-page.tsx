// app/landing-page.tsx
"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import {
  LeafIcon,
  TractorIcon,
  ShieldCheckIcon,
  WheatIcon,
  DollarSignIcon,
  BarChartIcon,
  MicIcon,
  Globe as GlobeIconLucide, // Assuming GlobeIcon is used as GlobeIconLucide
} from "lucide-react"; // Importing all used icons from lucide-react

export default function LandingPage() {
  const { t, i18n } = useTranslation();
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-green-50">
      {/* Header */}
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <LeafIcon className="h-6 w-6 text-green-600" />
          <span className="sr-only">{t("siteTitle")}</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            {t("featuresLink")}
          </Link>
          <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            {t("aboutLink")}
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            {t("contactLink")}
          </Link>
          <Link href="/login" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Login
          </Link>
          {/* Language Switcher */}
          <div className="relative">
            <button
              className="text-sm font-medium hover:underline underline-offset-4 flex items-center"
              onClick={() => setShowLanguageSelector(!showLanguageSelector)}
            >
              <GlobeIconLucide className="h-4 w-4 mr-1" />
              {t(`language.${i18n.language}`)}
            </button>
            {showLanguageSelector && (
              <div
                className="absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                onMouseLeave={() => setShowLanguageSelector(false)}
              >
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  {["en", "hi"].map((langCode) => (
                    <button
                      key={langCode}
                      onClick={() => i18n.changeLanguage(langCode)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      role="menuitem"
                    >
                      {t(`language.${langCode}`)}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>

      {/* Main */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-b">
          <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.7rem]">
                  Empowering Farmers with Intelligent Agriculture Solutions
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Revolutionize your farm practices with our AI-powered platform designed to boost yield, manage
                  resources, and connect you with the market.
                </p>
                <div className="space-x-4 mt-6">
                  <Link
                    href="/signup"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-green-700"
                    prefetch={false}
                  >
                    Sign Up
                  </Link>
                  <Link
                    href="/login"
                    className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100"
                    prefetch={false}
                  >
                    Login
                  </Link>
                </div>
              </div>
              <img
                src="/power-tiller-small-farm.png"
                width="600"
                height="400"
                alt="Hero Image"
                className="mx-auto aspect-[3/2] overflow-hidden rounded-xl object-cover"
              />
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Key Features</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
                  Our platform offers a comprehensive suite of tools to support every aspect of your farming journey.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {/* Feature Items */}
              <div className="grid gap-1 text-center">
                <div className="flex justify-center items-center mb-2">
                  <BarChartIcon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">Farm Analysis & Crop Recommendation</h3>
                <p className="text-gray-500">Get data-driven insights and personalized crop recommendations for maximum yield.</p>
              </div>
              <div className="grid gap-1 text-center">
                <div className="flex justify-center items-center mb-2">
                  <TractorIcon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">Equipment Access</h3>
                <p className="text-gray-500">Find and lease essential farm equipment easily and affordably.</p>
              </div>
              <div className="grid gap-1 text-center">
                <div className="flex justify-center items-center mb-2">
                  <ShieldCheckIcon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">Crop Insurance Assistance</h3>
                <p className="text-gray-500">Streamline your insurance claims and get the compensation you deserve.</p>
              </div>
              <div className="grid gap-1 text-center">
                <div className="flex justify-center items-center mb-2">
                  <WheatIcon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">Disease Detection & Updates</h3>
                <p className="text-gray-500">Identify crop diseases early and stay informed on vital agricultural news.</p>
              </div>
              <div className="grid gap-1 text-center">
                <div className="flex justify-center items-center mb-2">
                  <DollarSignIcon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">Marketplace Connection</h3>
                <p className="text-gray-500">Connect with buyers and sell your produce at the best possible prices.</p>
              </div>
              <div className="grid gap-1 text-center">
                <div className="flex justify-center items-center mb-2">
                  <MicIcon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">Voice Control & Multilingual</h3>
                <p className="text-gray-500">Access the platform effortlessly with voice commands and your preferred language.</p>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-green-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">About Us</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
                We are dedicated to empowering farmers with technology and knowledge to build a sustainable and prosperous future for agriculture.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-10">
              <img
                src="/vegetable-farm-drip-irrigation.png"
                width="550"
                height="350"
                alt="About Us"
                className="mx-auto aspect-[3/2] overflow-hidden rounded-xl object-cover lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <h3 className="text-xl font-bold">Our Mission</h3>
                    <p className="text-gray-500">To provide farmers with the tools and information they need to thrive in a changing world.</p>
                  </li>
                  <li>
                    <h3 className="text-xl font-bold">Our Vision</h3>
                    <p className="text-gray-500">To be the leading platform for agricultural innovation and farmer empowerment.</p>
                  </li>
                  <li>
                    <h3 className="text-xl font-bold">Our Values</h3>
                    <p className="text-gray-500">Integrity, Innovation, and Inclusivity in supporting the farming community.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Farmers Say</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
                Hear from the farmers who have transformed their practices with our platform.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl py-12">
              <Carousel className="w-full max-w-xs mx-auto">
                <CarouselContent>
                  <CarouselItem>
                    <Card>
                      <CardContent className="flex flex-col aspect-square items-center justify-center p-6 text-center">
                        <p className="text-lg font-semibold">
                          "This platform has revolutionized my farm management. The crop recommendations were spot on!"
                        </p>
                        <p className="text-gray-500 mt-4">- Rajesh, Punjab</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  <CarouselItem>
                    <Card>
                      <CardContent className="flex flex-col aspect-square items-center justify-center p-6 text-center">
                        <p className="text-lg font-semibold">
                          "Finding equipment to rent used to be a headache. Now, it's just a few clicks away."
                        </p>
                        <p className="text-gray-500 mt-4">- Priya, Maharashtra</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  <CarouselItem>
                    <Card>
                      <CardContent className="flex flex-col aspect-square items-center justify-center p-6 text-center">
                        <p className="text-lg font-semibold">
                          "The disease detection feature saved my cotton crop last season. Highly recommended!"
                        </p>
                        <p className="text-gray-500 mt-4">- Amit, Gujarat</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Get in Touch</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed mx-auto">
              Have questions or want to learn more? Contact us today.
            </p>
            <div className="mx-auto w-full max-w-sm mt-8">
              <p className="text-gray-500">Email: info@agriplatform.com | Phone: +91 123 456 7890</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500">
        © {new Date().getFullYear()} AgriPlatform. All rights reserved.
      </footer>
    </div>
  );
}
